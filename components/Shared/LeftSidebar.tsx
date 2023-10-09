"use client";

import Image from "next/image";
import { useState } from "react";

interface IMenuItems {
    id: number;
    name: string;
    icon: string;
}

const menuItems: IMenuItems[] = [
    {
        id: 0,
        name: "Home",
        icon: "/home.svg",
    },
    {
        id: 1,
        name: "My Courses",
        icon: "/my-course.svg",
    },
    {
        id: 2,
        name: "Profile",
        icon: "/profile.svg",
    },
];

export default function LeftSidebar() {
    const [listMenu, setListMenu] = useState(menuItems[0]);

    const handleSetItemMenu = (item: IMenuItems) => () => {
        setListMenu(item);
    };

    return (
        <>
            <div className="left_sidebar">
                <div className="user_section pointer">
                    <Image priority src={"/avatar.svg"} width={48} height={48} alt=""></Image>
                    <div className="user_info">
                        <span className="text_h4_semibold color_text_dark_172239">John Smith</span>
                        <span className="text_p4_regular color_text_dark">johnsmith@gmail.com</span>
                    </div>
                    <Image src={"/arr-right.svg"} width={16} height={16} alt=""></Image>
                </div>
                <div className="left_sidebar_menu">
                    {menuItems.map((item) => (
                        <div onClick={handleSetItemMenu(item)} className={`pointer menu_item ${item === listMenu ? "active" : ""}`} key={item.id}>
                            <Image src={item.icon} width={32} height={32} alt=""></Image>
                            <span className="text_h4_semibold color_text_dark_172239">{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="left_sidebar_upgrade">
                    <Image src={"/rounded-user.svg"} alt="" width={64} height={64}></Image>
                    <div className="d_flex flex_col items_center">
                        <span className="text_h3_semibold color_text_dark_172239">Upgrade Plan</span>
                        <span className="text_center color_text_dark text_p3_regular">
                            Become a <b className="color_text_dark_172239">Pro</b> member today and save more than <b className="color_text_dark_172239">75%.</b>
                        </span>
                    </div>
                    <button className="see_deals d_flex items_center" type="button">
                        <span className="text_h3_semibold color_text_dark_172239">See Deal</span>
                        <Image src={"/arr-right.svg"} width={16} height={16} alt=""></Image>
                    </button>
                </div>
                <div className="log_out color_text_dark_172239 text_h3_semibold">Logout</div>
            </div>
        </>
    );
}
