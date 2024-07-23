const baseUrl =  'http://localhost:7258/api';

export function Get(url, params){
    return $fetch(baseUrl + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
    })
}

export function Post(url, params, body){
    console.log(body);
    return $fetch(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body
    })
}

export function Delete(url, params){
    return $fetch(baseUrl + url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params}
    })
}

export function Put(url, params, body) {
    return $fetch(baseUrl + url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body
    })
}