import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { socialMediaLinks } from '../data/footer_data';

const Footer = () => {
  return (
    <footer className='bg-bg_color w-full'>
      <div className='py-[5vh] mx-auto flex flex-col justify-center items-center w-full max-w-6xl text-white text-center'>
        <div className='flex justify-center items-center gap-x-6'>
          {
            socialMediaLinks.map(link => (
                <Link href={link.url}  className='w-12 duration-300 hover:scale-[1.05]'>
                <Image src={link.icon} alt='facebook icon' />
              </Link>
            ))
          }
        </div>
        <p className='mt-6 font-semibold text-white_color'> Designed & Built by <span className='text-primary_color'>Louai Boumediene</span></p>
      </div>
    </footer>
  );
};

export default Footer;
