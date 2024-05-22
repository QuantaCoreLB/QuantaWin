document.addEventListener('DOMContentLoaded', () => {
    const instructionsButton = document.getElementById('instructionsButton');
    const instructionsPopup = document.getElementById('instructionsPopup');
    const closeButton = document.querySelector('.close-button');
    const enterNowButton = document.getElementById('enterNowButton');

    instructionsButton.addEventListener('click', () => {
        instructionsPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        instructionsPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === instructionsPopup) {
            instructionsPopup.style.display = 'none';
        }
    });

    enterNowButton.addEventListener('click', () => {
        window.location.href = 'enter.html';
    });
});
