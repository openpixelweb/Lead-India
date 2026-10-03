import React from "react";
import { Link } from "react-router-dom";

import SectionName from "../ui/sectionName";
import Title from "../ui/title";
import SectionDescription from "../ui/sectionDescription";
import { Button } from "../ui/button";

import Kindergarden from "@/assets/icons/kindergarden";
import Book from "@/assets/icons/book";
import Blocks from "@/assets/icons/blocks";
import Chalkboard from "@/assets/icons/chalkboard";

import whyLibrImage from "@/assets/images/banner-ll.jpg";

import { FiArrowRight } from "react-icons/fi";


const Programs = () => {

    const features = [
        {
            id: "01",
            title: "Academic Environment",
            icon: <Book />,
            theme: "blue",
        },
        {
            id: "02",
            title: "Dedicated Faculty",
            
            icon: <Chalkboard />,
            theme: "purple",
        },
        {
            id: "03",
            title: "Holistic Development",
            
            icon: <Kindergarden />,
            theme: "orange",
        },
        {
            id: "04",
            title: "Modern Infrastructure",
            
            icon: <Blocks />,
            theme: "violet",
        },
        {
            id: "05",
            title: "Activities & Experiences",
            
            icon: <Kindergarden />,
            theme: "pink",
        },
        {
            id: "06",
            title: "Values & Character",
            
            icon: <Book />,
            theme: "purple",
        },
    ];


    return (
        <section className="why-parents-section">

            <div className="why-decoration why-decoration-top"></div>

            <div className="container">

                <div className="why-parents-wrapper">



                    {/* =========================
                        RIGHT CONTENT
                    ========================== */}

                    <div className="why-parents-content">

                        <SectionName className="why-parents-section-name">
                            Why Choose LIBR?
                        </SectionName>


                        <Title
                            size="3.5xl"
                            className="why-parents-title"
                        >
                            A Learning Environment Where Every Child Can{" "}

                            <span className="why-parents-highlight">
                                Grow
                            </span>

                        </Title>


                        <SectionDescription className="why-parents-description">

                            We focus on creating meaningful learning experiences
                            that support academic progress, personal growth and
                            strong values.

                        </SectionDescription>


                        {/* =========================
                            FEATURES
                        ========================== */}

                        <div className="why-parents-features">

                            {features.map((item) => (

                                <div
                                    key={item.id}
                                    className="why-parent-feature"
                                >

                                    <div
                                        className={`why-parent-feature-icon why-icon-${item.theme}`}
                                    >
                                        {item.icon}
                                    </div>


                                    <div className="why-parent-feature-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* =========================
                            BUTTON
                        ========================== */}

                        <div className="why-parents-button-wrap">

                            <Button
                                asChild
                                className="why-parents-btn"
                            >

                                <Link to="/why-libr">

                                    <span>
                                        Discover Why LIBR
                                    </span>

                                    <FiArrowRight />

                                </Link>

                            </Button>

                        </div>

                    </div>

                    
                    {/* =========================
                        LEFT IMAGE
                    ========================== */}

                    <div className="why-parents-image-area">

                        <div className="why-parents-image-box">

                            <img
                                src={whyLibrImage}
                                alt="LIBR students learning with teacher"
                                className="why-parents-image"
                            />

                        </div>


                        {/* Floating Card */}

                        <div className="why-parents-floating-card">

                            <div className="why-floating-icon">
                                <Kindergarden />
                            </div>

                            <div className="why-floating-content">

                                <span>
                                    Nurturing
                                </span>

                                <strong>
                                    Curious Minds
                                </strong>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

            <div className="why-decoration why-decoration-bottom"></div>

        </section>
    );
};


export default Programs;