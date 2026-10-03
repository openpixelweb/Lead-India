import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import bannerOne from "@/assets/images/bnner-01.jpg";
import bannerTwo from "@/assets/images/bnner-02.jpg";
import bannerThree from "@/assets/images/bnner-03.jpg";

const slides = [
  {
    id: 1,
    image: bannerOne,
    eyebrow: "Lead India Bharat Ratnas School",
    title: "Inspiring Young Minds",
    highlight: "to Learn, Lead & Excel",
    description:
      "Nurturing confident learners through strong academics, meaningful values, creativity and holistic development.",
    primaryText: "Enquire Now",
    primaryLink: "/admission-enquiry",
    secondaryText: "Campus Visit",
    secondaryLink: "/campus-visit",
  },

  {
    id: 2,
    image: bannerTwo,
    eyebrow: "A Joyful Learning Experience",
    title: "Where Curiosity Becomes",
    highlight: "Confidence",
    description:
      "Engaging classrooms, caring teachers and meaningful experiences help every child discover, participate and grow.",
    primaryText: "Explore Academics",
    primaryLink: "/academics",
    secondaryText: "Discover Student Life",
    secondaryLink: "/student-life",
  },

  {
    id: 3,
    image: bannerThree,
    eyebrow: "Admissions Open",
    title: "Give Your Child a Strong",
    highlight: "Start for Tomorrow",
    description:
      "Discover a safe, supportive and inspiring school environment where every child is encouraged to achieve their potential.",
    primaryText: "Admission Enquiry",
    primaryLink: "/admission-enquiry",
    secondaryText: "Schedule a Visit",
    secondaryLink: "/campus-visit",
  },
];



const HeroOne = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 4000); // auto slide every 4 seconds

  return () => clearInterval(interval);
}, [isPaused]);

  return (


    <section
      className="libr-hero"
      aria-label="Lead India Bharat Ratnas School"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ===============================
          HERO SLIDER
      ================================ */}
      <div className="libr-hero-slider">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`libr-hero-slide ${
              index === activeSlide ? "is-active" : ""
            }`}
            aria-hidden={index !== activeSlide}
          >
            {/* Background Image */}
            <div
              className="libr-hero-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Overlay */}
            <div className="libr-hero-overlay" />

            {/* Decorative overlay */}
            <div className="libr-hero-glow" />

            {/* Content */}
            <div className="container libr-hero-container">
              <div className="libr-hero-content">

                <div className="libr-hero-eyebrow">
                  <span className="libr-hero-eyebrow-line" />

                  <span>{slide.eyebrow}</span>

                  <span className="libr-hero-eyebrow-line" />
                </div>

                <h1 className="libr-hero-title">
                  <span className="libr-hero-title-main">
                    {slide.title}
                  </span>

                  <span className="libr-hero-title-highlight">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="libr-hero-description">
                  {slide.description}
                </p>

                <div className="libr-hero-actions">
                  <Link
                    to={slide.primaryLink}
                    className="libr-hero-btn libr-hero-btn-primary"
                  >
                    {slide.primaryText}
                  </Link>

                  <Link
                    to={slide.secondaryLink}
                    className="libr-hero-btn libr-hero-btn-secondary"
                  >
                    {slide.secondaryText}
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* ===============================
            PREVIOUS BUTTON
        ================================ */}
        <button
          type="button"
          className="libr-hero-arrow libr-hero-arrow-left"
          onClick={previousSlide}
          aria-label="Previous banner"
        >
          <FaChevronLeft />
        </button>

        {/* ===============================
            NEXT BUTTON
        ================================ */}
        <button
          type="button"
          className="libr-hero-arrow libr-hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next banner"
        >
          <FaChevronRight />
        </button>

        {/* ===============================
            DOT NAVIGATION
        ================================ */}
        <div className="libr-hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`libr-hero-dot ${
                index === activeSlide ? "is-active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>

        {/* Bottom curve */}
        <div className="libr-hero-bottom-shape" />
      </div>

    </section>
  );
};

export default HeroOne;