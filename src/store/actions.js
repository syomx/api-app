
export const logining = (status) => {
    return{
        type:'LOGINING',
        payload:status
    }
}

export const updateUsers = (users) => {
    return{
        type:'UPDATE_USER',
        payload:users
    }
}
