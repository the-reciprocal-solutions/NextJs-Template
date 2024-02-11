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
                  <span key={r.id} className="marquee-item">
                {r.title}
                  <i className="far fa-asterisk" />
                </span>
                )
                )
              }
            </span>
          </span>
        </div>
      </div>
        );
    };
    export default Marquee;