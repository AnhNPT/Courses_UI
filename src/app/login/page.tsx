import SlideShow from "@/components/Shared/Slideshow";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "abc",
};

export default function Login() {
    return (
        <>
            <div className="content_container d_flex justify_between">
                <SlideShow autoStart={true} delay={3000}>
                    <div>abc</div>
                    <div>abc2</div>
                    <div>abc3</div>
                </SlideShow>
            </div>
        </>
    );
}
