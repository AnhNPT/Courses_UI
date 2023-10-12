"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { SwiperNavButtons } from "./SwiperNavButtons";

export default function SignInContent() {
    return (
        <>
            <Swiper className="slider_wrapper" loop slidesPerView={1} navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
                <SwiperSlide>
                    <div className="swiper_content">
                        <Image src="/signin-illust.svg" alt="" priority width={336} height={296}></Image>
                        <div className="swiper_content_text">
                            <span className="text_h2_semibold_32pt color_text_dark_172239">Start Learning New Skills</span>
                            <span className="text_p2_regular_26pt color_text_dark text_center">Learn almost any skill from a comfort of your home with our app.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_content">
                        <Image src="/signin-illust-2.svg" alt="" priority width={336} height={296}></Image>
                        <div className="swiper_content_text">
                            <span className="text_h2_semibold_32pt color_text_dark_172239">Start Learning New Skills</span>
                            <span className="text_p2_regular_26pt color_text_dark text_center">Learn almost any skill from a comfort of your home with our app.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper_content">
                        <Image src="/signin-illust-3.svg" alt="" priority width={336} height={296}></Image>
                        <div className="swiper_content_text">
                            <span className="text_h2_semibold_32pt color_text_dark_172239">Start Learning New Skills</span>
                            <span className="text_p2_regular_26pt color_text_dark text_center">Learn almost any skill from a comfort of your home with our app.</span>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperNavButtons /> */}
            </Swiper>
            <div>abc</div>
        </>
    );
}
