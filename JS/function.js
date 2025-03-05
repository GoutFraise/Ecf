
let tableauFav =[]
function articleCree(pokemon) {
    let fav=0
    const article =document.createElement("article")
    const div =document.createElement("div")
    const img = document.createElement("img")
    const i = document.createElement("i")
    i.setAttribute("class",`fa-regular fa-star `)
    i.addEventListener("click",()=>{
        if(fav%2==0){
            i.setAttribute("class",`fa-solid fa-star fav`)
            fav++
            tableauFav.push(pokemon.id)
            console.log(tableauFav)
        }
        else{
            i.setAttribute("class",`fa-regular fa-star `)
            fav++
            let tabTemp = []
            for(let i =0;i<tableauFav.length;i++){
                
                if (tableauFav[i]!=pokemon.id){
                    tabTemp.push(tableauFav[i])

                }
            }
            tableauFav=tabTemp
            console.log(tableauFav)
        }
        
    })
    if(pokemon.sprites.other.dream_world.front_default!=null){
        img.setAttribute("src",pokemon.sprites.other.dream_world.front_default)
    }
    else{
        img.setAttribute("src",pokemon.sprites.front_default)
    }
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