import Image from "next/image";
import Button from "../ReactComponents/Button";
import Search from "../ReactComponents/Search";
import moment from "moment";

export default function RightSidebar() {
    return (
        <>
            <div className="right_sidebar">
                <div className="right_sidebar_action">
                    <Search inputProps={{ placeholder: "Search", className: "search_input" }} />
                    <Button
                        buttonProps={{
                            className: "notification_btn",
                        }}>
                        <Image src="/notification.svg" alt="" width={24} height={24}></Image>
                    </Button>
                </div>
                <div className="right_sidebar_lesson">
                    <span className="text_h2_semibold_32pt color_text_dark_172239">Continue lessons 📖</span>
                    <div className="continue_lesson_card_wrapper">
                        <div className="continue_lesson_card">
                            <Image src="/circle-blue-document.svg" alt="" width={64} height={64}></Image>
                            <div className="course_item_desc right_sidebar">
                                <span className="text_p3_regular color_text_dark">- {moment("2023-10-07T15:45:00Z").format("H [h] m [min]")}</span>
                                <span className="text_h3_semibold color_text_dark_172239">Terminology</span>
                                <span className="text_p3_regular color_text_dark">Start getting to know all the terminology.</span>
                            </div>
                        </div>
                        <div className="continue_lesson_card">
                            <Image src="/circle-blue-document.svg" alt="" width={64} height={64}></Image>
                            <div className="course_item_desc right_sidebar">
                                <span className="text_p3_regular color_text_dark">- {moment("2023-10-07T15:45:00Z").format("H [h] m [min]")}</span>
                                <span className="text_h3_semibold color_text_dark_172239">Terminology</span>
                                <span className="text_p3_regular color_text_dark">Start getting to know all the terminology.</span>
                            </div>
                        </div>
                        <div className="continue_lesson_card">
                            <Image src="/circle-blue-document.svg" alt="" width={64} height={64}></Image>
                            <div className="course_item_desc right_sidebar">
                                <span className="text_p3_regular color_text_dark">- {moment("2023-10-07T15:45:00Z").format("H [h] m [min]")}</span>
                                <span className="text_h3_semibold color_text_dark_172239">Terminology</span>
                                <span className="text_p3_regular color_text_dark">Start getting to know all the terminology.</span>
                            </div>
                        </div>
                        <div className="continue_lesson_card">
                            <Image src="/circle-blue-document.svg" alt="" width={64} height={64}></Image>
                            <div className="course_item_desc right_sidebar">
                                <span className="text_p3_regular color_text_dark">- {moment("2023-10-07T15:45:00Z").format("H [h] m [min]")}</span>
                                <span className="text_h3_semibold color_text_dark_172239">Terminology</span>
                                <span className="text_p3_regular color_text_dark">Start getting to know all the terminology.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
