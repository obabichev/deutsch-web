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
            return response.json();
        });
};

const get = (url) => {
    return request({url, method: 'get'});
};

const post = (url, body) => {
    return request({url, method: 'post', body});
};

const del = (url) => {
    return request({url, method: 'delete'});
};

export const rest = {
    get,
    post,
    del
};