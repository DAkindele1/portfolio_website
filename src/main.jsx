import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BriefcaseBusiness, Download, Mail, Menu, X } from 'lucide-react';
import './styles.css';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

const skills = [
  { name: 'JavaScript', value: 88 },
  { name: 'Tailwind CSS', value: 86 },
  { name: 'Responsive UI', value: 84 },
  { name: 'Web accessibility', value: 86 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`side-nav ${menuOpen ? 'is-open' : ''}`}>
        <div className="brand-mark">
          <span>AD</span>
          <div>
            <strong>Akindele</strong>
            <small>Oluwasegun David</small>
          </div>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav aria-label="Main navigation">
          {navItems.map(([id, label], index) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <div className="side-footer">
          <div className="availability"><span /> Available for opportunities</div>
          <p>Based in Lagos, Nigeria</p>
        </div>
      </header>

      <main>
        <section className="hero section-grid" id="home">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Software developer intern <span>/</span> 2026</p>
            <h1>Building useful<br /><em>things</em> for the web.</h1>
            <p className="hero-intro">I am Akindele Oluwasegun David, a curious developer focused on thoughtful interfaces, clean code, and continuous learning.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://github.com/DAkindele1" target="_blank" rel="noreferrer">View my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Let's talk <span>-&gt;</span></a>
            </div>
          </div>
          <div className="hero-visual reveal-in" aria-label="Portrait of Akindele Oluwasegun David">
            <div className="visual-label">01 <span>Profile</span></div>
            <div className="visual-stamp">Curious<br /><strong>by nature</strong></div>
          </div>
          <div className="scroll-cue">Scroll to explore <span>v</span></div>
        </section>

        <section className="about section-grid content-section" id="about">
          <div className="section-index">02 <span>About me</span></div>
          <div className="section-content two-column">
            <div>
              <p className="eyebrow">A little about me</p>
              <h2>Good work starts<br />with <em>good questions.</em></h2>
            </div>
            <div className="about-text">
              <p className="lead">I am a 400-level student at Pan-Atlantic University with a genuine interest in the way design and technology can make everyday experiences clearer.</p>
              <p>My interests span web design, machine learning, and 3D animation. I bring integrity, team spirit, and creativity to every project, and I am always open to learning from the people around me.</p>
              <div className="fact-list">
                <div><strong>3.69</strong><span>Current GPA</span></div>
                <div><strong>400</strong><span>Level student</span></div>
                <div><strong>01</strong><span>Internship completed</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience content-section" id="experience">
          <div className="section-index">03 <span>Experience</span></div>
          <div className="section-content">
            <div className="section-heading-row"><div><p className="eyebrow">Where I have contributed</p><h2>Experience that<br /><em>keeps me moving.</em></h2></div><BriefcaseBusiness className="section-icon" size={44} strokeWidth={1} /></div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">Jul - Sep 2026</div>
                <div><h3>Frontend Engineer Intern</h3><p className="company">Fowgate LLC</p><p>Developed and maintained client-side features for web applications using JavaScript and Tailwind CSS. Collaborated with cross-functional teams to create responsive, accessible, and visually appealing interfaces.</p><div className="tag-row"><span>JavaScript</span><span>Tailwind CSS</span><span>Collaboration</span></div></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">Jan 2026 - present</div>
                <div><h3>Welfare Officer, Hostel</h3><p className="company">Pan-Atlantic University</p><p>Help maintain hostel standards and equipment while supporting the overall well-being of hostel residents. A role built around responsibility, communication, and care.</p><div className="tag-row"><span>Leadership</span><span>Communication</span><span>Community</span></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="skills section-grid content-section" id="skills">
          <div className="section-index">04 <span>Capabilities</span></div>
          <div className="section-content two-column">
            <div><p className="eyebrow">What I bring</p><h2>Tools are useful.<br /><em>Curiosity is better.</em></h2><p className="skills-note">A growing toolkit shaped by hands-on projects, teamwork, and a habit of asking how things could work better.</p></div>
            <div className="skills-list">{skills.map((skill) => <div className="skill" key={skill.name}><div><span>{skill.name}</span><b>{skill.value}%</b></div><div className="skill-track"><span style={{ width: `${skill.value}%` }} /></div></div>)}<div className="interest-cloud"><span>Machine learning</span><span>3D animation</span><span>Web design</span><span>Reading</span><span>Teamwork</span></div></div>
          </div>
        </section>

        <section className="contact content-section" id="contact">
          <div className="section-index">05 <span>Contact</span></div>
          <div className="contact-content"><p className="eyebrow">Have a project in mind?</p><h2>Let's make something<br /><em>worth talking about.</em></h2><a className="contact-email" href="mailto:akindeledavid976@gmail.com">akindeledavid976@gmail.com <ArrowUpRight size={23} /></a><div className="contact-meta"><a href="tel:+2348146346913">0814 634 6913</a><span>Lagos, Nigeria</span><a href="#home">Back to top ↑</a></div></div>
        </section>
      </main>
      <footer><span>© 2026 Akindele Oluwasegun David</span><span>Designed & built with intention.</span><div className="socials"><a aria-label="Email" href="mailto:akindeledavid976@gmail.com"><Mail size={17} /></a><a aria-label="Download CV" href="/AKINDELE%20OLUWASEGUN%20updated.docx" download="Akindele-Oluwasegun-David-CV.docx"><Download size={17} /></a></div></footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
