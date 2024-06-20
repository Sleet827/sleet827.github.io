window.onload = function() {
    var audio = document.getElementById('romanticAudio');
    audio.volume = 0.5;
    
    audio.addEventListener('canplaythrough', function() {
        console.log("Audio can play through.");
    });

    audio.addEventListener('error', function(e) {
        console.error("Error loading audio: ", e);
    });
};
