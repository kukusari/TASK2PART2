// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // ตั้งค่า theme เริ่มต้น
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Event listener สำหรับการคลิก
    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // เปลี่ยน theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // เพิ่ม animation effect
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });

    function updateThemeIcon(theme) {
        themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
});
// Loading Animation
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const progressBar = document.querySelector('.progress-fill'); // This selector might be incorrect based on style.css

    // จำลองการโหลด content
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        // The class in style.css for progress bar is '.progress-bar', not '.progress-fill'
        // You might need to adjust the selector here or in your HTML/CSS
        if (progressBar) { // Added a check to prevent error if progressBar is null
             progressBar.style.width = progress + '%';
        }


        if (progress >= 100) {
            clearInterval(loadingInterval);

            // Fade out loader
            setTimeout(() => {
                loader.classList.add('fade-out');

                // Remove loader from DOM
                setTimeout(() => {
                    loader.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 500);
            }, 500);
        }
    }, 150);
});
// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) { // Added a check to prevent error if progressBar is null
        progressBar.style.width = scrollPercent + '%';
    }


    // เพิ่ม effect เมื่อเลื่อนถึงจุดต่างๆ
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
            // Highlight current section in navbar
            const currentId = section.getAttribute('id');
            const navLinks = document.querySelectorAll('.nav-links a'); // This assumes you have nav-links in your HTML

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Event listeners
window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);
// Project Filter System
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const visibleCount = document.getElementById('visible-count'); // This element is not present in your index.html

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        let visibleProjects = 0;

        // Filter projects with animation
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                    visibleProjects++;
                } else {
                    card.classList.add('hide');
                }

                // Update visible count (if visibleCount element exists)
                if (visibleCount) {
                     visibleCount.textContent = visibleProjects;
                }
            }, index * 50); // Stagger animation
        });

        // Add ripple effect to button
        const ripple = document.createElement('span');
        ripple.classList.add('ripple'); // Ensure you have .ripple CSS for this
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});// Typing Animation
class TypeWriter {
    constructor(textElement, words, wait = 3000) {
        this.textElement = textElement;
        this.words = words;
        this.text = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullText = this.words[current];

        if (this.isDeleting) {
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }

        this.textElement.innerHTML = this.text;

        let typeSpeed = 150;
        if (this.isDeleting) typeSpeed /= 2;

        if (!this.isDeleting && this.text === fullText) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect
const typingText = document.getElementById('typing-text');
const words = ['Full Stack Developer', 'React Specialist', 'UI/UX Designer'];
// Ensure typingText element exists before initializing TypeWriter
if (typingText) {
    new TypeWriter(typingText, words, 2000);
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Ensure backToTopButton exists before adding event listeners
if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });

    // Throttle scroll event for performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(toggleBackToTop);
            ticking = true;
        }
    }

    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}
