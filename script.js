document.addEventListener("alpine:init", () => {
  Alpine.data("skillsApp", () => ({
    skills: [
      { name: "Web Development", desc: "HTML, CSS, JS, Tailwind, ReactJS", level: 90, icon: "fas fa-laptop-code", color: "text-blue-600 group-hover:text-white", bg: "bg-blue-100 group-hover:bg-blue-500", barColor: "bg-blue-500" },
      { name: "IoT Development", desc: "C#, Arduino UNO", level: 75, icon: "fas fa-microchip", color: "text-green-600 group-hover:text-white", bg: "bg-green-100 group-hover:bg-green-500", barColor: "bg-green-500" },
      { name: "MS Office Expert", desc: "Word, Excel, PowerPoint", level: 85, icon: "fas fa-file-excel", color: "text-purple-600 group-hover:text-white", bg: "bg-purple-100 group-hover:bg-purple-500", barColor: "bg-purple-500" },
      { name: "High Voltage Engineering", desc: "Load Flow, Power System", level: 70, icon: "fas fa-bolt", color: "text-red-600 group-hover:text-white", bg: "bg-red-100 group-hover:bg-red-500", barColor: "bg-red-500" }
    ]
  }))
})



document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fade in card
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");

        // Expand progress container
        const container = entry.target.querySelector(".progress-container");
        container.style.height = "3rem"; // expand smoothly

        // Animate progress bar
        const progressBar = entry.target.querySelector(".progress-bar");
        const progressValue = progressBar.getAttribute("data-progress");
        setTimeout(() => {
          progressBar.style.width = progressValue + "%";
          progressBar.style.transition = "width 1.2s ease-out";
        }, 300); // slight delay for nicer effect
      }
    });
  }, { threshold: 0.3 });

  skillCards.forEach(card => observer.observe(card));
});




const educationData = [
  {
    title: "Bachelor of Technology in Electrical Engineering",
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    year: "2023 – 2027",
    details: "Specialized in Power System, IoT, Web Development. Actively involved in hardware-software projects."
  },
  {
    title: "Nielit O-level Diploma",
    institution: "Vision Institute of Technology, Sahjanwa, Gorakhpur",
    year: "2022 – 2023",
    details: "Completed Diploma in Web Development, IoT, MS-Office, and AI Tools."
  },
  {
    title: "Higher Secondary (XII)",
    institution: "Heritage Academy, Gorakhpur",
    year: "2020 – 202",
    details: "Subjects: Physics, Chemistry, Mathematics.."
  },
  {
    title: "Secondary (X)",
    institution: "Oxford Public School, Gorakhpur",
    year: "2018 – 2020",
    details: "Strong foundation in Science & Mathematics."
  }
  
];

const timelineContainer = document.getElementById("timeline");

// Create timeline items (hidden initially)
educationData.forEach((edu) => {
  const item = document.createElement("div");
  item.className =
    "ml-6 opacity-0 translate-y-5 transition-all duration-700 ease-out";

  item.innerHTML = `
    <button onclick="toggleDetails(this)" 
      class="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800 focus:outline-none">
      ${edu.title}
      <i class="fas fa-chevron-down transition-transform duration-1000"></i>
    </button>
    <p class="text-gray-600">${edu.institution} | ${edu.year}</p>
    <div class="details max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-gray-700">
      <p class="mt-2">${edu.details}</p>
    </div>
  `;

  timelineContainer.appendChild(item);
});

// Toggle details with smooth expand/collapse
function toggleDetails(button) {
  const details = button.nextElementSibling.nextElementSibling;
  const icon = button.querySelector("i");

  if (details.classList.contains("max-h-0")) {
    details.classList.remove("max-h-0");
    details.classList.add("max-h-40"); // increase if content is longer
  } else {
    details.classList.add("max-h-0");
    details.classList.remove("max-h-40");
  }

  icon.classList.toggle("rotate-180");
}

// Animate items on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("opacity-0", "translate-y-5");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }, index * 200); // staggered animation
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.3 } // trigger when 30% of item is visible
);

