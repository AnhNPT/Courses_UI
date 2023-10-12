import SignInContent from "@/components/Auth/SignInContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign in",
};

export default function Login() {
    return (
        <>
            <div className="content_container d_flex justify_between">
                <SignInContent />
            </div>
        </>
    );
}
