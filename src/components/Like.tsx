import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [status, setStatus] = useState(true);
    const toggle = () => {
        setStatus(!status);
        onClick();
    };
    if (status)
        return (
            <AiOutlineHeart
                color='#ff6b81'
                size={200}
                onClick={toggle}
            ></AiOutlineHeart>
        );
    return (
        <AiFillHeart color='#ff6b81' size={200} onClick={toggle}></AiFillHeart>
    );
};

export default Like;
