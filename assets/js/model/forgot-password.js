document.getElementById('form-reset').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (changePassword(email, password)) {
        this.reset();
        localStorage.setItem('auth', true);
        window.location.href = 'index.html';
        alert("Ви успішно змінили пароль!");
    } else {
        alert("Користувача не існує!");
    }
});

function changePassword(email, newPassword) {
    let users = localStorage.getItem('Users');
    if (users) {
        users = JSON.parse(users);
        let userIndex = users.findIndex(user => user.email === email);
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('Users', JSON.stringify(users));
            return true;
        }
    }
    return false; 
}
