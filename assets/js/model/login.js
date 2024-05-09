document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (checkLogin(email, password)) {
        this.reset();
        localStorage.setItem('auth', true);
        localStorage.setItem('auth-email', email);
        window.location.href = 'main.html';
        alert("Ви успішно увійшли в систему!");
    } else {
        alert("Невірний email або пароль!");
    }
});

function checkLogin(email, password) {
    let users = localStorage.getItem('Users');
    if (users) {
        users = JSON.parse(users);
        return users.some(user => user.email === email && user.password === password);
    }
    return false;
}