import {networkErrorException} from '../../core/middlewares/errors/networkErrorException';
const request = ({url, method, body}) => {
    let user = JSON.parse(localStorage.getItem('user'));

    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.api_token}`
        },
    })
        .then(response => {
            if (method === 'delete') {
                return null;
            }

            if (response.status !== 200 && response.status !== 201) {
                throw networkErrorException(response.status, response.statusText);
            }

            return response.json();
        })
        .then((result) => waitPromise(result));
};

const waitPromise = (result) => new Promise(r => setTimeout(() => r(result), 1000));

const get = (url) => {
    return request({url, method: 'get'});
};

const post = (url, body) => {
    return request({url, method: 'post', body});
};

const put = (url, body) => {
    return request({url, method: 'put', body});
};

const del = (url) => {
    return request({url, method: 'delete'});
};

export const rest = {
    get,
    post,
    put,
    del
};