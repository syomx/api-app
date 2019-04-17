
export const updateString = (string) => {
    return{
        type:'STRING',
        payload:string
    }
}

export const addUserInStore = (user) => {
    return{
        type:'UPDATE_USER',
        payload:user
    }
}
export const editUser = (user) => {
    return{
        type:'EDIT_USER',
        payload:user
    }
}
export const updateThisUserId = (id) => {
    return{
        type:'THIS_USER_ID',
        payload:id
    }
}
export const updateUsers = (users) => {
    return{
        type:'UPDATE_USERS',
        payload:users
    }
}
export const getApi = (api) => {
    return{
        type:'GET_API',
        payload:api
    }
}

const requestData = () => {
    return {type: 'REQUESTED_DATA' }
};
  
const requestDataSuccess = (data,service) => {
    return {
        type: 'REQUESTED_DATA_SUCCEEDED',
        payload:{
            data: data,
            service:service
        }
    }
};

export const fetchInstagramData = (dispatch,url) => {
    dispatch(requestData());
    return fetch(url)
            .then(res => res.json())
            .then(
                data => dispatch(requestDataSuccess(data.data)),
        );
};

export const fetchUnsplashData = (dispatch,url) => {
    dispatch(requestData());
    return fetch(url)
            .then(res => res.json())
            .then(
                data => dispatch(requestDataSuccess(data.results)),
        );
};

export const fetchYoutubeData = (dispatch,url) => {
    dispatch(requestData());
    return fetch(url)
            .then(res => res.json())
            .then(
                data => dispatch(requestDataSuccess(data.data)),
        );
};