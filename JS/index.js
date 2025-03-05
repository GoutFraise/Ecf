const listPoke = document.querySelector(".listPokemon")
const option = document.querySelectorAll("select")
option.forEach((element) =>element.addEventListener("click",()=>{
    listPoke.innerHTML=""
}))
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
                            const article =document.createElement("article")
                            const div =document.createElement("div")
                            const img = document.createElement("img")
                            img.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
                            article.appendChild(img)
                            let span = document.createElement("span")
                            span.textContent= pokemon.id
                            span.setAttribute("id",pokemon.id)
                            div.appendChild(span)
                            span = document.createElement("span")
                            span.textContent= pokemon.name
                            div.appendChild(span)
                            for(let j=0; j<pokemon.types.length;j++){
                                span = document.createElement("span")
                                span.textContent= pokemon.types[j].type.name
                                div.appendChild(span)
                            }
                            div.innerHTML= `${div.innerHTML} <i class="fa-regular fa-star"></i>`

                            if(pokemon.types[0].type.name=="normal"){
                                article.setAttribute("class",`${article.classList} normal`)
                            }
                            else if(pokemon.types[0].type.name=="fighting"){
                                article.setAttribute("class",`${article.classList} fighting`)
                            }
                            else if(pokemon.types[0].type.name=="flying"){
                                article.setAttribute("class",`${article.classList} flying`)
                            }
                            else if(pokemon.types[0].type.name=="poison"){
                                article.setAttribute("class",`${article.classList} poison`)
                            }
                            else if(pokemon.types[0].type.name=="ground"){
                                article.setAttribute("class",`${article.classList} ground`)
                            }
                            else if(pokemon.types[0].type.name=="rock"){
                                article.setAttribute("class",`${article.classList} rock`)
                            }
                            else if(pokemon.types[0].type.name=="bug"){
                                article.setAttribute("class",`${article.classList} bug`)
                            }
                            else if(pokemon.types[0].type.name=="ghost"){
                                article.setAttribute("class",`${article.classList} ghost`)
                            }
                            else if(pokemon.types[0].type.name=="steel"){
                                article.setAttribute("class",`${article.classList} steel`)
                            }
                            else if(pokemon.types[0].type.name=="fire"){
                                article.setAttribute("class",`${article.classList} fire`)
                            }
                            else if(pokemon.types[0].type.name=="water"){
                                article.setAttribute("class",`${article.classList} water`)
                            }
                            else if(pokemon.types[0].type.name=="grass"){
                                article.setAttribute("class",`${article.classList} grass`)
                            }
                            else if(pokemon.types[0].type.name=="electric"){
                                article.setAttribute("class",`${article.classList} electric`)
                            }
                            else if(pokemon.types[0].type.name=="psychic"){
                                article.setAttribute("class",`${article.classList} psychic`)
                            }
                            else if(pokemon.types[0].type.name=="ice"){
                                article.setAttribute("class",`${article.classList} ice`)
                            }
                            else if(pokemon.types[0].type.name=="dragon"){
                                article.setAttribute("class",`${article.classList} dragon`)
                            }
                            
                            else if(pokemon.types[0].type.name=="dark"){
                                article.setAttribute("class",`${article.classList} dark`)
                            }
                            else if(pokemon.types[0].type.name=="fairy"){
                                article.setAttribute("class",`${article.classList} fairy`)
                            }
                            
                            else{
                                article.setAttribute("class",`${article.classList} unknown`)
                            }
                            article.appendChild(div)
                            listPoke.appendChild(article)
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
