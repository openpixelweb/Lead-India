import React from "react"
import { Link } from "react-router-dom"

import faq_banner from "@/assets/images/vsion-hm.jpg"

import SectionName from "../ui/sectionName"
import Title from "../ui/title"
import SectionDescription from "../ui/sectionDescription"
import { Button } from "../ui/button"

import { FaArrowRight, FaQuoteLeft } from "react-icons/fa6"

const FaqComp = () => {
    return (
        <section className="founder-vision-section lg:py-10 py-10">

            <div className="container">

                <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-12">

                    {/* ==========================
                        LEFT IMAGE
                    =========================== */}

                    <div className="founder-image-column">

                        <div className="founder-image-wrap">

                            <img
                                src={faq_banner}
                                alt="Founder of Lead India Bharat Ratnas School"
                                className="founder-main-image"
                            />

                            {/* Decorative gradient */}
                            <div className="founder-image-overlay" />

                            {/* Bottom Label */}
                            <div className="founder-image-label">

                                <span className="founder-label-small">
                                    Our Foundation
                                </span>

                                <h4>
                                    Vision • Values • Purpose
                                </h4>

                            </div>

                        </div>


                        {/* Decorative circle */}
                        <div className="founder-decor-circle founder-circle-one" />

                        <div className="founder-decor-circle founder-circle-two" />

                    </div>


                    {/* ==========================
                        RIGHT CONTENT
                    =========================== */}

                    <div className="founder-content">

                        <SectionName className="text-primary">
                            Our Founder’s Vision
                        </SectionName>


                        <Title
                            size={"3.5xl"}
                            className="lg:max-w-[600px] pb-5"
                        >
                            A Vision to Inspire Every Child to{" "}
                            <span className="founder-title-highlight">
                                Achieve More
                            </span>
                        </Title>


                        <SectionDescription className="lg:max-w-[600px]">
                            LIBR was built with a vision to create meaningful
                            educational experiences that help students grow with
                            knowledge, confidence, values and purpose.
                        </SectionDescription>


                        {/* ==========================
                            QUOTE
                        =========================== */}

                        <div className="founder-quote">

                            <div className="founder-quote-icon">
                                <FaQuoteLeft />
                            </div>

                            <blockquote>
                                “Education is about inspiring young minds to learn,
                                grow and build a better future.”
                            </blockquote>

                            <span className="founder-quote-note">
                                Founder vision statement
                            </span>

                        </div>


                        {/* CTA */}

                        <div className="lg:mt-9 mt-7">

                            <Button
                                asChild
                                variant="outline"
                                className="founder-vision-btn"
                            >
                                <Link to="/founder-story">

                                    Discover Our Story

                                    <FaArrowRight />

                                </Link>
                            </Button>

                        </div>

                    </div>

                </div>

            </div>


            {/* Background decorative text */}

            <span className="founder-bg-text">
                VISION
            </span>

        </section>
    )
}

export default FaqComp