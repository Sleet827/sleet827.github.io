document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ffd700'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    createSnowflake();
});

// Snowflake generation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
    document.querySelector('.snow').appendChild(snowflake);

    // Remove snowflake after it falls
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

//