import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/icons/logo.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
import download from '../assets/icons/download.svg';

import CtaButton from './CtaButton';

import { navLinks } from '../data/nav_bar_datajs';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='z-20 fixed top-0 left-0 w-full glass-eff border-b-2 px-4 py-1 border-border_color'>
      <div className='w-full max-w-6xl mx-auto p-0 flex flex-row justify-between items-center'>
        <Image onClick={toggleMenu} src={logo} alt='My Logo' className='w-12' />
        <Image
          onClick={toggleMenu}
          src={menu}
          alt='Menu Icon'
          className='flex w-8 cursor-pointer lg:hidden'
        />

        {/* Desktop Menu  */}
        <DesktopMenu />

        {/* Mobile Menu  */}
        <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;

const DesktopMenu = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center gap-x-6 text-white_color'>
      {navLinks.map((link) => (
        <li>
          <Link className='nav-link' href={link.to}>
            {link.text}
          </Link>
        </li>
      ))}

      <CtaButton
        text='Get Resume'
        isFilled={false}
        isNav={true}
        icon={download}
      />
    </ul>
  );
};

const MobileMenu = ({ toggleMenu, menuOpen }) => {
  return (
    <ul
      className={`z-30 duration-300 ${
        menuOpen
          ? 'scale-1 top-2 right-4'
          : 'scale-0 top-[-120px] right-[-100px]'
      } absolute  border-2 border-border_color w-1/2 bg-second_bg pb-4 pt-4 bg-opacity-100 px-4 rounded-lg gap-y-3 flex flex-col lg:hidden justify-center items-center gap-x-6 text-white_color`}
    >
      <Image
        onClick={toggleMenu}
        src={close}
        alt='close icon'
        className='w-8 ml-auto cursor-pointer'
      />
      {navLinks.map((link) => (
        <li>
          <Link className='nav-link' href={link.to}>
            {link.text}
          </Link>
        </li>
      ))}
      <CtaButton
        text='Get Resume'
        isFilled={false}
        isNav={true}
        icon={download}
      />
    </ul>
  );
};
