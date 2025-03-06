
let tableauFav =[]
function articleCree(pokemon) {
    let fav=0
    const article =document.createElement("article")
    const div =document.createElement("div")
    const img = document.createElement("img")
    const i = document.createElement("i")
    const linkMesPokemon = document.querySelector(".mesPokemons")
    linkMesPokemon.setAttribute("href",`mesPokemons.html${window.location.search}`)
    const index = document.querySelector(".index")
    index.setAttribute("href",`index.html${window.location.search}`)
    let param =''
    if(!document.querySelector("#pageMesPokemon")){
        i.setAttribute("class",`fa-regular fa-star`)    
    }
    else{
        i.setAttribute("class",`fa-solid fa-star fav`)
    }
    i.addEventListener("click",()=>{
        if(fav%2==0){
            if(!document.querySelector("#pageMesPokemon")){
                i.setAttribute("class",`fa-solid fa-star fav`)
            }
            else{
                i.setAttribute("class",`fa-regular fa-star`)
            }
            fav++
            tableauFav.push(pokemon.id)            
        }
        else{
            if(!document.querySelector("#pageMesPokemon")){
                i.setAttribute("class",`fa-regular fa-star`)
                
            }
            else{
                
                i.setAttribute("class",`fa-solid fa-star fav`)
            }
            fav++
            let tabTemp = []
            for(let i =0;i<tableauFav.length;i++){
                if (tableauFav[i]!=pokemon.id){
                    tabTemp.push(tableauFav[i])
                }
            }
            tableauFav=tabTemp
        }
        for(let i =0;i<tableauFav.length;i++){
            param=`${param}id${i}=${tableauFav[i]}&`
        }
        linkMesPokemon.setAttribute("href",`mesPokemons.html?${param}`)
        index.setAttribute("href",`index.html?${param}`)  
    })
    if(pokemon.sprites.other.dream_world.front_default!=null){
        img.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
    }
    else{
        img.setAttribute("src",pokemon.sprites.front_default)
    }
    img.addEventListener("click",()=>{
        window.location.replace(`./pokemon.html?id=${pokemon.id}`)
    })
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
    div.appendChild(i)
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
    if(pokemon.sprites.other.dream_world.front_default!=null && pokemon.sprites.front_default!= null){
        listPoke.appendChild(article)
    }
}
function creeFiche(data){
    const article = document.createElement("article")
    const div =document.createElement("div")
    let span = document.createElement("span")
    const p = document.createElement("p")
    const img = document.createElement("img")
    span = document.createElement("span")
    span.textContent=`nom : ${data.name}`
    div.appendChild(span)
    span = document.createElement("span")
    span.textContent =`types : ${data.types[0].type.name}`
    div.appendChild(span)
    span = document.createElement("span")
    span.textContent = `poids : ${data.weight}`
    div.appendChild(span)
    span = document.createElement("span")
    span.textContent = `taille : ${data.height}`
    div.appendChild(span)
    for(let i =0; i<data.stats.length;i++){
        span = document.createElement("span")
        span.textContent = `${data.stats[i].stat.name} : ${data.stats[i].base_stat}`
        div.appendChild(span)
    }
    
    if(data.sprites.other.dream_world.front_default!=null){
        img.setAttribute("src",data.sprites.other.dream_world.front_default)
    }
    else{
        img.setAttribute("src",data.sprites.front_default)
    }
    if(data.types[0].type.name=="normal"){
        img.setAttribute("class",`${img.classList} normal`)
    }
    else if(data.types[0].type.name=="fighting"){
        img.setAttribute("class",`${img.classList} fighting`)
    }
    else if(data.types[0].type.name=="flying"){
        img.setAttribute("class",`${img.classList} flying`)
    }
    else if(data.types[0].type.name=="poison"){
        img.setAttribute("class",`${img.classList} poison`)
    }
    else if(data.types[0].type.name=="ground"){
        img.setAttribute("class",`${img.classList} ground`)
    }
    else if(data.types[0].type.name=="rock"){
        img.setAttribute("class",`${img.classList} rock`)
    }
    else if(data.types[0].type.name=="bug"){
        img.setAttribute("class",`${img.classList} bug`)
    }
    else if(data.types[0].type.name=="ghost"){
        img.setAttribute("class",`${img.classList} ghost`)
    }
    else if(data.types[0].type.name=="steel"){
        img.setAttribute("class",`${img.classList} steel`)
    }
    else if(data.types[0].type.name=="fire"){
        img.setAttribute("class",`${img.classList} fire`)
    }
    else if(data.types[0].type.name=="water"){
        img.setAttribute("class",`${img.classList} water`)
    }
    else if(data.types[0].type.name=="grass"){
        img.setAttribute("class",`${img.classList} grass`)
    }
    else if(data.types[0].type.name=="electric"){
        img.setAttribute("class",`${img.classList} electric`)
    }
    else if(data.types[0].type.name=="psychic"){
        img.setAttribute("class",`${img.classList} psychic`)
    }
    else if(data.types[0].type.name=="ice"){
        img.setAttribute("class",`${img.classList} ice`)
    }
    else if(data.types[0].type.name=="dragon"){
        img.setAttribute("class",`${img.classList} dragon`)
    }
    else if(data.types[0].type.name=="dark"){
        img.setAttribute("class",`${img.classList} dark`)
    }
    else if(data.types[0].type.name=="fairy"){
        img.setAttribute("class",`${img.classList} fairy`)
    }
    else{
        img.setAttribute("class",`${img.classList} unknown`)
    }
    article.appendChild(img)
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)/*recup desc*/
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            p.textContent=data.flavor_text_entries[1].flavor_text
            div.appendChild(p)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    article.appendChild(div)
    if(data.sprites.other.dream_world.front_default!=null && data.sprites.front_default!= null){
        listPoke.appendChild(article)
    }

}
function laRecherche(){
    recherche.addEventListener("click",()=>{
        if(champrecherche.value===""){
            alert("Le champ est vide")
        }
        else{
            listPoke.innerHTML = "";
            let champValue =champrecherche.value
            champrecherche.value=""
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`)
                .then(response => {
                    if (!response.ok) {
                    throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                        for(let i =0;i<data.results.length-1;i++){
                            if(data.results[i].name.includes(champValue) ){
                                fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
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
                            }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
    })
    champrecherche.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
        if(champrecherche.value===""){
                alert("Le champ est vide")
            }
            else{
                listPoke.innerHTML = "";
                let champValue =champrecherche.value
                champrecherche.value=""
                fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`)
                    .then(response => {
                        if (!response.ok) {
                        throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                            for(let i =0;i<data.results.length-1;i++){
                                if(data.results[i].name.includes(champValue) ){
                                    fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
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
                                }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }
            }
        })

}