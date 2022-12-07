const cards = document.querySelectorAll(".card");
let cardsCount = cards.length;
let firstCard, secondCard;
let hasFlippedCard = false;


console.log(cardsCount)
function flipCard(){
    this.classList.add("flip");

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
   console.log("clicked")
}

function checkForMatch(){
    if(firstCard.dataset.id === secondCard.dataset.id){
        disableCards();
        return;
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}


cards.forEach(card => {
    card.addEventListener('click', flipCard)
});

