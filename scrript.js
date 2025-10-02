






document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('h1.animate-fade-in');
  const titleElement = document.querySelector('h2.animate-fade-in-up');
  const introElement = document.querySelector('p.animate-fade-in-down');
  const ctaButton = document.querySelector('a[href="#projects"]');

  // Initially hide the elements before adding the animation classes
  // Note: We use the 'forwards' keyword in CSS to keep the final state (opacity: 1)

  // Add animation delay dynamically
  if (introElement) {
    introElement.style.animationDelay = '0.2s';
    introElement.style.opacity = 0;
  }
  if (nameElement) {
    nameElement.style.animationDelay = '0.4s';
    nameElement.style.opacity = 0;
  }
  if (titleElement) {
    titleElement.style.animationDelay = '0.6s';
    titleElement.style.opacity = 0;
  }
  if (ctaButton) {
    // Simple fade-in for the button after the main titles
    ctaButton.style.animation = 'fadeIn 1s ease-out 1s forwards';
    ctaButton.style.opacity = 0;
  }

});




// Social links configuration - Keep this part but fix it
const socials = [
  { href: "https://github.com/Surya77069", icon: "fab fa-github", color: "hover:text-black" },
  { href: "https://www.linkedin.com/in/surya-prakash-65977a276", icon: "fab fa-linkedin", color: "hover:text-blue-600" },
  { href: "https://instagram.com/sury9146", icon: "fab fa-instagram", color: "hover:text-pink-500" },
  { href: "mailto:suryaa77069@gmail.com", icon: "fas fa-envelope", color: "hover:text-red-500" },
];

// Initialize social links in sidebar
const container = document.getElementById("socials");
if (container) {
  socials.forEach(social => {
    container.innerHTML += `
      <a href="${social.href}" target="_blank" class="${social.color} transition">
        <i class="${social.icon} fa-lg"></i>
      </a>
    `;
  });
}

// Initialize social links in modal - Fixed version
const socialModal = document.getElementById("social");
if (socialModal) {
  socialModal.innerHTML = ''; // Clear existing content
  socials.forEach(social => {
    socialModal.innerHTML += `
      <a href="${social.href}" target="_blank" class="${social.color} transition">
        <i class="${social.icon} fa-lg"></i>
      </a>
    `;
  });
}

// Add event listeners for modal closing (fallback for older browsers)
document.addEventListener('DOMContentLoaded', function () {
  // Close modal when back button is clicked
  const backButton = document.getElementById('back-to-menu');
  if (backButton) {
    backButton.addEventListener('click', function () {
      // Dispatch Alpine.js event to close modal
      const event = new CustomEvent('alpine:update');
      document.dispatchEvent(event);
    });
  }

  // Close modal when close button is clicked
  const closeProfile = document.getElementById('close-profile');
  if (closeProfile) {
    closeProfile.addEventListener('click', function () {
      // Dispatch Alpine.js event to close modal
      const event = new CustomEvent('alpine:update');
      document.dispatchEvent(event);
    });
  }
});

// Alternative: Simple Alpine.js state reset function
function closeModal() {
  // This will work if Alpine.js is properly initialized
  if (typeof Alpine !== 'undefined' && Alpine.store) {
    Alpine.store('openProfile', false);
  }
}



// Add interactive elements to About section
document.addEventListener('DOMContentLoaded', function () {
  // Animate skill cards on scroll
  const skillCards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
});



function loadEducationContent() {
  const container = document.getElementById('education-container');

  // Simulate network delay (e.g., fetching data from an API)
  const LOADING_DELAY_MS = 1500;

  setTimeout(() => {
    // 1. Remove the loading state classes
    container.classList.remove('is-loading');
    container.classList.remove('animate-pulse');

    // 2. Optional: Add a brief fade-in transition to the content 
    //    (Requires a Tailwind class like 'transition-opacity duration-500 opacity-0' 
    //    on the container initially, and then 'opacity-100' here.)
    //    For simplicity, we'll just remove the loading visual instantly.

  }, LOADING_DELAY_MS);
}

// Run the function when the page loads
window.addEventListener('load', loadEducationContent);




