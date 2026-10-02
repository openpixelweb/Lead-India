import React from 'react'
import { Link } from 'react-router-dom'
import Title from '@/components/ui/title'
import bannerImage from "@/assets/images/banner-ll.jpg";
import {
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
const HeroOne = () => {
  return (
<section className="libr-banner">

  {/* MAIN HERO */}
  <div className="libr-banner-main">

    <div className="container libr-banner-container">

      {/* LEFT CONTENT */}
      <div className="libr-banner-content">

        <h4 className="libr-banner-school-name">
          Lead India Bharat Ratnas School
        </h4>

        <h1 className="libr-banner-title">
          Inspiring Young Minds
          <br />
          <span className="libr-banner-title-dark">
            to Learn,
          </span>{" "}
          <span className="libr-banner-title-highlight">
            Lead & Excel
          </span>
        </h1>

        <p className="libr-banner-text">
          Nurturing young minds with quality education,
          <br className="desktop-break" />
          strong values, creativity, confidence, and
          <br className="desktop-break" />
          opportunities to excel.
        </p>

        <div className="libr-banner-actions">

          <Link
            to="/admission-enquiry"
            className="libr-banner-btn libr-banner-btn-primary"
          >
            Enquire Now
          </Link>

          <Link
            to="/campus-visit"
            className="libr-banner-btn libr-banner-btn-outline"
          >
            Campus Visit
          </Link>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="libr-banner-image-area">

        <img
          src={bannerImage}
          alt="Lead India Bharat Ratnas School students"
          className="libr-banner-image"
        />

      </div>

    </div>

  </div>


  {/* TRUST STRIP */}
  <div className="libr-banner-trust">

    <div className="container">

      <div className="libr-banner-trust-grid">

        <div className="libr-banner-trust-item">
          <span className="trust-icon">
            <FaShieldAlt />
          </span>

          <span>Safe & Caring Environment</span>
        </div>


        <div className="libr-banner-trust-item">
          <span className="trust-icon">
            <FaLightbulb />
          </span>

          <span>Engaging Learning</span>
        </div>


        <div className="libr-banner-trust-item">
          <span className="trust-icon">
            <FaUsers />
          </span>

          <span>Holistic Development</span>
        </div>


        <div className="libr-banner-trust-item">
          <span className="trust-icon">
            <FaHeart />
          </span>

          <span>Strong Parent Partnership</span>
        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default HeroOne