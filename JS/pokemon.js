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
    .then(data => {
        console.log(data)
        
        fetch(`${data.species.url}/`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(pokeSpecise => {
                console.log(pokeSpecise)
                fetch(`${pokeSpecise.evolution_chain.url}/`)
                    .then(response => {
                        if (!response.ok) {
                        throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(evoluionChain => {
                        console.log(evoluionChain)
                        fetch(`https://pokeapi.co/api/v2/pokemon/${evoluionChain.chain.species.name}/`)
                            .then(response => {
                                if (!response.ok) {
                                throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(evoluionChain => {
                                creeFiche(evoluionChain) 
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                        if(evoluionChain.chain.evolves_to[0]!=null){
                            fetch(`https://pokeapi.co/api/v2/pokemon/${evoluionChain.chain.evolves_to[0].species.name}/`)
                                .then(response => {
                                    if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                    }
                                    return response.json();
                                })
                                .then(evoluionChain => {
                                    creeFiche(evoluionChain) 
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                            if(evoluionChain.chain.evolves_to[0].evolves_to[0]!=null){
                                fetch(`https://pokeapi.co/api/v2/pokemon/${evoluionChain.chain.evolves_to[0].evolves_to[0].species.name}/`)
                                    .then(response => {
                                        if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                        }
                                        return response.json();
                                    })
                                    .then(evoluionChain => {
                                        creeFiche(evoluionChain) 
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
            .catch(error => {
                console.error('Error:', error);
            });
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
