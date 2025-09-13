import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // We'll create this CSS file

function Layout() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className="layout">
      <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="nav-container">
          <h1 className="nav-logo">Your Logo</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/urolog" className="nav-link">Urolog</Link>
            </li>
            <li className="nav-item">
              <Link to="/graphic" className="nav-link">Graphic</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;