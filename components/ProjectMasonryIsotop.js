"use client";

import Isotope from "isotope-layout";
import Link from "next/link";

import { Fragment, useEffect, useRef, useState } from "react";
import PageBanner from "./PageBanner";
import { Gallery } from "./Gallery";
const ProjectMasonryIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <PageBanner pageName={"Gallery"} />
      <ul id="gallery" className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("beforeandafter")}`}
          onClick={handleFilterKeyChange("beforeandafter")}
        >
          Before and After
        </li>
        <li
          className={`c-pointer ${activeBtn("carousel")}`}
          onClick={handleFilterKeyChange("carousel")}
        >
          Clients Carousel
        </li>
        <li
          className={`c-pointer ${activeBtn("creatives")}`}
          onClick={handleFilterKeyChange("creatives")}
        >
          Offer Creatives
        </li>
        {/* <li
          className={`c-pointer ${activeBtn("opening")}`}
          onClick={handleFilterKeyChange("opening")}
        >
          Opening Post
        </li> */}
      </ul>
      <div className="container">
      <div className="row project-active">
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item  wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A01.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item  wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A02.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A03.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A04.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A05.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item beforeandafter">
          <div className="project-item  wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/B&A06.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC01.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC02.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item  wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC03.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC04.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC05.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item carousel">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/CC06.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC01.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC02.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC03.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC04.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC05.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 item creatives">
          <div className="project-item fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/OC06.jpg"
                alt="Project"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default ProjectMasonryIsotop;
