const COOKIE_USER = 'partners_user';
const IP_ADDRES_URL = 'https://api.ipify.org/?format=json';
const currentPage = window.location.pathname;
const userAgent = navigator.userAgent;
const CONTENT_TYPE = 'docs';

let ipAddress = '';
let title = '';
let elementId = currentPage.length > 1 ? currentPage.substring(1, currentPage.length) : currentPage;
let currentUser = null;

const PAGE = 'page_docs_';

window.onload = () => {
    title = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
    if(getCookie(COOKIE_USER)){
        currentUser = JSON.parse(getCookie(COOKIE_USER));
        insertChildToNav();
    } else {
        window.location.href = '/auth/login';
    }
   
}

/*
window.onload = () => {
    title = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
    if(getCookie(COOKIE_USER)){
        currentUser = JSON.parse(getCookie(COOKIE_USER));
        //insertChildToNav();
    } else {
        window.location.href = '/';
    }
}

*/

const datarouter = {
    url: 'https://stgdatarouter.qrvey.com/data?saveUserLog=false&returnAllLog=true',
    'x-api-key':'359cc29538554a',
    metadataId:'wilson_marketing'
};

const headers = {
    'Content-Type':  'application/json',
    'x-api-key': datarouter['x-api-key']
}



// Cookie check function
function getCookie(cname){
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Log visitor page function
function postActivy(){
    const newActivity = {
        userName:currentUser.userName,
        userAgent: userAgent, 
        ipAddress:ipAddress,
        contentUrl: currentPage,
        title: title,
        elementId: elementId,
        contentType: CONTENT_TYPE, 
        date: new Date(),
    };
    

    fetch(datarouter.url, {
        headers:headers,
        method:'POST',
        body:JSON.stringify([{
            metadataId: datarouter.metadataId,
            data: [{
                newActivity
            }]
        }])
    })
    .then(response => response.json())
    .then(
        response => {
            console.log(response);
            setCookie(PAGE + currentPage, currentPage, 0.5);
        }
    ).catch(error => console.error('We could not find ip address',error));
    

}


(function getIp(){
    fetch(IP_ADDRES_URL)
    .then(response => response.json())
    .then(
        response => {
            ipAddress = response.ip;
        }
    ).catch(error => console.error('We could not find ip address',error));
})();


function deleteCooke(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logOut(){
    deleteCooke(COOKIE_USER);
    window.location.href = '/auth/login';
}

function insertChildToNav(){
    let navBar = document.querySelector('ul.nav-site.nav-site-internal');
    const nodeTagLi = document.createElement("LI");                 // Create a <li> node
    const nodeTagA = document.createElement("A");                 // Create a <li> node
    const textnodeLi = document.createTextNode("Log out");         // Create a text node
    nodeTagA.classList = 'primary-button';
    nodeTagLi.onclick =  logOut;
    nodeTagA.appendChild(textnodeLi);
    nodeTagLi.appendChild(nodeTagA);                              // Append the text to <li>
    navBar.appendChild(nodeTagLi);     // Append <li> to <ul> 
}

setTimeout( ()=> {
    if( getCookie(COOKIE_USER) && !getCookie(PAGE + currentPage)){
        postActivy();
    } else {
        console.log('Activity already sent it');
    }
}, 5000);

