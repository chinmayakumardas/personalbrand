








import CTASection from "@/components/sections/homepage/CTASection";
import FeaturedWorkSection from "@/components/sections/homepage/FeaturedWorkSection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ServicesSection from "@/components/sections/homepage/ServicesSection";


export default function Home() {
  return (

    <main className="min-h-screen  text-black overflow-hidden ">


      <HeroSection />
      <FeaturedWorkSection/>
 
      <ServicesSection />
      <CTASection />



    </main>
  );
}