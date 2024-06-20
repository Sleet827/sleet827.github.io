window.onload = function() {
    // Fireworks animation
    var fireworks = document.querySelectorAll('.firework');
    fireworks.forEach((firework, index) => {
        firework.style.animationDelay = `${index * 0.5}s`;
    });

    // Hearts animation
    var hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 1}s`;
    });
};