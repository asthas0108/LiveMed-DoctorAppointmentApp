import DoctorsList from "../components/DoctorsList";
import Hero from "../components/Front/Hero";
import Service from "../components/Front/Service";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto">
      <Hero/>
      <Service/>
      <DoctorsList/>
      <DoctorsList className="bg-white" title="In-Person Doctor Visit" isInPerson = {true}/>
    </section>
  );
}
