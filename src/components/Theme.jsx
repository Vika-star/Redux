import React, { useEffect, useState } from "react";
import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { blackTheme, pinkTheme, redTheme } from "../store/actions/themes";


const Theme = () => {

    const dispatch = useDispatch();
    const themeColor = useSelector((state) => state.theme.color2);


    return (
        <div>
            <div>
                <button onClick={() => dispatch(blackTheme())}>Black</button>
                <button onClick={() => dispatch(pinkTheme())}>Pink</button>
                <button onClick={() => dispatch(redTheme())}>Red</button>
            </div>
                
            <Text />
            <Block />
            <Button />
        </div>
    )
}

export default Theme;