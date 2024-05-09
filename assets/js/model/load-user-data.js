function getUserByEmail(email) {
    let users = localStorage.getItem('Users');
    if (users) {
        users = JSON.parse(users);
        let user = users.find(user => user.email === email);
        return user ? user : null;
    }
    return null;
}

function updateUserScreen(email) {
    let user = getUserByEmail(email);
    if (user) {
        document.getElementById('username').textContent = user.name;
        document.getElementById('birthdate').textContent = 'Дата народження: ' + user.date;
        document.getElementById('email').textContent = 'Електронна пошта: ' + user.email;
        document.getElementById('sex').textContent = 'Стать: ' + user.sex;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let user_email = localStorage.getItem('auth-email');
    updateUserScreen(user_email);
});
