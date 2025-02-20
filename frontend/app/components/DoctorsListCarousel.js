"use client";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-multi-carousel").then(mod => mod.default), { ssr: false });

// export default Carousel;



import "react-multi-carousel/lib/styles.css";
import DoctorCard from "./DoctorCard";
export default function DoctorsListCarousel({ doctors, isInPerson }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-4"
    >
    {
        doctors.map((doctor, i) => {
            return (
                <DoctorCard doctor={doctor} key={i} isInPerson={isInPerson}/>
            )
        })
    }
    </Carousel>
  );
}