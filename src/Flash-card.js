fetch('/src/Data.json')
    .then(response => response.json())
    .then(data => {
        let cardata =data;
        console.log(cardata);
    }) 
    .catch(error => {console.error("error loding data", error)});


const container = document.getElementById('Flashcard-container');
const card = document.createElement('div');
card.classList.add('Flashcard');
container.appendChild(card);


