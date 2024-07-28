const weddingPage = document.getElementById('weddingPage');
const honeymoonPage = document.getElementById('honeymoonPage');
const confirmationPage = document.getElementById('confirmationPage');
const videoElement = document.getElementById('video');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const noOptionMessage = document.getElementById('noOptionMessage');
const finalMessage = document.getElementById('finalMessage');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const destinationButtons = document.querySelectorAll('.destination');

const videos = {
    Japan: 'videos/japan.mp4',       // Local path to Japan video
    Switzerland: 'videos/switzerland.mp4', // Local path to Switzerland video
    Bali: 'videos/bali.mp4'         // Local path to Bali video
};

// Function to hide all pages
function hideAllPages() {
    weddingPage.classList.add('hidden');
    honeymoonPage.classList.add('hidden');
    confirmationPage.classList.add('hidden');
}

// Show the Honeymoon Selection Page
yesButton.addEventListener('click', () => {
    hideAllPages();
    honeymoonPage.classList.remove('hidden');
});

// Handle the 'No' Button Click
noButton.addEventListener('click', () => {
    noOptionMessage.style.display = 'block'; // Show the message
    setTimeout(() => {
        noOptionMessage.style.display = 'none'; // Hide the message after 3 seconds
    }, 3000);
});

// Show Video
function showVideo(destination) {
    videoSource.src = videos[destination];
    videoPlayer.load(); // Reload the video with the new source
    videoElement.classList.add('show'); // Use the 'show' class to make the video visible
    videoPlayer.requestFullscreen(); // Request fullscreen mode if needed
    videoPlayer.play(); // Start playing the video
}

// Handle Destination Selection and Show Video
destinationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const destination = event.target.dataset.destination;
        showVideo(destination);

        // Show message after video ends
        videoPlayer.onended = () => {
            videoElement.classList.remove('show'); // Hide video after it ends
            hideAllPages(); // Hide all pages
            confirmationPage.classList.remove('hidden'); // Show the confirmation page
            finalMessage.style.display = 'block'; // Show the final message
        };
    });
});
