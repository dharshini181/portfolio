import React, { useEffect } from 'react';
import { Palette, Package, Layout, Github, ExternalLink } from 'lucide-react';

const FeaturedWorks = () => {
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

  const works = [
    {
      title: "Canva Poster Designs",
      icon: <Palette size={32} />,
      description: "A curated collection of Canva posters designed for branding, promotions, events, and social media. Focus on clean layouts and color balance.",
      meta: "10+ Posters",
      tool: "Canva"
    },
    {
      title: "Package Designing",
      icon: <Package size={32} />,
      description: "Package design concepts focusing on product visibility, brand identity, and premium visual presentation.",
      meta: "2 Major Designs",
      tool: "Canva"
    },
    {
      title: "UI/UX Designs",
      icon: <Layout size={32} />,
      description: "User-centric design solutions including wireframes, user flows, and high-fidelity prototypes in Figma.",
      link: "https://www.figma.com/@dharshinie",
      linkText: "Figma Profile",
      tool: "Figma"
    },
    {
      title: "GitHub Projects",
      icon: <Github size={32} />,
      description: "Core technical projects involving AI, Data Science, and Python application development.",
      link: "https://github.com/dharshinie",
      linkText: "GitHub Profile",
      tool: "GitHub"
    }
  ];

  return (
    <div className="page-container container">
      <div className="works-header reveal fade-up">
        <h1 className="hero-title">Selected <span className="text-highlight">Works</span></h1>
        <p className="hero-subtitle">A collection of projects where strategy meets creativity.</p>
      </div>

      <div className="works-grid">
        {works.map((work, index) => (
          <div key={index} className="pro-work-card reveal fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className={`pro-icon-box ${index % 2 === 0 ? 'purple' : 'light-purple'}`}>
              {work.icon}
            </div>
            <div className="pro-work-content">
              <h3 className="pro-work-title">{work.title}</h3>
              <p className="pro-work-desc">{work.description}</p>

              <div className="pro-work-footer">
                <div className="pro-tags">
                  {work.meta && <span className="pro-meta-tag">{work.meta}</span>}
                  <span className="pro-tool-tag">{work.tool}</span>
                </div>

                {work.link ? (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="pro-work-link">
                    {work.linkText} <ExternalLink size={18} />
                  </a>
                ) : (
                  <span className="pro-status">Docs Ready</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .works-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .pro-work-card {
          background: white;
          padding: 40px;
          border-radius: 30px;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          gap: 30px;
          transition: all 0.4s ease;
        }

        .pro-work-card:hover {
          transform: translateY(-10px);
          border-color: rgba(165, 61, 255, 0.1);
        }

        .pro-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .pro-icon-box.purple { background-color: var(--primary-purple); color: white; }
        .pro-icon-box.light-purple { background-color: rgba(237, 216, 255, 0.5); color: var(--primary-purple); }

        .pro-work-card:hover .pro-icon-box {
          transform: rotate(10deg) scale(1.1);
        }

        .pro-work-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 16px;
        }

        .pro-work-desc {
          font-size: 16px;
          color: var(--text-grey);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .pro-work-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .pro-tags {
          display: flex;
          gap: 12px;
        }

        .pro-meta-tag, .pro-tool-tag {
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 50px;
        }

        .pro-meta-tag { background: #f0f1f3; color: var(--text-dark); }
        .pro-tool-tag { background: rgba(165, 61, 255, 0.1); color: var(--primary-purple); }

        .pro-work-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          color: var(--primary-purple);
          font-size: 14px;
          transition: gap 0.3s ease;
        }

        .pro-work-link:hover { gap: 12px; }

        .pro-status { font-size: 13px; font-weight: 600; color: #9ca3af; }

        @media (max-width: 768px) {
          .pro-work-card { padding: 30px; }
          .works-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default FeaturedWorks;
