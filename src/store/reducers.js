const initialState = {
    thisUserId:0,
    users:[],
    api:[],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case('UPDATE_USER'):
            return { 
                ...state,
                users: [...state.users, action.payload]
            }
        case('EDIT_USER'):
            return { 
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload.id) {
                        return action.payload;
                    }
                    return user;
                })
            }
        case('UPDATE_USERS'):
            return {...state,users: action.payload};
        case('GET_API'):
            return {...state,api: action.payload};
        case('THIS_USER_ID'):
            return {...state,thisUserId: action.payload};
        default:
            return state
    }
};