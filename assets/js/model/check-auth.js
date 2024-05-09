const auth = JSON.parse(localStorage.getItem('auth'));
if(auth !== true)
{
    localStorage.setItem('auth', null);
    localStorage.setItem('auth-email', null);
    window.location.href = 'index.html';
}