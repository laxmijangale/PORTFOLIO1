document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var sectionIndex = 0;
var sections = document.querySelectorAll('section');
var slideshowRunning = true;

function showSections() {
  if (!slideshowRunning) {
    return;
  }
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";  
  }
  sectionIndex++;
  if (sectionIndex > sections.length) {sectionIndex = 1}    
  sections[sectionIndex-1].style.display = "block";  
  setTimeout(showSections, 1000); // Change section every 5 seconds
}

function showSection(index) {
  slideshowRunning = false;
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";  
  }
  sections[index].style.display = "block";
  sectionIndex = index + 1;
}

showSections();

// Add event listeners to the navigation buttons
document.getElementById('home-btn').addEventListener('click', function() {
  showSection(0);
  slideshowRunning = false;
});

document.getElementById('about-btn').addEventListener('click', function() {
  showSection(1);
  slideshowRunning = false;
});

document.getElementById('projects-btn').addEventListener('click', function() {
  showSection(2);
  slideshowRunning = false;
});

document.getElementById('skills-btn').addEventListener('click', function() {
  showSection(3);
  slideshowRunning = false;
});

document.getElementById('contact-btn').addEventListener('click', function() {
  showSection(4);
  slideshowRunning = false;
});

// Stop the automatic slideshow when a section button is clicked
document.getElementById('home-btn').addEventListener('click', function() {
  slideshowRunning = false;
});

document.getElementById('about-btn').addEventListener('click', function() {
  slideshowRunning = false;
});

document.getElementById('projects-btn').addEventListener('click', function() {
  slideshowRunning = false;
});

document.getElementById('skills-btn').addEventListener('click', function() {
  slideshowRunning = false;
});

document.getElementById('contact-btn').addEventListener('click', function() {
  slideshowRunning = false;
});


