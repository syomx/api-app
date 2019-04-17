export default function CheckToken(){
    return localStorage.getItem('login_token') === 'token';
}