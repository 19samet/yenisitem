import React from 'react';
import { motion } from 'framer-motion';
import { Radio, FileText, Shield, BarChart3, Clock, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/GoldTheme.css';
import '../styles/animations.css';
import '../styles/performance.css';

const FeaturesSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const features = [
    {
      icon: <Radio size={32} />,
      title: 'RFID Teknolojisi',
      description: 'Akıllı RFID takip sistemi ile altın ürünlerinizi anında tanımlayın, stok kontrolünü otomatikleştirin ve insan hatasını minimize edin.',
      image: '/assets/masterpieces/zebra_terminal.png',
    },
    {
      icon: <FileText size={32} />,
      title: 'Finansal Kontrol',
      description: 'Gerçek zamanlı defter kayıtları, günlük raporlar ve detaylı finansal analiz araçları ile işletmenizin tam kontrolünü elinize alın.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg',
    },
    {
      icon: <Shield size={32} />,
      title: 'Güvenlik Sistemi',
      description: 'Güvenli kullanıcı oturumları, şifreli işlem geçmişi ve çok katmanlı güvenlik protokolleri ile verilerinizi koruyun.',
      image: 'https://images.unsplash.com/photo-1659200501439-f090553a4fc2',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Borsa Analizi',
      description: 'Canlı borsa verileri, trend analizleri ve otomatik fiyat güncellemeleri ile piyasanın nabzını tutun.',
      image: 'https://images.unsplash.com/photo-1614562183717-a01aa7a16723',
    },
    {
      icon: <Clock size={32} />,
      title: 'Gerçek Zamanlı Takip',
      description: 'Anlık stok durumu, hareketler ve işlemleri 7/24 takip edin. Her an her yerden erişim imkanı.',
      image: 'https://images.unsplash.com/photo-1628903920207-836a62ac9f6a',
    },
    {
      icon: <Lock size={32} />,
      title: 'Veri Güvenliği',
      description: 'Bankacılık standartlarında şifreleme, yedekleme sistemleri ve güvenli bulut altyapısı.',
      image: 'https://images.pexels.com/photos/7723554/pexels-photo-7723554.jpeg',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="luxury-container">
        {/* Section Header with animation */}
        <motion.div
          ref={headerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '80px'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="features-badge"
            whileHover={{ scale: 1.05 }}
            animate={headerVisible ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span style={{ fontSize: '14px', color: 'var(--gold-primary)', fontWeight: 600 }}>ÖZELLİKLER</span>
          </motion.div>
          <motion.h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Profesyonel Araçlar,
            <br />
            <motion.span
              style={{
                background: 'var(--gold-metallic)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
              }}
              className="gradient-animation"
            >
              Üstün Performans
            </motion.span>
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={headerVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Altın ticaretinizi bir üst seviyeye taşıyan teknolojiler
          </motion.p>

          {/* Mobile Scroll Hint - Visible only on mobile */}
          <div className="features-scroll-hint">
            <motion.span
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hint-arrow"
            >
              ←
            </motion.span>
            <span className="hint-text">Kaydırın</span>
            <motion.span
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hint-arrow"
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Features Carousel/Grid */}
        <div className="features-wrapper" style={{ position: 'relative' }}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container features-grid-mobile">
              {features.map((feature, index) => (
                <div key={index} className="embla__slide">
                  <FeatureCard feature={feature} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-badge {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: var(--bg-overlay);
          border: 1px solid var(--border-gold);
          border-radius: 24px;
          margin-bottom: 16px;
          width: fit-content;
          height: fit-content;
          min-height: 36px;
          max-height: 40px;
        }

        .features-scroll-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 5px;
          margin-bottom: 30px;
          color: var(--gold-primary);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hint-arrow {
          font-size: 18px;
          font-weight: 800;
        }

        .features-wrapper {
          padding: 0 10px;
          position: relative;
        }

        .embla {
          overflow: hidden;
          width: 100%;
        }

        .embla__container {
          display: flex;
          gap: 40px;
          overflow: visible;
        }

        .embla__slide {
          flex: 0 0 calc(33.333% - 27px);
          min-width: 0;
          overflow: visible;
        }

        @media (max-width: 1024px) {
          .embla__slide {
            flex: 0 0 calc(50% - 20px);
            height: auto !important;
            min-height: auto !important;
          }
          section {
            padding: 60px 5% !important;
          }
          h2 {
            font-size: 40px !important;
          }
        }

        @media (max-width: 768px) {
          .features-scroll-hint {
            margin-top: 24px;
          }
          
          .features-wrapper {
            padding: 0 4% !important;
            padding-bottom: 40px !important;
          }
          .embla {
            overflow: visible !important;
            padding-bottom: 50px !important;
          }
          .embla__slide {
            flex: 0 0 85%;
            height: auto !important;
            min-height: auto !important;
            overflow: visible !important;
            margin-bottom: 20px !important;
          }
          .embla__slide > div {
            min-height: auto !important;
            padding: 12px 12px 25px 12px !important;
            margin-bottom: 0 !important;
          }
          .embla__slide img {
            height: 110px !important;
          }
          .embla__slide h3 {
            font-size: 16px !important;
            padding: 6px !important;
            margin-bottom: 4px !important;
            line-height: 1.3 !important;
          }
          .embla__slide p {
            font-size: 13px !important;
            padding: 6px 6px 16px 6px !important;
            line-height: 1.4 !important;
          }
          .embla__slide > div > div:first-child {
            margin-bottom: 6px !important;
          }
          .embla__slide > div > div:nth-child(2) {
            width: 44px !important;
            height: 44px !important;
            margin-bottom: 6px !important;
          }
          section {
            padding: 50px 4% !important;
          }
          h2 {
            font-size: 32px !important;
          }
          p {
            font-size: 16px !important;
          }
          .glass-card {
            padding: 24px !important;
          }
          .glass-card h3 {
            font-size: 20px !important;
          }
          .glass-card p {
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 40px 4% !important;
          }
          h2 {
            font-size: 28px !important;
          }
          section > div {
            margin-bottom: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};

// Separate component for better performance
const FeatureCard = ({ feature, index, cardVariants, imageVariants }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={cardRef}
      style={{
        padding: '20px',
        cursor: 'pointer',
        minHeight: '450px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'visible',
        position: 'relative'
      }}
    >
      {/* Feature Image with advanced hover effect */}
      <div
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '24px',
          position: 'relative',
          backgroundImage: `url(${feature.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      {/* Icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          background: 'rgba(212, 175, 55, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: '#D4AF37',
        }}
      >
        {feature.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#000000',
          marginBottom: '10px',
          marginTop: '0',
          display: 'block',
          visibility: 'visible',
          opacity: '1',
          lineHeight: '1.4',
          padding: '8px',
          background: '#f9f9f9',
          borderRadius: '4px'
        }}
      >
        {feature.title || 'Başlık Yüklenemedi'}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#222222',
          margin: '0',
          display: 'block',
          visibility: 'visible',
          opacity: '1',
          flex: '1',
          padding: '8px',
          background: '#fafafa',
          borderRadius: '4px'
        }}
      >
        {feature.description || 'Açıklama yüklenemedi'}
      </p>
    </div>
  );
};

export default FeaturesSection;