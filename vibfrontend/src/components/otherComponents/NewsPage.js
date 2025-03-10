import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TrendingSection from './TrendingSection/TrendingSection';
import MostPopularSection from './OtherComponents/MostPopularSection/MostPopularSection';
import FeaturedSection from './OtherComponents/FeaturedSection/FeaturedSection';
import './NewsPage.css';

const NewsPage = () => {
    return (
        <div className="news-page">
            <HeroSection />
            <TrendingSection />
            <MostPopularSection />
            <FeaturedSection />
        </div>
    );
};

export default NewsPage;
