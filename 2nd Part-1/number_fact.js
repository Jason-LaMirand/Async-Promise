


async function cards() {
    let baseURL = "http://numbersapi.com";
    console.log("START")
    let res1 = await $.getJSON(`${baseURL}/1,2,3,4?json`);
    let res2 = await $.getJSON(`${baseURL}/7?json`);




    for (var item in res1) {
        $('body').append(`<p>${item}</p>`);
    }

    for (let i = 0; i < 4; i++) {
        $('body').append(`<p>${res2.text}</p>`);
    }

    console.log("END");

}

cards();
