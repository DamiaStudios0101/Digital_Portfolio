document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('.card-video');
        if (!video) return;

        let tappedOnce = false;

        // DESKTOP hover
        card.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return;

            video.currentTime = 0;
            video.style.opacity = '1';
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;

            video.pause();
            video.currentTime = 0;
            video.style.opacity = '0';
        });

        // MOBILE tap
        card.addEventListener('click', (e) => {
            if (window.innerWidth > 768) return;

            if (!tappedOnce) {
                e.preventDefault(); // stop link
                tappedOnce = true;

                video.style.opacity = '1';
                video.currentTime = 0;
                video.play();

                setTimeout(() => tappedOnce = false, 3000);
            }
        });
    });
});