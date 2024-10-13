import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/App.module.css";

const Home = () => {
  const features = [
    {
      title: "Personalized Guidance",
      description:
        "Get personalized Ayurvedic advice based on your health and lifestyle.",
    },
    {
      title: "Natural Remedies",
      description:
        "Explore natural remedies and herbal solutions recommended by AyurGenius.",
    },
    {
      title: "Wellness Tips",
      description:
        "Receive daily wellness tips and Ayurvedic practices to enhance your overall well-being.",
    },
    {
      title: "Holistic Lifestyle Plans",
      description:
        "Tailored lifestyle plans to maintain balance between body, mind, and spirit through Ayurveda.",
    },
    {
      title: "Expert Consultations",
      description:
        "Connect with Ayurvedic experts for personalized consultations and advice.",
    },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping of slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds (3 seconds)
    arrows: true, // Show next/prev arrows
  };

  return (
    <div className={styles.app}>
      <Header />

      <section className={styles.features}>
        <h2 className={styles.featuresHeading}>Features</h2>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div className={styles.carouselItem} key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Experience AyurGenius?</h2>
        <p>Start your Ayurvedic journey today and discover a healthier you!</p>
        <Link className={styles.ctaButton} to="/chat">
          Get Started
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
