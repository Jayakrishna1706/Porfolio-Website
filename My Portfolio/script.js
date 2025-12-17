// ===== Dark / Light Mode Toggle =====
const themeSwitch = document.getElementById('theme-Switch');
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeSwitch.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'active' : null);
});

// ===== Hamburger Menu dark light mode =====
const themeSwitch1 = document.getElementById('theme-Switch1');
themeSwitch1.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeSwitch1.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'active' : null);
  
});

// ===== Typing Effect =====
const typing = document.querySelector('.typing');
const text = ["Front-End Developer", "Software Developer" ,"UI/UX Enthusiast", ];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const current = text[i];
  typing.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(typeEffect, 80);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

// ===== Scroll Reveal Animation =====
const projects = document.querySelectorAll('.project');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    if (projectTop < triggerBottom) project.classList.add('visible');
  });
});

// ===== Contact Form =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
  e.target.reset();
});


// ===== show hidden Hamburger menu  =====
function showSidebar() {
  document.querySelector('.hamburger_sidebar').style.display = 'flex';
}
function hideSidebar() {
  document.querySelector('.hamburger_sidebar').style.display = 'none';
}

// ===== Contact Us Setup ===== 

function sendEmail() {
  // get form values
  var params = {
   name : document.getElementById("name").value,
   email : document.getElementById("email").value,
   message : document.getElementById("message").value 
  }

  const serviceID = "service_rjuxbum";
  const templateID = "template_n7g5haa";

  emailjs.send(serviceID, templateID, params)
  //  .then(res => {
  //     document.getElementById("name").value = "";
  //     document.getElementById("email").value = "";
  //     document.getElementById("message").value = "";
  //     console.log(res);
  //     alert("Thanks for reaching out! I’ll get back to you soon.");
  //  })
  //  .catch(err => console.log(err));

  }