import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Text = () => {
    const themeColor = useSelector((state) => state.theme.color2);
    return(
        <div style={{color:themeColor}}>
            {console.log("tc", themeColor)}
            This is color {themeColor} theme
        </div>
    )
}

export default Text;