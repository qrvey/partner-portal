const loginEvent = new Event('LOGIN_EVENT');
let errorDisplayText = null;
const pathname = window.location.pathname;

const loginList = [
    '/login',
    '/login/',
    '/forgot-password',
    '/forgot-password/',
    '/support',
    '/support/'
];

firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    updateUser(user);
});


if(loginList.find(path => path === pathname)){
    // removeSearchBar();
    if (pathname === '/forgot-password'  || pathname === '/forgot-password/' ){
        listenForgotPasswordSubmit();
    }
    if (pathname === '/login' || pathname === '/login/'){
        listenLoginSubmit();
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
        updateUser(currentUser);
        const lastUrl = sessionStorage.getItem(REDIRECT_URL);
        if(lastUrl){
            sessionStorage.removeItem(REDIRECT_URL);
            window.location.href = lastUrl;
        } else {
            window.location.href = '/';
        }
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

function logOut() {
    // deleteCooke(COOKIE_USER);
    window.location.href = '/login';
    firebase.auth().signOut();
    localStorage.removeItem(COOKIE_USER);
    logOutEvent = true;
}

function removeLogOutButton() {
    const navItems = document.querySelectorAll('ul.nav-site.nav-site-internal li a');
    navItems.forEach(element => {
        if (element.innerText == 'Log Out') {
            element.innerText = 'Log In';
        }
    });
}


function removeSearchBar(){
    const searchbar = document.querySelector('li.navSearchWrapper.reactNavSearchWrapper');
    searchbar.style.display = 'none';
}