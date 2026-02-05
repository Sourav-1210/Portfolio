// Hero Section JavaScript Enhancements
// Smooth scroll behavior and entrance animations

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for entrance animations
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Skill icons interactive tooltip (optional enhancement)
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('title');
            if (tooltip) {
                // Add subtle scale animation (already in CSS)
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
    });

    // Add parallax effect to profile picture on mouse move (subtle)
    const heroSection = document.querySelector('.hero-section');
    const profilePic = document.querySelector('.profile-pic');
    
    if (heroSection && profilePic) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            // Very subtle parallax movement
            const moveX = deltaX * 10;
            const moveY = deltaY * 10;
            
            profilePic.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
        });
        
        heroSection.addEventListener('mouseleave', function() {
            profilePic.style.transform = 'translate(0, 0) scale(1)';
        });
    }

    // Typed text effect for tagline (lightweight implementation)
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const text = tagline.textContent;
        const roles = [
            'Full Stack Web Developer',
            'Frontend Developer',
            'Backend Developer',
            'MERN Stack Developer'
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typedText = '';
        
        function typeEffect() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typedText = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedText = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }
            
            tagline.textContent = typedText;
            
            let typeSpeed = 100;
            
            if (isDeleting) {
                typeSpeed = 50;
            }
            
            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing next
            }
            
            setTimeout(typeEffect, typeSpeed);
        }
        
        // Start typing effect after a short delay
        setTimeout(typeEffect, 1500);
    }

    // Console log for debugging
    console.log('Hero section enhanced with smooth animations! 🚀');
});
