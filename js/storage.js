const STORAGE_TOKEN = '0O7YMOKTQCYZ2Z982K78K8HBNBQS5YA44NW5V7RF';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN }
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json())


}

async function getItem(key) {
    const URL = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`
    return fetch(URL)
        .then(res => res.json());
}