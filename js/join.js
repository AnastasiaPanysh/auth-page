const btn = document.querySelector('.btn');

function checkFirstInput(emailPhonenumber) {
    if (!/^([a-zA-Z0-9\.\_\-]+@[a-z]+\.[a-z]{1,3})|(\+[0-9]{12})$/g.test(emailPhonenumber.value)) throw new Error('login failed');
    if (!emailPhonenumber.value) throw new Error('enter email or phone number');
}

function checkPassword(password) {
    if (!/^\w{8,}$/g.test(password.value)) throw new Error('login failed');
    if (!password.value) throw new Error('enter password');
}

function checkConfirm(confirm) {
    if (confirm.value !== password.value) throw new Error('password did not match');
    if (!confirm.value) throw new Error('enter password');

}


btn.addEventListener('click', () => {
    const emailPhone = document.querySelector('.input-email');
    const password = document.querySelector('.input-password');
    const confirm = document.querySelector('.input-confirm');

    try {
        checkFirstInput(emailPhone)
        checkPassword(password)
        checkConfirm(confirm)
        alert('login successful')
        emailPhone.value = ''
        password.value = ''
        confirm.value = ''
    } catch (error) {
        alert(error.message)
        emailPhone.value = ''
        password.value = ''
        confirm.value = ''

    }
})
