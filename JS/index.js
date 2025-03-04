/*'https://pokeapi.co/api/v2/pokemon/bulbasaur' "https://pokeapi.co/api/v2/evolution-chain/1/"*/
/*"https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0."*/

fetch()
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });