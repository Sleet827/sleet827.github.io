const snowContainer = document.getElementById('snow-container');
const toggleSnowButton = document.getElementById('toggle-snow');
let snowing = true;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Random snowflake properties
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'; // 3s to 8s
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowContainer.appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

function toggleSnow() {
    snowing = !snowing;
    if (snowing) {
        startSnowfall();
    } else {
        clearInterval(snowInterval);
    }
}

let snowInterval = setInterval(createSnowflake, 200);

toggleSnowButton.addEventListener('click', toggleSnow);

function startSnowfall() {
    snowInterval = setInterval(createSnowflake, 200);
}
