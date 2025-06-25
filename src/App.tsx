import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

const CodeWandWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const styles: { [key: string]: CSSProperties } = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: `
        radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(78, 205, 196, 0.15) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 25%, #2d1b69 50%, #1e3c72 75%, #2a5298 100%)
      `,
      color: 'white',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      overflowX: 'hidden',
      position: 'relative'
    },
    backgroundElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      background: `
        radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.1) 0%, transparent 50%)
      `
    },
    floatingShapes: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))',
      animation: 'float 6s ease-in-out infinite'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: '80px',
      background: scrollY > 50 
        ? 'rgba(10, 10, 26, 0.95)' 
        : 'rgba(10, 10, 26, 0.8)',
      backdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: scrollY > 50 
        ? '1px solid rgba(78, 205, 196, 0.2)' 
        : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: scrollY > 50 
        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
        : 'none'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 3rem',
      height: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
      backgroundSize: '300% 300%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradientShift 4s ease infinite',
      letterSpacing: '-0.02em'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2.5rem',
      margin: 0,
      padding: 0,
      alignItems: 'center'
    },
    navLink: {
      color: 'rgba(255, 255, 255, 0.9)',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      padding: '0.5rem 0'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 2
    },
    heroContent: {
      maxWidth: '1000px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: 'clamp(3.5rem, 10vw, 8rem)',
      fontWeight: '900',
      marginBottom: '2rem',
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
      backgroundSize: '400% 400%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradientShift 6s ease infinite',
      letterSpacing: '-0.03em',
      lineHeight: 0.9
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      marginBottom: '3rem',
      opacity: 0.95,
      lineHeight: 1.6,
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '2rem'
    },
    button: {
      padding: '1.2rem 2.5rem',
      border: 'none',
      borderRadius: '60px',
      fontSize: '1.1rem',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      minWidth: '180px'
    },
    buttonPrimary: {
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
      backgroundSize: '200% 200%',
      color: 'white',
      boxShadow: '0 8px 25px rgba(78, 205, 196, 0.3)',
      animation: 'gradientShift 3s ease infinite'
    },
    buttonSecondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'white',
      border: '2px solid rgba(78, 205, 196, 0.5)',
      backdropFilter: 'blur(10px)'
    },
    section: {
      padding: '8rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      marginBottom: '5rem',
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradientShift 4s ease infinite',
      fontWeight: '800',
      letterSpacing: '-0.02em'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2.5rem',
      marginTop: '4rem'
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '3rem 2.5rem',
      borderRadius: '24px',
      backdropFilter: 'blur(15px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    featureIcon: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      marginBottom: '2rem',
      boxShadow: '0 8px 25px rgba(78, 205, 196, 0.3)'
    },
    featureTitle: {
      fontSize: '1.6rem',
      marginBottom: '1.5rem',
      color: '#4ecdc4',
      fontWeight: '700'
    },
    featureDescription: {
      opacity: 0.85,
      lineHeight: 1.7,
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    stepsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '4rem',
      marginTop: '5rem'
    },
    step: {
      textAlign: 'center',
      position: 'relative'
    },
    stepNumber: {
      width: '90px',
      height: '90px',
      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.2rem',
      fontWeight: '800',
      margin: '0 auto 2rem',
      color: 'white',
      boxShadow: '0 12px 30px rgba(78, 205, 196, 0.4)',
      position: 'relative',
      zIndex: 1
    },
    stepTitle: {
      fontSize: '1.6rem',
      marginBottom: '1.5rem',
      color: '#4ecdc4',
      fontWeight: '700'
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(20px)',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      zIndex: 2
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '3rem',
      maxWidth: '1400px',
      margin: '0 auto 3rem'
    },
    footerSection: {
      textAlign: 'left'
    },
    footerTitle: {
      color: '#4ecdc4',
      marginBottom: '1.5rem',
      fontSize: '1.3rem',
      fontWeight: '700'
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.8rem',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },

  };

  const features = [
    {
      icon: '🧩',
      title: 'Visual Block Programming',
      description: 'Drag and drop blocks to create complex hardware logic without writing a single line of code. Perfect for beginners and experts alike.'
    },
    {
      icon: '⚡',
      title: 'Real-time Hardware Control',
      description: 'Control sensors, motors, LEDs, and more in real-time. See your changes instantly with live hardware feedback.'
    },
    {
      icon: '🔧',
      title: 'Multi-Platform Support',
      description: 'Works with Arduino, Raspberry Pi, ESP32, and more. Deploy your projects across different hardware platforms seamlessly.'
    },
    {
      icon: '📱',
      title: 'Mobile Integration',
      description: 'Connect your projects to mobile apps, create custom dashboards, and control your hardware from anywhere.'
    },
    {
      icon: '🌐',
      title: 'IoT Connectivity',
      description: 'Built-in WiFi, Bluetooth, and cloud connectivity. Send data to the cloud and create connected devices effortlessly.'
    },
    {
      icon: '👥',
      title: 'Community Library',
      description: 'Access thousands of pre-built projects, sensor libraries, and components shared by the CodeWand community.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Connect Hardware',
      description: 'Plug in your Arduino, Raspberry Pi, or any supported hardware. CodeWand automatically detects your device.'
    },
    {
      number: '2',
      title: 'Drag & Drop Blocks',
      description: 'Use our intuitive visual editor to create your project logic by connecting pre-built function blocks.'
    },
    {
      number: '3',
      title: 'Test & Deploy',
      description: 'Test your project in our simulator, then deploy directly to your hardware with one click.'
    },
    {
      number: '4',
      title: 'Share & Iterate',
      description: 'Share your projects with the community, get feedback, and continuously improve your creations.'
    }
  ];

  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Hardware Support', 'Documentation']
    },
    {
      title: 'Community',
      links: ['Projects Gallery', 'Forums', 'Tutorials', 'Blog']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Bug Reports', 'Feature Requests']
    },
    {
      title: 'Company',
      links: ['About Us', 'Team', 'Careers', 'Press Kit']
    }
  ];

  // Global styles component
  const GlobalStyles = () => (
    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
      }
    `}</style>
  );

  // Handler functions for button actions
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    window.open('https://www.youtube.com/watch?v=FbZnldJe0XU', '_blank'); // Replace with your demo link
  };

  return (
    <>
      <GlobalStyles />
      <div style={styles.container}>
        {/* Background Effects */}
        <div style={styles.backgroundElements}></div>
        
        {/* Floating Shapes */}
        <div style={styles.floatingShapes}>
          <div style={{
            ...styles.shape,
            width: '100px',
            height: '100px',
            top: '10%',
            left: '10%',
            animationDelay: '0s',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
          <div style={{
            ...styles.shape,
            width: '60px',
            height: '60px',
            top: '20%',
            right: '15%',
            animationDelay: '2s',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            ...styles.shape,
            width: '80px',
            height: '80px',
            bottom: '20%',
            left: '20%',
            animationDelay: '4s',
            animation: 'float 7s ease-in-out infinite'
          }}></div>
        </div>

        {/* Header */}
        <header style={styles.header}>
          <nav style={styles.nav}>
            <div style={styles.logo}>CodeWand</div>
            <ul style={styles.navLinks}>
              {['Features', 'How it Works', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    style={styles.navLink}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = '#4ecdc4';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>CodeWand</h1>
            <p style={styles.heroSubtitle}>
              The ultimate no-code platform for hardware innovation. Build, prototype, and deploy IoT projects with visual programming - no coding required!
            </p>
            <div style={styles.buttonContainer}>
              <button 
                style={{...styles.button, ...styles.buttonPrimary}}
                onClick={() => handleScrollTo('features')}
                onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(78, 205, 196, 0.4)';
                }}
                onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(78, 205, 196, 0.3)';
                }}
              >
                Start Building →
              </button>
              <button 
                style={{...styles.button, ...styles.buttonSecondary}}
                onClick={handleWatchDemo}
                onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.borderColor = '#4ecdc4';
                  e.currentTarget.style.color = '#4ecdc4';
                  e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
                }}
                onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(78, 205, 196, 0.5)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                ▶ Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Powerful Features</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={styles.featureCard}
                onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(78, 205, 196, 0.25)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{
          ...styles.section, 
          background: 'rgba(0, 0, 0, 0.2)', 
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            ...styles.sectionTitle, 
            background: 'linear-gradient(135deg, #45b7d1, #96ceb4, #ffeaa7)', 
            backgroundSize: '200% 200%', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            How It Works
          </h2>
          <div style={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} style={styles.step}>
                <div style={styles.stepNumber}>{step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.featureDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" style={{
          ...styles.section, 
          background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(78, 205, 196, 0.15))', 
          textAlign: 'center', 
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={styles.sectionTitle}>Ready to Start Creating?</h2>
          <p style={{...styles.heroSubtitle, fontSize: '1.4rem', marginBottom: '3rem'}}>
            Join thousands of makers, students, and developers who are building the future with CodeWand.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={{...styles.button, ...styles.buttonPrimary}}
              onClick={() => handleScrollTo('features')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(78, 205, 196, 0.4)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(78, 205, 196, 0.3)';
              }}
            >
              Get Started Free →
            </button>
            <button 
              style={{...styles.button, ...styles.buttonSecondary}}
              onClick={() => handleScrollTo('pricing')}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.borderColor = '#4ecdc4';
                e.currentTarget.style.color = '#4ecdc4';
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(78, 205, 196, 0.5)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              View Pricing
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerGrid}>
            {footerSections.map((section, index) => (
              <div key={index} style={styles.footerSection}>
                <h3 style={styles.footerTitle}>{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex} 
                    href="#" 
                    style={styles.footerLink}
                    onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = '#4ecdc4';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem'}}>
              © 2025 CodeWand. All rights reserved. Made with ❤️ for makers everywhere.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CodeWandWebsite;