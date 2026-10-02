import React from "react"
import { Link } from "react-router-dom"

import Title from "@/components/ui/title"
import { Button } from "@/components/ui/button"
import SectionName from "@/components/ui/sectionName"
import SectionDescription from "@/components/ui/sectionDescription"

import about_img_1 from "@/assets/images/hm-abt.jpg"
import icreement from "@/assets/images/about/icreement.png"
import shap_1 from "@/assets/images/about/shap-1.png"
import customer from "@/assets/images/about/customer.png"

import { cn } from "@/lib/utils"
import SlideUp from "@/lib/animations/slideUp"

const AboutOne = ({ gridClass, isAboutpage }) => {
    return (
        <section className="about-libr-section lg:py-20 py-14">
            <div className="container">
                <div
                    className={cn(
                        "grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-12 items-center",
                        gridClass
                    )}
                >
                    {/* =========================
                        LEFT IMAGE AREA
                    ========================== */}
                    <div className="relative">
                        <SlideUp>
                            <div className="relative lg:pr-8">

                                {/* Decorative Shape */}
                                <img
                                    src={shap_1}
                                    alt=""
                                    className="absolute -top-7 -left-6 max-w-[130px] opacity-70 z-0"
                                />

                                {/* Main Image */}
                                <div className="relative z-10 about-libr-image-wrap">
                                    <img
                                        src={about_img_1}
                                        alt="Lead India Bharat Ratnas School"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* image overlay */}
                                    <div className="about-libr-image-overlay" />
                                </div>

                                {/* Floating Quality Card */}
                                <div className="about-libr-floating-card about-card-one">
                                    <div className="about-libr-floating-icon">
                                        <img
                                            src={icreement}
                                            alt="Quality Education"
                                        />
                                    </div>

                                    <div>
                                        <span className="about-libr-small-label">
                                            Our Focus
                                        </span>

                                        <h6>
                                            Quality Education
                                        </h6>
                                    </div>
                                </div>

                                {/* Floating Values Card */}
                                <div className="about-libr-floating-card about-card-two">
                                    <div className="about-libr-floating-icon">
                                        <img
                                            src={customer}
                                            alt="Student Development"
                                        />
                                    </div>

                                    <div>
                                        <span className="about-libr-small-label">
                                            Every Student
                                        </span>

                                        <h6>
                                            Holistic Growth
                                        </h6>
                                    </div>
                                </div>

                                {/* Accent Block */}
                                <div className="about-libr-accent-block">
                                    <span>LIBR</span>
                                    <p>Learn • Grow • Lead</p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* =========================
                        RIGHT CONTENT AREA
                    ========================== */}
                    <div
                        className={cn(
                            "lg:pl-2",
                            isAboutpage ? "" : "lg:max-w-[590px]"
                        )}
                    >
                        <SectionName>
                            About Our School
                        </SectionName>

                        <Title
                            size={"3.5xl"}
                            className={"pb-5"}
                        >
                            Building Strong Foundations for a{" "}
                            <span className="about-libr-title-highlight">
                                Brighter Future
                            </span>
                        </Title>

                        <SectionDescription>
                            Lead India Bharat Ratnas School is committed to creating
                            a nurturing learning environment that encourages academic
                            growth, strong values and the overall development of every
                            student.
                        </SectionDescription>

                        {/* Highlight Points */}
                        <div className="about-libr-points mt-8">

                            <div className="about-libr-point">
                                <span className="about-libr-check">
                                    ✓
                                </span>

                                <div>
                                    <h6>
                                        Quality Education
                                    </h6>
                                </div>
                            </div>

                            <div className="about-libr-point">
                                <span className="about-libr-check">
                                    ✓
                                </span>

                                <div>
                                    <h6>
                                        Strong Values
                                    </h6>
                                </div>
                            </div>

                            <div className="about-libr-point">
                                <span className="about-libr-check">
                                    ✓
                                </span>

                                <div>
                                    <h6>
                                        Holistic Development
                                    </h6>
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="lg:mt-10 mt-8">
                            <Button
                                asChild
                                variant="outline"
                                className="about-libr-btn"
                            >
                                <Link to="/about-us">
                                    Discover More
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOne