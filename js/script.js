function cardDisplay(card) {
  let subType = card.subType ? " - " + card.subType : "";

  let abilities = "<em>Nessuna abilità</em>";
  if (card.abilities.length > 0) {
    abilities = "<ul>";
    for (let i = 0; i < card.abilities.length; i++) {
      abilities += `<li>${
        card.abilities[i].description
      }(costo: ${card.abilities[i].cost.join(", ")})`;
    }
    abilities += "</ul>";
  }

  const author = card.flavorText.author ? " - " + card.flavorText.author : "";

  let displayMessage = `
  <ul>
  <li><strong>Nome</strong>: ${card.name}</li>
  <li><strong>Costo Evocazione</strong>: ${card.launchCost.join("")}</li>
  <li><strong>Tipo Carta</strong>: ${card.cardType}${subType}</li>
  <li><strong>Espansione</strong>:
    <ul>
    <li><strong>Nome</strong>: ${card.expansion.name}</li>
    <li><strong>Simbolo</strong>: ${card.expansion.symbol}</li>
    </ul>
  </li>
  <li><strong>Abilità</strong>: ${abilities}</li>
  <li><strong>Testo di colore</strong>: ${
    card.flavorText.description
  }${author}</li>
  <li><strong>Immagine</strong>: ${card.illustration.source}</li>
  <li><strong>Autore</strong>: ${card.illustration.illustrator}</li>
  <li><strong>Valori carta</strong>: ${card.strenght}/${card.constitution}</li>
  <li><strong>Numero carta</strong>: ${card.expansion.numberOfThisCard}/${
    card.expansion.numberOfCards
  }</li>
  </ul>
  `;
  return displayMessage;
}

const cards = document.getElementById("cards");

cards.innerHTML = cardDisplay(card);
