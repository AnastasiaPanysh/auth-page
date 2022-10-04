const input = document.querySelector('input')

function checkEmailOrPhonenumber (input){
    if (!valueInput) throw new Error('input is empty');
    if (!/^\+[0-9]{3}\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/g.test(value)) throw new Error('incorrect format');
    return true
}

input.addEventListener('oninput', (event)=>{
try {
    
} catch (error) {
    alert(error.message)
}
})