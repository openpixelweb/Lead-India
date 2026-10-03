import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionName from "../ui/sectionName";
import Title from "../ui/title";
import SectionDescription from "../ui/sectionDescription";
import { Button } from "../ui/button";

import quotation from "@/assets/images/testimonial/quotation.png";
import Rating from "../ui/rating";

import {
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa6";

const Testimonial = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        position: "A Parent’s Experience",
        subtitle: "Parent of Grade 2 Student",
        review:
            "LIBR has given my child a positive and encouraging learning environment. The teachers are caring, approachable and always supportive of every child’s individual needs.",
        rating: 5,
    },
    {
        id: 2,
        name: "Rohit Kumar",
        position: "Learning & Teachers",
        subtitle: "Parent of Grade 1 Student",
        review:
            "We are very happy with the way the teachers make learning interesting and engaging. My child has become more confident, curious and excited to attend school every day.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sneha Reddy",
        position: "Child’s Growth",
        subtitle: "Parent of Nursery Student",
        review:
            "We have noticed a wonderful improvement in our child’s communication, confidence and participation. The school provides a good balance of academics, activities and personal attention.",
        rating: 5,
    },
    {
        id: 4,
        name: "Anil Verma",
        position: "A Parent’s Experience",
        subtitle: "Parent of Grade 4 Student",
        review:
            "The school provides a safe and friendly environment where children are encouraged to learn, participate and express themselves. We appreciate the regular guidance and support from the teachers.",
        rating: 5,
    },
];

    return (
        <section className="parent-testimonial-section">


            <div className="container">

                <div className="parent-testimonial-layout">

                    {/* ================================
                        LEFT CONTENT
                    ================================= */}

                    <div className="parent-testimonial-left">

                        <SectionName className="parent-testimonial-label">
                            Parent Testimonials
                        </SectionName>

                        <Title
                            size="3.5xl"
                            className="parent-testimonial-main-title"
                        >
                            Trusted by Parents.{" "}
                            <span className="parent-testimonial-title-accent">
                                Loved by Students.
                            </span>
                        </Title>

                        <SectionDescription className="parent-testimonial-left-description">
                            Hear from our parent community about their experiences,
                            their children’s learning journey, and life at LIBR.
                        </SectionDescription>


                        {/* arrows */}
                        <div className="parent-testimonial-navigation">

                            <button
                                ref={prevRef}
                                type="button"
                                className="testimonial-nav-btn"
                                aria-label="Previous testimonial"
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                ref={nextRef}
                                type="button"
                                className="testimonial-nav-btn testimonial-nav-next"
                                aria-label="Next testimonial"
                            >
                                <FaArrowRight />
                            </button>

                        </div>

                    </div>


                    {/* ================================
                        RIGHT SLIDER AREA
                    ================================= */}

                    <div className="parent-testimonial-right">

                        <div className="parent-testimonial-right-heading">
                            Real experiences from our parent community.
                        </div>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={18}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".parent-testimonial-pagination",
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 18,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[
                                Pagination,
                                Autoplay,
                                Navigation,
                            ]}
                            className="parent-testimonial-swiper"
                        >

                            {testimonials.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <Card
                                        name={item.name}
                                        position={item.position}
                                        subtitle={item.subtitle}
                                        review={item.review}
                                        rating={item.rating}
                                    />

                                </SwiperSlide>

                            ))}

                        </Swiper>

                        <div className="parent-testimonial-pagination" />

                    </div>

                </div>


                {/* CTA */}

                <div className="parent-testimonial-cta">

                    <Button
                        asChild
                        variant="outline"
                        className="parent-testimonial-btn"
                    >

                        <Link to="/parent-testimonials">

                            View Parent Stories

                            <FaArrowRight />

                        </Link>

                    </Button>

                </div>

            </div>

        </section>
    );
};

export default Testimonial;


const Card = ({
    name,
    position,
    subtitle,
    review,
    rating,
}) => {

    return (
        <div className="parent-testimonial-card">

            {/* TOP */}

            <div className="parent-testimonial-card-top">

                <div className="parent-testimonial-avatar">

                    <div className="parent-testimonial-avatar-placeholder">
                        {name?.charAt(0)}
                    </div>

                </div>


                <div className="parent-testimonial-card-quote">

                    <img
                        src={quotation}
                        alt=""
                    />

                </div>

            </div>


            {/* review */}

            <blockquote>
                “{review}”
            </blockquote>


            {/* rating */}

            <div className="parent-testimonial-rating">

                <Rating star={rating} />

            </div>


            {/* details */}

            <div className="parent-testimonial-person">

                <h4>
                    {name}
                </h4>

                <p>
                    {subtitle}
                </p>

                <span>
                    {position}
                </span>

            </div>

        </div>
    );
};