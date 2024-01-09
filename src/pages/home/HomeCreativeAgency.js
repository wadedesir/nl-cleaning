import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-three-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-three-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataBlog from "../../data/Blog/blog-two-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-one-data.json";
import dataServices2 from "../../data/Services/services-five-data.json";
// Components
import Navbar from "../../components/Navbar/NavbarMiddleLogo";
import CreativeSlider from "../../components/Slider/CreativeSlider";
import FooterThree from "../../components/Footer/FooterThree";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import PortfolioThree from "../../components/Portfolio/PortfolioThree";
import CounterTwo from "../../components/Counter/CounterTwo";
import TeamThree from "../../components/Team/TeamThree";
import TestimonialOne from "../../components/Testimonial/TestimonialOne";
import ParallaxOne from "../../components/Parallax/ParallaxOne";
import ServiceOne from "../../components/Service/ServiceOne";
import BlogTwo from "../../components/Blog/BlogTwo";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../elements/ContactForm/ContactFormOne";

const HomeCreativeAgency = () => (
  <Loader>
    <Navbar data={dataNavbar} menuAlign="center" />
    <CreativeSlider />
    <WhoWeAreThree
      data={dataServices}
      title="About NL Cleaning Services"
      tagline=""
    >
      <p>
        Welcome to NL Cleaning Services, your go-to destination for top-notch cleaning solutions! At NL Cleaning Services, we take pride in delivering excellence in cleanliness. Our experienced and dedicated team is committed to transforming your spaces into immaculate havens where hygiene meets aesthetics.
      </p>
      <p>
        Whether it's routine maintenance or a deep cleaning overhaul, we bring a level of expertise that goes beyond the ordinary. We not only prioritize spotless results but also emphasize reliability and customer satisfaction. With NL Cleaning Services, you can trust that your space is in capable hands, receiving the attention it deserves.
      </p>
      <p>
        Discover the joy of a consistently clean and organized environment with NL Cleaning Services. We go above and beyond to make your experience seamless and enjoyable. Welcome to a cleaner, brighter world – welcome to NL Cleaning Services, where our commitment to excellence ensures your satisfaction every time!
      </p>
    </WhoWeAreThree>
    <ServiceOne
      data={dataServices2}
      title="Our Services"
      tagline="Finesh Real Estate"
    />
    <ParallaxOne title="Ready to work with us?" btnText="Contact Us">
      Unleash Possibilities, Ignite Success: Partner with Us for a Digital Journey Like Never Before!
    </ParallaxOne>
    {/* <PortfolioThree data={dataPortfolio} title="Our Works" backfont="Works" /> */}
    <TestimonialOne data={dataTestimonials} title="Testimonials" />
    {/* <CounterTwo data={dataCounter} /> */}
    {/* <TeamThree
      data={dataTeam}
      title="Our Team"
      tagline="Go together for success"
      backfont="Team"
    /> */}
    <ContactForm title="Contact Form Two" />

    <FooterThree />
  </Loader>
);

export default HomeCreativeAgency;
