import DoctorDetails from '@/app/components/DoctorDetails'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-100  min-h-screen'>
        <div className='bg-white max-w-4xl border border-gray-200 mx-auto rounded-md shadow-lg'>
            <div className='py-8 px-6'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <div className='flex flex-col '>
                            <h2 className='uppercase font-bold text-2xl'>vijay Patel, Pa-C</h2>
                            <p className='text-gray-500 text-xs uppercase'>Adult Health</p>
                        </div>
                        
                        <div className='py-3'>
                            <p>In-Person Doctor Visit</p>
                            <p>3250 linocln highway, kendall park, nj 08824</p>
                        </div>
                    </div>

                    <Image 
                        src="/shinchan.png" 
                        width={243} 
                        height={207}
                        className='w-36 h-36 rounded-full object-cover'
                        alt=''
                    />
                </div>
            </div>
            <DoctorDetails/>
        </div>
    </div>
  )
}
