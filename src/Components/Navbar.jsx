/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const LogoutUser = () => {
    if (window.confirm("You wanna logout?")) {
      localStorage.clear();
      window.location.href = "/login";
    } else {
      window.location.href = "/home";
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='conatiner-fluid'>
          <div className="navbar">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='logout'>
          
            <NavLink to="/login" onClick={LogoutUser} className='nav-item'>
              Logout
            </NavLink>
          
          </div>
          </div>
        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'></li>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>

              );

            })}
          </ul>

        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;




