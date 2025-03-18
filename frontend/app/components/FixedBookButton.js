"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"

export default function FixedBookButton() {
  return (
    <div className='fixed bottom-0 bg-white z-50 w-full shadow-2xl py-8 px-6
        border border-gray-200 rounded-md'>
        <div className='max-w-4xl mx-auto gap-4 flex justify-between items-center'>
            <div className='w-full'>
                <p className='text-xl font-semibold'>Rs. 1500</p>
                <p className='font-semibold text-sm'>Tue, March 12-8:00AM</p>
            </div>
            <Button
                variant="outline"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm 
                    font-semibold leading-5 text-white transition-all duration-200 bg-blue-600 border border-transparent 
                    rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 
                    hover:bg-blue-500 hover:text-slate-50 tracking-widest">
                <Plus className="w-5 h-5 mr-1" />
                BOOK
            </Button>
        </div>
    </div>
  )
}
