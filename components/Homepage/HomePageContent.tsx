"use client";

import React, { useEffect, useState } from "react";
import Category from "@/public/category";
import Heart from "@/public/heart";
import Discover from "@/public/discover";
import Stars from "@/public/stars";

interface IFilterCourses {
    index: number;
    img: JSX.Element;
    name: string;
}

export default function HomePageContent() {
    const [activeFilter, setActiveFilter] = useState<number>(0);
    const FilterCoursesTab: IFilterCourses[] = [
        {
            index: 0,
            img: <Category fill={activeFilter === 0 ? "#fff" : ""} />,
            name: "New",
        },
        {
            index: 1,
            img: <Stars fill={activeFilter === 1 ? "#fff" : ""} />,
            name: "Popular",
        },
        {
            index: 2,
            img: <Heart fill={activeFilter === 2 ? "#fff" : ""} />,
            name: "Free",
        },
        {
            index: 3,
            img: <Discover fill={activeFilter === 3 ? "#fff" : ""} />,
            name: "Pro",
        },
    ];
    const [filterCourses, setFilterCourses] = useState(FilterCoursesTab[0]);

    const handleSelectFilterCourses = (item: IFilterCourses) => () => {
        setFilterCourses(item);
        setActiveFilter(item.index);
    };

    return (
        <div className="home_content">
            <div className="welcome_text">
                <span className="text_p1_regular color_text_dark">Hello,</span> <br />
                <span className="text_h1_semibold color_text_dark_172239">AnhNPT 👋</span>
            </div>
            <div className="courses">
                <div className="filter_courses">
                    <span className="text_h2_semibold_32pt color_text_dark_172239">Courses 😉</span>
                    <div className="list_filter_courses">
                        {FilterCoursesTab.map((item) => (
                            <div onClick={handleSelectFilterCourses(item)} key={item.index} className={`${item.name === filterCourses.name ? "active" : ""} filter_courses_item pointer`}>
                                <div className={`${item.name === filterCourses.name ? "active" : ""} filter_courses_illust`}>{item.img}</div>
                                <span className={`${item.name === filterCourses.name ? " color_text_dark_172239 text_h5_semibold" : "text_p3_regular color_text_dark"} `}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
