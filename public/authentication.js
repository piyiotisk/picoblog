"use strict";

const getToken = async () => {
    let url = 'http://127.0.0.1:3000/login';
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'access-control-allow-origin': '*',
        },
        body: JSON.stringify(data),
    });
}

const login = async () => {
    const res = await getToken();
    if (res.status === 200) {
        const token = await res.json();
        localStorage.setItem('Authorization', token.authorization);
        window.location.href = '/';
    } else {
        document.getElementById('password-errors').style.visibility = "visible";
    }
}