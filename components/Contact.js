
import { useState } from "react";
const Contact = (props) => {
  const items = [
    {
      "id": 1,
      "title": "Advanced hair cut",
    },
    {
      "id": 2,
      "title": "Highlights",
    },
    {
      "id": 3,
      "title": "Global color ",
    },
    {
      "id": 4,
      "title": "Keratin",

    },
    {
      "id": 5,
      "title": "Botox",
    },
    {
      "id": 6,
      "title": "Smoothening/Straightening",

    },
    {
      "id": 7,
      "title": "Skin/Hair Treatment",

    },
    {
      "id": 8,
      "title": "Hair spa (Wella plex)",

    },
    {
      "id": 9,
      "title": "Threading / Detan",

    },
    {
      "id": 10,
      "title": "Hydra facial",

    },
    {
      "id": 11,
      "title": "Party makeup",
    },
    {
      "id": 12,
      "title": "Pedicure/Manicure",

    },
    {
      "id": 13,
      "title": "Hand polish / feet polish",

    },
    {
      "id": 14,
      "title": "Heel peel treatment",

    },
    {
      "id": 15,
      "title": "Nail Art",

    },
    {
      "id": 16,
      "title": "Nail Extension",

    },
    {
      "id": 17,
      "title": "Gel polish",

    },
  ]
  const [name, setName] = useState('')
  const [locality, setLocality] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let’s Talk For your <span>Appointment</span>
                </h2>
                <p>
                  We strive for the perfect cut, colour and style every time to suit each client's personality and needs while upholding the coveted TONI&GUY signature.
                </p>
              </div>

            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                method="post"
                onSubmit={(e)=>{
                  console.log(e)
                  e.preventDefault()
                  let data = {
                    name,
                    locality,
                    phone,
                    service: props.pricing,
                    time,
                    date
                  }
                  console.log('fetch');
                  fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  }).then((res) => {
                    console.log('Response received')
                    if (res.status === 200) {
                      setName('')
                      setLocality('')
                      setPhone('')
                      setService('')
                      setTime('')
                      setDate('')
                      console.log('Response succeeded!')
                    }
                  })
                }} 
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="Name"
                        required="true"
                        data-error="Please enter your Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Locality</label>
                      <input
                        type="text"
                        id="locality"
                        name="locality"
                        className="form-control"
                        value={locality}
                        onChange={(e)=>{setLocality(e.target.value)}}
                        placeholder="Locality"
                        required="true"
                        data-error="Please enter your locality"
                      />

                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                        placeholder="+91 98765 43210"
                        required="true"
                        data-error="Please enter your Phone Number"
                      />

                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="service">Services</label>
                      <select
                        name="service" id="service"
                        className="form-control"
                        value={props.pricing}
                        onChange={(e)=>{
                          console.log(e.target.value)
                          props.setPricing(e.target.value)
                        }}                        
                        required="true"
                        data-error="Please enter your service"
                        placeholder="Select a Service"
                      >
                        <option value="DEFAULT" disabled hidden>Select an Option</option>
                        {items.map((e) => (
                          <option key={e.id} value={e.title} id="service" className="form-control-drop">{e.title}</option>
                        ))}
                      </select>
                      <label htmlFor="service" className="for-icon" >
                        <i className="fas fa-chevron-down" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className="form-control"
                        value={time}
                        onChange={(e)=>{setTime(e.target.value)}}
                        placeholder="Time"
                        required=""
                        data-error="Please enter your time"
                      />

                      <div className="help-block with-errors" />
                    </div>
                  </div><div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-control"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                        placeholder="date"
                        required=""
                        data-error="Please enter your Date"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Book An Appointment <i className="far fa-angle-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
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
export default Contact;

export const Contact2 = () => {
  return (
    <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> let’s work together
                </span>
                <h2>let’s Work Together</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <h3>i,m avaiable at</h3>
                  <h5>
                    <i className="far fa-envelope" /> bill.sanders@example.com
                  </h5>
                  <h5>
                    <i className="far fa-phone" /> 239) 555-0108
                  </h5>
                </div>
                <div className="col-sm-4">
                  <div className="arrow">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="form-group">
                  <label className="for-title" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="for-title" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required=""
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Write Messege....."
                    required=""
                    data-error="Please enter your Message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-envelope" /> Messege me
                  </button>
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
