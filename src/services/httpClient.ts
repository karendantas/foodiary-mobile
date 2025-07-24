import axios from 'axios'
export const httpClient = axios.create({
    baseURL: 'https://2qj8pv9bd7.execute-api.sa-east-1.amazonaws.com'
})
