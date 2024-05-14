import axios from "axios"

export const getForm = () => {
    return axios({
        url: `${import.meta.env.VITE_ENDPOINT_SERVICE}/services`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const getOrderbyId = (id) => {
    return axios({
        url: `${import.meta.env.VITE_ENDPOINT_SERVICE}/services/${id}`,
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    }) 
}

export const sendService = (data) => {
    return axios.post(`${import.meta.env.VITE_ENDPOINT_SERVICE}/services`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const updateForm = (id,data) => {
    return axios.put(`${import.meta.env.VITE_ENDPOINT_SERVICE}/services/${id}`,data,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}

export const deletedForm = async (id) => {
    return await axios.delete(`${import.meta.env.VITE_ENDPOINT_SERVICE}/services/${id}`,{
        headers:{
            "Content-Type": "application/json",
        },
    })
}