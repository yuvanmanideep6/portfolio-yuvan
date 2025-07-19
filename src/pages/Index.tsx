import { useEffect } from 'react';
const profilePhoto = '/lovable-uploads/cb90b1cc-863c-497b-9eb6-4376382274cf.png';
import project1Image from '@/assets/project1-fotofam.jpg';
import project2Image from '@/assets/project2-weather.jpg';
import project3Image from '@/assets/project3-taskmanager.jpg';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.add('visible');
      } else {
        backToTopButton?.classList.remove('visible');
      }

      // Fade in animation on scroll
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Form validation
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    };

    // Add event listeners
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Typewriter effect
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
      const text = "Web Developer | Tech Enthusiast";
      let i = 0;
      const typeSpeed = 100;
      
      const typeWriter = () => {
        if (i < text.length) {
          typewriterElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, typeSpeed);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
      if (contactForm) {
        contactForm.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  return (
    <div className="portfolio-website">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg)), hsl(var(--darker-bg)))' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" style={{ color: 'hsl(var(--main-red))' }}>
            YMB
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-vh-100 d-flex align-items-center position-relative"
        style={{ 
          background: 'linear-gradient(135deg, hsl(var(--dark-bg)), hsl(var(--darker-bg)))',
          overflow: 'hidden'
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="hero-title text-white mb-4 fade-in-up">
                Yuvan Manideep<br />
                <span style={{ color: 'hsl(var(--main-red))' }}>Bheemavarapu</span>
              </h1>
              <div className="h4 text-light mb-5">
                <span className="typewriter-text"></span>
                <span className="typewriter-cursor" style={{ color: 'hsl(var(--main-red))' }}>|</span>
              </div>
              <div className="fade-in-up">
                <a href="#projects" className="btn btn-portfolio-primary me-3">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-portfolio-outline">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="position-absolute" style={{ 
          top: '20%', 
          right: '10%', 
          width: '100px', 
          height: '100px', 
          background: 'hsl(var(--main-red) / 0.1)', 
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{ 
          bottom: '20%', 
          left: '10%', 
          width: '80px', 
          height: '80px', 
          background: 'hsl(var(--accent-red) / 0.1)', 
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="portfolio-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-center">
                <img 
                  src={profilePhoto} 
                  alt="Yuvan Manideep Bheemavarapu" 
                  className="img-fluid rounded-circle mb-4"
                  style={{ 
                    width: '300px', 
                    height: '300px', 
                    objectFit: 'cover',
                    border: `4px solid hsl(var(--main-red))`,
                    boxShadow: 'var(--shadow-red-glow)'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fade-in-up">
                <h2 className="section-title mb-4" style={{ color: 'hsl(var(--main-red))' }}>
                  About Me
                </h2>
                <p className="lead text-light mb-4">
                  I'm a passionate web developer with a keen eye for creating modern, responsive, and user-friendly websites. 
                  My expertise spans across front-end technologies, and I love bringing creative ideas to life through code.
                </p>
                <p className="text-light mb-4">
                  With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I strive to deliver 
                  high-quality solutions that not only look great but also provide exceptional user experiences.
                </p>
                <div className="d-flex gap-3">
                  <a href="#contact" className="btn btn-portfolio-primary">
                    Hire Me
                  </a>
                  <a href="#projects" className="btn btn-portfolio-outline">
                    My Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="portfolio-section" style={{ background: 'hsl(var(--darker-bg))' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fade-in-up" style={{ color: 'hsl(var(--main-red))' }}>
              My Projects
            </h2>
            <p className="lead text-light fade-in-up">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-card fade-in-up">
                <img 
                  src={project1Image} 
                  alt="FotoFam" 
                  className="img-fluid rounded mb-3"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="text-white mb-3">FotoFam</h4>
                <p className="text-light mb-4">
                  A family photo-sharing app that allows families to share memories under one unified account with secure access.
                </p>
                <div className="d-flex gap-2">
                  <a href="https://github.com" className="btn btn-sm btn-portfolio-outline">
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                  <a href="#" className="btn btn-sm btn-portfolio-primary">
                    <i className="fas fa-external-link-alt me-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-card fade-in-up">
                <img 
                  src={project2Image} 
                  alt="Weather App" 
                  className="img-fluid rounded mb-3"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="text-white mb-3">Weather App</h4>
                <p className="text-light mb-4">
                  A responsive weather application with location-based forecasts and beautiful UI animations.
                </p>
                <div className="d-flex gap-2">
                  <a href="https://github.com" className="btn btn-sm btn-portfolio-outline">
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                  <a href="#" className="btn btn-sm btn-portfolio-primary">
                    <i className="fas fa-external-link-alt me-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-card fade-in-up">
                <img 
                  src={project3Image} 
                  alt="Task Manager" 
                  className="img-fluid rounded mb-3"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <h4 className="text-white mb-3">Task Manager</h4>
                <p className="text-light mb-4">
                  A productivity app for managing tasks and projects with drag-and-drop functionality.
                </p>
                <div className="d-flex gap-2">
                  <a href="https://github.com" className="btn btn-sm btn-portfolio-outline">
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                  <a href="#" className="btn btn-sm btn-portfolio-primary">
                    <i className="fas fa-external-link-alt me-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="portfolio-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fade-in-up" style={{ color: 'hsl(var(--main-red))' }}>
              My Skills
            </h2>
            <p className="lead text-light fade-in-up">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-html5 display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">HTML5</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-css3-alt display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">CSS3</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-js-square display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">JavaScript</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-bootstrap display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">Bootstrap</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-react display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">React</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-node-js display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">Node.js</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fab fa-git-alt display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">Git</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="text-center portfolio-card fade-in-up">
                <i className="fas fa-database display-4 mb-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                <h5 className="text-white">Database</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section" style={{ background: 'hsl(var(--darker-bg))' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fade-in-up" style={{ color: 'hsl(var(--main-red))' }}>
              Get In Touch
            </h2>
            <p className="lead text-light fade-in-up">
              Let's work together on your next project
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="portfolio-card fade-in-up">
                <form id="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-light">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        required
                        style={{ 
                          background: 'hsl(var(--input))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'white' 
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-light">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                        required
                        style={{ 
                          background: 'hsl(var(--input))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'white' 
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label text-light">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        name="message"
                        rows={5}
                        required
                        style={{ 
                          background: 'hsl(var(--input))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'white' 
                        }}
                      />
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-portfolio-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="text-center mt-5">
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="fas fa-envelope me-3" style={{ color: 'hsl(var(--main-red))' }}></i>
                      <span className="text-light">yuvanmanideep6@gmail.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="social-links mt-4">
                  <a href="https://github.com" className="btn btn-portfolio-outline me-3">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" className="btn btn-portfolio-outline me-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://instagram.com" className="btn btn-portfolio-outline">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center" style={{ background: 'hsl(var(--dark-bg))' }}>
        <div className="container">
          <p className="text-light mb-0">
            © 2024 Yuvan Manideep Bheemavarapu. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .typewriter-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .form-control:focus {
          border-color: hsl(var(--main-red)) !important;
          box-shadow: 0 0 0 0.2rem hsl(var(--main-red) / 0.25) !important;
        }

        .nav-link:hover {
          color: hsl(var(--main-red)) !important;
        }

        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

export default Index;
