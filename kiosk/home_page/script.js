// Get references to the necessary elements
const languageSelect = document.getElementById('language-select');
const homeTitle = document.getElementById('home-title');
const navLinks = document.querySelector('.nav-links');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header-container');

// Define translations for different languages
const translations = {
  en: {
    homeTitle: 'VAIDYA'
  },
  kn: {
    homeTitle: 'ವೈದ್ಯ'
  },
  hi: {
    homeTitle: 'वैद्य'
  }
};

// Function to update the content based on the selected language
function updateContent(lang) {
  homeTitle.textContent = translations[lang].homeTitle;
  // Update other content elements based on the selected language
}

// Event listener for the language select dropdown
languageSelect.addEventListener('change', () => {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});

// Set the initial language to English
updateContent('en');

// Toggle the navigation menu on smaller screens
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Add smooth scrolling to anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add sticky header on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add submenu functionality
const subMenuLinks = document.querySelectorAll('.nav-links li > a');

subMenuLinks.forEach(link => {
  if (link.nextElementSibling && link.nextElementSibling.classList.contains('submenu')) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const submenu = link.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});

// Add lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');

function loadImage(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
} else {
  lazyImages.forEach((img) => {
    loadImage(img);
  });
}