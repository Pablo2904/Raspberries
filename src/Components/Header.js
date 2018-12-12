import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex center">
          <ul className="flex">
            <a href="#">
              <li>about</li>
            </a>
            <a href="#">
              <li>offer</li>
            </a>
            <li>
              <img src={logo} alt="Logo" />
            </li>
            <a href="#">
              <li>gallery</li>
            </a>
            <a href="#">
              <li>contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
