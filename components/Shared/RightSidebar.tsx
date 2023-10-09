import Search from "../ReactComponents/Search";

export default function RightSidebar() {
    return (
        <>
            <div className="right_sidebar">
                <Search inputProps={{ placeholder: "Search", className: "search_input" }} />
            </div>
        </>
    );
}
