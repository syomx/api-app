const initialState = {
    string:'hello world',
    dataUpdated:false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
};