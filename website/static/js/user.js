//////////
/// INIT USER
// NOT MANIPULATE DOM HERE 
// AUTH VALIDATOR ON THE HEADER TO QUICKLY LOADING
const COOKIE_USER = 'partners_user';
let currentUser = null;

currentUser = getUserOnLocalStorage();
updateUser(currentUser);

function updateUser(user) {
    if (user) {
        // User is signed in.
        currentUser = { userName: user.email, email: user.email, displayName: user.displayName };
        saveOnLocalStorage(currentUser);
    } else {
        // User is signed out.
        currentUser = null;
        if (!isAllowedPath(window.location.pathname)) {
            window.location.href = '/login';
        }
    }
}

function saveOnLocalStorage(user){
    localStorage.setItem(COOKIE_USER, JSON.stringify(user));
}

function getUserOnLocalStorage(){
    const local_user = localStorage.getItem(COOKIE_USER);
    if(local_user){
        return JSON.parse(local_user);
    }
    return null;
}

function isAllowedPath(path) {
    const allowedPath = [
        '/login',
        '/login/',
        '/forgot-password',
        '/forgot-password/',
        '/support',
        '/support/'
    ];
    let allowed = false;
    allowedPath.forEach((allowPath) => {
        if (allowPath === path){
            allowed = true;
        }
    });
    return allowed;
}