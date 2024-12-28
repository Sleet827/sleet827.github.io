document.getElementById('snowflakeBtn').addEventListener('click', createSnowflake());

// Snowflake generation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.snow').appendChild(snowflake);

    // Remove snowflake after it falls
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}