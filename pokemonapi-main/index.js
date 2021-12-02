const fundo = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container'
fundo.appendChild(container);
let imagemPOkemo = document.createElement('img');
imagemPOkemo.src = 'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png';
imagemPOkemo.id = 'imagemlogo'
container.appendChild(imagemPOkemo)
var pokemons = [];


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


const usersList = [
    {"id":"001","name":"bulbasaur","resource_uri":"api/v1/pokemon/1/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/001.png","atk":62,"def":13,"atks":94,"defs":78},{"id":"002","name":"ivysaur","resource_uri":"api/v1/pokemon/2/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/002.png"},{"id":"003","name":"venusaur","resource_uri":"api/v1/pokemon/3/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/003.png"},{"id":"004","name":"charmander","resource_uri":"api/v1/pokemon/4/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/004.png"},{"id":"005","name":"charmeleon","resource_uri":"api/v1/pokemon/5/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/005.png"},{"id":"006","name":"charizard","resource_uri":"api/v1/pokemon/6/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/006.png"},{"id":"007","name":"squirtle","resource_uri":"api/v1/pokemon/7/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/007.png"},{"id":"008","name":"wartortle","resource_uri":"api/v1/pokemon/8/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/008.png"},{"id":"009","name":"blastoise","resource_uri":"api/v1/pokemon/9/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/009.png"},{"id":"010","name":"caterpie","resource_uri":"api/v1/pokemon/10/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/010.png"},{"id":"011","name":"metapod","resource_uri":"api/v1/pokemon/11/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/011.png"},{"id":"012","name":"butterfree","resource_uri":"api/v1/pokemon/12/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/012.png"},{"id":"013","name":"weedle","resource_uri":"api/v1/pokemon/13/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/013.png"},{"id":"014","name":"kakuna","resource_uri":"api/v1/pokemon/14/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/014.png"},{"id":"015","name":"beedrill","resource_uri":"api/v1/pokemon/15/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/015.png"},{"id":"016","name":"pidgey","resource_uri":"api/v1/pokemon/16/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/016.png"},{"id":"017","name":"pidgeotto","resource_uri":"api/v1/pokemon/17/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/017.png"},{"id":"018","name":"pidgeot","resource_uri":"api/v1/pokemon/18/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/018.png"},{"id":"019","name":"rattata","resource_uri":"api/v1/pokemon/19/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/019.png"},{"id":"020","name":"raticate","resource_uri":"api/v1/pokemon/20/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/020.png"},{"id":"021","name":"spearow","resource_uri":"api/v1/pokemon/21/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/021.png"},{"id":"022","name":"fearow","resource_uri":"api/v1/pokemon/22/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/022.png"},{"id":"023","name":"ekans","resource_uri":"api/v1/pokemon/23/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/023.png"},{"id":"024","name":"arbok","resource_uri":"api/v1/pokemon/24/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/024.png"},{"id":"025","name":"pikachu","resource_uri":"api/v1/pokemon/25/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/025.png"},{"id":"026","name":"raichu","resource_uri":"api/v1/pokemon/26/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/026.png"},{"id":"027","name":"sandshrew","resource_uri":"api/v1/pokemon/27/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/027.png"},{"id":"028","name":"sandslash","resource_uri":"api/v1/pokemon/28/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/028.png"},{"id":"029","name":"nidoran-f","resource_uri":"api/v1/pokemon/29/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/029.png"},{"id":"030","name":"nidorina","resource_uri":"api/v1/pokemon/30/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/030.png"},{"id":"031","name":"nidoqueen","resource_uri":"api/v1/pokemon/31/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/031.png"},{"id":"032","name":"nidoran-m","resource_uri":"api/v1/pokemon/32/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/032.png"},{"id":"033","name":"nidorino","resource_uri":"api/v1/pokemon/33/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/033.png"},{"id":"034","name":"nidoking","resource_uri":"api/v1/pokemon/34/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/034.png"},{"id":"035","name":"clefairy","resource_uri":"api/v1/pokemon/35/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/035.png"},{"id":"036","name":"clefable","resource_uri":"api/v1/pokemon/36/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/036.png"},{"id":"037","name":"vulpix","resource_uri":"api/v1/pokemon/37/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/037.png"},{"id":"038","name":"ninetales","resource_uri":"api/v1/pokemon/38/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/038.png"},{"id":"039","name":"jigglypuff","resource_uri":"api/v1/pokemon/39/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/039.png"},{"id":"040","name":"wigglytuff","resource_uri":"api/v1/pokemon/40/","url_icon":"https://www.serebii.net/pokedex-swsh/icon/040.png"}
]

function criarLista(){
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
    
    usersList.forEach(e => {
        let td = document.createElement('tr')
        
        let criarItem = document.createElement('td')
        criarItem.id = 'teste';
        criarListaUsers.className = 'criar-item';

        let divimagem = document.createElement('div');
        divimagem.id = 'div-imagem'

        let foto = document.createElement('img');
        foto.src = 'https://cdn.pixabay.com/photo/2016/08/20/12/56/pokemon-1607473_1280.png';
        foto.id = 'foto'
        
        let criarBotao = document.createElement('button')
        criarBotao.id = 'botaoPokemon';
        criarBotao.innerText = 'Visualizar'
        criarBotao.onclick = function(){irparaOutraPagina()};
        let ColocarNome = document.createElement('div');
        ColocarNome.id = 'criarnome'
        criarItem.appendChild(ColocarNome)
        ColocarNome.innerText = e.name;
        criarItem.appendChild(criarBotao);
        criarItem.appendChild(divimagem)
        divimagem.appendChild(foto);
        criarListaUsers.appendChild(criarItem);
   
    });
    container.appendChild(criarListaUsers)
}


function irparaOutraPagina(){
    window.location.href = 'pokemons/pokemons.html?';
}
criarLista();

let input, filter, ol, li, i, txtValue;
input = document.querySelector('input');
ol = document.querySelector('table');
li = ol.getElementsByTagName('td');

inputFiltro.addEventListener('keyup',function(){
for (i = 0; i < li.length; i++) {
    txtValue = usersList[i].name

      if (txtValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  
})