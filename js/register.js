let users = [];

async function init() {
    loadUsers();
}

async function loadUsers() {
    try {
        users = JSON.parse(await getItem('users'));
    } catch (e) {
        console.error('Loading error:', e);
    }
}

async function register() {
    let registerBtn = document.getElementById('registerBtn');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConf = document.getElementById('passwordConfirmation').value;

    registerBtn.disabled = true;

    if (checkIfEmailExists(users, email.value)) {
        resetForm();
        console.log('you have already an account - did you forgot your username or password?');
    } else if (checkIfUserExists(users, username.value)) {
        resetForm();
        console.log('username is already taken, pls choose another username');    }
    else if (password.value !== passwordConf) {
        resetForm();
        console.log('Passwords do not match.');
    } else { addUser();
    
        await setItem('users', JSON.stringify(users));
        resetForm();
        console.log('Registration successful.');
    }

    registerBtn.disabled = false;
}

function checkUserCredentials() {

    
}

function addUser(){
    users.push({
        username: username.value,
        email: email.value,
        password: password.value,
    })
}

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirmation').value = '';
}

function checkIfEmailExists(users, email) {
    return users.some(user => user.email === email);
}

function checkIfUserExists(users, username) {
    return users.some(user => user.username === username);
}


