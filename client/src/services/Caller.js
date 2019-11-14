import axios from 'axios';
import Cookies from 'js-cookie';

const ROOT_URL = 'http://localhost:8081';

export function api(link, params = {}) {
    return axios({
        method: 'get',
        url: ROOT_URL + '/api' + link,
        params: params,
        headers: {'Authorization': 'Bearer '+ Cookies.get('token')}
    });
}

export function auth(link, body={}) {
    return axios({
        method: 'post',
        url: ROOT_URL + '/auth' + link,
        data: body
    });
}
