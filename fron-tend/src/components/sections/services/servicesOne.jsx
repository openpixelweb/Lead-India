import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"

import SectionName from "@/components/ui/sectionName"
import Title from "@/components/ui/title"
import SectionDescription from "@/components/ui/sectionDescription"
import { Button } from "@/components/ui/button"

import { FaArrowRight } from "react-icons/fa6"
import {
    FaBookOpen,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaSchool,
} from "react-icons/fa"

import man_img from "@/assets/images/shapes/man.png"

const ServicesOne = () => {

    const pagination = {
        clickable: true,
        el: ".academic-pagination",
    }

    const academicData = [
        {
            id: 1,
            title: "Academic Approach",
            description:
                "A student-focused approach that encourages understanding, curiosity and active participation in learning.",
            icon: <FaGraduationCap />,
            theme: "red",
        },
        {
            id: 2,
            title: "Curriculum",
            description:
                "A structured learning journey designed to build strong academic foundations and essential skills.",
            icon: <FaBookOpen />,
            theme: "purple",
        },
        {
            id: 3,
            title: "Teaching Methodology",
            description:
                "Engaging teaching practices that help students understand concepts and apply their learning effectively.",
            icon: <FaChalkboardTeacher />,
            theme: "red",
        },
        {
            id: 4,
            title: "Learning Environment",
            description:
                "A supportive environment where students are encouraged to explore, participate and grow with confidence.",
            icon: <FaSchool />,
            theme: "purple",
        },
    ]

    return (
        <section className="academic-libr-section lg:py-20 py-12">

            <div className="container">

                <div className="academic-libr-wrapper">

                    {/* Heading */}
                    <div className="grid lg:grid-cols-[42%_58%] grid-cols-1 lg:gap-16 gap-6 items-end">

                        <div>
                            <SectionName className="text-primary">
                                Academics at LIBR
                            </SectionName>

                            <Title
                                size="3.5xl"
                                className="lg:max-w-[520px]"
                            >
                                Learning Today.{" "}
                                <span className="academic-title-highlight">
                                    Leading Tomorrow.
                                </span>
                            </Title>
                        </div>

                        <div className="lg:pb-2">
                            <SectionDescription className="lg:max-w-[650px]">
                                Creating meaningful learning experiences that encourage
                                curiosity, knowledge, confidence and the overall
                                development of every student.
                            </SectionDescription>
                        </div>

                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-[24%_76%] grid-cols-1 lg:gap-10 gap-8 lg:mt-14 mt-10">

                        {/* Left Side */}
                        <div className="academic-libr-side">

                            <div className="academic-side-label">
                                <span>Discover</span>

                                <h4>
                                    Learning That
                                    <br />
                                    Inspires Growth
                                </h4>
                            </div>

                            <div className="academic-pagination" />

                            <div className="lg:mt-10 mt-7">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="academic-libr-btn"
                                >
                                    <Link to="/academics">
                                        Explore Academics
                                        <FaArrowRight />
                                    </Link>
                                </Button>
                            </div>

                        </div>

                        {/* Slider */}
                        <div className="academic-slider-wrap">

                            <Swiper
                                spaceBetween={24}
                                pagination={pagination}
                                loop={true}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 1.5,
                                    },
                                    900: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 2.5,
                                    },
                                }}
                                modules={[Pagination, Autoplay]}
                            >
                                {academicData.map((item) => (

                                    <SwiperSlide key={item.id}>

                                        <div
                                            className={`academic-slide ${
                                                item.theme === "red"
                                                    ? "academic-slide-red"
                                                    : "academic-slide-purple"
                                            }`}
                                        >

                                            <div className="academic-slide-icon">
                                                {item.icon}
                                            </div>

                                            <div className="academic-slide-line" />

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                {item.description}
                                            </p>

                                            <div className="academic-slide-footer">
                                                <span>
                                                    Discover More
                                                </span>

                                                <span className="academic-small-arrow">
                                                    <FaArrowRight />
                                                </span>
                                            </div>

                                        </div>

                                    </SwiperSlide>
                                ))}

                            </Swiper>

                        </div>

                    </div>

                </div>

            </div>

            <div className="academic-man-shape">
                <img
                    src={man_img}
                    alt=""
                />
            </div>

            <div className="academic-bg-circle academic-circle-one" />
            <div className="academic-bg-circle academic-circle-two" />

        </section>
    )
}

export default ServicesOne