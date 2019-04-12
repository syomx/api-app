const initialState = {
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
            console.log(action.payload)
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
        case('GET_API'):
            return {...state,api: action.payload};
        default:
            return state
    }
};