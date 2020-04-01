import * as Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bf5b40ae-a239-498d-8d79-2ebbce87b1e2"
      }
});
export const UserAPI = {
    getUsers(currentPage =1, pageSize= 10) {
        return instance.get(
          `users?page=${currentPage}&count=${pageSize}`
         
        ).then(response => response.data);
    },
    unfollowApi(userId)  {
        return instance.delete(`follow/${userId}`)
    },
    followApi(userId) {
        return instance.post(`follow/${userId}`)
    },
    setUserPageApi(userId) {
        return profileAPI.setUserPageApi(userId)
    },
    login() {
        return instance.get('auth/me')
    }
}
export const profileAPI = {
    
    setUserPageApi(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    }
}
export const authAPI = { 
    me () {
        return instance.get('auth/me')
    },
    auth(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
