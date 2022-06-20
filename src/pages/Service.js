import axios from 'axios';

const token = localStorage.getItem('token')
const authAxios = axios.create({
    baseURL: `https://shopperback.herokuapp.com/api/v1/`,
    headers: {
      Authorization: 'Bearer ' + token
    },
  })


  export const getAPI =(path)=> {
    return authAxios.get(path);
  }