import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { toast } from '../components/ui/sonner';
import emailjs from '@emailjs/browser';
import '../styles/GoldTheme.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  /* EmailJS Integration */
  const formRef = React.useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_qabxpug',
        'template_2ukmb79',
        formRef.current,
        {
          publicKey: 'q8R-BFjnK5JqIa1Pm',
        }
      )
      .then(
        () => {
          toast.success('Mesajınız Gönderildi!', {
            description: 'En kısa sürede sizinle iletişime geçeceğiz.',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Bir Hata Oluştu', {
            description: 'Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin.',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)' }}>
      <div className="luxury-container">
        <div className="contact-layout-wrapper">
          {/* Header Area */}
          <div className="contact-header-section">
            <div className="contact-badge">
              <span>İLETİŞİM</span>
            </div>
            <h2 className="contact-title">
              Hemen <span className="gold-text">Başlayın</span>
            </h2>
            <p className="contact-description">
              Profesyonel altın ticaret yazılımımız hakkında detaylı bilgi almak ve demo talep etmek için bizimle iletişime geçin.
            </p>
          </div>

          <div className="contact-flex-container">
            {/* Left/Top Column: Contact Info */}
            <div className="contact-info-column">
              <div className="contact-cards-stack">
                <div className="glass-card contact-card-item">
                  <div className="card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="card-content">
                    <span className="card-label">İletişim</span>
                    <h4 className="card-name">Samet Bodur</h4>
                    <span className="card-phone">+90 553 704 05 18</span>
                  </div>
                </div>

                <div className="glass-card contact-card-item">
                  <div className="card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="card-content">
                    <span className="card-label">İletişim</span>
                    <h4 className="card-name">Kaan Yıldırım</h4>
                    <span className="card-phone">+90 551 277 07 27</span>
                  </div>
                </div>
              </div>

              {/* Perspective Image Box */}
              <div className="contact-image-box">
                <img
                  src="https://images.unsplash.com/photo-1572107833346-add549545c63"
                  alt="Gold Trading"
                  className="contact-image"
                />
              </div>
            </div>

            {/* Right/Bottom Column: Form */}
            <div className="contact-form-column">
              <div className="glass-card contact-form-wrapper">
                <h3 className="form-headline">Bilgi Talep Formu</h3>

                <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label className="input-label">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="input-label">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="input-label">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="input-label">Şirket Adı</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="input-label">Mesajınız *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="contact-input contact-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Gönderiliyor...'
                    ) : (
                      <>
                        Gönder
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-wrapper {
          display: block;
          width: 100%;
        }

        .contact-header-section {
          max-width: 600px;
          margin-bottom: 60px;
        }

        .contact-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--bg-overlay);
          border: 1px solid var(--border-gold);
          border-radius: 24px;
          margin-bottom: 16px;
        }

        .contact-badge span {
          font-size: 14px;
          color: var(--gold-primary);
          font-weight: 600;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .gold-text {
          background: var(--gold-metallic);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-description {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 500px;
        }

        .contact-flex-container {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          width: 100%;
        }

        .contact-info-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 16px;
        }

        .card-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: var(--bg-overlay);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-primary);
          flex-shrink: 0;
        }

        .card-label {
          display: block;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .card-name {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .card-phone {
          display: block;
          font-size: 16px;
          color: var(--text-primary);
          margin-top: 4px;
        }

        .contact-image-box {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
          margin-top: 20px;
        }

        .contact-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .contact-form-column {
          flex: 1.2;
          width: 100%;
        }

        .contact-form-wrapper {
          padding: 48px;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 16px;
        }

        .form-headline {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 32px;
        }

        .input-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .contact-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
        }

        .contact-input:focus {
          outline: none;
          border-color: var(--gold-primary);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-flex-container {
            flex-direction: column;
            gap: 40px;
          }
          .contact-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .contact-header-section {
            text-align: center;
            margin-bottom: 40px;
          }
          .contact-title {
            font-size: 32px;
          }
          .contact-flex-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .contact-info-column, .contact-form-column {
            width: 100% !important;
          }
          .contact-cards-stack {
            order: 1;
          }
          .contact-form-column {
            order: 2;
          }
          .contact-image-box {
            order: 3;
            transform: none !important;
            margin-top: 20px;
          }
          .contact-form-wrapper {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;