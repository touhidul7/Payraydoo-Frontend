import React from 'react'
import Image from 'next/image';
import CompactContactForm from '../Components/CompactContactForm';
import Airtel from "../../public/logo/vectorseek.com-Airtel-Uganda-Logo-Vector.png"
export default function page() {
  return (
    <div className='contact-gradient-bg '>
      {/* grid */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-5 py-22'>
        <div className='w-[50%]'>
          <h2 className='text-7xl font-semibold'>
            Make every dollar
            flow faster with
            Payraydoo!
          </h2>
          <div className='mt-8 font-mont text-lg font-medium'>
            <p>1. Exclusive design partnership</p>
            <p>2. Up to 60% discount for beta partners</p>
            <p>3. ROl guarantee within 6 month</p>
          </div>
          <div className='flex justify-start items-center gap-5 mt-12'>
            <Image src={Airtel} width={100}height={55} />
            <Image src={Airtel} width={100}height={55} />
            <Image src={Airtel} width={100}height={55} />
           
          </div>
        </div>
        {/* contact form */}
        <div className='p-5 rounded-3xl contact-form-bg w-[50%]'>
          <h2 className='gradient-text ml-12 text-4xl font-semibold'>Schedule Your Demo</h2>
          <CompactContactForm />
        </div>
      </div>

    </div>
  )
}
