import axios from "axios"

export const getOrder = () => {
    return axios({
        url: `${import.meta.env.VITE_ENDPOINT_ORDER}/user`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    }) 
}

export const getOrderbyId = (id) => {
    return axios({
        url: `${import.meta.env.VITE_ENDPOINT_ORDER}/user/${id}`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    }) 
}

export const sendForm = (data) => {
    return axios.post(`${import.meta.env.VITE_ENDPOINT_ORDER}/user`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const updateForm = (id,data) => {
    return axios.put(`${import.meta.env.VITE_ENDPOINT_ORDER}/user/${id}`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const deletedForm = async (id) => {
    return await axios.delete(`${import.meta.env.VITE_ENDPOINT_ORDER}/user/${id}`,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}