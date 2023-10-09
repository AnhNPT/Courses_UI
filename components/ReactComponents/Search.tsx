import { HTMLProps } from "react";
interface ISearch {
    wrapperProps?: HTMLProps<HTMLFormElement>;
    inputProps?: HTMLProps<HTMLInputElement>;
    handleFunction?: (value: string) => void;
}

export default function Search(props: ISearch) {
    const { wrapperProps, inputProps, handleFunction } = props;
    return (
        <>
            <input {...inputProps} className={`search_input ${inputProps?.className || ""}`}></input>
        </>
    );
}
