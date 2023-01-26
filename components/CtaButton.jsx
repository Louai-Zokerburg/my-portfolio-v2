import Image from 'next/image';

const CtaButton = ({text, isFilled, icon, isNav = false}) => {
  return (
    <button className={`cta ${isFilled ? 'cta-filled' : 'cta-outlined'}`}>
      <p className={`ml-3 font-semibold ${isNav ? '' : 'lg:text-2xl'}`}>{text}</p>
      <span
        className={`icon ${isFilled ? 'bg-white_color' : 'bg-primary_color'} ${isNav ? 'w-[32px] h-[32px] p-[6px]' : ''}`}
      >
        <Image src={icon} />
      </span>
    </button>
  );
};

export default CtaButton;
