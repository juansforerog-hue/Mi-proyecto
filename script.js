document.addEventListener('DOMContentLoaded', function() {
    console.log('LingoMatch cargado correctamente');
    const successMessage = document.createElement('div');
    successMessage.id = 'successMessage';
    successMessage.className = 'alert alert-success alert-dismissible fade show';
    successMessage.innerHTML = `
        <strong>¡Éxito!</strong> Tu mensaje ha sido enviado correctamente.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(successMessage);
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('¡Gracias por tu interés en LingoMatch! Te redirigiremos a la página de registro.');
            document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        });
    }
    const aprenderButtons = document.querySelectorAll('.language-card .btn');
    aprenderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.card-body').querySelector('.card-title').textContent;
            alert(`¡Excelente elección! Has seleccionado aprender ${cardTitle}.`);
        });
    });
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }
            console.log('Formulario enviado:', { nombre, email, mensaje });
            const successAlert = document.getElementById('successMessage');
            successAlert.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                successAlert.style.display = 'none';
            }, 3000);
        });
    }
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const increment = target / 100;
            
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 15);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    }
    
    setTimeout(() => {
        console.log('Datos cargados correctamente');
    }, 2000);
});