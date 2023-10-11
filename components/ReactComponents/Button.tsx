import { ButtonHTMLAttributes } from "react";

interface IButton {
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button(props: IButton) {
    const { onClick, children, buttonProps } = props;
    return (
        <button {...buttonProps} className={`${buttonProps?.className || ""}`} onClick={onClick}>
            {children}
        </button>
    );
}
