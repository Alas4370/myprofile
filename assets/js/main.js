// Select all navigation links and all content sections
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // 1. Remove the 'active' class from all links and content
        navLinks.forEach(nav => nav.classList.remove('active'));
        contentSections.forEach(content => content.classList.remove('active'));

        // 2. Add the 'active' class to the clicked link
        event.target.classList.add('active');

        // 3. Get the target ID from the link's data-target attribute
        const targetId = event.target.dataset.target;

        // 4. Find the corresponding content section by its ID
        const targetContent = document.getElementById(`${targetId}-content`);

        // 5. Add the 'active' class to the target content to make it visible
        targetContent.classList.add('active');
    });
});

const btn = document.querySelector('.contact-btn');

setInterval(() => {
  if (btn.matches(':hover')) {
    btn.style.setProperty('--x', `${Math.random() * 100}%`);
    btn.style.setProperty('--y', `${Math.random() * 100}%`);
  }
}, 2000);

const contentTitle = document.querySelectorAll('.content-section h3');
const profilePhoto = document.querySelectorAll('.profile-photo img');
const aboutText = document.querySelectorAll('.about-text p');
const skillsCanvas = document.querySelectorAll('canvas');
const expItem = document.querySelectorAll('.experience-item');
const educCard = document.querySelectorAll('.education-card');

const staggerGroups = [
  { elements: educCard, className: 'education-card' },
  { elements: skillsCanvas, className: 'canvas' }
];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const group = staggerGroups.find(g => entry.target.classList.contains(g.className) || entry.target.tagName.toLowerCase() === g.className);
      
      if (group) {
        const index = Array.from(group.elements).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 300);
      } else {
        entry.target.classList.add('show');
      }
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

contentTitle.forEach(el => observer.observe(el));
profilePhoto.forEach(el => observer.observe(el));
aboutText.forEach(el => observer.observe(el));
skillsCanvas.forEach(el => observer.observe(el));
expItem.forEach(el => observer.observe(el));
educCard.forEach(el => observer.observe(el));

function downloadPDF() {
    window.open('https://raw.githubusercontent.com/Alas4370/myprofile/main/assets/pdf/AJ_Resume.pdf', '_blank');
}

// Modal for email
const contactBtn = document.querySelector('.contact-btn'); 
const modal = document.getElementById('contactModal');
const closeModal = modal.querySelector('.close');

contactBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// Email form error handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  formStatus.innerHTML = 'Sending <span></span><span></span><span></span>';

  emailjs.sendForm('service_xfhiwpq', 'template_116vgg6', this)
    .then(() => {
      formStatus.style.color = 'green';
      formStatus.textContent = 'Message sent successfully!';
      
      setTimeout(() => {
        modal.style.display = 'none';
        contactForm.reset();
        formStatus.textContent = '';
      }, 2500);
    })
    .catch((err) => {
      formStatus.style.color = '#f5567b';
      formStatus.textContent = 'Failed to send message. Try again.';
      console.error(err);
    });
});


