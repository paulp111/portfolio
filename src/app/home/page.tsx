import React from 'react';
import FooterWithShapes from '@/components/FooterWithShapes';
import BackgroundText from '@/components/BackgroundText';
import '@/assets/styles/previews/FooterWithShapes.css';
import '@/assets/styles/previews/TextContent.css'; 

const HomePage: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#101011' }}>
      {/* Background Text */}
      <BackgroundText />
      
      {/* Text Content */}
      <div className="text-content">
        <div className="address">
          <p>UNIT 1.25</p>
          <p>EAST LONDON WORKS</p>
          <p>65-75 WHITECHAPEL RD</p>
          <p>LONDON</p>
          <p>E1 1DU</p>
        </div>
        <div className="contact">
          <p>Contact Us</p>
          <div className="social-icons">
            <span>facebook</span>
            <span>instagram</span>
            <span>twitter</span>
            <span>vimeo</span>
          </div>
          <p>© Sea Shell Scripts 2024</p>
          <p>Terms & Conditions | Privacy Policy | Cookies</p>
        </div>
      </div>

      {/* Footer with animated shapes */}
      <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%' }}>
        <FooterWithShapes />
      </div>
    </div>
  );
};

export default HomePage;
