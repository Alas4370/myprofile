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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');      // animate in
    } else {
      entry.target.classList.remove('show');   // reset when out of view
    }
  });
}, { threshold: 0.2 }); // triggers when 20% is visible

contentTitle.forEach(h3 => observer.observe(h3));
profilePhoto.forEach(img => observer.observe(img));
aboutText.forEach(p => observer.observe(p));
skillsCanvas.forEach(canvas => observer.observe(canvas));
expItem.forEach(item => observer.observe(item));

function downloadPDF() {
    window.open('https://raw.githubusercontent.com/Alas4370/myprofile/main/assets/pdf/AJ_Resume.pdf', '_blank');
}

