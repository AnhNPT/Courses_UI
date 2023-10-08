import LeftSidebar from "../Shared/LeftSidebar";
import RightSidebar from "../Shared/RightSidebar";
import HomePageContent from "./HomePageContent.1";

export default function HomePage() {
    return (
        <>
            <LeftSidebar />
            <HomePageContent />
            <RightSidebar />
        </>
    );
}
