import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Download, Facebook, Dribbble, Instagram } from 'lucide-react';
import GradientText from '../components/GradientText';
import LogoLoop from '../components/LogoLoop';
import Lightning from '../components/Lightning';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const skillLogos = [
    { src: 'https://cdn.simpleicons.org/python' },
    { src: 'https://cdn.simpleicons.org/sqlite' }, // SQL usually represented by SQLite/PostgreSQL
    { src: 'https://cdn.simpleicons.org/mysql' },
    { src: 'https://cdn.simpleicons.org/microsoft-excel' },
    { src: 'https://cdn.simpleicons.org/powerbi' },
    { src: 'https://cdn.simpleicons.org/tableau' },
    { src: 'https://cdn.simpleicons.org/streamlit' },
    { src: 'https://cdn.simpleicons.org/figma' },
    { src: 'https://cdn.simpleicons.org/canva' },
    { src: 'https://cdn.simpleicons.org/googlesheets' },
    { src: 'https://cdn.simpleicons.org/googleslides' },
    { src: 'https://cdn.simpleicons.org/matplotlib' }
  ];

  return (
    <div className="page-content">
      {/* Background Splash Blobs */}
      <div className="background-splashes" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <div className="blob" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, #d8b4fe 0%, rgba(255,255,255,0) 70%)', animationDelay: '0s' }}></div>
        <div className="blob" style={{ top: '40%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, #c084fc 0%, rgba(255,255,255,0) 70%)', animationDelay: '2s' }}></div>
        <div className="blob" style={{ bottom: '10%', left: '20%', width: '350px', height: '350px', background: 'radial-gradient(circle, #e9d5ff 0%, rgba(255,255,255,0) 70%)', animationDelay: '4s' }}></div>
      </div>

      {/* HERO */}
      <section className="hero" id="home" style={{ padding: '120px 0 60px', textAlign: 'center' }}>
        <GradientText
          colors={["#a855f7", "#9333ea", "#7e22ce"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h1 style={{ fontSize: '56px', fontWeight: '800', margin: 0 }}>Hello, I'm Dharshini E</h1>
        </GradientText>
        <p style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '18px', color: '#555', lineHeight: '1.8' }}>Crafting intuitive digital experiences powered by data and AI, I transform complex insights into clean, human-centered designs. By connecting business understanding with thoughtful UI/UX and visual storytelling, I create solutions that are purposeful, precise, and impactful—turning ideas into experiences that inform, engage, and inspire.</p>
        <a href="#contact" className="btn animate-float" style={{ boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)' }}>Say Hello</a>
      </section>

      {/* ABOUT ME */}
      <section id="about">
        <div className="container">
          <div className="about-card glass-card" style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2>About Me</h2>
            <p>I am Dharshini E, an AI & Data Science technologist passionate about bridging the gap between raw data and impactful design. I specialize in transforming complex datasets into clear, actionable insights while crafting intuitive digital experiences. My expertise spans Python-driven analytics, machine learning application development, and modern UI/UX design.</p>
            <p>Driven by innovation and efficient problem-solving, I thrive in environments that challenge me to build solutions which are not only functional but also visually compelling and user-centric. I am ready to bring a unique dual-lens perspective—analytical yet creative—to ambitious product and data teams.</p>

            <div className="about-buttons" style={{ marginTop: '10px', display: 'flex', gap: '20px' }}>
              <a href="#works" className="btn animate-float">View My Work</a>
              <a href="/images/resume.pdf" download className="btn btn-secondary" style={{ border: '2px solid #a855f7', color: '#a855f7', padding: '12px 30px', borderRadius: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent' }}>
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & EXPERIENCE */}
      <section id="skills">
        <div className="container">
          <div className="skills-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
            <div className="skills-left">
              <h2>Skills & Experience</h2>
              <p>A comprehensive toolkit combining technical prowess in Data Science with creative excellence in Design.</p>
              <p>I build systems that think with AI and feel human with great UX.</p>
            </div>

            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="skill-card glass-card" style={{ padding: '30px' }}>
                <div style={{ fontSize: '40px', color: '#a855f7', fontWeight: 'bold', opacity: 0.2, marginBottom: '10px' }}>01</div>
                <h4>Technical Mastery</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Python, SQL, C++, Power BI, Machine Learning</p>
              </div>
              <div className="skill-card glass-card" style={{ padding: '30px' }}>
                <div style={{ fontSize: '40px', color: '#9333ea', fontWeight: 'bold', opacity: 0.2, marginBottom: '10px' }}>02</div>
                <h4>Creative Design</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Figma UI/UX, Canva Branding, Graphic Design</p>
              </div>
              <div className="skill-card glass-card" style={{ padding: '30px' }}>
                <div style={{ fontSize: '40px', color: '#a855f7', fontWeight: 'bold', opacity: 0.2, marginBottom: '10px' }}>03</div>
                <h4>Education</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>B.Tech AI & DS @ HITS<br />CGPA: 8.78</p>
              </div>
              <div className="skill-card glass-card" style={{ padding: '30px' }}>
                <div style={{ fontSize: '40px', color: '#9333ea', fontWeight: 'bold', opacity: 0.2, marginBottom: '10px' }}>04</div>
                <h4>Experience</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Operations & Creative Intern<br />@ Rhapsodic Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS MARQUEE */}
      <section className="tools-marquee" style={{ padding: '60px 0', background: 'rgba(168, 85, 247, 0.02)', margin: '20px 0' }}>
        <LogoLoop
          logos={skillLogos}
          speed={100}
          logoHeight={60}
          gap={40}
          pauseOnHover={true}
          fadeOut={true}
        />
      </section>

      {/* WHAT I DO */}
      <section id="services" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', background: '#ffffff' }}>
        <Lightning hue={280} speed={0.6} intensity={0.8} size={1.0} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="what-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
            <div>
              <h2>What I Do</h2>
              <p>I operate at the intersection of <strong>Technology</strong>, <strong>Data</strong>, and <strong>Design</strong>. My goal is to build digital products that are not just intelligent but also intuitive and delightful to use.</p>
            </div>
            <div style={{ display: 'grid', gap: '30px', position: 'relative', zIndex: 12 }}>
              <div className="what-card glass-box" style={{
                padding: '50px',
                display: 'flex',
                gap: '30px',
                alignItems: 'flex-start',
                backdropFilter: 'blur(30px) saturate(130%)',
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '32px',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(124, 58, 237, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.05)';
                }}>
                <h4 style={{ minWidth: '200px', color: '#7c3aed', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>Data & AI Solutions</h4>
                <p style={{ margin: 0, fontSize: '1.15rem', color: '#1a1a2e', lineHeight: '1.8', fontWeight: '500' }}>Leveraging Python and SQL to unlock actionable insights, creating predictive models, and building data-driven applications that solve real business problems.</p>
              </div>
              <div className="what-card glass-box" style={{
                padding: '50px',
                display: 'flex',
                gap: '30px',
                alignItems: 'flex-start',
                backdropFilter: 'blur(30px) saturate(130%)',
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '32px',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(124, 58, 237, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.05)';
                }}>
                <h4 style={{ minWidth: '200px', color: '#9333ea', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>UI/UX Design</h4>
                <p style={{ margin: 0, fontSize: '1.15rem', color: '#1a1a2e', lineHeight: '1.8', fontWeight: '500' }}>Translating complex requirements into seamless, beautiful user journeys. I use Figma to prototype and validate designs that users love.</p>
              </div>
              <div className="what-card glass-box" style={{
                padding: '50px',
                display: 'flex',
                gap: '30px',
                alignItems: 'flex-start',
                backdropFilter: 'blur(30px) saturate(130%)',
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '32px',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(124, 58, 237, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.05)';
                }}>
                <h4 style={{ minWidth: '200px', color: '#7c3aed', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>Product Strategy</h4>
                <p style={{ margin: 0, fontSize: '1.15rem', color: '#1a1a2e', lineHeight: '1.8', fontWeight: '500' }}>Bridging the gap between engineering and business goals. I help streamline operations and ensure product visions are executed effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio-grid">
          {/* 1. Packaging Design */}
          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/mango-juice.png" alt="Packaging Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>Packaging Design</h3>
              <p>Innovative & sustainable packaging solutions.</p>
              <button onClick={() => setSelectedProject('packaging')} className="case-study-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit', textDecoration: 'underline' }}>View Project →</button>
            </div>
          </div>

          {/* 2. Posters */}
          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/hits-ai-summit.jpg" alt="HITS AI Summit Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>Posters</h3>
              <p>Creative and impactful poster designs for events and branding campaigns.</p>
              <a href="/posters.pdf" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Project →</a>
            </div>
          </div>

          {/* 3. Logos */}
          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/graced-logo-simple.jpg" alt="Logo Designs" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>Logos</h3>
              <p>Distinctive and memorable logo identities tailored for modern brands.</p>
              <button onClick={() => setSelectedProject('logos')} className="case-study-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit', textDecoration: 'underline' }}>View Project →</button>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/webapp.png" alt="WebApp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>WebApp</h3>
              <p>Functional and user-centric web applications built for performance and scale.</p>
              <a href="https://github.com/dharshini181" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Project →</a>
            </div>
          </div>

          {/* 5. Website */}
          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/portfolio-design.png" alt="Portfolio Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>Portfolio Design</h3>
              <p>Modern, responsive websites proving mastery in UI/UX and frontend development.</p>
              <a href="https://portfolio-dharshan.vercel.app/" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Project →</a>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-image">
              <img src="/images/figma-design.png" alt="Figma Prototypes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="portfolio-content">
              <h3>Figma</h3>
              <p>High-fidelity prototypes and design systems created with precision in Figma.</p>
              <a href="https://share.google/xRQliVbvwCnhktRJH" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Project →</a>
            </div>
          </div>
        </div>

        <div className="view-all-btn">
          <Link to="/projects" className="btn">View All</Link>
        </div>
      </section >

      {/* PURPLE PROJECT BOX */}
      < section className="project-cta animate-gradient" style={{ background: 'linear-gradient(45deg, #a855f7, #9333ea, #7e22ce)', backgroundSize: '200% 200%', color: 'white', padding: '30px 20px', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '10px', fontWeight: '800' }}>Do you have a Project Idea?</h2>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>Let's discuss your project!</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>We transform your ideas into reality with cutting-edge technology and design.</p>
        <a href="#contact" style={{ backgroundColor: 'white', color: '#9333ea', padding: '16px 40px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', transition: 'transform 0.3s' }} className="animate-float">
          Let's work Together →
        </a>
      </section >

      {/* CONTACT */}
      < section id="contact" style={{ padding: '60px 0', position: 'relative' }}>
        <div className="contact-box glass-card" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start', padding: '40px' }}>

          {/* Left Column: Info */}
          <div className="contact-info">
            <h2 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Inter, sans-serif', color: '#1a1a2e', marginBottom: '15px' }}>Let's work together!</h2>
            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6', fontSize: '15px' }}>I'm available for freelance work. Connect with me via email at: <strong style={{ color: '#333' }}>dhar1812007@gmail.com</strong></p>

            <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.linkedin.com/in/dharshini-e-designer" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#0077b5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'transform 0.3s' }}>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/dharshini181" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#333', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'transform 0.3s' }}>
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form">
            <form style={{ display: 'grid', gap: '20px' }}>
              <input type="text" placeholder="Name*" style={{ padding: '12px 0', border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', outline: 'none', width: '100%', backgroundColor: 'transparent', fontSize: '15px' }} />
              <input type="email" placeholder="Email*" style={{ padding: '12px 0', border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', outline: 'none', width: '100%', backgroundColor: 'transparent', fontSize: '15px' }} />
              <input type="text" placeholder="Subject*" style={{ padding: '12px 0', border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', outline: 'none', width: '100%', backgroundColor: 'transparent', fontSize: '15px' }} />
              <textarea placeholder="Message*" style={{ padding: '12px 0', border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', outline: 'none', width: '100%', minHeight: '80px', resize: 'vertical', backgroundColor: 'transparent', fontSize: '15px' }}></textarea>

              <button type="submit" style={{ justifySelf: 'start', backgroundColor: '#a855f7', color: 'white', padding: '12px 35px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.39)', marginTop: '10px' }}>
                Submit <span style={{ fontSize: '16px' }}>➤</span>
              </button>
            </form>
          </div>

        </div>
      </section >

      {/* Modal for Projects */}
      {
        selectedProject && (
          <div className="project-modal" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }} onClick={() => setSelectedProject(null)}>
            <div className="modal-content" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#333' }}>✕</button>

              {selectedProject === 'packaging' && (
                <div>
                  <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#a855f7', fontWeight: 'bold' }}>Packaging Design Projects</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Mango Juice</h3>
                      <img src="/images/mango-juice.png" alt="Mango Juice Packaging" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Snapz</h3>
                      <img src="/images/snapz.png" alt="Snapz Packaging" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                  </div>
                </div>
              )}

              {selectedProject === 'logos' && (
                <div>
                  <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#a855f7', fontWeight: 'bold', textAlign: 'center' }}>Identity & Logo Design</h2>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Graced Branding</h3>
                      <img src="/images/graced-branding.jpg" alt="Graced Branding" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Femura Logo</h3>
                      <img src="/images/femura-logo.png" alt="Femura Logo" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <a href="/logo.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#a855f7', color: 'white', padding: '12px 40px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.35)', fontSize: '16px' }}>View Full Logo Portfolio PDF →</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      }

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#a855f7', color: 'white', padding: '40px 0', marginTop: '0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', flexWrap: 'wrap', gap: '20px' }}>
          {/* No Logo as per request */}
          <div style={{ display: 'block' }}></div>

          <div style={{ display: 'flex', gap: '30px', fontSize: '14px', flexGrow: 1, justifyContent: 'center' }}>
            <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="#works" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>

          <div style={{ fontSize: '14px', opacity: '0.8' }}>
            Copyright © 2026 Dharshini E.
          </div>
        </div>
      </footer>
    </div >
  );
};

export default Home;
