import React from "react";
import { Link } from "react-router-dom";
import {
    FaBasketballBall,
    FaPalette,
    FaPuzzlePiece,
    FaTrophy,
    FaCalendarAlt,
    FaMedal,
    FaArrowRight,
    FaChevronRight,
} from "react-icons/fa";


/* ADD YOUR 3 IMAGES */
import studentMainImage from "@/assets/images/bytc-01.png";
import studentSmallImage1 from "@/assets/images/bytc-02.png";
import studentSmallImage2 from "@/assets/images/bytc-03.png";


const AgeOne = () => {
    const studentLifeItems = [
        {
            title: "Sports & Fitness",
            description:
                "Building teamwork, discipline and confidence through active participation.",
            icon: <FaBasketballBall />,
            theme: "purple",
        },
        {
            title: "Arts & Culture",
            description:
                "Encouraging creativity and self-expression through cultural experiences.",
            icon: <FaPalette />,
            theme: "pink",
        },
        {
            title: "Clubs & Activities",
            description:
                "Creating opportunities for students to explore interests beyond academics.",
            icon: <FaPuzzlePiece />,
            theme: "violet",
        },
        {
            title: "Competitions",
            description:
                "Inspiring students to challenge themselves, participate and showcase their abilities.",
            icon: <FaTrophy />,
            theme: "yellow",
        },
        {
            title: "Events & Celebrations",
            description:
                "Creating memorable experiences that bring learning and school life together.",
            icon: <FaCalendarAlt />,
            theme: "blue",
        },
        {
            title: "Student Achievements",
            description:
                "Celebrating student efforts, talents, milestones and accomplishments.",
            icon: <FaMedal />,
            theme: "green",
        },
    ];

    return (
        <section className="student-story-match-section">
            <div className="container">
                <div className="student-story-match-shell">

                    {/* LEFT SIDE */}
                    <div className="student-story-match-left">

                        {/* Top intro */}
                        <div className="student-story-top">

                            <div className="student-story-number">
                                
                            </div>

                            <div className="student-story-heading-block">
                                <span className="student-story-label">
                                    Beyond the Classroom
                                </span>

                                <h2 className="student-story-heading">
                                    Where Talents Grow &{" "}
                                    <span>Achievements Shine</span>
                                </h2>

                                <p className="student-story-text">
                                    From sports and cultural activities to competitions and
                                    celebrations, every experience gives students opportunities
                                    to explore their talents, build confidence and grow beyond academics.
                                </p>
                            </div>
                        </div>

                        {/* Bottom collage */}
                        <div className="student-story-collage">

                            {/* Doodle */}
                            <span className="student-story-doodle student-story-doodle-left" />
                            <span className="student-story-doodle student-story-doodle-top" />

                            <div className="student-story-main-photo">
                               <img
                                    src={studentMainImage}
                                    alt="LIBR student participating in a creative activity"
                                />
                            </div>

                            <div className="student-story-side-photos">
                                <div className="student-story-small-photo">
                                    <img
                                        src={studentSmallImage1}
                                        alt="LIBR students participating in a group activity"
                                    />
                                </div>

                                <div className="student-story-small-photo">
                                    <img
                                        src={studentSmallImage2}
                                        alt="LIBR student achievement and activity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="student-story-match-right">
                        <div className="student-story-list">
                            {studentLifeItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`student-story-list-item student-theme-${item.theme}`}
                                >
                                    <div className="student-story-list-icon">
                                        {item.icon}
                                    </div>

                                    <div className="student-story-list-content">
                                        <h3>{item.title}</h3>
                                    </div>

                                    <div className="student-story-list-arrow">
                                        <FaChevronRight />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="student-story-list-cta">
                            <Link to="/student-life" className="student-story-btn">
                                <span>Explore Student Life</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgeOne;