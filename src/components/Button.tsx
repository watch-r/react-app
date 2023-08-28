import React, { ReactNode } from "react";

interface Props {
    children: string;
    color?: 'primary'| 'secondary'|'warning';
    onClick: () => void;
}

const Button = ({ children,onClick,color }: Props) => {
    return (
        <button type='button' className={'btn btn-'+color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
