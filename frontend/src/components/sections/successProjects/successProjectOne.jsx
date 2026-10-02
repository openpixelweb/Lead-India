import React from "react";
import { Link } from "react-router-dom";

import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import SectionDescription from "@/components/ui/sectionDescription";

import Kindergarden from "@/assets/icons/kindergarden";
import Book from "@/assets/icons/book";
import Blocks from "@/assets/icons/blocks";
import Chalkboard from "@/assets/icons/chalkboard";

import { FaArrowRight } from "react-icons/fa6";


const SuccessProjectOne = () => {

    const actions = [
        {
            id: "01",
            title: "Admissions",
            description:
                "Explore the admission process and important information.",
            buttonText: "View Admissions",
            link: "/admissions",
            icon: <Book />,
            design: "pink",
        },
        {
            id: "02",
            title: "Campus Visit",
            description:
                "Visit our campus and experience LIBR firsthand.",
            buttonText: "Schedule a Visit",
            link: "/campus-visit",
            icon: <Kindergarden />,
            design: "purple",
        },
        {
            id: "03",
            title: "Admission Enquiry",
            description:
                "Have questions about admissions? Our team is here to help.",
            buttonText: "Enquire Now",
            link: "/admission-enquiry",
            icon: <Blocks />,
            design: "yellow",
        },
        {
            id: "04",
            title: "Contact Us",
            description:
                "Connect with our team for further information and assistance.",
            buttonText: "Contact Us",
            link: "/contact-us",
            icon: <Chalkboard />,
            design: "green",
        },
    ];


    return (
        <section className="libr-parent-actions">

            {/* Decorative background */}
            <div className="libr-action-decoration libr-action-decoration-left" />
            <div className="libr-action-decoration libr-action-decoration-right" />

            <div className="container relative z-10">

                {/* =====================================
                    HEADING
                ====================================== */}

                <div className="libr-actions-heading">

                    <SectionName className="text-primary">
                        Admissions
                    </SectionName>

                    <Title
                        size="3.5xl"
                        className="libr-actions-main-title"
                    >
                        Start Your Journey with{" "}
                        <span className="text-destructive">
                            LIBR
                        </span>
                    </Title>

                    <SectionDescription className="libr-actions-description">
                        Everything you need to take the next step towards your child’s admission.
                    </SectionDescription>

                </div>


                {/* =====================================
                    ACTION CARDS
                ====================================== */}

                <div className="libr-actions-grid">

                    {actions.map((item) => (

                        <Link
                            key={item.id}
                            to={item.link}
                            className={`libr-action-card libr-action-${item.design}`}
                        >

                            {/* Icon */}
                            <div className="libr-action-icon">

                                {item.icon}

                            </div>


                            {/* Title */}
                            <h3 className="libr-action-title">

                                {item.title}

                            </h3>


                            {/* Description */}
                            <p className="libr-action-description">

                                {item.description}

                            </p>


                            {/* CTA */}
                            <div className="libr-action-link">

                                <span>
                                    {item.buttonText}
                                </span>

                                <FaArrowRight />

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
};


export default SuccessProjectOne;