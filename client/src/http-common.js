import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://afigueredo-desafio-final.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});