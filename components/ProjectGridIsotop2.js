"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectGridIsotop2 = () => {

    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
      setTimeout(() => {
        isotope.current = new Isotope(".project-masonry-active", {
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
        <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
          <li
            className={`c-pointer ${activeBtn("service1")}`}
            onClick={handleFilterKeyChange("service1")}
          >
            Service1
          </li>
          <li
            className={`c-pointer ${activeBtn("service2")}`}
            onClick={handleFilterKeyChange("service2")}
          >
            Service2
          </li>
          <li
            className={`c-pointer ${activeBtn("service3")}`}
            onClick={handleFilterKeyChange("service3")}
          >
            Service3
          </li>
          <li
            className={`c-pointer ${activeBtn("service4")}`}
            onClick={handleFilterKeyChange("service4")}
          >
            Service4
          </li>
          <li
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </li>
          {/* <li
            className={`c-pointer ${activeBtn("graphics")}`}
            onClick={handleFilterKeyChange("graphics")}
          >
            Graphics
          </li> */}
        </ul>
        <div className="row project-masonry-active">
          <div className="col-lg-6 item service1 service2 service3 service4">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="number">
                01.
              </div>
              <div className="content">
                <h4>Brand Identity Design</h4>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <Link legacyBehavior href="/#">
                <a className="details-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 item service1 service2 service3 service4">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="number">
                02.
              </div>
              <div className="content">
                <h4>Website Design</h4>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <Link legacyBehavior href="/#">
                <a className="details-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 item service1 service2 service3 service4">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="number">
                03.
              </div>
              <div className="content">
                <h4>Mobile Application Design</h4>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <Link legacyBehavior href="/#">
                <a className="details-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 item service1 service2 service3 service4">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="number">
                04.
              </div>
              <div className="content">
                <h4>Motion Graphics Design</h4>
                <p>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <Link legacyBehavior href="/#">
                <a className="details-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  export default ProjectGridIsotop2;