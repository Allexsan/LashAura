// Плавный скролл для навигации
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация появления секций при скролле (с каскадом)
    const sections = document.querySelectorAll('.animate-section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Добавляем класс с задержкой для каскада
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100); // 100ms задержка между секциями
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
