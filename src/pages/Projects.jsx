import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-content" style={{ paddingBottom: '100px', background: '#f7f8fc', minHeight: '100vh' }}>
      {/* Background Splash Blobs */}
      <div className="background-splashes" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <div className="blob" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, #d8b4fe 0%, rgba(255,255,255,0) 70%)', animationDelay: '0s' }}></div>
        <div className="blob" style={{ top: '40%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, #c084fc 0%, rgba(255,255,255,0) 70%)', animationDelay: '2s' }}></div>
      </div>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '60px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7', fontWeight: '600' }}>
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h1 className="section-title" style={{ margin: 0 }}>My Portfolio</h1>
            <div style={{ width: '100px' }}></div> {/* Spacer for alignment */}
          </div>

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

            {/* 4. WebApp */}
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

            {/* 6. Figma */}
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
        </div>
      </section>

      {/* Modal for Projects */}
      {selectedProject && (
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
      )}
    </div>
  );
};

export default Projects;
