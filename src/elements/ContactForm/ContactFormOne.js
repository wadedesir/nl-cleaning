import React from "react";

const ContactFormOne = ({ title }) => (
  <section className="white-bg form-style-one" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading pb-0">
          <h2 className="text-uppercase text-center">{title}</h2>
          <h3>Call or Text:</h3>
        </div>
      </div>

      <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4 className="mr-4"> <i className={`icon-phone font-40px dark-icon`}></i> </h4>
        <h3 className="ml-2">: 781-827-9720</h3>
      </div>
      <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4 className="mr-4"> <i className={`icon-phone font-40px dark-icon`}></i> </h4>
        <h3 className="ml-2">: 781-866-7100</h3>
      </div>
      <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <h4 className="mr-4"> <i className={`icon-email font-40px dark-icon`}></i> </h4> */}
        <h3 className="ml-2">Email: Natachaprep@gmail.com</h3>
      </div>

      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          {/* <form name="contact-form">
            <div className="messages"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label className="sr-only" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Your Name"
                    data-error="Your Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                    data-error="Please Enter Valid Email"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <label className="sr-only" for="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject-2"
                    placeholder="Your Subject"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="sr-only" for="message">
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="7"
                placeholder="Your Message"
                required
                data-error="Please, Leave us a message"
              ></textarea>
              <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="text-left">
              <button
                type="submit"
                name="submit"
                className="btn btn-outline btn-md btn-circle btn-animate remove-margin"
              >
                <span>
                  Send Message <i className="ion-android-arrow-forward"></i>
                </span>
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  </section>
);

export default ContactFormOne;
