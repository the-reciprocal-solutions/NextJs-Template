// import { About2 } from "@/components/About";
// import { Services2 } from "@/components/Services";
// import { Skill2 } from "@/components/Skill";
// import LetsTalk from "@/components/LetsTalk";
// import { Pricing2 } from "@/components/Pricing";
// import { Blog2 } from "@/components/Blog";
// import { Clients2 } from "@/components/Clients";
// import { Resume2 } from "@/components/Resume";
// import { Contact2 } from "@/components/Contact";
// import { Projects2 } from "@/components/Projects";
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
import { Gallery } from "@/components/Gallery";

const Index2 = () => {
  return (
    <NoxfolioLayout header={2} footer={2} onePageMenu={true}>
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      <Hero2 />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
        
      {/* Headline area start */}
      <div className="headline-area-h2 rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI/UX Design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                motion graphics
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                strategy
                <i className="far fa-asterisk" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI/UX Design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                motion graphics
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                strategy
                <i className="far fa-asterisk" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI/UX Design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                motion graphics
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                strategy
                <i className="far fa-asterisk" />
              </span>
            </span>
          </span>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}

      {/* Resume Area start */}
      {/* <Resume2 /> */}
      {/* Resume Area end */}

      {/* Services Area start */}
      <Services />
      {/* Services Area end */}

      {/* Skill Area start */}
      {/* <Skill2 /> */}
      {/* Skill Area end */}

      {/* Gallery Area start */}
      {/* <Gallery /> */}
      {/* Gallery Area end */}

      {/* Awward Area start */}
      {/* <section
        id="awward"
        className="awward-area rel z-1 pt-140 rpt-100 pb-140 rpb-100"
      >
        <div className="container">
          <div className="row no-gap">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-25 rmb-55">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> awward for work
                </span>
                <h2>
                  my awwards <span>got for</span> excellent service
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2018</span>
                <span className="tag">DW</span>
                <span className="count-title">
                  <span className="count">02X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2019</span>
                <span className="tag">Css</span>
                <span className="count-title">
                  <span className="count">04X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2020</span>
                <span className="tag">WP</span>
                <span className="count-title">
                  <span className="count">06X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2021</span>
                <span className="tag">tf</span>
                <span className="count-title">
                  <span className="count">03X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2022</span>
                <span className="tag">wd</span>
                <span className="count-title">
                  <span className="count">09X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="award-box">
                <span className="year">2023</span>
                <span className="tag">DW</span>
                <span className="count-title">
                  <span className="count">02X</span>
                  <span className="title">Developer Award</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Awward Area end */}

      {/* Pricing Area start */}
      <Pricing />
      {/* Pricing Area end */}
        

      {/* Client Logo start */}
        <Clients3 />
      {/* Client Logo end */}

      {/* Testimonial Area start */}
       <Testimonial />
      {/* Testimonial Area end */}

      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}

      {/* Headline area start */}
      {/* <div className="headline-area pt-60 bgc-black rel z-2">
        <div className="headline-wrap">
          <span className="marquee-wrap style-two pb-20">
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Portfolio <span>_ Developer _ </span>{" "}
                Portfolio{" "}
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Portfolio <span>_ Developer _ </span>{" "}
                Portfolio{" "}
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                <span> _ Designer _</span> Portfolio <span>_ Developer _ </span>{" "}
                Portfolio{" "}
              </span>
            </span>
          </span>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div> */}
      {/* Headline Area end */}

      {/* Blog Area start */}
      {/* <Blog2 /> */}
      {/* Blog Area end */}

      {/* Scroll Top Button */}
      <ScrollTop />
    </NoxfolioLayout>
  );
};
export default Index2;
