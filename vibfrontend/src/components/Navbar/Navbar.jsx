import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo/logo2.png';
import MobileMenu from './MobileMenu/MobileMenu';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets", subLinks: [
        { name: "Stocks", path: "/markets/stocks" },
        { name: "Cryptos", path: "/markets/cryptos" },
        { name: "Commodities", path: "/markets/commodities" },
        { name: "ETFs", path: "/markets/etfs" }
    ]},
    { name: "Business", path: "/business", subLinks: [
        { name: "Real Estate", path: "/business/real-estate" },
        { name: "Finance", path: "/business/finance" },
        { name: "Macro-Finance", path: "/business/macro-finance" },
        { name: "Economy", path: "/business/economy" }
    ]},
    { name: "Politics", path: "/politics" },
    { name: "Tech", path: "/tech", subLinks: [
        { name: "Science", path: "/tech/science" },
        { name: "AI", path: "/tech/ai" },
        { name: "Gaming", path: "/tech/gaming" },
        { name: "General", path: "/tech/general" }
    ]},
    { name: "Science", path: "/science", subLinks: [
        { name: "Space Exploration", path: "/science/space-exploration" },
        { name: "Biology", path: "/science/biology" },
        { name: "Environment Science", path: "/science/environment-science" },
        { name: "Robotics and AI", path: "/science/robotics-ai" }
    ]},
    { name: "Health", path: "/health", subLinks: [
        { name: "News for Viruses", path: "/health/news-for-viruses" },
        { name: "Outbreaks", path: "/health/outbreaks" },
        { name: "Vaccines", path: "/health/vaccines" },
        { name: "Cures", path: "/health/cures" },
        { name: "Experiments", path: "/health/experiments" },
        { name: "Important Stocks with Upcoming Trials", path: "/health/important-stocks" }
    ]},
    { name: "Lifestyle", path: "/lifestyle", subLinks: [
        { name: "Food", path: "/lifestyle/food" },
        { name: "Travel", path: "/lifestyle/travel" },
        { name: "Products", path: "/lifestyle/products" },
        { name: "Gadgets", path: "/lifestyle/gadgets" },
        { name: "Culture", path: "/lifestyle/culture" },
        { name: "Reviews/Critics", path: "/lifestyle/reviews-critics" }
    ]}
];

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileMenu navLinks={navLinks} logo={logo} />
            ) : (
                <nav className="desktop-navbar">
                    <div className="desktop-container">
                        <div className="desktop-left">
                            <input type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="desktop-center">
                            <Link to="/">
                                <img src={logo} alt="Vibela Logo" className="desktop-logo" />
                            </Link>
                        </div>
                        <div className="desktop-right">
                            <button className="desktop-action-button" aria-label="Subscribe">Subscribe</button>
                            <button className="desktop-action-button" aria-label="Newsletter">Newsletter</button>
                        </div>
                    </div>
                    <ul className="desktop-nav-links">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} className={location.pathname.startsWith(link.path) ? "active" : ""}>
                                    {link.name}
                                </Link>
                                {link.subLinks && (
                                    <ul className="desktop-dropdown">
                                        {link.subLinks.map((subLink, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={subLink.path}>{subLink.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navbar;
