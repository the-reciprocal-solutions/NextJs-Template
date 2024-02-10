import PageBanner from "@/components/PageBanner";
import { Fragment } from "react";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Gallery",
};


export const Gallery = () => {
    return (
      <Fragment>
      <PageBanner pageName={"Gallery"} />
        <section id="gallery" className="projects-area pt-40 pb-130 rpb-100 rel z-1">
          <div className="container">
            <ProjectGridIsotop />
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              {/* <Link legacyBehavior href="/projects">
                <a className="theme-btn">
                  View More Projects <i className="far fa-angle-right" />
                </a>
              </Link> */}
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
        </Fragment>
    );
  };