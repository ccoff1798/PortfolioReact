import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import golden from '../assets/golden.svg'

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/"><img className = 'navbar-image'src={golden} alt="Logo" /></Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={handleNavCollapse} 
        aria-expanded={!isNavCollapsed} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Works" className={currentPage === '/Works' ? 'nav-link active' : 'nav-link'}>Works</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
