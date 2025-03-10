import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Ad Section */}
      <div className="ad-section">
        <img src="ad-banner.jpg" alt="Ad Banner" className="ad-banner" />
        <div className="ad-content">
          <h2>Your Ad Here</h2>
          <p>Catchy ad text goes here...</p>
          <button className="ad-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
