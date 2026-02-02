import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
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
            <div className="contact-header reveal fade-up">
                <h1 className="hero-title">Get in <span className="text-highlight">Touch</span></h1>
                <p className="hero-subtitle">Let’s discuss your project and build something amazing together.</p>
            </div>

            <div className="contact-full-wrapper reveal fade-up">
                <div className="contact-sidebar">
                    <div className="sidebar-card reveal fade-left" style={{ animationDelay: '0.2s' }}>
                        <h3 className="sidebar-title">Contact Info</h3>
                        <div className="sidebar-items">
                            <div className="sidebar-item">
                                <div className="sidebar-icon"><MapPin size={24} /></div>
                                <div className="sidebar-text">
                                    <span>Location</span>
                                    <strong>New Mexico 31134</strong>
                                </div>
                            </div>
                            <div className="sidebar-item">
                                <div className="sidebar-icon"><Mail size={24} /></div>
                                <div className="sidebar-text">
                                    <span>Email</span>
                                    <strong>mymail@mail.com</strong>
                                </div>
                            </div>
                            <div className="sidebar-item">
                                <div className="sidebar-icon"><Phone size={24} /></div>
                                <div className="sidebar-text">
                                    <span>Call Us</span>
                                    <strong>00-1234 00000</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-main reveal fade-right" style={{ animationDelay: '0.4s' }}>
                    <form className="pro-contact-form">
                        <div className="form-grid-v2">
                            <div className="form-group-v2">
                                <label>Full Name*</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="form-group-v2">
                                <label>Email Address*</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group-v2 full-width">
                                <label>Subject*</label>
                                <input type="text" placeholder="How can I help?" />
                            </div>
                            <div className="form-group-v2 full-width">
                                <label>Your Message*</label>
                                <textarea rows="6" placeholder="Write your message here..."></textarea>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary submit-btn-v2">
                            Send Message <Send size={20} style={{ marginLeft: '10px' }} />
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 100px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .contact-full-wrapper {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 50px;
          align-items: flex-start;
        }

        .sidebar-card {
          background: var(--primary-purple);
          padding: 50px;
          border-radius: 30px;
          color: white;
          box-shadow: 0 30px 60px rgba(165, 61, 255, 0.2);
        }

        .sidebar-title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 40px;
        }

        .sidebar-items {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .sidebar-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-text span {
          display: block;
          font-size: 13px;
          opacity: 0.8;
          margin-bottom: 4px;
        }

        .sidebar-text strong {
          font-size: 16px;
          font-weight: 700;
        }

        .contact-form-main {
          background: white;
          padding: 60px;
          border-radius: 30px;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .form-grid-v2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .full-width { grid-column: span 2; }

        .form-group-v2 {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-group-v2 label {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .form-group-v2 input, .form-group-v2 textarea {
          width: 100%;
          padding: 16px 20px;
          background: #f8f9fa;
          border: 2px solid transparent;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group-v2 input:focus, .form-group-v2 textarea:focus {
          background: white;
          border-color: var(--primary-purple);
          box-shadow: 0 10px 20px rgba(165, 61, 255, 0.05);
        }

        .submit-btn-v2 {
          margin-top: 40px;
          width: 100%;
          padding: 18px !important;
          border-radius: 50px !important;
          font-size: 16px !important;
        }

        @media (max-width: 991px) {
          .contact-full-wrapper { grid-template-columns: 1fr; }
          .contact-form-main { padding: 40px; }
          .full-width { grid-column: span 1; }
          .form-grid-v2 { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
