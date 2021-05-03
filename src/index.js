fetch('http://localhost:3000/pokemons/1')
  .then(response => response.json())
  .then(pokemon => {
    console.log('pokemon', pokemon)

    const pokemonCard = document.querySelector('.pokemon-card')

    const pokemonName = document.createElement('h2')
    pokemonName.textContent = pokemon.name

    const pokemonImage = document.createElement('img')
    pokemonImage.src = pokemon.image

    pokemonCard.append(pokemonName, pokemonImage)
  })