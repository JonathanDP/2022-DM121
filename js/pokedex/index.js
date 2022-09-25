let elementsColor = {
    bug: "#A7B723",
    dark: "#75574C",
    dragon: "#7037FF",
    electric: "#F9CF30",
    fairy: "#E69EAC",
    fighting: "#C12239",
    fire: "#F57D31",
    flying: "#A891EC",
    ghost: "#70559B",
    grass: "#74CB48",
    ground: "#DEC16B",
    ice: "#9AD6DF",
    normal: "#AAA67F",
    poison: "#A43E9E",
    psychic: "#FB5584",
    rock: "#B69E31",
    steel: "#B7B9D0",
    water: "#6493EB",
}

async function fetchData(pokeNumber) {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + pokeNumber
    );
    const pokemon = await response.json();
    return pokemon;
}

async function createPokemon(pokeNumber) {
    const pokemon = await fetchData(pokeNumber);
    let element = `${pokemon.types[0].type['name']}`;

    const div = document.createElement("div");
    const nameDiv = document.createElement("div");
    const name = document.createElement("h2");
    const elementName = document.createElement("p");
    const order = document.createElement("h4")
    const img = document.createElement("img");

    name.textContent = `${pokemon.name}`;
    order.textContent = `#${pokemon.order}`
    elementName.textContent = element;
    img.src = pokemon.sprites.front_default;

    nameDiv.appendChild(name);
    div.appendChild(order);
    div.appendChild(img);
    div.appendChild(elementName);
    div.appendChild(nameDiv);

    elementName.style.color = elementsColor[element]
    order.style.color = elementsColor[element]
    nameDiv.style.backgroundColor = elementsColor[element]
    div.style.borderColor = elementsColor[element]
    document.getElementById("mainFrame").appendChild(div);
}

for (var nPoke = 0; nPoke <= 152; nPoke++) {
    createPokemon(nPoke)
}