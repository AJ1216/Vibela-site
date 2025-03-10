import React from 'react';
import './TrendingSection.css';

const TrendingSection = () => {
  const trendingItems = [
    { id: 1, title: 'Trending News 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Trending News 2', image: 'https://via.placeholder.com/150' },
    // Add more items here
  ];

  return (
    <div className="trending-section">
      <h2>Trending</h2>
      <div className="trending-cards">
        {trendingItems.map((item) => (
          <div className="trending-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
