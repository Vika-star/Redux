import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Button = () =>{
    const themeColor = useSelector((state) => state.theme.color2);
    return(
        <div>
            <button style={{background:themeColor, color: "white"}}>Hello theme {themeColor}</button>
        </div>
    )
};

export default Button;