import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";

import {
    FaArrowRight,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaSchool,
} from "react-icons/fa6";


const NewsletterOne = () => {

    return (
        <section className="campus-connect-section">

            <div className="container">

                <div className="campus-connect-main">


                    {/* =====================================================
                        LEFT PANEL
                    ====================================================== */}

                    <div className="campus-contact-panel">

                        <div className="campus-contact-panel-inner">


                            {/* TOP CONTENT */}

                            <span className="campus-top-caption">
                                Visit Our Campus
                            </span>


                            <h2 className="campus-main-title">

                                Come Experience{" "}

                                <span>
                                    LIBR in Person
                                </span>

                            </h2>


                            <p className="campus-main-description">

                                Visit our campus, explore the learning environment,
                                and connect with our team to learn more about your
                                child’s journey at LIBR.

                            </p>


                            {/* separator */}

                            <div className="campus-contact-divider" />


                            {/* CONTACT HEADING */}

                            <span className="campus-contact-caption">
                                Get in Touch
                            </span>


                            <h3>
                                We’re Here to Help You Take the Next Step
                            </h3>


                            <p className="campus-contact-intro">

                                Connect with our admissions team for information about
                                admissions, classes, campus visits and your child’s
                                learning journey.

                            </p>


                            {/* =====================================================
                                CONTACT ITEMS
                            ====================================================== */}

                            <div className="campus-contact-list">


                                {/* LOCATION */}

                                <div className="campus-contact-item">

                                    <div className="campus-contact-icon">
                                        <FaLocationDot />
                                    </div>


                                    <div className="campus-contact-item-content">

                                        <span className="campus-contact-label">
                                            Our Location
                                        </span>

                                        <p>
                                            Lead India Bharat Ratnas School
                                            <br />
                                            Bandlaguda, Keesara
                                            <br />
                                            Hyderabad, Telangana – 501318
                                        </p>

                                    </div>

                                </div>


                                {/* PHONE */}

                                <div className="campus-contact-item">

                                    <div className="campus-contact-icon">
                                        <FaPhone />
                                    </div>


                                    <div className="campus-contact-item-content">

                                        <span className="campus-contact-label">
                                            Call Us
                                        </span>

                                        <a href="tel:+919010325325">
                                            +91 9010 325 325
                                        </a>

                                    </div>

                                </div>


                                {/* EMAIL */}

                                <div className="campus-contact-item">

                                    <div className="campus-contact-icon">
                                        <FaEnvelope />
                                    </div>


                                    <div className="campus-contact-item-content">

                                        <span className="campus-contact-label">
                                            Email Us
                                        </span>

                                        <a href="mailto:info@librs.in">
                                            info@librs.in
                                        </a>

                                    </div>

                                </div>

                            </div>


                            {/* BACKGROUND BRAND */}

                            <div className="campus-contact-brand">
                                LIBR
                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        RIGHT FORM CARD
                    ====================================================== */}

                    <div className="campus-form-side">

                        <div className="campus-form-panel">


                            {/* FORM HEADING */}

                            <div className="campus-form-heading">

                                <span>
                                    Admission Enquiry
                                </span>

                                <h3>
                                    Have a Question? Let’s Connect.
                                </h3>

                            </div>


                            {/* =====================================================
                                FORM
                            ====================================================== */}

                            <form className="campus-enquiry-form">


                                <div className="campus-form-grid">


                                    {/* Parent Name */}

                                    <div className="campus-form-group">

                                        <label>
                                            Parent Name
                                        </label>

                                        <Input
                                            type="text"
                                            placeholder="Enter parent name"
                                        />

                                    </div>


                                    {/* Mobile */}

                                    <div className="campus-form-group">

                                        <label>
                                            Mobile Number
                                        </label>

                                        <Input
                                            type="tel"
                                            placeholder="Enter mobile number"
                                        />

                                    </div>


                                    {/* Email */}

                                    <div className="campus-form-group">

                                        <label>
                                            Email Address
                                        </label>

                                        <Input
                                            type="email"
                                            placeholder="Enter email address"
                                        />

                                    </div>


                                    {/* Grade */}

                                    <div className="campus-form-group">

                                        <label>
                                            Class / Grade
                                        </label>

                                        <Input
                                            type="text"
                                            placeholder="Enter class / grade"
                                        />

                                    </div>

                                </div>


                                {/* MESSAGE */}

                                <div className="campus-form-group campus-message-group">

                                    <label>
                                        Message
                                    </label>

                                    <textarea
                                        placeholder="Tell us how we can help you..."
                                        rows="5"
                                    />

                                </div>


                                {/* SUBMIT */}

                                <Button
                                    type="submit"
                                    className="campus-enquiry-btn"
                                >

                                    Send Enquiry

                                    <FaArrowRight />

                                </Button>

                            </form>

                        </div>


                        {/* =====================================================
                            CAMPUS VISIT STRIP
                        ====================================================== */}

                        <div className="campus-visit-strip">

                            <div className="campus-visit-icon">
                                <FaSchool />
                            </div>


                            <div className="campus-visit-copy">

                                <span>
                                    Campus Visit
                                </span>

                                <h3>
                                    See the school. Meet our team. Experience LIBR.
                                </h3>

                            </div>


                            <div className="campus-visit-action">

                                <Button
                                    asChild
                                    className="campus-visit-btn"
                                >

                                    <Link to="/campus-visit">

                                        Schedule a Campus Visit

                                        <FaArrowRight />

                                    </Link>

                                </Button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default NewsletterOne;