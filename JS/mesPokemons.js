const listPoke = document.querySelector(".listPokemon")
const urlParams = new URLSearchParams(window.location.search);
let listFav = new Object();
for(let i =0;i<urlParams.size;i++){
    listFav[`id${i}`]=urlParams.get(`id${i}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${urlParams.get(`id${i}`)}/`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(pokemon => {
            articleCree(pokemon)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

