document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseContent = document.getElementById('surpriseContent');

    surpriseButton.addEventListener('click', () => {
        // Hide the button
        surpriseButton.style.display = 'none';
        
        // Show the surprise content
        surpriseContent.classList.remove('hidden');
        
        // Add a small delay before adding the visible class for the animation
        setTimeout(() => {
            surpriseContent.classList.add('visible');
        }, 50);
    });
}); 