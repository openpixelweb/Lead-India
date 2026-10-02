import React from "react"
import { Link } from "react-router-dom"

import SectionName from "@/components/ui/sectionName"
import Title from "@/components/ui/title"
import SectionDescription from "@/components/ui/sectionDescription"
import { Button } from "@/components/ui/button"

import { FaArrowRight, FaCalendarAlt } from "react-icons/fa"

import { bolgData } from "@/lib/fackdata/blogData"


const BlogsOne = () => {
    return (
        <section className="libr-news-section lg:py-20 py-12">

            <div className="libr-news-bg libr-news-bg-one" />
            <div className="libr-news-bg libr-news-bg-two" />

            <div className="container relative z-10">

                {/* ==================================
                    HEADING
                =================================== */}

                <div className="grid lg:grid-cols-[48%_52%] grid-cols-1 lg:gap-16 gap-5 items-end lg:pb-14 pb-10">

                    <div>
                        <SectionName className="text-primary">
                            News & Events
                        </SectionName>

                        <Title
                            size={"3.5xl"}
                            className="lg:max-w-[620px]"
                        >
                            Discover What’s Happening at{" "}
                            <span className="libr-news-title-highlight">
                                LIBR
                            </span>
                        </Title>
                    </div>

                    <div className="lg:pb-1">

                        <SectionDescription className="lg:max-w-[650px]">
                            Stay connected with the latest school events, student
                            activities, celebrations, achievements and memorable
                            moments from our campus.
                        </SectionDescription>

                    </div>

                </div>


                {/* ==================================
                    NEWS GRID
                =================================== */}

                <div className="libr-news-grid">

                    {/* FEATURED STORY */}

                    {bolgData.slice(0, 1).map((item) => (
                        <article
                            className="libr-news-featured"
                            key={item.id}
                        >

                            <img
                                src={item.thumb}
                                alt={item.title}
                                className="libr-news-image"
                            />

                            <div className="libr-news-overlay" />

                            <div className="libr-news-content">

                                <span className="libr-news-category">
                                    {item.category}
                                </span>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.blog_desc}
                                </p>

                                <Link
                                    to={item.link}
                                    className="libr-news-readmore libr-news-readmore-light"
                                >
                                    Read More
                                    <FaArrowRight />
                                </Link>

                            </div>

                        </article>
                    ))}


                    {/* RIGHT STORIES */}

                    <div className="libr-news-side">

                        {bolgData.slice(1, 3).map((item) => (
                            <article
                                className="libr-news-small"
                                key={item.id}
                            >

                                <div className="libr-news-small-image">

                                    <img
                                        src={item.thumb}
                                        alt={item.title}
                                    />

                                    <div className="libr-news-small-tag">
                                        {item.category}
                                    </div>

                                </div>


                                <div className="libr-news-small-content">

                                    <div className="libr-news-meta">

                                        <FaCalendarAlt />

                                        <span>
                                            {item.date}
                                        </span>

                                    </div>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.blog_desc}
                                    </p>

                                    <Link
                                        to={item.link}
                                        className="libr-news-readmore"
                                    >
                                        Read More
                                        <FaArrowRight />
                                    </Link>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>


                {/* ==================================
                    BOTTOM CATEGORY STRIP
                =================================== */}

                <div className="libr-news-category-strip">

                    <div>
                        <span>School Events</span>
                        <p>
                            Celebrations, programmes and memorable school moments.
                        </p>
                    </div>

                    <div>
                        <span>Student Activities</span>
                        <p>
                            Competitions, experiences and learning beyond the classroom.
                        </p>
                    </div>

                    <div>
                        <span>Latest Updates</span>
                        <p>
                            Important school news, announcements and upcoming events.
                        </p>
                    </div>

                </div>


                {/* ==================================
                    CTA
                =================================== */}

                <div className="flex justify-center lg:mt-12 mt-9">

                    <Button
                        asChild
                        variant="outline"
                        className="libr-news-btn"
                    >
                        <Link to="/news-events">

                            View All News & Events

                            <FaArrowRight />

                        </Link>
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default BlogsOne