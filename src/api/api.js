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
    }
}
