const snowContainer = document.getElementById('snow-container');
const toggleSnowButton = document.getElementById('toggle-snow');
let snowing = true;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2s to 5s
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowflake.innerHTML = '❄';
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
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
