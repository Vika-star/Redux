import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Block = () =>{
    const themeColor = useSelector((state) => state.theme.color2);
    return(
        <div style={{background:themeColor, height: 200, width: 300, borderRadius: "50%"}}></div>
    )
};

export default Block;