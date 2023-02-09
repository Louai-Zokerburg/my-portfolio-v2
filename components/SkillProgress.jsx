import React from 'react';

const SkillProgress = ({name, progress}) => {

  return (
    <div className='w-full flex flex-col justify-start items-start my-6'>
      <div className='w-full flex justify-between items-center'>
        <h6 className='text-white text-sm font-semibold'>{name}</h6>
        <p className='text-white text-sm font-semibold'>{progress}%</p>
      </div>

      <span className={`h-2 rounded-full bg-primary_color mt-1`}
      style={{width: `${progress}%`}}></span>
    </div>
  );
};

export default SkillProgress;
