const entrada = document.location.search;
const id = entrada.replace('?', '');
entrar()

let divCarta = document.createElement('div');
divCarta.id = 'carta'
document.body.appendChild(divCarta);

function entrar(){getPokemon(id)}

function getPokemon(id) {
    fetch('https://prof-poke-api.herokuapp.com/api/pokemon/' + id)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                showPokemon(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showPokemon(user) {
    if (!user) return;

    let divName = document.createElement('div');
    let divImagem = document.createElement('img');
    divName.innerText = user.name;
    divCarta.appendChild(divName);

    let divFotoPokemon = document.createElement('div');
    divFotoPokemon.id = 'fundoFoto';
    divCarta.appendChild(divFotoPokemon)

    let divTexto = document.createElement('div');
    divTexto.id = 'texto';
    divCarta.appendChild(divTexto)
    let ataque = document.createElement('div');
    let ataqueEspecial = document.createElement('div');
    let Defesa = document.createElement('div');
    let DefesaEspecial = document.createElement('div');
    ataque.innerText = "Ataque: " + user.atk
    divTexto.appendChild(ataque);
    ataqueEspecial.innerText = "Ataque Especial: " + user.atks
    divTexto.appendChild(ataqueEspecial);
    Defesa.innerText = "Defesa: " + user.def
    divTexto.appendChild(Defesa);
    DefesaEspecial.innerText = "Defesa Especial: " + user.defs
    divTexto.appendChild(DefesaEspecial);





    divName.id = 'nome';
    divImagem.id = 'foto';
    divImagem.src = user.url_icon;
    divImagem.onerror = function () {
        divImagem.src = 'https://franceschiniimoveis.com.br/mobile/carregando.gif';
      }

    divFotoPokemon.appendChild(divImagem);
}