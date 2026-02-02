import React, { useEffect } from 'react';
import { Download } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="page-container container reveal fade-up">
      <div className="about-header text-center">
        <h1 className="hero-title">About <span className="text-highlight">Me</span></h1>
        <p className="hero-subtitle mx-auto">Bridging the gap between data-driven technical expertise and impactful business strategies.</p>
      </div>

      <div className="about-content-grid">
        <div className="about-main-card reveal fade-left">
          <h3 className="section-title-small">Who am I?</h3>
          <p>I am Dharshini E, an AI and Data Science undergraduate driven by a passion for data, design, and innovation. I love turning raw data into meaningful insights and shaping them into user-friendly, visually compelling experiences through Python, SQL, modern analytics tools, UI/UX, and graphic design.</p>
          <p>With hands-on experience in real-world projects and fast-paced startup environments, I bring a unique blend of analytical thinking, creativity, and communication skills, and I’m excited to create impactful solutions across data, AI, product, and design-focused roles.</p>
          <div className="about-buttons" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href="/#works" className="btn btn-primary" style={{ backgroundColor: '#a855f7', color: 'white', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>My Project</a>
            <a href="/cv.pdf" download className="btn btn-secondary" style={{ border: '1px solid #a855f7', color: '#a855f7', padding: '11px 29px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent' }}>
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        <div className="about-side-details">
          <div className="detail-card reveal fade-right" style={{ animationDelay: '0.2s' }}>
            <h4 className="detail-title">My Mission</h4>
            <p>To empower organizations through data-driven decisions and innovative AI solutions that drive sustainable growth.</p>
          </div>
          <div className="detail-card reveal fade-right" style={{ animationDelay: '0.4s' }}>
            <h4 className="detail-title">My Vision</h4>
            <p>To lead at the intersection of technology and business, creating a future where data is the ultimate driver of success.</p>
          </div>
        </div>
      </div>

      <style>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .about-header {
          margin-bottom: 80px;
        }

        .about-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
        }

        .about-main-card {
          background: white;
          padding: 60px;
          border-radius: 30px;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section-title-small {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-dark);
        }

        .about-side-details {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .detail-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .detail-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--primary-purple);
          margin-bottom: 16px;
        }

        @media (max-width: 991px) {
          .about-content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
