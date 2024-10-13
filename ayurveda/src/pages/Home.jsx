import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/App.module.css";
import AyurvedaBooks from "../components/AyurvedaBooks";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + features.length) % features.length
    );
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <section className={styles.features}>
        <h2 className={styles.featuresHeading}>Features</h2>{" "}
        {/* Features Heading */}
        <div className={styles.carousel}>
          {/* Left button */}
          <button
            className={`${styles.carouselBtn} ${styles.left}`}
            onClick={prevSlide}
          >
            &#60;
          </button>

          {/* Carousel content */}
          <div
            className={styles.carouselInner}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div className={styles.carouselItem} key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            className={`${styles.carouselBtn} ${styles.right}`}
            onClick={nextSlide}
          >
            &#62;
          </button>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Experience AyurGenius?</h2>
        <p>Start your Ayurvedic journey today and discover a healthier you!</p>
        <Link className={styles.ctaButton} to="/chat">
          Get Started
        </Link>
      </section>
      <section className={styles.books}>
        <h2>Explore Ayurvedic Books </h2>
        <AyurvedaBooks />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
