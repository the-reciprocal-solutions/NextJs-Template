"use client";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop2 = () => {

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initializeIsotope = async () => {
        console.log("init iso")
        const Isotope = (await import('isotope-layout')).default;
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
      }
      window.onload = initializeIsotope()
      return () => { window.onload = null }
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      console.log("set filter on isotope project grid 2 iso")
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
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("hairdressing")}`}
          onClick={handleFilterKeyChange("hairdressing")}
        >
          Hair Dressing
        </li>
        <li
          className={`c-pointer ${activeBtn("beautymakeup")}`}
          onClick={handleFilterKeyChange("beautymakeup")}
        >
          Beauty & MakeUp
        </li>
        <li
          className={`c-pointer ${activeBtn("handfeetcare")}`}
          onClick={handleFilterKeyChange("handfeetcare")}
        >
          Hand & Feet Care
        </li>
        <li
          className={`c-pointer ${activeBtn("hairandskin")}`}
          onClick={handleFilterKeyChange("hairandskin")}
        >
          Hair & Skin
        </li>
        <li
          className={`c-pointer ${activeBtn("bodyspa")}`}
          onClick={handleFilterKeyChange("bodyspa")}
        >
          Body Spa
        </li>
      </ul>
      <div className="row project-masonry-active">
        {/* HairDressing Services Starts here */}
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">
            {/* <div className="number">
                01.
              </div> */}
            <div className="content">
              <h4>Advanced hair cut</h4>
              <p>Our advanced haircuts tailor to your unique style and face shape, reflecting the latest trends for women, men, and children, with expert recommendations
              </p>
            </div>
            {/* <Link legacyBehavior href="/#">
                <a className="details-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </Link> */}
          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Highlights</h4>
              <p>Illuminate your locks with stunning highlights at TONI&GUY Essensuals, adding dimension and depth to your hair for a radiant and dynamic look.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Global color</h4>
              <p>Transform your entire look with a stunning global color treatment , where our expert colorists blend hues to perfection for a seamless and radiant finish.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Keratin</h4>
              <p>Revitalize and strengthen your locks with a luxurious keratin treatment at TONI&GUY Essensuals, leaving your hair smooth, shiny, and frizz-free.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>HairBotox</h4>
              <p>Rejuvenate your hair with our hairBotox treatment at TONI&GUY Essensuals, restoring vitality and shine for a youthful, radiant appearance.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Straightening</h4>
              <p>Achieve sleek, straight locks with our smoothing and straightening treatments, designed to tame frizz and create a polished, effortless look.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Botoliss</h4>
              <p>Transform your hair with our Botoliss treatment at TONI&GUY Essensuals. Experience the innovation for silky smooth, hydrated, and vibrant hair.
              </p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item hairdressing">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Hair spa (Wella plex)</h4>
              <p>Indulge in the ultimate pampering experience at TONI&GUY Essensuals with our luxurious Hair Spa or Advanced Spa treatments, including the renowned Wella Plex.
              </p>
            </div>

          </div>
        </div>
        {/* HairDressing Services ends here */}
        {/* ===== */}
        {/* BEAUTY & MAKEUP Services starts here */}
        <div className="col-lg-6 item beautymakeup">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Threading / Detan</h4>
              <p>Experience precision threading and rejuvenating detan treatments at TONI&GUY Essensuals for perfectly shaped brows and glowing skin.</p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item beautymakeup">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Hydra facial</h4>
              <p>Experience the ultimate hydration and rejuvenation with our HydraFacial treatment at TONI&GUY Essensuals.</p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item beautymakeup">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Treatment</h4>
              <p>Experience specialized treatments for skin and hair concerns: pigmentation, acne, anti-dandruff, and hair loss solutions.</p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item beautymakeup">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Party makeup / Advanced  makeup</h4>
              <p>Elevate your look with our Party Makeup or Advanced Makeup services at TONI&GUY Essensuals.</p>
            </div>

          </div>
        </div>
        <div className="col-lg-6 item beautymakeup">
          <div className="service-item wow fadeInUp delay-0-2s">

            <div className="content">
              <h4>Waxing</h4>
              <p>Achieve silky-smooth skin with our professional waxing services at TONI&GUY Essensuals.</p>
            </div>

          </div>
        </div>
        {/* BEAUTY & MAKEUP Services ends here */}
        {/* Hand & Feet Care Services starts here */}
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Pedicure / Manicure / Ice cream pedicure</h4>
              <p>Indulge in perfection with our Pedicure and Manicure services or refresh with our Ice Cream Pedicure.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Hand polish / feet polish </h4>
              <p>Get perfectly polished hands and feet with our expert nail technicians' professional services.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Heel peel treatment </h4>
              <p>Experience ultimate foot care with our Heel Peel Treatment, gently exfoliating and softening rough heels for healthier-looking feet.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Nail Art</h4>
              <p>Express your unique style with our Nail Art services where our talented technicians create stunning designs to adorn your nails.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Nail Extension</h4>
              <p>Transform your nails with our Nail Extension services , adding length and strength for a glamorous and polished look.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item handfeetcare">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Gel polish</h4>
              <p>Achieve long-lasting color and shine with our Gel Polish services , providing durable and flawless results for your nails.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Dandruff</h4>
              <p> Say goodbye to flakes with our targeted dandruff treatment, restoring scalp health for smoother, flake-free hair.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Hair Loss</h4>
              <p>Combat hair loss and stimulate regrowth with our specialized haircare solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Sensitive</h4>
              <p> Soothe and calm sensitive skin with our gentle yet effective skincare products, providing relief and comfort.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Volume</h4>
              <p> Achieve luscious locks and added volume with our volumizing hair treatments, for hair that's full of life and body.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Pigmentation</h4>
              <p> Restore skin's natural radiance and even out tone with our pigmentation treatments, unveiling a brighter complexion.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Acne Treatment</h4>
              <p>Banish blemishes and breakouts with our targeted acne treatments, clearing skin for a smoother, clearer complexion.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item hairandskin">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Under Eye</h4>
              <p> Brighten and rejuvenate tired eyes with our under-eye treatments, reducing puffiness and dark circles for a refreshed look</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item bodyspa">
          <div className="service-item wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>Body Spa</h4>
              <p>Indulge in relaxation and rejuvenation with our luxurious body spa treatments, pampering your body and mind for total bliss.</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectGridIsotop2;