
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