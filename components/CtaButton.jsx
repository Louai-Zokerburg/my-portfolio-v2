import Image from 'next/image';

const CtaButton = ({text, isFilled, icon, isNav = false}) => {
  return (
    <button className={`cta ${isFilled ? 'cta-filled' : 'cta-outlined'}`}>
      <p className={`ml-3 font-semibold ${isNav ? '' : 'lg:text-xl'}`}>{text}</p>
      <span
        className={`icon ${isFilled ? 'bg-white_color' : 'bg-primary_color'} ${isNav ? 'w-[25px] h-[25px] p-[5px]' : ''}`}
      >
        <Image src={icon} />
      </span>
    </button>
  );
};

export default CtaButton;
