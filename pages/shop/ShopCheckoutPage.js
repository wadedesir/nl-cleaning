import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-25.jpg";
// Components
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import NavbarCart from "../../components/Navbar/NavbarCart";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ShopCheckoutPage = () => (
  <Loader>
    <NavbarCart data={dataNavbar} />
    <PageTitleTwo title="Shopping Cart" image={imgBg} />
    <section>
      <div className="container">
        <form
          name="contact-form"
          id="contact-form"
          action="php/contact.php"
          method="POST"
        >
          <div className="checkout-form">
            <div className="row">
              <div className="col-md-6 mb-20 col-xs-12 col-sm-6">
                <div className="mb-20">
                  <h5 className="upper-case">Billing Address</h5>
                </div>
                <div className="form-group">
                  <label>Full Name</label>
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
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    className="form-control"
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="Address"
                    data-error="Address is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
                <div className="form-group">
                  <label>Permanent Address</label>
                  <input
                    className="form-control"
                    id="address_2"
                    name="address_2"
                    type="text"
                    required
                    placeholder="Permanent Address"
                    data-error="Permanent Address is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    className="form-control"
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="City"
                    data-error="City Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
                <div className="form-group">
                  <div className="col-xs-6 pl-0">
                    <label>State/Province/Region</label>
                    <input className="form-control" name="state" type="text" />
                  </div>
                  <div className="col-xs-6 pr-0">
                    <label>Zip/Postal Code</label>
                    <input
                      className="form-control"
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      placeholder="Zip Code"
                      data-error="Zip Code is Required"
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div className="mb-20">
                  <h5 className="upper-case">Credit Card Info</h5>
                </div>
                <div className="form-group">
                  <label>Credit Card Name</label>
                  <input
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    placeholder="Full Name"
                    data-error="Valid Credit Card Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    className="form-control"
                    name="card"
                    type="text"
                    placeholder="0000-0000-0000-0000"
                    required
                    data-error="Valid Card Name"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
                <div className="form-group">
                  <div className="col-xs-4 pl-0">
                    <label>CVV</label>
                    <input
                      className="form-control"
                      name="cvv"
                      type="text"
                      placeholder="CVV"
                      required
                      data-error="Valid CVV is Required"
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                  <div className="col-xs-4 pl-0">
                    <label>Exp. Month</label>
                    <div className="form-select">
                      <select className="form-control" name="month">
                        <option selected="selected" defaultValue="">
                          Month
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 remove-padding">
                    <label>Exp. Year</label>
                    <div className="form-select">
                      <select className="form-control" name="year">
                        <option selected="selected" defaultValue="">
                          Year
                        </option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5 className="upper-case">Order Total</h5>
                    </div>
                    <div className="col-xs-6 text-right">
                      <h5>$329.89</h5>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <button
                      className="btn btn-dark btn-md btn-block btn-animate remove-margin"
                      type="submit"
                      name="submitorder"
                    >
                      <span>
                        Submit order <i className="ion-checkmark"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ShopCheckoutPage;
