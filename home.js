
var pokeCount = 1;
var pokedex = {};
//getPokemon(1);
getPokemon(1); 



// increment-arrow
const incrementCount = document.getElementById("Up-arrows");
function handleIncrement() {
    pokeCount++;
    deleteP()
    getPokemon(pokeCount);

};
incrementCount.addEventListener("click", handleIncrement);


//decrement-arrow NOT WORKING
const decrementCount = document.getElementById("Down-arrows");


function handleDecrement() {
    if (pokeCount != 1){
        pokeCount--;
        deleteP()
        getPokemon(pokeCount);
        console.log(pokeCount)
    }
    

};
decrementCount.addEventListener("click", handleDecrement);

//moves button
const moveButton = document.getElementById("txt2");
function handleMoves() {
    document.getElementById("infobox").innerHTML = "";
    getMoves(pokeCount);
    moveButton.style.backgroundColor = 'lightgreen';
    infoButton.style.backgroundColor = 'rgb(236, 236, 236)';
}
moveButton.addEventListener("click", handleMoves);


//info button 
const infoButton = document.getElementById("txt1");
function handleInfo() {
    document.getElementById("infobox").innerHTML = "";
    deleteP()
    getPokemon(pokeCount);
    infoButton.style.backgroundColor = 'lightgreen';
    moveButton.style.backgroundColor = 'rgb(236, 236, 236)';

}
infoButton.addEventListener("click", handleInfo);






async function deleteP() {
    document.getElementById("Rect").innerHTML = "";

    document.getElementById("infobox").innerHTML = "";
    document.getElementById("pokeContainer").innerHTML = "";


}

async function getPokemon(num) {
    let url =  "https://pokeapi.co/api/v2/pokemon/" + num.toString(); 
    
    let res = await fetch(url);
    let pokemon = await res.json();
    console.log(pokemon);
    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["type"];
    let pokemonHeight = pokemon["height"]
    let pokeWeight = pokemon["weight"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    let pokeHP = pokemon["stats"][0]["base_stat"];
    let pokeAttack = pokemon["stats"][1]["base_stat"];
    let pokeDefense = pokemon["stats"][2]["base_stat"];
    let pokeSAttack = pokemon["stats"][3]["base_stat"];
    let pokeSDefense = pokemon["stats"][4]["base_stat"];

    
    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    console.log(pokeHP);
    pokedex[num] = {"name": pokemonName,"weight": pokeWeight, "height": pokemonHeight, 
        "type": pokemonType, "image": pokemonImg, "hp": pokeHP, "attack": pokeAttack, 
        "defense": pokeDefense, "SAttack": pokeSAttack, "SDefense": pokeSDefense};

    /** Adding title */
    let pokeTitle = document.createElement("p");
    pokeTitle.innerText = pokedex[num]["name"]
    document.getElementById("Rect").append(pokeTitle);
    //

    console.log(pokedex[num]["height"])
    /**Adding info */
    let pokeInfo = document.createElement("p");
    pokeInfo.innerText = "height: " + pokedex[num]["height"].toString() + "\nweight: " 
        + pokedex[num]["weight"].toString() + "\nhp: " + pokedex[num]["hp"] + "\nattack: " 
        + pokedex[num]["attack"] + "\ndefense: " + pokedex[num]["defense"] + "\nspecial attack: " + pokedex[num]["SAttack"]
        + "\nspecial defense: " + pokedex[num]["SDefense"];
    document.getElementById("infobox").append(pokeInfo);


    let pokeImage = document.createElement("img");
    pokeImage.src = pokemonImg;
    document.getElementById("pokeContainer").appendChild(pokeImage);
    
}


async function getMoves(num) {
    let url =  "https://pokeapi.co/api/v2/pokemon/" + num.toString(); 
    
    let res = await fetch(url);
    let pokemon = await res.json();
    let pokeMoves = pokemon["moves"]
    console.log(pokeMoves)
    pokedex[num] = {}

    var i = 0
    var length = pokeMoves.length
    console.log(length)
    let pokeInfo = document.createElement("p");
1
    while (i < length) {
        pokeInfo.innerText += pokeMoves[i]["move"]["name"];
        pokeInfo.innerText += "\n "
        i++;
        if (i > 20) {
            break;
        }
    }
    document.getElementById("infobox").append(pokeInfo);   

}



// pokemon.id = 1;
// pokemon.innerText = pokedex[1]["name"];
// pokemon.classList.add("pokemon-name");





