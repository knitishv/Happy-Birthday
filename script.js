function openGift() {
    document.getElementById('gift-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'block';
    createConfetti();
}

function createConfetti() {
    const colors = ['#d63384', '#ffc107', '#20c997', '#0dcaf0', '#6610f2'];
    
    for (let i = 0; i < 150; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Randomize starting position, color, and fall speed
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 2;
        
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';
        confetti.style.opacity = Math.random() + 0.5;
        
        document.body.appendChild(confetti);

        // Remove confetti from the code after it falls so the site doesn't slow down
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}