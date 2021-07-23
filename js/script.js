const cards = document.getElementById("cards");

function deckDisplay(deck) {
  cards.innerHTML = "";

  for (let i = 0; i < deck.length; i++) {
    let subType = deck[i].subType ? " - " + deck[i].subType : "";

    let abilities = "<em>Nessuna abilità</em>";
    if (deck[i].abilities.length > 0) {
      abilities = "<ul>";
      for (let j = 0; j < deck[i].abilities.length; j++) {
        abilities += `<li>${deck[i].abilities[j].description}(costo: ${deck[
          i
        ].abilities[j].cost.join(", ")})</li>`;
      }
      abilities += "</ul>";
    }

    const author = deck[i].flavorText.author
      ? " - " + deck[i].flavorText.author
      : "";

    let displayMessage = `
  <ul>
  <li><strong>Nome</strong>: ${deck[i].name}</li>
  <li><strong>Costo Evocazione</strong>: ${deck[i].launchCost.join("")}</li>
  <li><strong>Tipo Carta</strong>: ${deck[i].cardType}${subType}</li>
  <li><strong>Espansione</strong>:
    <ul>
    <li><strong>Nome</strong>: ${deck[i].expansion.name}</li>
    <li><strong>Simbolo</strong>: ${deck[i].expansion.symbol}</li>
    </ul>
  </li>
  <li><strong>Abilità</strong>: ${abilities}</li>
  <li><strong>Testo di colore</strong>: ${
    deck[i].flavorText.description
  }${author}</li>
  <li><strong>Immagine</strong>: ${deck[i].illustration.source}</li>
  <li><strong>Autore</strong>: ${deck[i].illustration.illustrator}</li>
  <li><strong>Valori carta</strong>: ${deck[i].strenght}/${
      deck[i].constitution
    }</li>
  <li><strong>Numero carta</strong>: ${deck[i].expansion.numberOfThisCard}/${
      deck[i].expansion.numberOfCards
    }</li>
  </ul>
  `;
    cards.innerHTML += displayMessage + "<hr>";
  }
}

deckDisplay(deck);

// FILTER
const filterField = document.getElementById("filter");
const keywordField = document.getElementById("keyword");
const searchButton = document.getElementById("search");

filterField.addEventListener("change", () => {
  if (filterField.value !== "all") {
    keywordField.classList.remove("hidden");
  } else {
    keywordField.classList.add("hidden");
  }
});

searchButton.addEventListener("click", () => {
  if (filterField.value !== "all") {
    const currentDeck = [];
    for (let i = 0; i < deck.length; i++) {
      const currentCard = deck[i];

      switch (filterField.value) {
        case "id":
        case "strenght":
        case "constitution":
          if (currentCard[filterField.value] == keywordField.value) {
            currentDeck.push(currentCard);
          }
          break;
        default:
          if (currentCard[filterField.value].includes(keywordField.value)) {
            currentDeck.push(currentCard);
          }
      }
    }
    deckDisplay(currentDeck);
  } else {
    deckDisplay(deck);
  }
});
