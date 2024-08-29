// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Achievements section
    const achievements = [
        { title: "Data Science Hackathon Winner", year: 2023 },
        { title: "Published Research Paper in AI", year: 2022 },
        { title: "Top 1% Kaggle Competitor", year: 2021 },
        { title: "Best Graduate Student Award", year: 2020 }
    ];

    const achievementsSection = document.querySelector('#achievements');
    const achievementsList = achievementsSection.querySelector('.achievements-list');

    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement';
        achievementElement.innerHTML = `
            <h3>${achievement.title}</h3>
            <p>${achievement.year}</p>
        `;
        achievementsList.appendChild(achievementElement);
    });

    // Animate achievements on scroll
    const animateAchievements = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const achievements = entry.target.querySelectorAll('.achievement');
                achievements.forEach((achievement, index) => {
                    setTimeout(() => {
                        achievement.style.opacity = '1';
                        achievement.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const achievementsObserver = new IntersectionObserver(animateAchievements, {
        threshold: 0.5
    });

    achievementsObserver.observe(achievementsSection);

    // Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollPosition >= heroHeight / 2) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });
});
