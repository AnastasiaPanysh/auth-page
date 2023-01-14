class Join {

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

    checkConfirm(confirm, password) {
        if (confirm.value !== password.value) throw new Error('password did not match');
        if (!confirm.value) throw new Error('enter password');

    }

    checkAll() {
        document.querySelector('.btn').addEventListener('click', async () => {
            const emailPhone = document.querySelector('.input-email');
            const password = document.querySelector('.input-password');
            const confirm = document.querySelector('.input-confirm');

            try {
                this.checkLogin(emailPhone)
                this.checkConfirm(confirm, password)
                console.log("+");
                const response = await fetch('http://localhost:5000/api/reg', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: emailPhone.value,
                        pwd: password.value
                    })
                })

                console.log(response);

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
    }
}

const join = new Join();