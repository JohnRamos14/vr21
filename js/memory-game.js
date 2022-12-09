const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;

let cardOne, cardTwo;

function flipCard() {

  if (this === cardOne) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    cardOne = this;
    return;
  }

  cardTwo = this;
  lockBoard = true;

  checkForMatch();
}eif

function checkForMatch() {
 if(cardOne.dataset.id === cardTwo.dataset.id) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 16);
     card.style.order = ramdomPos;
   });
 })();

cards.forEach(card => card.addEventListener('click', flipCard));