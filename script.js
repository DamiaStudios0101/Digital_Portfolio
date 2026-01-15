document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('.card-video');

        if (!video) return;

        card.addEventListener('mouseenter', () => {
            video.currentTime = 0;
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
});