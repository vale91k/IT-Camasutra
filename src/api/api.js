import * as Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "6abc28ed-2140-4c70-8890-3a1b00bcdbbc",
  },
});
export const UserAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowApi(userId) {
    return instance.delete(`follow/${userId}`);
  },
  followApi(userId) {
    return instance.post(`follow/${userId}`);
  },
  setUserPageApi(userId) {
    return profileAPI.setUserPageApi(userId);
  },
  login() {
    return instance.get("auth/me");
  },
};
export const profileAPI = {
  setUserPageApi(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
  savePhotoApi(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfileApi(profileData) {
    return instance.put("profile", profileData);
  },
};
export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe, captcha) {
    return instance.post("auth/login", { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("auth/login");
  }
};
export const sequrityApi = {
  getCaptcha() {
    return instance.get("security/get-captcha-url");
  },
  
};