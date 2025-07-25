const cards = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) card.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

setInterval(() => {
  current = (current + 1) % cards.length;
  showCard(current);
}, 3000);

showCard(current);
