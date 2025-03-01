"use client"
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TransitionText from "./TransitionText";
import { Pill } from "lucide-react";

const Hero = () => {
  return (
    
    <div>
        <div className="relative bg-white pb-30 pt-[50px] dark:bg-dark lg:pt-[50px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                    <h1 className="mb-5 text-4xl !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                        Schedule an appointment with <span className="font-bold"><TransitionText/></span>
                    </h1>
                    <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                    Connect with trusted healthcare professionals, schedule consultations in real time, and manage your appointments—all in one place. Experience hassle-free healthcare with secure authentication, real-time chat, and an intuitive admin panel for streamlined management.
                    </p>

                    {/* search bar here */}
                    <SearchBar/>
                    {/* cta buttons */}
                    <ul className="flex flex-wrap items-center mt-6">
                        <li>
                        <a
                            href="/#"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                        >
                            Need Doctor Urgently
                        </a>
                        </li>
                        <li>
                        <a
                            href="/#"
                            className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                        >
                            <span className="mr-2">
                                <Pill className="text-blue-600"/>
                            </span>
                            Need a Refill
                        </a>
                        </li>
                    </ul>

                    <div className="py-4 flex gap-4">
                        
                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold">600</span>
                            <span className="">Active Specialists</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold">600</span>
                            <span className="">Active Specialists</span>
                        </div>

                    </div>
                    
                    </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/12"></div>
                <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                        <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                        alt="hero"
                        className="max-w-full lg:ml-auto"
                        />
                        <span className="absolute -bottom-8 -left-8 z-[-1]">
                        <svg
                            width="93"
                            height="93"
                            viewBox="0 0 93 93"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                        </svg>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};


