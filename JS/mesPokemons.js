const listPoke = document.querySelector(".listPokemon")
const recherche = document.querySelector('.rechercheIcon')
const champrecherche = document.querySelector('.recherche')
laRecherche()

for(let i =0;i<lurlParams.size;i++){
    listFav[`id${i}`]=lurlParams.get(`id${i}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${lurlParams.get(`id${i}`)}/`)
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

