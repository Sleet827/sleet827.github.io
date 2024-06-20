// Script to enable audio autoplay for some browsers
const iframe = document.querySelector('iframe');
iframe.contentWindow.document.querySelector('video').muted = true; // Mute Youtube audio
iframe.contentWindow.document.querySelector('video').play();
