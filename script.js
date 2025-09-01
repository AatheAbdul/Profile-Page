const cards = document.querySelectorAll('.project-card');

let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) card.classList.add('active');
  });
}

setInterval(() => {
  current = (current + 1) % cards.length;
  showCard(current);
}, 7000);

showCard(current);
