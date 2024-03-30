import { links, social } from './data';
import { useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const linkRefContainer = useRef(null);
  const linksRef = useRef(null);
  const linkStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0`,
    // overflow: 'hidden',
    // transition: '0.5s ease-in-out all',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {<FaBars />}
          </button>
        </div>
        <div className="link-container" style={linkStyle}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    onClick={function (e) {
                      e.preventDefault();
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="socialLink-container">
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li className="socialLink-item" key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
