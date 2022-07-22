import React from 'react';
import kuriLogo from '../assets/SVG/mono/logo_white.svg';
import githubLogo from '../assets/PNG/github/GitHub-Mark-Light-32px.png';

const Header = () => {
  return (
    <div className="header">
      <a href="#/">
          <img className="kuri-logo" src={kuriLogo} alt="Kuri" />
      </a>
      <a href="#/">
        <img className='github-logo' alt="Documentation" src={githubLogo}></img>
      </a>
    </div>
  )
}
export default Header;