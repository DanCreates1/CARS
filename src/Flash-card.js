fetch('/src/Data.json')
    .then(response => response.json())
    .then(data => {
        let cardata =data;
        console.log(cardata);
    }) 


const container = document.getElementById('Flashcard-container');
const card = document.createElement('div');
card.classList.add('Flashcard');
container.appendChild(card);
