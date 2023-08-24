function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_axa49ko', 'template_f09zu5a', params).then(function (res){
        alert('Successfully sent email');
    })
}

// document.getElementById('FAQ').style.backgroundColor = 'black';


const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled')
    }
})