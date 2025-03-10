import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((pathSegment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="breadcrumb-item">
              {index === pathnames.length - 1 ? (
                <span>{pathSegment}</span>
              ) : (
                <Link to={to}>{pathSegment}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;