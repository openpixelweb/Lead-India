import React from "react"
import { Link } from "react-router-dom"

import SectionName from "@/components/ui/sectionName"
import Title from "@/components/ui/title"
import SectionDescription from "@/components/ui/sectionDescription"
import { Button } from "@/components/ui/button"

import {
    FaChalkboardTeacher,
    FaFlask,
    FaBookOpen,
    FaBasketballBall,
    FaLaptopCode,
    FaShieldAlt,
    FaArrowRight,
} from "react-icons/fa"

import campus_img from "@/assets/images/hm-scl-all.jpg"

const Teams = () => {
    const facilities = [
        {
            title: "Smart Classrooms",
            description:
                "Comfortable learning spaces that support an engaging classroom experience.",
            icon: <FaChalkboardTeacher />,
        },
        {
            title: "Laboratories",
            description:
                "Dedicated spaces for practical learning, exploration and discovery.",
            icon: <FaFlask />,
        },
        {
            title: "Library",
            description:
                "A learning space that encourages reading, knowledge and independent exploration.",
            icon: <FaBookOpen />,
        },
        {
            title: "Sports Facilities",
            description:
                "Spaces that encourage physical activity, teamwork and an active lifestyle.",
            icon: <FaBasketballBall />,
        },
        {
            title: "Technology & Learning",
            description:
                "Technology-enabled facilities that support modern learning experiences.",
            icon: <FaLaptopCode />,
        },
        {
            title: "Safety & Security",
            description:
                "A campus environment focused on student safety and well-being.",
            icon: <FaShieldAlt />,
        },
    ]

    return (
        <section className="infra-premium-section lg:py-20 py-12">
            <div className="infra-bg-shape infra-bg-shape-one" />
            <div className="infra-bg-shape infra-bg-shape-two" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-[38%_62%] grid-cols-1 lg:gap-16 gap-10 items-start">

                    {/* LEFT CONTENT */}
                    <div className="infra-left-content lg:sticky lg:top-[120px]">
                        <SectionName className="text-primary">
                            Our Infrastructure
                        </SectionName>

                        <Title
                            size={"3.5xl"}
                            className="lg:max-w-[480px] pb-5"
                        >
                            A Campus Designed for{" "}
                            <span className="infra-premium-highlight">
                                Learning & Growth
                            </span>
                        </Title>

                        <SectionDescription className="lg:max-w-[470px]">
                            Explore learning spaces and facilities designed to
                            support education, activities, safety and the overall
                            student experience.
                        </SectionDescription>

                        <div className="infra-accent-line">
                            <span className="infra-accent-red" />
                            <span className="infra-accent-purple" />
                        </div>

                        <div className="lg:mt-9 mt-7">
                            <Button
                                asChild
                                variant="outline"
                                className="infra-premium-btn"
                            >
                                <Link to="/infrastructure">
                                    Explore Our Campus
                                    <FaArrowRight />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="infra-right-area">

                        {/* IMAGE */}
                        <div className="infra-premium-image-wrap">
                            <img
                                src={campus_img}
                                alt="Lead India Bharat Ratnas School Campus"
                                className="infra-premium-image"
                            />

                            <div className="infra-image-gradient" />

                            <div className="infra-image-text">
                                <span>LIBR Campus</span>

                                <h4>
                                    Spaces Designed to Help Students Learn,
                                    Explore and Grow
                                </h4>
                            </div>
                        </div>

                        {/* FACILITIES */}
                        {/* <div className="infra-feature-grid">
                            {facilities.map((item, index) => (
                                <div
                                    className="infra-feature-item"
                                    key={index}
                                >
                                    <div className="infra-feature-icon">
                                        {item.icon}
                                    </div>

                                    <div className="infra-feature-copy">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams