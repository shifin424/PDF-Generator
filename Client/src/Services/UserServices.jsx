import axiosInstance from "../API/UserApi"

export const userLoginApi = (data) => {
    return axiosInstance.post('/login', { data })
}

export const userSingUpApi = (data) =>{
    return axiosInstance.post('/sign-up',{data})
}