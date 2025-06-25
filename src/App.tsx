import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

const CodeWandWebsite = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles: { [key: string]: CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)',
      color: 'white',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: scrollY > 50 ? 'rgba(15, 15, 35, 0.95)' : 'rgba(15, 15, 35, 0.9)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      maxWidth: '90%',
      margin: '0 auto'
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      position: 'relative'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '800',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      opacity: 0.9,
      lineHeight: 1.6,
      maxWidth: '80%'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    button: {
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    buttonPrimary: {
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      color: 'white'
    },
    buttonSecondary: {
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)'
    },
    section: {
      padding: '8rem 2rem',
      maxWidth: '90%',
      margin: '0 auto'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      marginBottom: '4rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '2rem',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      marginBottom: '1.5rem'
    },
    featureTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#4ecdc4'
    },
    featureDescription: {
      opacity: 0.8,
      lineHeight: 1.6
    },
    stepsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '3rem',
      marginTop: '4rem'
    },
    step: {
      textAlign: 'center'
    },
    stepNumber: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      fontWeight: '800',
      margin: '0 auto 1.5rem',
      color: '#4ecdc4'
    },
    stepTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#4ecdc4'
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '3rem 2rem',
      textAlign: 'center'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '90%',
      margin: '0 auto 2rem'
    },
    footerSection: {
      textAlign: 'left'
    },
    footerTitle: {
      color: '#4ecdc4',
      marginBottom: '1rem',
      fontSize: '1.2rem',
      fontWeight: '600'
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.5rem',
      transition: 'color 0.3s ease'
    }
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

  return (
    <div style={styles.container}>
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
                  onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#4ecdc4'}
                  onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'white'}
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
        <div>
          <h1 style={styles.heroTitle}>CodeWand</h1>
          <p style={styles.heroSubtitle}>
            The ultimate no-code platform for hardware innovation. Build, prototype, and deploy IoT projects with visual programming - no coding required!
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={{...styles.button, ...styles.buttonPrimary}}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start Building →
            </button>
            <button 
              style={{...styles.button, ...styles.buttonSecondary}}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#4ecdc4';
                e.currentTarget.style.color = '#4ecdc4';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.color = 'white';
              }}
            >
              ▶ Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Powerful Features</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={styles.featureCard}
              onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(78, 205, 196, 0.2)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
      <section style={{...styles.section, background: 'rgba(0, 0, 0, 0.3)'}}>
        <h2 style={{...styles.sectionTitle, background: 'linear-gradient(45deg, #45b7d1, #96ceb4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
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
      <section style={{...styles.section, background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))', textAlign: 'center'}}>
        <h2 style={styles.sectionTitle}>Ready to Start Creating?</h2>
        <p style={{...styles.heroSubtitle, fontSize: '1.3rem', marginBottom: '3rem'}}>
          Join thousands of makers, students, and developers who are building the future with CodeWand.
        </p>
        <div style={styles.buttonContainer}>
          <button 
            style={{...styles.button, ...styles.buttonPrimary}}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Started Free →
          </button>
          <button 
            style={{...styles.button, ...styles.buttonSecondary}}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#4ecdc4';
              e.currentTarget.style.color = '#4ecdc4';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.color = 'white';
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
                  onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#4ecdc4'}
                  onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>
          © 2025 CodeWand. All rights reserved. Made with ❤️ for makers everywhere.
        </p>
      </footer>
    </div>
  );
};

export default CodeWandWebsite;