import axios from 'axios';

const api = axios.create({
    baseURL: "http://testapp.axreng.com:3000",
});

export const get = async (url : string, param?: string) => {
    try{
        const  response = await api.get(`${url}/${param}`);
        return response;
    }catch(e){
        return e;
    }   
}

export const post = async (url : string, body : object) => {
    try {
        const response = await api.post(url, body);
        return response;
    }
    catch(e){
        return e;
    }     
}
