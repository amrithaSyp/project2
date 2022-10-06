import fetch from "node-fetch"; 

let image = document.getElementById('image')

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err => console.log(err))


