document.addEventListener('DOMContentLoaded', function () {
  
   const navbar = document.querySelector('.navbar');
   const navLinks = document.querySelector('.nav-links');
   const hamburger = document.querySelector('.hamburger');
   const backToTopBtn = document.querySelector('.back-to-top');
   const contactForm = document.getElementById('contact-form');
   const filterButtons = document.querySelectorAll('.filter-btn');
   const portfolioCards = document.querySelectorAll('.portfolio-card');
   const viewDetailsButtons = document.querySelectorAll('.view-details');
   const modal = document.getElementById('project-modal');
   const closeModal = document.querySelector('.close-modal');
   const testimonialSlider = document.querySelector('.testimonials-slider');
   const prevTestimonialBtn = document.getElementById('prev-testimonial');
   const nextTestimonialBtn = document.getElementById('next-testimonial');
   const themeToggleBtn = document.getElementById('theme-toggle');
   const body = document.body;


   // Track eventos importantes
   
document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'view_project', {
      'project_name': btn.dataset.project
    });
  });
});

   // Clases para el tema del modal
   const darkThemeClass = 'dark-theme';
   const lightThemeClass = 'light-theme';

   // Función para cambiar entre modos claro y oscuro
   function toggleDarkMode() {
      body.classList.toggle(darkThemeClass);

      // Guardar preferencia en localStorage
      const isDarkMode = body.classList.contains(darkThemeClass);
      localStorage.setItem('darkMode', isDarkMode);

      // Actualizar icono del botón
      updateThemeIcon(isDarkMode);

      // Si el modal está abierto, actualizar su tema también
      if (modal.style.display === 'block') {
         if (isDarkMode) {
            modal.classList.add(darkThemeClass);
            modal.classList.remove(lightThemeClass);
         } else {
            modal.classList.add(lightThemeClass);
            modal.classList.remove(darkThemeClass);
         }
      }
   }

   // Función para actualizar el icono del tema
   function updateThemeIcon(isDarkMode) {
      const icon = themeToggleBtn.querySelector('i');
      if (isDarkMode) {
         icon.classList.remove('fa-moon');
         icon.classList.add('fa-sun');
      } else {
         icon.classList.remove('fa-sun');
         icon.classList.add('fa-moon');
      }
   }

   // Verificar preferencia guardada al cargar la página
   function checkSavedTheme() {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      if (savedDarkMode) {
         body.classList.add(darkThemeClass);
         updateThemeIcon(true);
      } else {
         body.classList.remove(darkThemeClass);
         updateThemeIcon(false);
      }
   }

   // Evento para el botón de cambio de tema
   themeToggleBtn.addEventListener('click', toggleDarkMode);

   // Verificar tema guardado al cargar
   checkSavedTheme();

   // Resto del código original...
   // Datos de los proyectos para el modal
   const projectsData = [{
         id: 1,
         title: "Web Gestion de Coches",
         description: "Desarrollo completo de una web online para coches.",
         image: "https://media.istockphoto.com/id/2140172947/es/foto/mujeres-que-usan-computadoras-port%C3%A1tiles-que-compran-en-l%C3%ADnea-con-%C3%ADconos-de-carrito-con-una.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ui33IwtUn9uRoBYd8m6PUJKk3MwHR0so3hdvbbWcTrc=",
         details: {
            "Cliente": "EcoLife Market",
            "Fecha": "Enero 2025",
            "Tecnologías": "HTML5, CSS3, JavaScript",
            "Reto": "Crear una experiencia de compra fluida que reflejara las mejores marcas.",
            "Solución": "Diseño minimalista con paleta de colores naturales, optimización de imágenes para rápida carga y estructura de navegación intuitiva."
         }
      },
      {
         id: 2,
         title: "Web de Musica (estilo spotify)",
         description: "Diseño moderno y minimalista para una startup de mùsica.",
         image: "https://media.istockphoto.com/id/2149058678/es/foto/compras-en-l%C3%ADnea-manos-y-persona-en-tableta-con-sitio-web-de-ropa-tienda-de-internet-y-sitio.jpg?s=612x612&w=0&k=20&c=-TIN16G8-73w6gUNDtFRMwwDhFg9KDWlCQ1vBzCZC8I=",
         details: {
            "Cliente": "TechSolutions Startup",
            "Fecha": "Marzo 2025",
            "Tecnologías": "HTML5, CSS3, JavaScript",
            "Reto": "Comunicar el valor de un producto técnico a un público no técnico.",
            "Solución": "Diseño limpio con ilustraciones explicativas, sección de preguntas frecuentes y formulario de contacto destacado."
         }
      },
      {
         id: 3,
         title: "Web de Juegos Pokemon y Ahorcado",
         description: "Diseño moderno y atractivo para disfrutar de una experiencia unica.",
         image: "https://media.istockphoto.com/id/1054574096/es/foto/concepto-de-realidad-virtual.jpg?s=612x612&w=0&k=20&c=pZpdZDY9H4JDdFe3k-l7HzmdzWDXMO0eCancxNN652w=",
         details: {
            "Cliente": "Wanderlust Adventures",
            "Fecha": "Junio 2025",
            "Tecnologías": "HTML5, CSS3, JavaScript",
            "Reto": "Mejorar el tiempo de permanencia de los visitantes y reducir la tasa de rebote.",
            "Solución": "Estructura de contenido relacionado, imágenes optimizadas, tiempos de carga mejorados y llamadas a la acción estratégicas."
         }
      },
      {
         id: 4,
         title: "Aplicación del Tiempo",
         description: "Consulta del tiempo en diferentes ciudades.",
         image: "https://media.istockphoto.com/id/867269152/es/foto/dedo-toque-tableta-digital-con-la-p%C3%A1gina-web-de-coches.jpg?s=1024x1024&w=is&k=20&c=mmzPPY7GCAIjwBbYbGZUxdcz4ULvMaaN3OM5T7n1a0A=",
         details: {
            "Cliente": "Juan Pérez Ingenieria",
            "Fecha": "Julio 2025",
            "Tecnologías": "HTML5, CSS Grid, JavaScript",
            "Reto": "Mostrar datos de alta calidad sin sacrificar el rendimiento de la página.",
            "Solución": "Implementación de rutinas eficientes, y diseño responsivo que destaca el trabajo visual."
         }
      }
   ];

   // ==================== FUNCIONALIDADES DE LA PÁGINA ====================

   // Navbar sticky y scroll
   window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
      } else {
         navbar.classList.remove('scrolled');
      }

      // Mostrar u ocultar botón "volver arriba"
      if (window.scrollY > 300) {
         backToTopBtn.classList.add('active');
      } else {
         backToTopBtn.classList.remove('active');
      }
   });

   // Menú hamburguesa
   hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
   });

   // Cerrar menú al hacer clic en un enlace
   document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function () {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
      });
   });

   // Filtro de portafolio
   filterButtons.forEach(button => {
      button.addEventListener('click', function () {
         // Quitar clase active de todos los botones
         filterButtons.forEach(btn => btn.classList.remove('active'));
         // Añadir clase active al botón clickeado
         this.classList.add('active');

         const filterValue = this.getAttribute('data-filter');

         portfolioCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
               card.style.display = 'block';
            } else {
               card.style.display = 'none';
            }
         });
      });
   });

   // Modal de proyectos - Funcionalidad mejorada
   function openModal(projectId) {
      const project = projectsData.find(p => p.id === projectId);

      if (project) {
         const modalBody = document.querySelector('.modal-body');
         let detailsHTML = '';

         // Construir HTML para los detalles del proyecto
         for (const [key, value] of Object.entries(project.details)) {
            detailsHTML += `
                    <div class="detail-item">
                        <h4>${key}</h4>
                        <p>${value}</p>
                    </div>
                `;
         }

         modalBody.innerHTML = `
                <div class="modal-header">
                    <h2>${project.title}</h2>
                </div>
                <div class="modal-content">
                    <div class="modal-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </div>
                    <div class="modal-text">
                        <p class="project-description">${project.description}</p>
                        <div class="project-details">
                            ${detailsHTML}
                        </div>
                    </div>
                </div>
            `;

         // Aplicar el tema actual al modal
         
         if (body.classList.contains(darkThemeClass)) {
            modal.classList.add(darkThemeClass);
            modal.classList.remove(lightThemeClass);
         } else {
            modal.classList.add(lightThemeClass);
            modal.classList.remove(darkThemeClass);
         }

         modal.style.display = 'block';
         modal.setAttribute('aria-hidden', 'false');
         document.body.style.overflow = 'hidden';

         // Enfocar el modal para accesibilidad

         modal.focus();
      }
   }

   function closeModalFunc() {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
   }

   // Asignar eventos a los botones de "Ver detalles"
   viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function () {
         const projectId = parseInt(this.getAttribute('data-project'));
         openModal(projectId);
      });
   });

   // Cerrar modal con el botón
   closeModal.addEventListener('click', closeModalFunc);

   // Cerrar modal al hacer clic fuera del contenido
   modal.addEventListener('click', function (e) {
      if (e.target === modal) {
         closeModalFunc();
      }
   });

   // Cerrar modal con la tecla Escape
   document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
         closeModalFunc();
      }
   });

   // Seleccionar elementos de testimonios

   const testimonials = document.querySelectorAll('.testimonial-card');
   const testimonialCount = testimonials.length;
   let currentTestimonial = 0;

   function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
         testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
      });
   }

   // Event listeners
   prevTestimonialBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonialCount) % testimonialCount;
      showTestimonial(currentTestimonial);
   });

   nextTestimonialBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCount;
      showTestimonial(currentTestimonial);
   });

   // Inicializar
   showTestimonial(currentTestimonial);

   // Validación de formulario de contacto
   contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      // Validar nombre
      const nameInput = document.getElementById('name');
      if (nameInput.value.trim() === '') {
         showError(nameInput, 'Por favor ingresa tu nombre');
         isValid = false;
      } else {
         hideError(nameInput);
      }

      // Validar email
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
         showError(emailInput, 'Por favor ingresa tu correo electrónico');
         isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
         showError(emailInput, 'Por favor ingresa un correo válido');
         isValid = false;
      } else {
         hideError(emailInput);
      }

      // Validar servicio
      const serviceInput = document.getElementById('service');
      if (serviceInput.value === '') {
         showError(serviceInput, 'Por favor selecciona un servicio');
         isValid = false;
      } else {
         hideError(serviceInput);
      }

      // Validar mensaje
      const messageInput = document.getElementById('message');
      if (messageInput.value.trim() === '') {
         showError(messageInput, 'Por favor ingresa un mensaje');
         isValid = false;
      } else {
         hideError(messageInput);
      }

      // Si el formulario es válido
      if (isValid) {
         // Simular envío (en un caso real sería una petición AJAX)
         const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            service: serviceInput.value,
            message: messageInput.value.trim(),
            date: new Date().toISOString()
         };

         // Guardar en localStorage (simulación de backend)
         saveFormData(formData);


         // Mostrar mensaje de éxito
         successMessage.style.display = 'block';
         setTimeout(() => {
            successMessage.style.display = 'none';
         }, 3000);


         // Resetear formulario
         contactForm.reset();
      }
   });

   function showError(input, message) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');

      errorMessage.textContent = message;
      errorMessage.classList.add('show');
      input.style.borderColor = '#e74c3c';
   }

   function hideError(input) {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');

      errorMessage.textContent = '';
      errorMessage.classList.remove('show');
      input.style.borderColor = '';
   }

   function saveFormData(data) {
      // Obtener datos existentes o inicializar array
      const savedForms = JSON.parse(localStorage.getItem('contactForms')) || [];
      // Agregar nuevo formulario
      savedForms.push(data);
      // Guardar en localStorage
      localStorage.setItem('contactForms', JSON.stringify(savedForms));
   }

   // Botón "volver arriba"
   backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });
});