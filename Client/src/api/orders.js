import axios from 'axios';

const apiOrders = axios.create({
  baseURL: 'http://localhost:3001/ordenes',
})

export const getOrders = async () => {
  const res = await apiOrders.get('/')
  return res.data;
}

export const createOrder =(order)=> apiOrders.post('/', order)

export const deleteOrder = (id) => apiOrders.delete(`/${id}`)

export const detalleOrder = (id) => apiOrders.get(`/${id}`)