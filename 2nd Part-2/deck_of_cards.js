let baseURL = "https://deckofcardsapi.com/api/deck";


let deckId = null;
let $button = $('button');
let container = document.getElementById('imageContainer');


async function part1() {

    let data = await $.getJSON(`${baseURL}/new/shuffle/`);
    deckId = data.deck_id;
    $button.show();

}

$button.on('click', async function () {
    let cardData = await $.getJSON(`${baseURL}/${deckId}/draw/`)
    let cardSrc = cardData.cards[0].image;
    const img = document.createElement("img");
    img.src = cardSrc;
    container.appendChild(img);

});
part1();