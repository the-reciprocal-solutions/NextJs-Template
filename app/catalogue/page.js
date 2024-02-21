import { Fragment } from "react";
import Header from "@/layout/Header";

const Catalogue = (header) => {
  return (
    <Fragment>
        <Header header={2} onePageMenu={true} />
      <div className="container pt-150">
      <div className="newDiv">
        <iframe
          className="iframe"
          src="https://online.fliphtml5.com/uhror/astv/index.html"
          seamless="seamless"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
      </div>
      </div>
      
    </Fragment>
  );
};

export default Catalogue;
