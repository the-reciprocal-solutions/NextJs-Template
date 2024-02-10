"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section id="testimonials" className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      Clients <span>Feedback</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnin natus totam rem aperiam
                      eaque inventore veritatis
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author" 
                      />
                    </div>
                    <div className="text">
                      Very Friendly  staff made my 4-year-old son feel very comfortable, and this is the first salon he actually enjoyed going to.
                    </div>
                    <div className="testi-des">
                      <h5>Gandhimathy Gandhimathy</h5>
                      {/* <span>CEO &amp; Founder</span> */}
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      I came for pedicure, pradhiksha madam did pedicure perfect , as I have diabetes post pedicure itching legs stopped completely immediately.
                    </div>
                    <div className="testi-des">
                      <h5>Nithya S</h5>
                      {/* <span>Web Developer</span> */}
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Pratheesha's Pedicure and Body massage was awesome, mallika's Hair spa was great  Totally a satisfying  service at Tony & Guy Nava India
                    </div>
                    <div className="testi-des">
                      <h5>aista defiva</h5>
                      {/* <span>CEO &amp; Founder</span> */}
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Thank You so much for the great haircut I love how it turned out, and I appreciate your skill and attention to detail.Mr suresh kumar has done hair cut to me..thanks a lot
                    </div>
                    <div className="testi-des">
                      <h5>JOEL JOHN</h5>
                      {/* <span>Web Developer</span> */}
                    </div>
                  </div>
                </Slider>
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
  }
}
