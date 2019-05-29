const COOKIE_USER = 'partners_user';
const IP_ADDRES_URL = 'https://api.ipify.org/?format=json';
const currentPage = window.location.pathname;
const userAgent = navigator.userAgent;
const CONTENT_TYPE = 'docs';

let ipAddress = '';
let title = '';
let elementId = currentPage.length > 1 ? currentPage.substring(1, currentPage.length) : currentPage;


window.onload = () => {
    title = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
}

const datarouter = {
    url: 'https://stgdatarouter.qrvey.com/data?saveUserLog=false&returnAllLog=true',
    'x-api-key':'359cc29538554a',
    metadataId:'wilson_marketing'
};

const headers = {
    'Content-Type':  'application/json',
    'x-api-key': datarouter['x-api-key']
}

let currentUser = getCookie(COOKIE_USER) ? JSON.parse(getCookie(COOKIE_USER)) : null;

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
        method:'post',
        body:[
            { metadataId:datarouter.metadataId,
                data:[{newActivity}] 
            }
        ]
    })
    .then(response => response.json())
    .then(
        response => {
            console.log(response);
            setCookie(currentPage, currentPage, 0.5);
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

setTimeout( ()=> {
    if( getCookie(COOKIE_USER)){
        postActivy();
    }else{
        console.log("Not Logged!");
    }
}, 5000);
