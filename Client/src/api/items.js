import axios from 'axios';

const apiItems = axios.create({
  baseURL: 'http://localhost:3001/items',
  mode: "cors"
})

export const getItems = async () => {
  const res = await apiItems.get('/')
  return res.data;
}