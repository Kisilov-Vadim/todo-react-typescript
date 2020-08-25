import * as React from 'react';

export const NavBar: React.FC = () => (
  <nav>  
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Список дел</a></li>
        <li><a href="collapsible.html">Информация</a></li>
      </ul>
    </div>
  </nav>
)
