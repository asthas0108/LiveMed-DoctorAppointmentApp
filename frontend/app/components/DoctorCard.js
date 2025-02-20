import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DoctorCard({doctor, isInPerson}) {


    const timeStamps = [
        {
            time: "8:30",
            period: "AM"
        },
        {
            time: "9:30",
            period: "AM"
        },
        {
            time: "11:30",
            period: "AM"
        },
        {
            time: "01:00",
            period: "PM"
        },
        {
            time: "05:00",
            period: "PM"
        },
        {
            time: "06:00",
            period: "PM"
        },
    ]

  return (
    <div className='border border-gray-300 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400
        duartion-300 transition-all'>
        <Link href="#">
            <h2 className='uppercase font-bold text-2xl'>{doctor.name}</h2>
            {
                isInPerson &&
                <p className='py-3'>
                    3250 Lincoln Highway, Kendall Park, NJ 08824
                </p>
            }
            <div className='flex items-center gap-4 py-4'>
                <div className='relative'>
                    <Image 
                        src="/shinchan.png" 
                        width={243} 
                        height={207}
                        className='w-24 h-24 rounded-full object-cover'
                        alt=''
                    />
                    {
                        !isInPerson &&
                        <p className='bottom-0 right-2 absolute bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full text-blue-700'>
                            <Video className='w-6 h-6'/>
                        </p>
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='flex items-center'>
                        <Stethoscope className='w-4 h-4 mr-2 flex-shrink-0'/>
                        <span>Family Medicine</span>
                    </p>
                    <p className='bg-green-200 py-3 px-6'>
                        Available Today
                    </p>
                </div>
            </div>
        </Link>

        <div className='pt-8 border-t border-gray-500'>
            <h3 className='flex gap-4 justify-between items-center'>
                <span className='font-bold text-gray-600'>Tue, Feb 18</span> 
                <span className='font-bold'>rs 1300</span>
            </h3>

            <div className='py-3 grid grid-cols-3 gap-2'>
                {
                    timeStamps.slice(0,5).map((item, i) => {
                        return (
                            <Link 
                                key={i} 
                                className='text-sm bg-purple-800 text-white py-2 px-3 rounded-sm text-center'
                                href="/doctors/slug">
                                {item.time}{item.period}
                            </Link>
                        )
                    }) 
                }
                <Link className="text-sm text-center text-black font-bold py-2 px-3" href="/doctors/slug">More</Link>
            </div>
            
        </div>

    </div>
  )
}
