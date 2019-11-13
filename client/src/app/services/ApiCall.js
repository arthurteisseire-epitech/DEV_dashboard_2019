import axios from 'axios';

export default function ApiCall(link, params={}) {
    return axios.get('http://localhost:8081/api' + link, {params: params});
}
