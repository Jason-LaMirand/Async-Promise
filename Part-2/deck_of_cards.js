let baseURL = "https://deckofcardsapi.com/api/deck";


let deckId = null;
let $button = $('button');
let container = document.getElementById('imageContainer');


$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $button.show();
});

$button.on('click', function () {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        const img = document.createElement("img");
        img.src = cardSrc;
        container.appendChild(img);
    })
});
