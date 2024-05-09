document.getElementById('form-register').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var sex = document.getElementById('sex').value;
  var birthdate = document.getElementById('birthdate').value;
  var password = document.getElementById('password').value;
  var rePassword = document.getElementById('re-password').value;

  if(password === rePassword) {
    if(register(name, email, sex, birthdate, password)) {
      this.reset();
    }
  }
  else
  {
    alert("Паролі не співпадають!");
  }
});

function register(name, email, sex, date, password) {
  let formObject = { name, email, sex, date, password };

  let users = localStorage.getItem('Users');
  if (users) {
    users = JSON.parse(users);
    if (users.some(user => user.email === email)) {
      alert('Користувач с таким email вже існує');
      return false;
    }
  } else {
    users = [];
  }

  users.push(formObject);
  localStorage.setItem('Users', JSON.stringify(users));
  alert('Користувач успішно зареєстрований!');
  window.location.href = 'index.html';
  return true;
}

