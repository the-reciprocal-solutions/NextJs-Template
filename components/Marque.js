import Link from "next/link";
import data from "../components/data/mar.json"

const Marquee = () => {
  return (
<div className="headline-area-h2 rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              {
                data.mar.map((r) => (
                  <span className="marquee-item">
                {r.title}
                  <i className="far fa-asterisk" />
                </span>
                )
                )
              }
             
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
        );
    };
    export default Marquee;