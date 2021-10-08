export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    const role =  localStorage.getItem('role');
    if(token && role =="Epicier"){
        return token
    }

    return false
}