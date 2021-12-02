const fundo = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container'
fundo.appendChild(container);
let divimagemPokemon = document.createElement('div');
divimagemPokemon.id = 'divimagemlogo';
container.appendChild(divimagemPokemon)

let imagemPOkemo = document.createElement('img');
imagemPOkemo.src = 'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png';
imagemPOkemo.id = 'imagemlogo'
divimagemPokemon.appendChild(imagemPOkemo)


let fundoProcurar = document.createElement('div');
fundo.appendChild(fundoProcurar);
fundoProcurar.id = 'fundoProcurar';
container.appendChild(fundoProcurar);


let inputFiltro  = document.createElement('input');
inputFiltro.className = 'input-filtro';
fundoProcurar.appendChild(inputFiltro);


let buttonProcurar = document.createElement('button');
buttonProcurar.className = 'buttonProcurar';
buttonProcurar.innerText = 'Procurar';
fundoProcurar.appendChild(buttonProcurar);

function criarLista(){

  fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
    .then(function (resultado) {
      resultado.json().then(function (data) {
        pokemon = (data)
        for(let i = 0; i < 718; i++){
          let td = document.createElement('tr')
          let criarItem = document.createElement('td')
          criarItem.className = 'teste';
          criarItem.onclick= function(){irparaOutraPagina(id)};
          criarListaUsers.className = 'criar-item';
          let divimagem = document.createElement('div');
          divimagem.id = 'div-imagem'
          let foto = document.createElement('img');
          foto.id = 'foto'
          foto.src = data[i].url_icon;
          foto.onerror = function () {
            foto.src = data[i].url_icon_2;
          }
            let id = pokemon[i].id
          let ColocarNome = document.createElement('div');
          ColocarNome.id = 'criarnome'
          criarItem.appendChild(ColocarNome)
          ColocarNome.innerText = data[i].name;
          criarItem.appendChild(divimagem)
          divimagem.appendChild(foto);
          criarListaUsers.appendChild(criarItem);
        }     
  });
     }).catch(function (erro) {
            console.log('erro:', erro);
  }); 

    const listaAtual = document.querySelector('.div-lista');
    if(listaAtual){
        listaAtual.remove()
    }
    let divLista = document.createElement('tr');
    divLista.className = 'div-lista';
    container.appendChild(divLista)


    let criarListaUsers = document.createElement('table')
    criarListaUsers.className = 'criar-lista'

    divLista.appendChild(criarListaUsers)
    container.appendChild(criarListaUsers)
}

function irparaOutraPagina(id){
    window.location.href = 'pokemon/pokemon.html?' + id;
}
criarLista();


let input, filter, ol, li, i, txtValue;
input = document.querySelector('input');
ol = document.querySelector('table');
li = ol.getElementsByTagName('td');

inputFiltro.addEventListener('keyup',function(data){
for (i = 0; i < 718; i++) {
txtValue =  pokemon[i].name

if (txtValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
li[i].style.display = "";
} else {
li[i].style.display = "none";
}
}
})
