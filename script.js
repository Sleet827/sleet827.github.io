document.getElementById('snowflakeBtn').addEventListener('click', () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.snow').appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
});

document.getElementById('resetBtn').addEventListener('click', () => {
    let snow = document.querySelector('.snow');
    let snowflake = snow.lastElementChild;

    while (snowflake) {
        snow.removeChild(snowflake);
        snowflake = snow.lastElementChild;
    }
});