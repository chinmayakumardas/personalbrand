








import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";
import WhatIDoSection from "@/components/sections/homepage/WhatIDoSection";


export default function Home() {
  return (

    <main className="min-h-screen  text-black overflow-hidden ">


      <HeroSection />
      <WhatIDoSection />
      <ServicesSection />
      <CTASection />



    </main>
  );
}