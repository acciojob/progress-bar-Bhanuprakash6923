const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    updateProgress();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    updateProgress();
});

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable/disable buttons based on currentActive
    prevButton.disabled = currentActive === 0;
    nextButton.disabled = currentActive === circles.length;

    // Update the progress line width
    const progressLine = document.querySelector('.progress-line');
    const activeCircles = document.querySelectorAll('.circle.active').length;
    progressLine.style.width = `${(activeCircles - 1) * 100 / (circles.length - 1)}%`;
}

