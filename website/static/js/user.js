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
    const blackList = [
        {path:'/docs/get-started/get-started-architecture', exact: true},
        {path:'/docs/get-started/get-started-architecture/', exact: true},
        {path:'/docs/embedding/', exact: false},
        {path:'/docs/data-router/', exact: false},
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