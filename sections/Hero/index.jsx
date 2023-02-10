import Image from 'next/image';

import orbit_one from '../../assets/icons/orbit_1.svg';
import orbit_two from '../../assets/icons/orbit_2.svg';
import orbit_three from '../../assets/icons/orbit_3.svg';
import coding from '../../assets/icons/coding.svg';
import react from '../../assets/icons/react.svg';
import download from '../../assets/icons/download.svg';
import contact from '../../assets/icons/contact.svg';

import CtaButton from '../../components/CtaButton';

const Hero = () => {
  return (
    <section className='section' id='hero'>
      <Image
        src={react}
        className='absolute top-[5vh] left-[-32px] w-32 h-32 animate-orbit_three_spin'
      />
      <Image
        src={coding}
        className='absolute bottom-[10vh] left-[-5%] animate-float'
      />

      <Image src={orbit_one} className='orbit animate-orbit_one_spin' />
      <Image src={orbit_two} className='orbit animate-orbit_two_spin' />
      <Image src={orbit_three} className='orbit animate-orbit_three_spin' />
      {/* <Image src={orbit_four} className='orbit animate-orbit_two_spin' /> */}

      <header className='inner-container pt-[20vh] z-10'>
        <h2 className='text-lg text-white lg:text-xl'>Hi there, my name is</h2>
        <h1 className='text-4xl font-semibold text-white mt-2 lg:text-6xl'>
          Louai Boumediene
        </h1>
        <h1 className='text-4xl font-semibold text-white lg:text-6xl'>
          I'm a <span className='text-primary_color'>Frontend Developer</span>
        </h1>
        <p className='text-white text-sm mt-4 leading-6 lg:text-lg lg:mr-[40%] lg:mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          repudiandae voluptas, ipsam ut earum ad dolorum assumenda consequuntur
          corporis.
        </p>

        <div className='flex justify-center items-center gap-x-4 mt-6 lg:mt-10'>
          <CtaButton text='Get Resume' isFilled={true} icon={download} />
          <CtaButton text='Contact Me' isFilled={false} icon={contact} />
        </div>

        <article className='absolute w-[90vw] max-w-6xl bottom-[10vh] flex justify-around items-center glass-eff border-2 border-border_color rounded-full p-4 animate-float'>

        <div className='flex justify-center items-center gap-x-2'>
            <h3 className='text-primary_color text-xl lg:text-4xl'>03+</h3>
            <p className='text-white text-sm lg:text-xl'>Years<br/> Experience</p>
          </div>

  
          <div className='flex justify-center items-center gap-x-2'>
            <h3 className='text-primary_color text-xl lg:text-4xl'>16+</h3>
            <p className='text-white text-sm lg:text-xl'>Built<br/> Projects</p>
          </div>


          <div className='flex justify-center items-center gap-x-2'>
            <h3 className='text-primary_color text-xl lg:text-4xl'>12+</h3>
            <p className='text-white text-sm lg:text-xl'>Languages<br/> & Frameworks</p>
          </div>
        </article>
      </header>
    </section>
  );
};

export default Hero;
