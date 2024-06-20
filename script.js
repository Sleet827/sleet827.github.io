// Add some confetti animation
const confettiContainer = document.body;
const confettiCount = 300;
const colors = ['#e0245e', '#f9f586', '#007bff'];

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
  confettiContainer.appendChild(confetti);

  confetti.style.animation = 'confettiMove 5s linear infinite';
}

for (let i = 0; i < confettiCount; i++) {
  createConfetti();
}

// Add some animation to the confetti
const confetti = document.querySelectorAll('.confetti');

@keyframes confettiMove {
  0% {
    transform: translateX(-50%) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(360deg);
  }
}
