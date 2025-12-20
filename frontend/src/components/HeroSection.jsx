import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import AnimatedCounter from './AnimatedCounter';
import MagneticButton from './MagneticButton';
import '../styles/GoldTheme.css';
import '../styles/animations.css';
import '../styles/performance.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxRef, parallaxOffset] = useParallax(0.3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section ref={parallaxRef} className="hero-section-container">
      {/* Dynamic Background Blobs */}
      <motion.div
        className="hero-blob hero-blob-1"
        animate={{
          y: parallaxOffset * 0.4,
          scale: [1, 1.1, 1],
        }}
        transition={{ scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="hero-blob hero-blob-2"
        animate={{
          y: parallaxOffset * -0.2,
          scale: [1, 1.15, 1],
        }}
        transition={{ scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }}
      />

      <div className="luxury-container hero-inner">
        <div className="hero-main-grid">
          {/* Content Column */}
          <motion.div
            className="hero-content-col"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Animated Badge */}
            <motion.div variants={itemVariants} className="hero-badge-pill">
              <Zap size={14} color="var(--gold-primary)" />
              <span className="badge-text">Profesyonel Altın - Döviz Ticaret Sistemi</span>
            </motion.div>

            {/* Typography */}
            <motion.h1 variants={itemVariants} className="hero-main-title">
              Altın- Döviz Ticaretinizde<br />
              <span className="gold-gradient-text">Yeni Dönem</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-main-desc">
              RFID teknolojisi, gerçek zamanlı borsa analizi ve güvenli finansal yönetimle altın ticaretinizi profesyonel seviyeye taşıyın.
            </motion.p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="hero-action-btns">
              <MagneticButton className="btn-gold-primary hero-main-btn" onClick={scrollToContact}>
                <span className="flex-center-gap">
                  Profesyonel Erişim <ArrowRight size={18} />
                </span>
              </MagneticButton>
              <MagneticButton className="btn-gold-secondary hero-main-btn" onClick={scrollToFeatures}>
                Özellikleri İncele
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="dashboard-hero-frame"
              animate="float"
              variants={floatingVariants}
            >
              <img
                src="/assets/masterpieces/hero_dashboard.png"
                alt="Haskasa Dashboard"
                className="dashboard-img-main"
                loading="eager"
              />
            </motion.div>

            {/* Decorative Floating Items - Desktop Only */}
            <div className="desktop-floating-cards">
              <motion.div
                className="floating-mini-card top-right-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="mini-card-head">
                  <TrendingUp size={20} color="var(--gold-primary)" />
                  <span className="mini-card-val">+45%</span>
                </div>
                <span className="mini-card-label">Verimlilik Artışı</span>
              </motion.div>

              <motion.div
                className="floating-mini-card bottom-left-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="mini-card-head">
                  <Shield size={20} color="var(--gold-primary)" />
                  <span className="mini-card-title">Güvenli</span>
                </div>
                <span className="mini-card-label">256-bit Şifreleme</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Row - Independent placement for and expert mobile ordering */}
          <motion.div
            className="hero-stats-wrapper"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div className="hero-stat-box">
              <span className="hero-stat-num">
                <AnimatedCounter end={99.9} suffix="%" />
              </span>
              <span className="hero-stat-txt">DOĞRULUK ORANI</span>
            </div>
            <div className="hero-stat-box">
              <span className="hero-stat-num">24/7</span>
              <span className="hero-stat-txt">TEKNİK DESTEK</span>
            </div>
            <div className="hero-stat-box">
              <span className="hero-stat-num">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="hero-stat-txt">GÜVENLİ</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          overflow: hidden;
          padding: 100px 0 60px;
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
        }

        .hero-blob-1 {
          top: 10%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
        }

        .hero-blob-2 {
          bottom: 10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .badge-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--gold-primary);
          letter-spacing: 0.5px;
        }

        .hero-main-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-primary);
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .gold-gradient-text {
          background: var(--gold-metallic);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-main-desc {
          font-size: 20px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 540px;
          margin-bottom: 40px;
        }

        .hero-action-btns {
          display: flex;
          gap: 16px;
          margin-bottom: 56px;
        }

        .hero-main-btn {
          padding: 14px 28px !important;
          font-weight: 600 !important;
        }

        .flex-center-gap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-stats-wrapper {
          display: flex;
          gap: 48px;
        }

        .hero-stat-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hero-stat-num {
          font-size: 42px;
          font-weight: 800;
          color: var(--gold-primary);
          line-height: 1;
        }

        .hero-stat-txt {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        .hero-visual-col {
          position: relative;
        }

        .dashboard-hero-frame {
          background: white;
          padding: 10px;
          border-radius: 20px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .dashboard-img-main {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }

        .floating-mini-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.5);
          z-index: 2;
        }

        .top-right-card { top: -20px; right: -30px; width: 180px; }
        .bottom-left-card { bottom: 40px; left: -40px; width: 160px; }

        .mini-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .mini-card-val { font-size: 24px; font-weight: 700; color: var(--gold-primary); }
        .mini-card-title { font-size: 18px; font-weight: 700; color: var(--text-primary); }
        .mini-card-label { font-size: 13px; color: var(--text-muted); }

        /* Expert Mobile Refinement - Bulletproof Approach */
        @media (max-width: 1024px) {
          .hero-section-container { 
            padding-top: 150px !important; 
            text-align: center !important;
            min-height: auto !important;
            display: flex !important;
            align-items: center !important;
          }
          .hero-main-grid { 
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
            width: 100% !important;
          }
          .hero-content-col { 
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          .hero-main-desc { margin-left: auto; margin-right: auto; }
          .hero-action-btns { justify-content: center; }
          .hero-stats-wrapper { justify-content: center; }
          .hero-main-title { font-size: 44px !important; }
          .floating-mini-card { display: none !important; }
          .hero-visual-col { width: 100% !important; margin-top: 30px !important; }
        }

        @media (max-width: 768px) {
          .hero-section-container { padding-top: 140px !important; }
          .hero-main-title { font-size: 32px !important; line-height: 1.2 !important; }
          .hero-main-desc { font-size: 16px !important; padding: 0 15px; margin-bottom: 30px !important; }
          .hero-action-btns { flex-direction: column !important; width: 100% !important; padding: 0 40px !important; gap: 12px !important; margin-bottom: 40px !important; }
          .hero-main-btn { width: 100% !important; }
          
          /* Force Horizontal Stats yan-yana */
          .hero-stats-wrapper { 
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
            width: 100% !important;
            margin-top: 30px !important;
            padding: 0 10px !important;
          }
          .hero-stat-num { font-size: 24px !important; }
          .hero-stat-txt { font-size: 9px !important; white-space: nowrap !important; }
          
          .dashboard-hero-frame { margin: 0 15px; }
          .hero-blob { filter: blur(40px); opacity: 0.4; }
        }

        @media (max-width: 480px) {
          .hero-section-container { padding-top: 130px !important; }
          .hero-main-title { font-size: 28px !important; letter-spacing: -0.5px !important; }
          .hero-badge-pill { padding: 5px 12px; margin-bottom: 20px; }
          .badge-text { font-size: 10px; }
          .hero-action-btns { padding: 0 20px !important; }
          
          /* Extreme font scaling for 3-col stats */
          .hero-stats-wrapper { gap: 8px !important; margin-top: 20px !important; }
          .hero-stat-num { font-size: 20px !important; }
          .hero-stat-txt { font-size: 8px !important; }
          
          .hero-visual-col { margin-top: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;