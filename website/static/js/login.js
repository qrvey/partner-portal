const loginEvent = new Event('LOGIN_EVENT');
let errorDisplayText = null;
const pathname = window.location.pathname;

if (pathname === '/login' || pathname === '/login/'){
    window.onload = () => {
        listenLoginSubmit();
    }
}

if (pathname === '/forgot-password'  || pathname === '/forgot-password/' ){
    window.onload = () => {
        listenForgotPasswordSubmit();
    }
}

function loginAttempt(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({user}) => {
        currentUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email
        }
        window.location.href = '/';
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        errorDisplayText.innerHTML = error.message;
        console.error(error);
        // ...
    });
}

function forgotPassword(email){
    firebase.auth().sendPasswordResetEmail(email)
    .then(value => {
        alert('Message Sent! You will receive an email to set a new password shortly.');
        window.location.href = '/login';
    })
    .catch(({message}) => {
        errorDisplayText.innerHTML = message;
        console.error(error);
    });
}

function listenLoginSubmit(){
    errorDisplayText = document.getElementById('login-error-display');
    document.getElementById('login-form').onsubmit = (e) => {
        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;
        e.preventDefault();
        loginAttempt(email, password);
    }
}

function listenForgotPasswordSubmit(){
    errorDisplayText = document.getElementById('forgot-error-display');
    document.getElementById('forgot-password-form').onsubmit = (e) => {
        const email = document.getElementById('user-email').value;
        e.preventDefault();
        forgotPassword(email);
    }
}