// Contact Info Data
const contactData = {
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "suryaa77069@gmail.com",
  phone: "+91 7706925634",
  socials: [
    { icon: "fab fa-linkedin", link: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-500" },
    { icon: "fab fa-github", link: "https://github.com/yourprofile", color: "hover:text-gray-300" },
    { icon: "fab fa-instagram", link: "https://instagram.com/yourprofile", color: "hover:text-pink-500" },
    { icon: "fab fa-twitter", link: "https://twitter.com/yourprofile", color: "hover:text-blue-400" }
  ]
};

// Function to Render Contact Info
function renderContact() {
  const container = document.getElementById("contact-info");
  container.innerHTML = `
    <h4 class="text-xl font-semibold">Let's Connect</h4>
    <p class="text-gray-300">
      Have a project in mind, or just want to say hello?  
      Feel free to reach out through the form or directly via my contact details.
    </p>

    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <i class="fas fa-map-marker-alt text-amber-500 text-lg"></i>
        <span>${contactData.location}</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-envelope text-amber-500 text-lg"></i>
        <span>${contactData.email}</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-phone text-amber-500 text-lg"></i>
        <span>${contactData.phone}</span>
      </div>
    </div>

    <!-- Social Links -->
    <div class="flex space-x-6 mt-6 text-2xl">
      ${contactData.socials.map(social => `
        <a href="${social.link}" target="_blank" class="${social.color}">
          <i class="${social.icon}"></i>
        </a>
      `).join('')}
    </div>
  `;
}

// Call on page load
document.addEventListener("DOMContentLoaded", () => {
  renderContact();
  renderExperience();  // from before
  renderProjects();    // if you added projects
});






 document.addEventListener("DOMContentLoaded", function () {
    // ✅ EmailJS Init
    emailjs.init("l8s8A9TiGEY_kBHF2"); // Your Public Key

    const form = document.getElementById("contact-form");
    const responseMsg = document.getElementById("response-msg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      responseMsg.textContent = "⏳ Sending...";
      responseMsg.className = "mt-4 text-blue-400 text-center text-sm";

      emailjs.sendForm("service_26vyrfa", "template_w33af6j", this)
        .then(() => {
          responseMsg.textContent = "✅ Message sent successfully!";
          responseMsg.className = "mt-4 text-green-400 text-center text-sm";
          form.reset();
        }, (err) => {
          responseMsg.textContent = "❌ Failed to send message. Check console.";
          responseMsg.className = "mt-4 text-red-400 text-center text-sm";
          console.error("EmailJS Error:", err);
        });
    });

    // ✅ Dynamic Contact Info Data
    const contactData = {
      heading: "Contact",
      description: "Feel free to reach out! You can email me directly, connect on social media, or fill out the form.",
      info: [
        { icon: "fa-solid fa-envelope", text: "suryaa77069@gmail.com" },
        { icon: "fa-solid fa-phone", text: "+91 7706925634" },
        { icon: "fa-solid fa-location-dot", text: "Gorakhpur, U.P,India" }
      ],
      social: [
        { icon: "fab fa-github", url: "https://github.com/yourprofile" },
        { icon: "fab fa-twitter", url: "https://twitter.com/yourprofile" },
        { icon: "fab fa-linkedin", url: "https://linkedin.com/in/yourprofile" },
        { icon: "fab fa-instagram", url: "https://instagram.com/yourprofile" }
      ]
    };

    // ✅ Render Contact Info
    const contactInfoEl = document.getElementById("contact-info");
    contactInfoEl.innerHTML = `
      <h3 class="text-3xl font-bold ">${contactData.heading}</h3>
      <p class="text-gray-300">${contactData.description}</p>
      <div class="space-y-4">
        ${contactData.info.map(item => `
          <p class="flex items-center space-x-3">
            <i class="${item.icon} text-indigo-400"></i>
            <span>${item.text}</span>
          </p>
        `).join('')}
      </div>
      <div class="flex space-x-6 mt-6 text-2xl">
        ${contactData.social.map(social => `
          <a href="${social.url}" target="_blank" class="text-gray-400 hover:text-indigo-400 transition">
            <i class="${social.icon}"></i>
          </a>
        `).join('')}
      </div>
      <!-- Copyright and Design Info (Formerly the Footer) -->
        <div class="pt-8 mt-8 border-t border-gray-700 text-gray-300 text-sm text-center md:text-left">
          <p>&copy; 2024 Surya Prakash. All Rights Reserved.</p>
        </div>
    `;
  });