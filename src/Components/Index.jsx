
import React, { useEffect, useState } from 'react'
import "../App.css"

const Index = () => {

  const [Mode, setMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = Mode ? "dark" : "white";
  }, [Mode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header>
        <nav className="navbar">

          <h2>
            Nirmal J Behanan<span>.</span>
          </h2>

          {/* HAMBURGER MENU */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAVIGATION LINKS */}
          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>

            <ul>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#education" onClick={closeMenu}>Education</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            {/* DARK / LIGHT MODE */}
            <button
              className="theme-btn"
              onClick={() => setMode(!Mode)}
            >
              <i className={`fa-solid ${Mode ? 'fa-sun' : 'fa-moon'}`}></i>
              {Mode ? 'Light' : 'Dark'}
            </button>

          </div>

        </nav>
      </header>

      <main>

        {/* HOME */}
        <section className="hero section" id="home">

          <div className="hero-content">

            <p className="availability">
              <span></span> Available for opportunities
            </p>

            <h1>
              Hi, I'm Nirmal.<br />
              <span>I build web applications.</span>
            </h1>

            <p className="hero-description">
              MERN Stack Developer passionate about building
              responsive, user-friendly and scalable web applications
              using modern technologies.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View Projects
                <i className="fa-solid fa-arrow-down"></i>
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
                <i className="fa-solid fa-envelope"></i>
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/NirmalJBehanan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/nirmal-j-behanan/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

            </div>

          </div>

          {/* TERMINAL */}
          <div className="terminal">

            <div className="terminal-header">

              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>nirmal@developer:~</p>

            </div>

            <div className="terminal-content">

              <p className="terminal-command">
                ❯ cat profile.json
              </p>

              <pre>
                {`{
  "name": "Nirmal J Behanan",
  "role": "MERN Stack Developer",
  "frontend": "React.js",
  "backend": "Node.js, Express.js",
  "database": "MongoDB",
  "status": "Learning & Building"
}`}
              </pre>

              <p className="terminal-command">
                ❯ git status
              </p>

              <p className="terminal-status">
                Working on new ideas...
              </p>

            </div>

          </div>

        </section>


        {/* ABOUT */}
        <section className="section" id="about">

          <div className="section-heading">
            <span>01.</span>
            <h2>About Me</h2>
          </div>

          <div className="about-content">

            <div>

              <p>
                I'm a MERN Stack Developer interested in developing
                modern web applications. I enjoy learning new
                technologies and solving real-world problems through
                programming.
              </p>

              <p>
                I work with React.js, Node.js, Express.js and MongoDB
                to build full-stack applications. I'm continuously
                improving my development skills by working on
                practical projects.
              </p>

            </div>

            <div className="about-cards">

              <div className="info-card">
                <i className="fa-solid fa-code"></i>
                <h3>Clean Code</h3>
                <p>Writing simple and maintainable code.</p>
              </div>

              <div className="info-card">
                <i className="fa-solid fa-lightbulb"></i>
                <h3>Problem Solving</h3>
                <p>Enjoy solving programming challenges.</p>
              </div>

              <div className="info-card">
                <i className="fa-solid fa-book-open"></i>
                <h3>Continuous Learning</h3>
                <p>Always exploring new technologies.</p>
              </div>

              <div className="info-card">
                <i className="fa-solid fa-users"></i>
                <h3>Teamwork</h3>
                <p>Working together to build solutions.</p>
              </div>

            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section className="section" id="skills">

          <div className="section-heading">
            <span>02.</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-container">

            {/* FRONTEND */}
            <div className="skill-card">

              <h3>
                <i className="fa-solid fa-desktop"></i>
                Frontend
              </h3>

              <div className="skill-item">
                <h4>React.js</h4>
                <p>Components, Hooks, Redux Toolkit</p>
              </div>

              <div className="skill-item">
                <h4>JavaScript</h4>
                <p>ES6+, DOM, Async/Await</p>
              </div>

              <div className="skill-item">
                <h4>HTML & CSS</h4>
                <p>Responsive design, Flexbox, Grid</p>
              </div>

              <div className="skill-item">
                <h4>Bootstrap</h4>
                <p>Responsive UI development</p>
              </div>

            </div>


            {/* BACKEND */}
            <div className="skill-card">

              <h3>
                <i className="fa-solid fa-server"></i>
                Backend
              </h3>

              <div className="skill-item">
                <h4>Node.js</h4>
                <p>Server-side JavaScript</p>
              </div>

              <div className="skill-item">
                <h4>Express.js</h4>
                <p>REST APIs and Middleware</p>
              </div>

              <div className="skill-item">
                <h4>Authentication</h4>
                <p>JWT and bcrypt</p>
              </div>

              <div className="skill-item">
                <h4>API Integration</h4>
                <p>HTTP methods and Axios</p>
              </div>

            </div>


            {/* DATABASE */}
            <div className="skill-card">

              <h3>
                <i className="fa-solid fa-database"></i>
                Database & Tools
              </h3>

              <div className="skill-item">
                <h4>MongoDB</h4>
                <p>NoSQL database</p>
              </div>

              <div className="skill-item">
                <h4>Mongoose</h4>
                <p>Schema and data modeling</p>
              </div>

              <div className="skill-item">
                <h4>Git & GitHub</h4>
                <p>Version control</p>
              </div>

              <div className="skill-item">
                <h4>Postman</h4>
                <p>API testing</p>
              </div>

            </div>

          </div>

        </section>


        {/* PROJECTS */}
        <section className="section" id="projects">

          <div className="section-heading">
            <span>03.</span>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-container">

            <div className="project-card">

              <p className="project-type">
                Full Stack Application
              </p>

              <h3>Doctor Appointment Booking System</h3>

              <p>
                A web application that allows patients to find doctors,
                view available slots and book appointments online.
                Includes doctor and patient dashboards and payment
                integration.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Razorpay</span>
              </div>

              <a href="https://appoinmentsystem.netlify.app/" className="project-link">
                <i className="fa-brands fa-github"></i>
                Live Website
              </a>

            </div>

            <div className="project-card">

              <p className="project-type">Full Stack Application</p>

              <h3>Unique URL Shortener</h3>

              <p>
                Developed a URL Shortener that generates a unique,
                customized short URL for every long URL. Users can
                share the generated links, which redirect directly
                to their original destinations.
              </p>

              <div className="tech-stack">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>

              <a href="https://generate-short-urls.netlify.app/" className="project-link">
                <i className="fa-brands fa-github"></i>
                Live Website
              </a>

            </div>

            <div className="project-card">

              <p className="project-type">
                Management System
              </p>

              <h3>School Accounts Management System</h3>

              <p>
                A school management application designed to manage
                school accounts and related administrative activities
                using a role-based system.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>



            </div>

          </div>

        </section>


        {/* EDUCATION */}
        <section className="section" id="education">

          <div className="section-heading">
            <span>04.</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">

            <p className="project-type">Education</p>

            <h3>Bachelor's Degree</h3>

            <p>Computer Application</p>

            <p className="education-date">
              College Of Applied Science (IHRD) Adoor 2020 - 2023
            </p>

          </div>

          <div className="education-card">

            <p className="project-type">Education</p>

            <h3>Master's Degree</h3>

            <p>Computer Application</p>

            <p className="education-date">
              Amal Jyothi College of Engineering-Autonomous 2023 - 2025
            </p>

          </div>

        </section>


        {/* CONTACT */}
        <section className="section" id="contact">

          <div className="section-heading">
            <span>05.</span>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-content">

            <h3>Let's build something together.</h3>

            <p>
              Have an opportunity or a project idea?
              Feel free to connect with me.
            </p>

            <div className="contact-links">

              <a href="mailto:nirmalbehanan98@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                nirmalbehanan98@gmail.com
              </a>

              <a
                href="https://github.com/NirmalJBehanan"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nirmal-j-behanan/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Nirmal J Behanan. All Rights Reserved.</p>
      </footer>

    </>
  )
}

export default Index
