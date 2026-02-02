import React, { useEffect } from 'react';

const Experience = () => {
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

    const experiences = [
        {
            date: '2023 - Present',
            role: 'Business Analyst Trainee',
            company: 'Tech Solutions Inc.',
            details: [
                'Collaborated with cross-functional teams to identify and prioritize business requirements.',
                'Applied data-driven insights to optimize internal workflows and reduce operational costs by 15%.',
                'Developed comprehensive documentation, including BRD and SRS for key financial applications.'
            ]
        },
        {
            date: 'Summer 2022',
            role: 'Data Science Intern',
            company: 'Innovate Lab',
            details: [
                'Built predictive models using Python to analyze market trends and consumer behavior.',
                'Designed interactive dashboards in Power BI for executive-level reporting.',
                'Performed exploratory data analysis (EDA) on datasets with over 1M records.'
            ]
        }
    ];

    return (
        <div className="page-container container">
            <div className="experience-header reveal fade-up">
                <h1 className="hero-title">Work <span className="text-highlight">Experience</span></h1>
                <p className="hero-subtitle">A timeline of my professional journey and contributions in the tech space.</p>
            </div>

            <div className="experience-timeline">
                {experiences.map((exp, idx) => (
                    <div key={idx} className={`experience-card-v2 reveal ${idx % 2 === 0 ? 'fade-left' : 'fade-right'}`} style={{ animationDelay: `${idx * 0.2}s` }}>
                        <div className="exp-date-badge">{exp.date}</div>
                        <div className="exp-content-v2">
                            <h3 className="exp-role-v2">{exp.role}</h3>
                            <span className="exp-company-v2">{exp.company}</span>
                            <ul className="exp-details-v2">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="exp-accent-dot"></div>
                    </div>
                ))}
            </div>

            <style>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .experience-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .experience-card-v2 {
          background: white;
          padding: 50px;
          border-radius: 30px;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          transition: all 0.4s ease;
        }

        .experience-card-v2:hover {
          transform: translateY(-5px);
          border-color: rgba(165, 61, 255, 0.1);
        }

        .exp-date-badge {
          display: inline-block;
          padding: 8px 18px;
          background: var(--primary-purple);
          color: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 20px;
          box-shadow: 0 5px 15px rgba(165, 61, 255, 0.2);
        }

        .exp-role-v2 {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .exp-company-v2 {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 24px;
        }

        .exp-details-v2 {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-details-v2 li {
          position: relative;
          padding-left: 20px;
          color: var(--text-grey);
          line-height: 1.6;
          font-size: 16px;
        }

        .exp-details-v2 li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background: var(--primary-purple);
          border-radius: 50%;
        }

        .exp-accent-dot {
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background: var(--primary-purple);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .experience-card-v2:hover .exp-accent-dot {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .experience-card-v2 { padding: 30px; }
          .exp-role-v2 { font-size: 22px; }
        }
      `}</style>
        </div>
    );
};

export default Experience;
