let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");
if (!idInput) {
  console.warn(
    "could not find input field #idInput. this app will not work correctly"
  );
}
if (!colorInput) {
  console.warn(
    "could not find input field #colorInput. this app will not work correctly"
  );
}

function setCard() {
  (
    (document.querySelector(`section#${idInput.value.toLowerCase()}`) || {})
      .style || {}
  ).color = colorInput.value;
}
function resetCards() {
  let cards = document.querySelectorAll("body > main > section");
  //   console.log(cards);

  for (card of cards.values()) {
    card.style = null;
  }
}
