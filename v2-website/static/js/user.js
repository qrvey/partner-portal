//////////
/// INIT USER
// NOT MANIPULATE DOM HERE 
// AUTH VALIDATOR ON THE HEADER TO QUICKLY LOADING
const COOKIE_USER = 'partners_user';
const REDIRECT_URL = 'history';
const LOG_OUT_EVENT = 'logout';
let currentUser = null;
let logOutEvent = false;
function initUser () {
    currentUser = getUserOnLocalStorage();
}
// store url on load
let currentPage = location.href;
initUser();
// listen for changes
setInterval(function()
{
    if (currentPage != location.href)
    {
        initUser();
        // page has changed, set new page as 'current'
        currentPage = location.href;
    }
}, 200);
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
