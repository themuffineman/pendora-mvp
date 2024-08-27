import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[5rem] relative pt-[7rem] bg-[#f8f8f8]">
      <Navbar/>
      <Hero/>
      {/* <Features/> */}
    </main>
  );
}
