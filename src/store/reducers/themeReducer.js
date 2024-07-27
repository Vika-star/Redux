// import { BLACK_THEME, PINK_THEME, RED_THEME } from '../actions/themes';

const initState = {
    color2: 'black'
};

const themeReducer = (state = initState, action) => {
    if (action.type == 'BLACK') {
        console.log("bbb");
        state.color2 = 'black';
        return state;
    }
    else if (action.type == 'PINK') {
        console.log("ppp");
        state.color2 = 'pink';
        return state;
    }
    else if (action.type == 'RED') {
        console.log("rrr");
        state.color2 = 'red';
    }
    else {
        return state;
    }

}
export default themeReducer;
