import SkillProgress from './SkillProgress';

import Image from 'next/image';

import arrow from '../assets/icons/arrow.svg';

const SkillCard = ({ icon, title, desc, subSkills }) => {
  return (
    <article className='text-white w-full flex flex-col justify-start items-center border-2 border-border_color rounded-lg glass-eff p-4 my-4 cursor-default duration-300 hover:translate-y-[-12px]'>
      <span className='w-[64px] h-[64px] bg-primary_color rounded-full p-3 mb-4'>
        <Image src={icon} />
      </span>

      <h4 className='text-white text-xl text-bold mb-4'>
        <span className='text-primary_color'>{title.split(' ')[0]}</span>
        {title.split(' ').map((e, i) => i > 0 && ` ${e} `)}
      </h4>

      <p className='text-white text-sm text-center leading-6 mb-4'>{desc}</p>

      {subSkills[0].progress !== null ? (
        subSkills.map((subSkill) => (
          <SkillProgress name={subSkill.name} progress={subSkill.progress} />
        ))
      ) : (
        <ul className='w-full grid grid-cols-2'>
          {subSkills.map((subSkill) => (
            <li className='flex justify-start items-center gap-x-3 my-6'>
              <Image className='w-3' src={arrow} alt='just an arrow' />
              <p className='font-semibold'>{subSkill.name}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default SkillCard;
