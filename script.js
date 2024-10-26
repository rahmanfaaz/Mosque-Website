const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = document.getElementById('mode-icon');
    icon.src = body.classList.contains('dark-mode') ? 
        'https://img.icons8.com/ios-filled/50/ffffff/sun.png' : 
        'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png';
});

// Function to update the clock and date
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const date = document.getElementById('date');
    
    clock.textContent = now.toLocaleTimeString();
    date.textContent = now.toLocaleDateString(); // Get the current date
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // initial call
