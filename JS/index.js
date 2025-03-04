fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
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
