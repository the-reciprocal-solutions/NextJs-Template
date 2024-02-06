import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "13", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "8", valueType: "k-plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1 ">
      <div className="container container-1620">
        <div className="row align-items-center">
        <div className="col-lg-7">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/me.png" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Roy C. Jones</b> web designer
              </h1>
              <p>
                We denounce with righteous indignation dislike demoralized by
                the charms of pleasure
              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="read-more">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
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
export default Hero;


export const Hero2 = () => {
  return (
    <div id="home" className={`hero-area-two overlay rel z-2 heroContainer`}>
      <div className="row justify-content-center">
        <div className="hero-two-content">
          <div className="col-xl-12 col-lg-7">
            <div className="wow fadeIn delay-0-3s">
              <div className="image-container">
                <img
                  width={10000}
                  src="https://www.toniandguyindia.com/wp-content/uploads/2018/11/legacy-bg.jpg?id=4236"
                  alt="Author"
                />
                <div className={`text-overlay textOverlay ml-150`}>
                  <div className="col-lg-12 col-sm-7">
                    <div className="hero-content rmb-55 pb-60 wow fadeInUp delay-0-2s">
                      <span className="h2">Hello, I’m </span>
                      <h1>
                        <b>Roy C. Jones</b> web designer
                      </h1>
                      <p>We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
                      <div className="hero-btns">
                        <Link legacyBehavior href="/contact">
                          <a className="theme-btn">
                            Hire Me <i className="far fa-angle-right" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/contact">
                          <a className="read-more">
                            Download Resume <i className="far fa-angle-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgLines">
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
    </div>
  );
};
