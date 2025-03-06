const listPoke = document.querySelector(".listPokemon")
const region = document.querySelector("#region-select")
const type = document.querySelector("#type-select")
const recherche = document.querySelector('.rechercheIcon')
const champrecherche = document.querySelector('.recherche')
laRecherche()
type.addEventListener("change",()=>{
    region.options[region.selectedIndex]=region.options[0]
    listPoke.innerHTML=""
    fetch(`https://pokeapi.co/api/v2/type/`)/*fetch pour tout les type */
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                for(let i =0 ;i< data.results.length;i++){
                    if(data.results[i].name == type.options[type.selectedIndex].value){
                        fetch(`${data.results[i].url}`)/* fetch le type selectionné  */
                                .then(response => {
                                    if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                })
                                .then(pokedex => {
                                    for(let j = 0 ; j< pokedex.pokemon.length;j++){
                                        fetch(`${pokedex.pokemon[j].pokemon.url}`)/* fetch du pokemon */
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
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
})
region.addEventListener("change",()=>{
    type.options[type.selectedIndex]=type.options[0]
    listPoke.innerHTML=""
    fetch(`https://pokeapi.co/api/v2/region/`)/*fetch pour toute les region */
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                for(let i =0 ;i< data.results.length;i++){
                    if(data.results[i].name == region.options[region.selectedIndex].value){
                        fetch(`${data.results[i].url}`)/* fetch la region selectionné  */
                            .then(response => {
                                if (!response.ok) {
                                throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(pokedex => {
                                fetch(`${pokedex.pokedexes[0].url}`) /* fetch pokedex region selectionné */
                                        .then(response => {
                                            if (!response.ok) {
                                            throw new Error('Network response was not ok');
                                            }
                                            return response.json();
                                        })
                                        .then(pokemon => {
                                            for(let j=0;j<pokemon.pokemon_entries.length;j++){
                                                fetch(pokemon.pokemon_entries[j].pokemon_species.url)/* fetch du pokemon pour recup son id */
                                                        .then(response => {
                                                            if (!response.ok) {
                                                            throw new Error('Network response was not ok');
                                                            }
                                                            return response.json();
                                                        })
                                                        .then(pokemonid => {
                                                            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid.id}/`)/* fetch du pokemon */
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
                                                        })           
                                                        .catch(error => {
                                                            console.error('Error:', error);
                                                        });
                                            } 
                                        })
                                        .catch(error => {
                                            console.error('Error:', error);
                                        });
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    }
                }
                
            })
            .catch(error => {
                console.error('Error:', error);
            });
})
fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for(let i =0; i<151;i++){
                fetch(data.results[i].url)
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
        })
        .catch(error => {
            console.error('Error:', error);
        });
