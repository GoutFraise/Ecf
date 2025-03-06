/*pour avoir la liste des evolution 
https://pokeapi.co/api/v2/pokemon/1/
puis dans species ya 
https://pokeapi.co/api/v2/pokemon-species/1/
puis dans evolution chain
ya toutes les evolution de son espece
https://pokeapi.co/api/v2/evolution-chain/1/
*/
const urlParams = new URLSearchParams(window.location.search)
const listFiche = document.querySelector('#listFiche')
fetch(`https://pokeapi.co/api/v2/pokemon/${urlParams.get(`id`)}/`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon)
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
