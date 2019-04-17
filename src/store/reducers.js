const initialState = {
    thisUserId:0,
    users:[],
    api:[],
    api_data:[]
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
            return {
                ...state,
                api: action.payload.map(service => {
                    service.data = []
                    return service;
                })
            };
        case('THIS_USER_ID'):
            return {...state,thisUserId: action.payload};
        case 'REQUESTED_DATA':
            return {
                ...state,
                api_data: []
            };
        case 'REQUESTED_DATA_SUCCEEDED':
            return {
                ...state,
                api_data: action.payload.data
            };
        default:
            return state
    }
};