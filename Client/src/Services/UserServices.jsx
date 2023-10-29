import axios from "../Api/UserApi"

export const userLoginApi = (data) => {
    return axios.post('/login', { data })
}

export const userSingUpApi = (data) =>{
    return axios.post('/sign-up',{data})
}

export const uploadPdfApi =(data,{headers}) =>{
    console.log(data,headers,"in service")
    return axios.post('/upload-pdf',data,{headers})
}