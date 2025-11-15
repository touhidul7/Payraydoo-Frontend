
import React from 'react'
import TeamImage from "../../../public/images/6824518ab7d703e91d6f2f32_May 14 2025 Screenshot from Resize Images.png"
import Image from 'next/image'
import CardProfile from '../../../public/images/674491fc4bd881ec6b17f89a_Arjun.png'
import videoHolder from '../../../public/images/video-holder.png'
import { Linkedin } from 'lucide-react'

export default function page() {
  return (
    <div className='p-4 home-page pt-16 pb-20'>

      <div className='max-w-7xl mx-auto flex flex-col items-center justify-center gap-5 font-mont'>
        <h2 className='text-4xl md:text-7xl font-bold text-center'>
          Reimagining Sales
        </h2>
        <h2 className='text-4xl md:text-7xl font-bold ml-42'>
          For the <span className='font-brush font-medium'>Agentic Future</span>
        </h2>
      </div>
      {/* team image */}
      <div className='max-w-[90%] mx-auto'>
        <Image src={TeamImage} alt="Our Team" width={1350} height={800} className="rounded-2xl mx-auto mt-16 w-full h-auto" />
      </div>

      {/* team cards */}
      <div className='finance-stack-body rounded-2xl pt-10 pb-10 px-20 mx-auto max-w-[90%] font-mont mt-6'>
        {/* TEAM HEADING */}
        <div className='flex flex-col justify-center items-center'>
          <h3 className='gradient-text text-3xl font-medium'>
            Meet The
          </h3>
          <h2 className='text-6xl font-semibold mt-2'>Leadership Team</h2>
        </div>

        {/* team cards */}
        <div className='grid grid-cols-3 mt-12 gap-4 '>
          {/* card 1 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
          {/* card 2 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
          {/* card 3 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
          {/* card 4 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
          {/* card 5 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
          {/* card 6 */}
          <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
            <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
            <div className='flex flex-col items-start '>
              <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
              <p className='font-normal'>CEO & Founder</p>
            </div>

            <Linkedin className='mt-8' />
          </div>
        </div>

        {/* Investor section */}

        <div className='mt-20 mb-20'>
          {/* investor HEADING */}
          <div className='flex flex-col justify-center items-center'>
            <h3 className='gradient-text text-3xl font-medium'>
              Meet The
            </h3>
            <h2 className='text-6xl font-semibold mt-2'>Investor Panel</h2>
          </div>

          {/* investor cards */}
          <div className='grid grid-cols-3 mt-12 gap-4 '>
            {/* card 1 */}
            <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
              <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
              <div className='flex flex-col items-start '>
                <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
                <p className='font-normal'>CEO & Founder</p>
              </div>

              <Linkedin className='mt-8' />
            </div>
            {/* card 2 */}
            <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
              <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
              <div className='flex flex-col items-start '>
                <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
                <p className='font-normal'>CEO & Founder</p>
              </div>

              <Linkedin className='mt-8' />
            </div>
            {/* card 3 */}
            <div className='custom-gray-card flex justify-between items-center gap-1 bg-gray-700 px-2 py-1 rounded-xl m-4'>
              <Image src={CardProfile} alt="Arjun" width={75} height={75} className="rounded-2xl" />
              <div className='flex flex-col items-start '>
                <h3 className='text-2xl font-semibold'>Arjun Suresh</h3>
                <p className='font-normal'>CEO & Founder</p>
              </div>

              <Linkedin className='mt-8' />
            </div>

          </div>
        </div>
      </div>

      {/* About */}

      <div className='rounded-2xl bg-white pb-52 py-16 px-22 mx-auto max-w-[90%] font-mont mt-6'>
        <div>
          <h2 className='text-6xl text-center text-gray-800 font-semibold mb-6 mt-8 '>How It All Started!</h2>
          <p className='text-center text-lg font-medium text-slate-900 mb-3 mt-3 '>
            Payraydoo was born from a simple observation: finance teams were spending more
            time Chasing invoices and reconciling payments than driving strategy. We saw CFOs
            and finance heads struggling with scattered processes across accounts payable and receivable
            long payment cycles, delayed collections, compliance bottlenecks, and poor cash visibility.
          </p>
          <p className='text-center text-lg font-medium text-slate-900 mb-3 mt-3 '>
            Payraydoo was born from a simple observation: finance teams were spending more
            time Chasing invoices and reconciling payments than driving strategy. We saw CFOs
            and finance heads struggling with scattered processes across accounts payable and receivable
            long payment cycles, delayed collections, compliance bottlenecks, and poor cash visibility.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center gap-5 mt-32'>
          <h2 className='gradient-header text-4xl font-semibold '>Message From</h2>
          <h2 className='text-7xl font-semibold text-gray-900'>The Founder</h2>
          <div className='custom-youtube-card p-20 rounded-3xl mt-10'>
            {/* <iframe width="800" height="450" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            <Image height={450} width={800} src={videoHolder} alt='video-placeholder'/>
          </div>

        </div>
      </div>

    </div>
  )
}
