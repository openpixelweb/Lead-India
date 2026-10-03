import React from "react";
import { Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaHeart,
  FaLeaf,
  FaArrowRight,
  FaUsers,
  FaBookOpen,
  FaStar,
  FaPaperPlane,
} from "react-icons/fa";


import aboutBg from "@/assets/images/abt-bg.png";

/*
  OPTIONAL:
  If you create a decorative background image similar to the reference,
  import it and use it on .libr-about-playful.

  import aboutBg from "@/assets/images/about/about-bg.png";
*/

const AboutOne = () => {
  return (
<section
  className="libr-about-playful"
  style={{
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="libr-about-bg-overlay" />


      <div className="container libr-about-container">
        <div className="libr-about-grid">

          <div className="libr-about-visual">
            <div className="libr-about-yellow-swoosh" />



        




          </div>

          <div className="libr-about-content">

            <div className="libr-about-label">
              <span>About Our School</span>

              <span className="libr-about-label-line libr-line-long" />
              <span className="libr-about-label-line libr-line-short" />
            </div>

            <h2 className="libr-about-title">
              Building Strong Foundations
              <br />
              for a <span>Brighter Future</span>
            </h2>

            <p className="libr-about-description">
              Lead India Bharat Ratnas School is committed to creating a
              nurturing learning environment that encourages academic growth,
              strong values and the overall development of every student.
            </p>

            <div className="libr-about-feature-grid">

              <div className="libr-about-feature-card libr-feature-blue">
                <div className="libr-feature-icon">
                  <FaGraduationCap />
                </div>

                <h3>
                  Quality
                  <br />
                  Education
                </h3>

                <p>
                  Engaging learning
                  <br />
                  for brighter minds
                </p>

                <span className="libr-feature-bottom-line" />
              </div>

              <div className="libr-about-feature-card libr-feature-pink">
                <div className="libr-feature-icon">
                  <FaHeart />
                </div>

                <h3>Strong Values</h3>

                <p>
                  Character building
                  <br />
                  for a better tomorrow
                </p>

                <span className="libr-feature-bottom-line" />
              </div>

              <div className="libr-about-feature-card libr-feature-green">
                <div className="libr-feature-icon">
                  <FaLeaf />
                </div>

                <h3>
                  Holistic
                  <br />
                  Development
                </h3>

                <p>
                  Nurturing every
                  <br />
                  child&apos;s unique potential
                </p>

                <span className="libr-feature-bottom-line" />
              </div>

            </div>

            <div className="libr-about-bottom">

              <Link
                to="/about-us"
                className="libr-about-button"
              >
                <span>Discover More</span>
                <FaArrowRight />
              </Link>

              <div className="libr-about-mini-features">

                <div className="libr-about-mini-item">
                  <FaUsers />

                  <span>
                    Happy
                    <br />
                    Students
                  </span>
                </div>

                <div className="libr-about-mini-divider" />

                <div className="libr-about-mini-item">
                  <FaBookOpen />

                  <span>
                    Caring
                    <br />
                    Teachers
                  </span>
                </div>

                <div className="libr-about-mini-divider" />

                <div className="libr-about-mini-item">
                  <FaStar />

                  <span>
                    Safe &amp; Supportive
                    <br />
                    Environment
                  </span>
                </div>

                <div className="libr-about-mini-divider" />

                <div className="libr-about-mini-item">
                  <FaHeart />

                  <span>
                    Bright
                    <br />
                    Futures
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutOne;
