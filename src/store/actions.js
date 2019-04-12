
export const logining = (status) => {
    return{
        type:'LOGINING',
        payload:status
    }
}

export const updateUsers = (users) => {
    return{
        type:'UPDATE_USERS',
        payload:users
    }
}
