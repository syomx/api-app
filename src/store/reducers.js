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
        case('EDIT_USER'):
            return { 
                ...state,
                users: state.users.map(user => {
                    if(user.id == action.payload.id) {
                        return action.payload;
                    }
                    return user;
                })
            }
        case('UPDATE_USERS'):
            return {...state,users: action.payload};
        case('STRING'):
            return {...state,string: action.payload};
        default:
            return state
    }
};