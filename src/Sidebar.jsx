import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsFillGearFill
} from 'react-icons/bs';
import { MdOutlinePreview } from "react-icons/md";
import LOGO from './assets/LOGO.png'
import "./App.css"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={LOGO} alt="Dashboard" />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          {/* Use Link instead of <a> for routing */}
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Home
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/brew">
            <BsFillArchiveFill className='icon' /> Brew
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/clean">
            <BsFillGrid3X3GapFill className='icon' /> Clean
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> Setting
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/preview">
            <MdOutlinePreview className='icon' /> Preview
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
