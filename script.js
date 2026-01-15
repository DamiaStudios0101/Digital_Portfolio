document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    let activeVideo = null;
    let activeCard = null;

    cards.forEach(card => {
        const video = card.querySelector('.card-video');
        if (!video) return;

        // DESKTOP hover
        card.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return;

            stopActiveVideo();

            activeVideo = video;
            activeCard = card;

            video.currentTime = 0;
            video.style.opacity = '1';
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;
            stopActiveVideo();
        });

        // MOBILE tap
        card.addEventListener('click', (e) => {
            if (window.innerWidth > 768) return;

            if (activeCard !== card) {
                e.preventDefault(); // prevent link navigation

                stopActiveVideo();

                activeVideo = video;
                activeCard = card;

                video.currentTime = 0;
                video.style.opacity = '1';
                video.play();
            }
        });
    });

    function stopActiveVideo() {
        if (!activeVideo) return;

        activeVideo.pause();
        activeVideo.currentTime = 0;
        activeVideo.style.opacity = '0';

        activeVideo = null;
        activeCard = null;
    }
});