import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '../../components/SectionTitle'

import contact from '../../assets/icons/contact.svg'
import arrow from '../../assets/icons/arrow.svg'
import send from '../../assets/icons/send.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import send_email from '../../assets/images/send_email.png'
import CtaButton from '../../components/CtaButton'

const Contact = () => {
  return (
    <section className='section'>

      <div className='inner-container'>
      <SectionTitle text='Get in Touch With Me' icon={contact} />

      <div className='relative w-full flex flex-col lg:flex-row lg:justify-between lg:items-center'>

        <p className='text-white font-semibold text-sm mb-2 lg:hidden'>You Can Message me Through</p>
        <Image src={send_email} alt='send email image' className='w-full lg:w-fit lg:mr-auto' />


        <div className='flex flex-col justify-start items-start w-full px-2 lg:pl-4 gap-y-4 animate-float'>
        <p className='hidden text-white font-semibold text-xl mb-2 lg:flex'>You Can Message me Through</p>
        <div className='w-full grid grid-cols-2 gap-x-8 gap-y-8 translate-y-[-50px] lg:translate-y-0 lg:translate-x-[-80px] lg:flex lg:justify-center lg:items-center'>

          <Link href='/' className='group flex flex-col gap-y-8 glass-eff glass-eff border-2 p-4 rounded-lg border-border_color duration-300 hover:translate-y-[-12px]'>
            <div className='flex justify-between items-center'>


            <Image className='w-12' src={instagram} alt='instagram icon' />
            <Image className='w-4 group-hover:translate-x-2 duration-300' src={arrow} alt='instagram icon' />
            </div>

            <p className='text-white font-semibold text-lg'>@louai_dourov</p>

          </Link>

          <Link href='/' className='group  flex flex-col gap-y-8 glass-eff glass-eff border-2 p-4 rounded-lg border-border_color  duration-300 hover:translate-y-[-16px]'>
            <div className='flex justify-between items-center'>


            <Image className='w-12' src={linkedin} alt='instagram icon' />
            <Image className='w-4  group-hover:translate-x-2 duration-300' src={arrow} alt='instagram icon' />
            </div>

            <p className='text-white font-semibold text-lg'>Louai_Boumediene</p>

          </Link>
          <Link href='/' className='group  flex flex-col gap-y-8 glass-eff glass-eff border-2 p-4 rounded-lg border-border_color  duration-300 hover:translate-y-[-16px]'>
            <div className='flex justify-between items-center'>


            <Image className='w-12' src={twitter} alt='instagram icon' />
            <Image className='w-4  group-hover:translate-x-2 duration-300' src={arrow} alt='instagram icon' />
            </div>

            <p className='text-white font-semibold text-lg'>@louai_dourov</p>

          </Link>

          <div className='flex flex-col justify-end text-left gap-y-8 lg:hidden'>
            <p className='text-white font-bold text-3xl'>Or</p>

            <CtaButton text='Send me Email' isFilled={true} icon={send} />
          </div>

        </div>

        <div className='hidden flex-col justify-end text-left gap-y-4 lg:flex'>
            <p className='text-white font-bold text-3xl'>Or</p>

            <CtaButton text='Send me Email' isFilled={true} icon={send} />
          </div>
        </div>

      </div>
      </div>
      
    </section>
  )
}

export default Contact
