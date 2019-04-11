const initialState = {
    users:[],
    dataUpdated:false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case('LOGINING'):
            return {...state,auth: action.payload}
        case('UPDATE_USER'):
            return {...state,users: action.payload}
        default:
            return state
    }
};