// Observe all timeline items
document.querySelectorAll("#timeline > div").forEach((item) => {
  observer.observe(item);
});





document.addEventListener("alpine:init", () => {
  Alpine.data("portfolioApp", () => ({
    openProfile: false,
    openMenu: false,
    projects: [
      { 
        title: 'IoT Smart Home', 
        desc: 'Built a smart home automation system using Arduino, sensors, and IoT protocols.',
        img: 'iot.jpeg', 
        code: '#', 
        demo: '#'
      },
      { 
        title: 'Portfolio Website', 
        desc: 'Responsive personal portfolio website using Tailwind CSS and Alpine.js.',
        img: 'Portfolioo pic.png', 
        code: '#', 
        demo: '#'
      },
      { 
        title: 'DSC Website', 
        desc: 'Simulation of power system load flow and HV equipment analysis using MATLAB.',
        img: 'dsc web.png', 
        code: '#', 
        demo: '#'
      },
      
    ]
  }))
})




// Experience Data
const experiences = [
  {
    title: "Summer Internship",
    company: "UPPTCL (Uttar Pradesh Power Transmission Corporation Limited)",
    duration: "may 2025 - July 2025",
    points: [
      "Learn about Working, function and overall structure of the Substation.",
      "learn about switch gear and protections.",
      "Gain in hand experience of Power flow and stability."
    ]
  },
  {
    title: "Summer Internship",
    company: "NSS, MMMUT, Gorakhpur",
    duration: "June 2024 - July 2024",
    points: [
      "Went to middle school in the Malaviya Nagar Gorakhpur for teaching the students.",
      "There by we organised fun quizes.",
      "Along with this we also organised poster comptition and winner gets rewarded as well.."
    ]
  },
 
];

// Function to Render Experiences
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = experiences.map(exp => `
    <div class="relative pl-8">
      <!-- Marker -->
      <span class="absolute left-[-11px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></span>
      
      <!-- Card -->
      <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h4 class="text-xl font-bold text-gray-800">${exp.title}</h4>
        <p class="text-sm text-gray-500">${exp.company} | ${exp.duration}</p>
        <ul class="list-disc list-inside mt-3 text-gray-700 text-sm space-y-1">
          ${exp.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Call render function on page load
document.addEventListener("DOMContentLoaded", renderExperience);






const btn = document.getElementById('resumeBtn');
  const overlay = document.getElementById('resumeOverlay');
  const box = document.getElementById('resumeBox');
  const closeBtn = document.getElementById('closeBtn');

  // Open modal: compute transform-origin so it appears to grow from the button
  btn.addEventListener('click', () => {
    const bRect = btn.getBoundingClientRect();
    overlay.classList.remove('hidden');

    // Wait one frame so modal box has layout and we can compute its rect
    requestAnimationFrame(() => {
      const mRect = box.getBoundingClientRect();
      const originX = (bRect.left + bRect.width / 2) - mRect.left;
      const originY = (bRect.top + bRect.height / 2) - mRect.top;
      box.style.transformOrigin = `${originX}px ${originY}px`;

      // start small & transparent
      box.style.transform = 'scale(0.22)';
      box.style.opacity = '0';

      // force layout, then animate to full
      box.getBoundingClientRect();
      box.style.transform = 'scale(1)';
      box.style.opacity = '1';
    });
  });

  // Close helper: scale back to button point then hide overlay
  function closeModal() {
    const bRect = btn.getBoundingClientRect();
    const mRect = box.getBoundingClientRect();
    const originX = (bRect.left + bRect.width / 2) - mRect.left;
    const originY = (bRect.top + bRect.height / 2) - mRect.top;
    box.style.transformOrigin = `${originX}px ${originY}px`;

    // animate back
    box.style.transform = 'scale(0.22)';
    box.style.opacity = '0';

    // hide overlay after transition (match the JS transition duration above: 320ms)
    setTimeout(() => overlay.classList.add('hidden'), 340);
  }

  closeBtn.addEventListener('click', closeModal);

  // Click outside the box to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
  });