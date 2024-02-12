import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { Hero2 } from "@/components/Hero";
import  About  from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import  Pricing from "@/components/Pricing";
import { Clients3 } from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import  Contact  from "@/components/Contact";
import ScrollTop from "@/components/ScrollTop";
import Marquee from "@/components/Marque";
import ProjectMasonryIsotop from "@/components/ProjectMasonryIsotop";



export default function Home() {
  return (
    <NoxfolioLayout header={2} footer={2} onePageMenu={true}>
      <Hero2 />
      <Contact />
      <About />
      <Marquee  />        
      <Projects />
      <Services />
      <ProjectMasonryIsotop />
      <Pricing />
      <Clients3 />
      <Testimonial />
      <ScrollTop />
    </NoxfolioLayout>
  );
};
