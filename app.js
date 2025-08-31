// Portfolio JavaScript functionality

// Project data
const projectsData = [
  {
    name: "Sales Insight Engine - AI-Powered Data Analytics Dashboard",
    description: "Autonomous FMCG Data Analysis with Multi-Agent AI System using CrewAI, featuring AI Feature Selection, Data Classification, and Business Analyst agents",
    tech: ["Python", "FastAPI", "CrewAI", "Mistral LLM", "Chart.js", "Pandas"],
    github: "https://github.com/Rohit-Chatterjee08/sales-insight-engine",
    demo: "https://sales-insight-engine-47gu.onrender.com/",
    status: "✅ Running",
    category: "Agentic AI"
  },
  {
    name: "Agentic AI Product Recommendation System",
    description: "Full-Stack Agentic AI Application with MCP server orchestration, integrating OpenAI, HuggingFace, and Gemini APIs",
    tech: ["TypeScript", "Node.js", "MongoDB Atlas", "Next.js", "TailwindCSS"],
    github: "https://github.com/Rohit-Chatterjee08/product-recommendation-agentic",
    status: "Latest Project",
    category: "Agentic AI"
  },
  {
    name: "Annam AI - Agricultural Intelligence System", 
    description: "Comprehensive AI solution with crop classification, yield prediction, disease detection, and agricultural advisory using modern ML/DL models",
    tech: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker", "Streamlit"],
    github: "https://github.com/Rohit-Chatterjee08/annam_ai",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/annam_ai",
    category: "Agricultural AI"
  },
  {
    name: "Social Media Sentiment Analyzer",
    description: "Real-time sentiment analysis using state-of-the-art DistilBERT transformer models with decoupled architecture",
    tech: ["Python", "DistilBERT", "FastAPI", "Gradio", "Docker"],
    github: "https://github.com/Rohit-Chatterjee08/social-media-sentiment",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/social-media-sentiment",
    status: "✅ Running",
    category: "NLP"
  },
  {
    name: "Customer Segmentation System",
    description: "Cloud-native ML application using K-Means clustering deployed on Google Cloud Run for customer analytics",
    tech: ["Python", "K-Means", "FastAPI", "Google Cloud Run", "Gradio"],
    github: "https://github.com/Rohit-Chatterjee08/customer-segmentation",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/customer-segmentation-ui", 
    status: "✅ Running",
    category: "Machine Learning"
  },
  {
    name: "Fraud Detection Terminal",
    description: "Advanced financial fraud detection system using LightGBM with extreme imbalance handling techniques",
    tech: ["Python", "LightGBM", "Random Under-sampling", "Gradio"],
    github: "https://github.com/Rohit-Chatterjee08/fraud-detection",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/fraud-detection-terminal",
    category: "Financial AI"
  },
  {
    name: "Data Analysis Chatbot", 
    description: "AI-powered conversational interface for data visualization and analysis with dataset upload capabilities",
    tech: ["Python", "LLMs", "Data Visualization", "Gradio"],
    github: "https://github.com/Rohit-Chatterjee08/data-analysis-chatbot",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/data-analysis-chatbot",
    status: "✅ Running", 
    category: "Data Science"
  },
  {
    name: "Financial AI Suite",
    description: "Complete financial management ecosystem with 5 specialized applications for budget analysis, expense management, and investment optimization",
    tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
    components: ["Budget Variance", "Expense Categorization", "Cash Flow Forecasting", "Investment Optimizer", "Credit Risk Assessment"],
    category: "Financial AI"
  },
  {
    name: "Empathetic Code Reviewer",
    description: "AI-enhanced developer experience tool that transforms critical feedback into supportive, educational guidance",
    tech: ["Python", "Large Language Models", "Gradio"],
    github: "https://github.com/Rohit-Chatterjee08/empathetic-code-reviewer",
    demo: "https://huggingface.co/spaces/chatterjeerohit08/empathetic-code-reviewer",
    category: "Developer Tools"
  }
];

// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopButton = document.getElementById('back-to-top');
const projectsGrid = document.getElementById('projects-grid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeBackToTop();
  initializeProjects();
  initializeCounters();
  initializeScrollAnimations();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });
}

// Back to top button functionality
function initializeBackToTop() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize projects section
function initializeProjects() {
  renderProjects(projectsData);
}

// Render project cards
function renderProjects(projects) {
  projectsGrid.innerHTML = '';
  
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

// Create individual project card - simplified to let browser handle external links naturally
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const statusBadge = project.status ? `<div class="project-status"><span class="status status--success">${project.status}</span></div>` : '';
  
  const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
  
  const componentsSection = project.components ? 
    `<div class="project-components">
      <strong>Components:</strong> ${project.components.join(', ')}
    </div>` : '';
  
  const demoLink = project.demo ? 
    `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link project-link--demo">
      <span>🚀</span> Live Demo
    </a>` : '';
  
  const githubLink = project.github ? 
    `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link--github">
      <span>💻</span> GitHub
    </a>` : '';
  
  card.innerHTML = `
    <div class="project-header">
      ${statusBadge}
      <h3 class="project-title">${project.name}</h3>
      <p class="project-description">${project.description}</p>
      ${componentsSection}
      <div class="project-tech">
        ${techTags}
      </div>
      <div class="project-links">
        ${demoLink}
        ${githubLink}
      </div>
    </div>
  `;
  
  return card;
}

// Initialize animated counters
function initializeCounters() {
  const counters = document.querySelectorAll('.achievement-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Animate counter to target value
function animateCounter(element, target) {
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60 FPS
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (target > 10 ? '+' : '');
    } else {
      element.textContent = Math.floor(current) + (target > 10 ? '+' : '');
      requestAnimationFrame(updateCounter);
    }
  };
  
  updateCounter();
}

// Initialize scroll animations
function initializeScrollAnimations() {
  // Add fade-in animations to elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .achievement-card, .contact-item, .about-content, .hero-content'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// Smooth scrolling for navigation links (internal links only)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Handle form submissions (if contact form is added later)
function handleContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Handle form submission
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
}

// Utility function to debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink();
}, 10);

// Replace the direct scroll event listener with debounced version
window.removeEventListener('scroll', updateActiveNavLink);
window.addEventListener('scroll', debouncedScrollHandler);

// Handle page visibility changes (pause/resume animations when tab is not active)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause animations when tab is not visible
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations when tab becomes visible
    document.body.style.animationPlayState = 'running';
  }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Handle Escape key to close mobile menu
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
  
  // Handle Enter key on back-to-top button
  if (e.key === 'Enter' && document.activeElement === backToTopButton) {
    backToTopButton.click();
  }
});

// Add focus management for accessibility
function initializeAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.className = 'sr-only';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '0';
  skipLink.style.left = '0';
  skipLink.style.zIndex = '9999';
  
  skipLink.addEventListener('focus', function() {
    this.classList.remove('sr-only');
    this.style.position = 'fixed';
    this.style.top = '10px';
    this.style.left = '10px';
    this.style.background = 'var(--color-primary)';
    this.style.color = 'white';
    this.style.padding = '8px 16px';
    this.style.borderRadius = '4px';
    this.style.textDecoration = 'none';
  });
  
  skipLink.addEventListener('blur', function() {
    this.classList.add('sr-only');
    this.style.position = 'absolute';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
initializeAccessibility();

// Performance optimization: Lazy load project cards
function lazyLoadProjects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        // Add any heavy content loading here
        observer.unobserve(card);
      }
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}

// Theme detection and handling
function handleThemePreference() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Listen for theme changes
  prefersDark.addEventListener('change', (e) => {
    // Handle theme change if needed
    console.log('Theme preference changed:', e.matches ? 'dark' : 'light');
  });
}

// Initialize theme handling
handleThemePreference();

// Export functions for testing purposes (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    projectsData,
    createProjectCard,
    animateCounter,
    debounce
  };
}
