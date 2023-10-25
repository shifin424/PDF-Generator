import axiosInstance from "../API/UserApi"

export const userLoginApi = (data) => {
    return axiosInstance.post('/login', { data })
}

export const userSingUpApi = (data) =>{
    return axiosInstance.post('/sign-up',{data})
}

export const uploadPdfApi =(data) =>{
    console.log(data,"in service")
    return axiosInstance.post('/upload-pdf',{data})
}