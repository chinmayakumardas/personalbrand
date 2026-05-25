// import AboutHeroSection from "@/components/sections/aboutpage/AboutHeroSection";

// export default function About() {
//   return (
//     <main className="min-h-screen bg-background text-black overflow-hidden">
//       <AboutHeroSection />

   
//     </main>
//   );
// }


// app/about/page.tsx

import AboutHeroSection from "@/components/sections/aboutpage/AboutHeroSection";
import AboutIntroSection from "@/components/sections/aboutpage/AboutIntroSection";
import AboutStackSection from "@/components/sections/aboutpage/AboutStackSection";
import AboutProcessSection from "@/components/sections/aboutpage/AboutProcessSection";
import AboutVisionSection from "@/components/sections/aboutpage/AboutVisionSection";
import AboutCTASection from "@/components/sections/aboutpage/AboutCTASection";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutStackSection />
      <AboutProcessSection />
      <AboutVisionSection />
      <AboutCTASection />
    </main>
  );
}