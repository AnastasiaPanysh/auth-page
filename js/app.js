const btn = document.querySelector('.btn');

function checkFirstInput(emailPhonenumber) {
    if (!/^([a-zA-Z0-9\.\_\-]+@[a-z]+\.[a-z]{1,3})|(\+[0-9]{12})$/g.test(emailPhonenumber.value)) throw new Error('login failed');
    if (!emailPhonenumber.value) throw new Error('enter email or phone number');
}

function checkPassword(password) {
    if (!/^\w{8,}$/g.test(password.value)) throw new Error('login failed');
    if (!password.value) throw new Error('enter password');
}

btn.addEventListener('click', () => {
    const emailPhonenumber = document.querySelector('.input-email');
    const password = document.querySelector('.input-password');
    try {
        checkFirstInput(emailPhonenumber)
        checkPassword(password)
        alert('login successful');
        password.value = '';
        emailPhonenumber.value = '';
    } catch (error) {
        alert(error.message);
        password.value = '';
        emailPhonenumber.value = '';
    }
})