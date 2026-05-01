document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.multiple-text', {
        strings: ['DATA ANALYTIC', 'FULL STACK DEV.', 'DSA SOLVER(C++) ','EXPLORING DEVOPS AND CLOUD COMPUTING'],
        typeSpeed: 90,
        backSpeed: 80,
        backDelay: 120,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });

    const boxes = document.querySelectorAll('.skills-box');
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.borderColor = '#ffffff';
        });
        box.addEventListener('mouseleave', () => {
            box.style.borderColor = '#00ff00';
        });
    });

    // Snow and 3D floating effect
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff00' // Glowing Green particles/snow
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'bottom', // Floating downwards like snow
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".circular-progress");

    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        const valueElement = circle.querySelector(".progress-value");
        let currentPercent = 0;

        const interval = setInterval(() => {
            if (currentPercent >= percentage) {
                clearInterval(interval);
            } else {
                currentPercent++;
                valueElement.textContent = `${currentPercent}%`;
                
                // Calculate conic-gradient degree
                let degrees = (currentPercent / 100) * 360;
                circle.style.background = `conic-gradient(#00ff66 ${degrees}deg, #1a1a2e ${degrees}deg)`;
            }
        }, 20);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".circular-progress");

    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        const valueElement = circle.querySelector(".progress-value");
        let currentPercent = 0;

        const interval = setInterval(() => {
            if (currentPercent >= percentage) {
                clearInterval(interval);
            } else {
                currentPercent++;
                valueElement.textContent = `${currentPercent}%`;
                
                // 3D Neon Gradient Effect (Neon Green + Cyan/Blue touch)
                let degrees = (currentPercent / 100) * 360;
                circle.style.background = `conic-gradient(#00ff66 0deg, #00c3ff ${degrees/2}deg, #16a085 ${degrees}deg, #101018 ${degrees}deg)`;
            }
        }, 20);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".circular-progress");

    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        const valueElement = circle.querySelector(".progress-value");
        let currentPercent = 0;

        const interval = setInterval(() => {
            if (currentPercent >= percentage) {
                clearInterval(interval);
            } else {
                currentPercent++;
                valueElement.textContent = `${currentPercent}%`;
                
                // 3D Neon Gradient Effect
                let degrees = (currentPercent / 100) * 360;
                circle.style.background = `conic-gradient(#00ff66 0deg, #00c3ff ${degrees/2}deg, #16a085 ${degrees}deg, #101018 ${degrees}deg)`;
            }
        }, 20);
    });
});
document.querySelectorAll('.projects-box, .certificate-box').forEach(box => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width/2);
        const y = e.clientY - rect.top - (rect.height/2);
        
        box.style.transform = `perspective(1000px) rotateY(${x / 15}deg) rotateX(${-y / 15}deg) translateY(-8px)`;
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.getElementById('particles-js');
    
    if (snowContainer) {
        const starCount = 120;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random Size & Speed
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            // Random Glow Intensity
            star.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px #ffffff`;
            
            snowContainer.appendChild(star);
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.getElementById('particles-js');
    
    if (snowContainer) {
        const starCount = 120;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random Size & Speed
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            // Random Glow Intensity
            star.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px #ffffff`;
            
            snowContainer.appendChild(star);
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Pure CSS star generator
    const snowContainer = document.getElementById('particles-js');
    
    if (snowContainer) {
        const starCount = 120;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            star.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px #ffffff`;
            
            snowContainer.appendChild(star);
        }
    }
});