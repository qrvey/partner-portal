//////////
/// INIT USER
// NOT MANIPULATE DOM HERE 
// AUTH VALIDATOR ON THE HEADER TO QUICKLY LOADING
const COOKIE_USER = 'partners_user';
const REDIRECT_URL = 'history';
const LOG_OUT_EVENT = 'logout';
let currentUser = null;
let logOutEvent = false;

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
            if(!logOutEvent){
                console.log('redirect saved');
                sessionStorage.setItem(REDIRECT_URL, window.location.pathname);
            }
            logOutEvent = false;
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
    let version = '';
    if (!isNaN(path[6]) && path[7] === '.') {
        if (path[9] === '.') {
            version = '/'+path.substring(6, 11);
        } else {
            version = '/'+path.substring(6, 9);
        } 
    }
    const blackList = [
        {path:'/docs'+version+'/get-started/get-started-architecture', exact: true},
        {path:'/docs'+version+'/get-started/get-started-architecture/', exact: true},
        {path:'/docs'+version+'/embedding/', exact: false},
        {path:'/docs'+version+'/data-router/', exact: false},
        {path:'/docs'+version+'/release-notes/', exact: false},
        {path:'/docs'+version+'/video-training/', exact: false},
        {path:'/docs'+version+'/tutorials/', exact: false},
        {path:'/blog/', exact: false},
    ];
    let allowed = true;
    blackList.forEach((route) => {
        if (route.exact && (route.path === path)){
            allowed = false;
        }
        if (!route.exact && (path.search(route.path) > -1)){
            allowed = false;
        }
    });
    return allowed;
}