import axios from "axios"
let baseUrl = "http://localhost:4000/api/order"

export const addOrder = (order, token) => {
    console.log(token)
    return axios.post(baseUrl, order, { headers: { "x-access-token": token  } })
}

export const getAllOrders = (token) => {
    // console.log(token)
    return axios.get(baseUrl, { headers: { "x-access-token": token  } })
}

