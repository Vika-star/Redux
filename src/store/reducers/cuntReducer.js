
const initialState = {
    color : 'red'
};
  
const cuntReducer = (state = initialState, action) => {
    if(action.type == 'INCREMENT')
    {
        state.color = 'blue'
        return state;
    }
    else if(action.type == 'DECREMENT')
    {
        state.color = 'red'
        return state
    }
    else{
        return state
    }
  };
  
  export default cuntReducer;