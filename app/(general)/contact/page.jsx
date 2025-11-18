import React from 'react'
import Image from 'next/image';
import Airtel from "../../../public/logo/vectorseek.com-Airtel-Uganda-Logo-Vector.png"
import CompactContactForm from '../../Components/CompactContactForm';
export default function page() {
  return (
    <div className='contact-gradient-bg'>
  {/* grid */}
  <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-5 md:gap-8 py-12 md:py-16 lg:py-22 px-4 md:px-6'>
    <div className='w-full lg:w-[50%]'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight'>
        Make every dollar
        flow faster with
        Payraydoo!
      </h2>
      <div className='mt-6 md:mt-8 font-mont text-base md:text-lg font-medium space-y-2'>
        <p>1. Exclusive design partnership</p>
        <p>2. Up to 60% discount for beta partners</p>
        <p>3. ROI guarantee within 6 months</p>
      </div>
      <div className='flex justify-center md:justify-start items-center gap-3 md:gap-5 mt-8 md:mt-12 flex-wrap'>
        <Image src={Airtel} alt='brand logo' width={80} height={44} className='md:w-[90px] md:h-[50px] w-[80px] h-[30px]' />
        <Image src={Airtel} alt='brand logo' width={80} height={44} className='md:w-[90px] md:h-[50px] w-[80px] h-[30px]' />
        <Image src={Airtel} alt='brand logo' width={80} height={44} className='md:w-[90px] md:h-[50px] w-[80px] h-[30px]' />
      </div>
    </div>
    {/* contact form */}
    <div className='py-3 md:p-5 rounded-3xl contact-form-bg w-full lg:w-[50%]'>
      <h2 className='gradient-text ml-8 md:ml-12 text-2xl md:text-3xl lg:text-4xl font-semibold'>
        Schedule Your Demo
      </h2>
      <CompactContactForm />
    </div>
  </div>
</div>
  )
}
