
const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let subject = document.getElementById('subject');
let mess = document.getElementsByClassName('sent')


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('sent')
            name.value = '';
            email.value = '';
            message.value = '';
            subject.value = '';
            
        }
        else{
            alert('something went wrong');
        }
        

    }
    xhr.send(JSON.stringify(formData));
})