"use client"; // Ensure the component runs on the client side

import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";

export default function TabItems() {

  const services = [
    {
      title: "TeleHealth",
      image: "/shinchan.png",
      slug: "telehealth",
    },
    {
      title: "Video Prescription Refill",
      image: "/shinchan.png",
      slug: "telehealth",
    },
    {
      title: "In-Person Doctor Visit",
      image: "/shinchan.png",
      slug: "telehealth",
    },
    {
      title: "UTI Consults",
      image: "/shinchan.png",
      slug: "telehealth",
    },
    {
      title: "Mental Health Consult",
      image: "/shinchan.png",
      slug: "telehealth",
    },
    {
      title: "Urgent care visit",
      image: "/shinchan.png",
      slug: "telehealth",
    },
  ]

  const tabs = [
    {
      title: "Popular Services",
      icon: Stethoscope, // Pass as function, not JSX
      component: <ServiceList data={services}/>,
      content: "This is the Popular Services tab content.",
    },
    {
      title: "Doctors",
      icon: Microscope,
      component: <LinkCards/>,
      content: "This is the Doctors tab content.",
    },
    {
      title: "Specialists",
      icon: Activity,
      component: <LinkCards className='bg-blue-900'/>,
      content: "This is the Specialists tab content.",
    },
    {
      title: "Symptoms",
      icon: Syringe,
      component: <LinkCards className="bg-purple-950"/>,
      content: "This is the Symptoms tab content.",
    },
  ];

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} title={tab.title} icon={tab.icon}>
          {/* <span className="font-medium text-gray-800 dark:text-white">
            {tab.content}
          </span> */}
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
