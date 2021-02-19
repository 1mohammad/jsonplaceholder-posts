import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' },
});

export function httpGet(req: string): Promise<any> {
    return new Promise((resolve, reject) => {
        http.get(`/${req}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
