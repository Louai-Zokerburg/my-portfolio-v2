import Image from 'next/image';

import SectionTitle from '../../components/SectionTitle';

import { skills } from '../../data/about_section_data';

import about_me from '../../assets/icons/about_me.svg';
import me from '../../assets/images/me.png';
import SkillCard from '../../components/SkillCard';

const About = () => {
  return (
    <section className='section bg-second_bg pb-[5vh]' id='about'>
      <div className='inner-container'>
        <SectionTitle text='About Me' icon={about_me} />

        <div className='w-full flex flex-col justify-start items-center lg:flex-row'>
          <article data-aos='fade-right' className='z-10 glass-eff border-2 p-4 rounded-lg border-border_color translate-y-[25px] mx-4 animate-float lg:translate-y-0 lg:mx-0 lg:absolute lg:mr-[45%]'>
            <p className='text-sm text-white lg:text-lg leading-6'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sit
              nostrum nemo harum cum repellat laudantium quia fuga ratione!
              Recusandae dignissimos possimus assumenda repellat omnis
              architecto, in ex cupiditate similique
              <br />
              sit amet consectetur adipisicing elit. Nam sit nostrum nemo harum
              cum repellat laudantium quia fuga ratione! Recusandae dignissimos
              possimus assumenda repellat omnis architecto, in ex cupiditate
              similique?
            </p>
          </article>

          <Image data-aos='fade-left' src={me} className='lg:ml-auto' />
        </div>

        <div data-aos='fade-up' className='w-full flex flex-col justify-start items-stretch gap-x-4 mt-8 lg:flex-row'>
           {
            skills.map(skill => <SkillCard icon={skill.icon} title={skill.title} desc={skill.desc} subSkills={skill.subSkills}/>)
           }
          
        </div>
      </div>
    </section>
  );
};

export default About;
