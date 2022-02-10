document.getElementById('login-submit').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'shanto.360@yahoo.com' && userPassword == 'shanto'){
        window.location.href = 'banking.html'
    }else{
        alert('Please valid information');
    }
})