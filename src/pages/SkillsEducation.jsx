import React, { useEffect } from 'react';

const SkillsEducation = () => {
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
        <div className="page-container container">
            <div className="skills-header reveal fade-up">
                <h1 className="hero-title">My <span className="text-highlight">Skills</span></h1>
                <p className="hero-subtitle">Comprehensive expertise across data science, business analysis, and technology.</p>
            </div>

            <div className="skills-grid">
                <div className="skill-category-card reveal fade-up" style={{ animationDelay: '0.1s' }}>
                    <h3 className="category-title">Academic Foundation</h3>
                    <div className="skill-pill-large">
                        <span className="skill-label">B.Tech AI & Data Science</span>
                        <span className="skill-sub">Saveetha Engineering College</span>
                    </div>
                </div>

                <div className="skill-category-card reveal fade-up" style={{ animationDelay: '0.3s' }}>
                    <h3 className="category-title">Technical Expertise</h3>
                    <div className="skill-tag-list">
                        {['Python', 'SQL', 'Pandas/NumPy', 'Scikit-Learn', 'Power BI', 'Matplotlib', 'Tableau'].map(skill => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-category-card reveal fade-up" style={{ animationDelay: '0.5s' }}>
                    <h3 className="category-title">Business Acumen</h3>
                    <div className="skill-tag-list">
                        {['Market Research', 'GAP Analysis', 'Stakeholder Mgmt', 'Agile/Scrum', 'Requirement Gathering', 'Process Mapping'].map(skill => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .skill-category-card {
          background: white;
          padding: 50px;
          border-radius: 30px;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.4s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-10px);
        }

        .category-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 15px;
        }

        .category-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 4px;
          background: var(--primary-purple);
          border-radius: 2px;
        }

        .skill-pill-large {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 16px;
        }

        .skill-label {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .skill-sub {
          font-size: 14px;
          color: var(--text-grey);
        }

        .skill-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          padding: 10px 22px;
          background: #f0f1f3;
          color: var(--text-dark);
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: var(--primary-purple);
          color: white;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .skill-category-card { padding: 30px; }
        }
      `}</style>
        </div>
    );
};

export default SkillsEducation;
