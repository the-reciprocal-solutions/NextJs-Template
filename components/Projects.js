import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="services"
      className="projects-area pt-90 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Our Services</span>
              <h2>
              We offer a wide range of<br></br> <span> Hairstyling & Beauty Service</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Service 1 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/Projects-4.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Services</span>
              <h2>
                  Hair Dressing
              </h2>
              <p>
                Revitalize your style at TONI&GUY Essensuals with expert hairdressing services tailored to perfection.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* Service 2 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project2.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Services</span>
              <h2>
                  Beauty & Makeup
              </h2>
              <p>
                  Enhance your natural beauty with flawless makeup and luxurious beauty services at <b>TONI&GUY Essensuals</b>.
              </p>
              <Link legacyBehavior href="/#contact">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* Service 3 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project3.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Services</span>
              <h2>
                  Hand & Feet Care
              </h2>
              <p>
                Indulge in pampering treatments for your hands and feet at TONI&GUY Essensuals, where luxury meets relaxation.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* Service 4 */}
        <div className="row align-items-center pb-25">
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Services</span>
              <h2>
                Hydrafacial Treatment
              </h2>
              <p>
              Discover radiant skin with our HydraFacial treatments – a revolutionary skincare solution for a refreshed, rejuvenated complexion
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/Treatment.jpg" alt="Project" />
            </div>
          </div>
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/catalogue">
            <a className="theme-btn">
              View More<i className="far fa-angle-right" />
            </a>
          </Link>
        </div>
        
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
    </section>
  );
};
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
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
    </section>
  );
};
