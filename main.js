const btn = document.querySelector('button')
const eMail = document.querySelector('.email');
const tel = document.querySelector('.tel');
const regMail = new RegExp(/^\w+@[a-z0-9]+\.[a-z A-Z]+$/);
const regTel = new RegExp(/^\+[0-9]+$/);
const body = document.querySelector('body')



btn.onclick = () => {
    const container = document.createElement('div')
    container.setAttribute('class','container')
    const block = document.createElement('div')
    block.setAttribute('class','block')
    const text = document.createElement('p')
    body.append(container);
    container.append(block);
    block.append(text);
    if (regMail.test(eMail.value)===true && regTel.test(tel.value)===true){
        text.innerText = 'SUCCESS'
    }else {
        text.innerText = 'ERROR'
    }
    document.querySelector('.email').remove()
    document.querySelector('.tel').remove()
    document.querySelector('button').remove()
}



