import Image from 'next/image'

const SectionTitle = ({text, icon}) => {
  return (
    <div className='w-full flex justify-start items-center mb-8'>
        <h3 className='text-white text-xl lg:text-3xl'>{text}</h3>
        <span className='h-[3px] w-[30%] bg-primary_color rounded-full mx-4'></span>
        <span className='icon bg-primary_color'>
        <Image src={icon} />
        </span>
    </div>
  )
}

export default SectionTitle