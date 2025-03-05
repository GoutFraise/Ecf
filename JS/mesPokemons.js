function getParameters()
{
var urlParams,
match,
pl = /+/g, // Regex for replacing addition symbol with a space
search = /([^&=]+)=?([^&]*)/g,
decode = function (s) { return decodeURIComponent(s.replace(pl, )); },
query = window.location.search.substring(1);
urlParams = {};
while (match = search.exec(query))
urlParams[decode(match[1])] = decode(match[2]);
return urlParams;
}
getParameterByName('id')
fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
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