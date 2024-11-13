import axios from "axios"
let baseUrl = "http://localhost:4000/api/product"

export const getAllProduct = (page, type) => {
    return axios.get(`${baseUrl}?page=${page}&type=${type}`);
}

export const getProductById = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

export const deleteProduct = (id, token) => {
    return axios.delete(`${baseUrl}/${id}`, { headers: { "x-access-token": token  } })
}

export const addProduct = (product, token) => {
    // console.log(token)
    return axios.post(baseUrl, product, { headers: { "x-access-token": token  } })
}

export const updateProduct = (basket) => {
    return axios.put(`${baseUrl}/${basket._id}`, basket);
}