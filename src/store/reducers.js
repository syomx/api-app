const initialState = {
    users:[],
    string:'',
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case('UPDATE_USER'):
            return { 
                ...state,
                users: [...state.users, action.payload]
            }
        case('UPDATE_USERS'):
            return {...state,users: action.payload};
        case('STRING'):
            return {...state,string: action.payload};
        default:
            return state
    }
};