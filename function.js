const send = () => {
    if (regMail.test(eMail.value)===true && regTel.test(tel.value)===true){
        alert('Success')
    }else {
        alert('Error')
    }
}