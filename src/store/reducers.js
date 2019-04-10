const initialState = {
    string:'hello world',
    auth:'f',
    dataUpdated:false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case('LOGINING'):
            return {...state,auth: action.payload}
        default:
            return state
    }
};