const urlParams = new URLSearchParams(window.location.search)
const listPoke = document.querySelector('#listFiche')
const recherche = document.querySelector('.rechercheIcon')
const champrecherche = document.querySelector('.recherche')
laRecherche()
fetch(`https://pokeapi.co/api/v2/pokemon/${urlParams.get(`id`)}/`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        fetch(`${data.species.url}/`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(pokeSpecise => {
                fetch(`${pokeSpecise.evolution_chain.url}/`)
                    .then(response => {
                        if (!response.ok) {
                        throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(evoluionChain => {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${evoluionChain.chain.species.name}/`)
                            .then(response => {
                                if (!response.ok) {
                                throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(evoluionPoke => {
                                creeFiche(evoluionPoke) 
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
                                .then(evoluionPoke => {
                                    creeFiche(evoluionPoke) 
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
                                    .then(evoluionPoke => {
                                        creeFiche(evoluionPoke) 
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
