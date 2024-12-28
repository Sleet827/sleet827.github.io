document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff69b4', '#ffd700'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});