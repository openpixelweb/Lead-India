import React from "react"
import {
    FaEnvelope,
    FaLocationDot,
    FaPhone,
    FaArrowRight,
} from "react-icons/fa6"

import { Link } from "react-router-dom"
import footerLogo from "@/assets/images/logo-footer.png"
import Logo from "@/components/ui/logo"
import SocalIcons from "@/components/ui/socalIcons"
import ScrollUp from "./scrollUp"
import SlideUp from "@/lib/animations/slideUp"


const FooterOne = () => {
    return (
        <footer className="libr-footer">

            <div className="libr-footer-bg libr-footer-bg-one" />
            <div className="libr-footer-bg libr-footer-bg-two" />

            <div className="container relative z-10">

                <div className="libr-footer-grid">

                    {/* =========================================
                        COLUMN 1 - SCHOOL INFO
                    ========================================== */}

                    <SlideUp delay={2}>

                        <div className="libr-footer-about">

                            <div className="libr-footer-logo">
                               <img
                                    src={footerLogo}
                                    alt="Lead India Bharat Ratnas School"
                                    className="libr-footer-logo-img"
                                />
                            </div>

                            <h3 className="libr-school-name">
                                Lead India Bharat Ratnas School
                            </h3>

                            <p className="libr-footer-description">
                                Inspiring young minds through quality education,
                                strong values and meaningful learning experiences
                                that prepare students for a brighter future.
                            </p>


                            <div className="libr-follow-wrap">

                                <span className="libr-follow-title">
                                    Follow Us
                                </span>

                                <SocalIcons
                                    prentClass="libr-social-list"
                                    className="libr-social-icon"
                                />

                                
                            {/* Admission CTA */}

                            <Link
                                to="/admission-enquiry"
                                className="libr-footer-enquiry"
                            >
                                Admissions Enquiry

                                <FaArrowRight />
                            </Link>

                            </div>

                        </div>

                    </SlideUp>


                    {/* =========================================
                        COLUMN 2 - QUICK LINKS
                    ========================================== */}

                    <SlideUp delay={3}>

                        <div className="libr-footer-column">

                            <h3 className="libr-footer-title">
                                Quick Links
                            </h3>

                            <ul className="libr-footer-links">

                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about-us">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/why-libr">
                                        Why LIBR?
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/student-life">
                                        Student Life
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/infrastructure">
                                        Infrastructure
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/gallery">
                                        Gallery
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    </SlideUp>


                    {/* =========================================
                        COLUMN 3 - ACADEMICS & ADMISSIONS
                    ========================================== */}

                    <SlideUp delay={4}>

                        <div className="libr-footer-column">

                            <h3 className="libr-footer-title">
                                Academics & Admissions
                            </h3>

                            <ul className="libr-footer-links">

                                <li>
                                    <Link to="/academics">
                                        Academics
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/curriculum">
                                        Curriculum
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/academic-programmes">
                                        Academic Programmes
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admissions">
                                        Admissions
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admission-process">
                                        Admission Process
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/eligibility">
                                        Eligibility
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/admission-faqs">
                                        Admission FAQs
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/campus-visit">
                                        Schedule a Campus Visit
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    </SlideUp>


                    {/* =========================================
                        COLUMN 4 - CONTACT
                    ========================================== */}

                    <SlideUp delay={5}>

                        <div className="libr-footer-column libr-footer-contact">

                            <h3 className="libr-footer-title">
                                Contact Us
                            </h3>


                            {/* School */}

                            <h4 className="libr-contact-school">
                                Lead India Bharat Ratnas School
                            </h4>


                            {/* Address */}

                            <div className="libr-contact-item">

                                <div className="libr-contact-icon">
                                    <FaLocationDot />
                                </div>

                                <div>

                                    <span>
                                        Our Location
                                    </span>

                                    <p>
                                        Bandlaguda, Keesara
                                        <br />
                                        Hyderabad, Telangana – 501318
                                    </p>

                                </div>

                            </div>


                            {/* Phone */}

                            <div className="libr-contact-item">

                                <div className="libr-contact-icon">
                                    <FaPhone />
                                </div>

                                <div>

                                    <span>
                                        Call Us
                                    </span>

                                    <a href="tel:+919010325325">
                                        +91 9010 325 325
                                    </a>

                                </div>

                            </div>


                            {/* Email */}

                            <div className="libr-contact-item">

                                <div className="libr-contact-icon">
                                    <FaEnvelope />
                                </div>

                                <div>

                                    <span>
                                        Email Us
                                    </span>

                                    <a href="mailto:info@librs.in">
                                        info@librs.in
                                    </a>

                                </div>

                            </div>



                        </div>

                    </SlideUp>

                </div>


                {/* =========================================
                    BOTTOM FOOTER
                ========================================== */}

                <div className="libr-footer-bottom">

                    <p>
                        © 2026 Lead India Bharat Ratnas School.
                        All Rights Reserved.
                    </p>


                    <div className="libr-footer-bottom-links">

                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <span />

                        <Link to="/terms-conditions">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

            <ScrollUp />

        </footer>
    )
}

export default FooterOne