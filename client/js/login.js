class Login {

    constructor() {
        this.getHiddenInfo()
        this.checkAll()
    }

    getHiddenInfo() {
        const iconInf = document.querySelector('.icon-img');
        const information = document.querySelector('.info')
        iconInf.addEventListener('mouseover', () => {
            information.hidden = false;
        });

        iconInf.addEventListener('mouseout', () => {
            information.hidden = true;
        });
    }

    checkLogin(emailPhonenumber) {
        if (!/^([a-zA-Z0-9\.\_\-]+@[a-z]+\.[a-z]{1,3})||(\+[0-9]{12})$/g.test(emailPhonenumber.value)) throw new Error('login failed');
        if (!emailPhonenumber.value) throw new Error('enter email or phone number');
    }

    checkPassword(password) {
        if (!/^\w{8,}$/g.test(password.value)) throw new Error('login failed');
        if (!password.value) throw new Error('enter password');
    }

    checkAll() {
        document.querySelector('.btn').addEventListener('click', () => {
            const emailPhone = document.querySelector('.input-email');
            const password = document.querySelector('.input-password');
            try {
                this.checkLogin(emailPhone)
                this.checkPassword(password)

                fetch

                alert('login successful')
                emailPhone.value = ''
                password.value = ''
            } catch (error) {
                alert(error.message)
                emailPhone.value = ''
                password.value = ''
            }
        })
    }
}

const login = new Login()