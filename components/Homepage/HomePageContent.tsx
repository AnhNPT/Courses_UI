"use client";

import React, { useState } from "react";
import Image from "next/image";
import Category from "@/public/ImageComponents/category";
import Heart from "@/public/ImageComponents/heart";
import Discover from "@/public/ImageComponents/discover";
import Stars from "@/public/ImageComponents/stars";
import moment from "moment";
import { FilterCourses } from "@/src/enum/EnumHomePageFilter";
import { IFilterCourses, IListCourses } from "@/src/interface/PageInterface";

const ListCourses: IListCourses[] = [
    {
        img: "/courses-img-1.svg",
        time: "2023-10-07T15:45:00Z",
        name: "JavaScript",
        desc: "Advanced web applications.",
    },
    {
        img: "/courses-img-2.svg",
        time: "2023-10-07T15:45:00Z",
        name: "PowerPoint",
        desc: "Enhance your presentation skills.",
    },
    {
        img: "/courses-img-3.svg",
        time: "2023-10-07T15:45:00Z",
        name: "Data Science",
        desc: "Analyze the data like a pro.",
    },
    {
        img: "/courses-img-4.svg",
        time: "2023-10-07T15:45:00Z",
        name: "Digital Design",
        desc: "Learn the basics of the design.",
    },
];

export default function HomePageContent() {
    const [activeFilter, setActiveFilter] = useState<string>(FilterCourses.NEW);
    const FilterCoursesTab: IFilterCourses[] = [
        {
            index: 0,
            img: <Category fill={activeFilter === FilterCourses.NEW ? "#fff" : ""} />,
            name: FilterCourses.NEW,
        },
        {
            index: 1,
            img: <Stars fill={activeFilter === FilterCourses.POPULAR ? "#fff" : ""} />,
            name: FilterCourses.POPULAR,
        },
        {
            index: 2,
            img: <Heart fill={activeFilter === FilterCourses.FREE ? "#fff" : ""} />,
            name: FilterCourses.FREE,
        },
        {
            index: 3,
            img: <Discover fill={activeFilter === FilterCourses.PRO ? "#fff" : ""} />,
            name: FilterCourses.PRO,
        },
    ];

    const [filterCourses, setFilterCourses] = useState(FilterCoursesTab[0]);

    const handleSelectFilterCourses = (item: IFilterCourses) => () => {
        setFilterCourses(item);
        setActiveFilter(item.name);
    };

    return (
        <div className="home_content">
            <div className="welcome_text">
                <span className="text_p1_regular color_text_dark">Hello,</span> <br />
                <span className="text_h1_semibold color_text_dark_172239">AnhNPT 👋</span>
            </div>
            <div className="courses_filter_items">
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
            <div className="list_course_items">
                {ListCourses.map((item, index) => (
                    <div key={index} className="course_item pointer">
                        <div className="course_item_illust relative">
                            <Image src={item.img} alt="" fill></Image>
                        </div>
                        <div className="course_item_desc">
                            <span className="text_p3_regular color_text_dark">- {moment(item.time).format("H [h] m [min]")}</span>
                            <span className="text_h3_semibold color_text_dark_172239">{item.name}</span>
                            <span className="text_p3_regular color_text_dark">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
