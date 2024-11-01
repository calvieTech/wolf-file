import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './sidebar.css';

import { Nav } from 'react-bootstrap';

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar__container ${isOpen ? 'open' : 'closed'}`}
    >
      <ul className="menu-items">
        <li>
          <span className="item-text">Home</span>
        </li>
        <li>
          <span className="item-text">My Drive</span>
        </li>
        <li>
          <span className="item-text">Shared with me</span>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
