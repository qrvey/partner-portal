const IP_ADDRES_URL = 'https://api.ipify.org/?format=json';
const CURRENT_PAGE = window.location.pathname;
const USER_AGENT = navigator.userAgent;
const CONTENT_TYPE = 'docs';
const metadataid = 'MKT_METADATAID';
const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
const baseUrl = '/';

let IP_ADDRESS = '';
let TITLE_DOCUMENT = '';
let DOC_ID = CURRENT_PAGE.length > 1 ? CURRENT_PAGE.substring(1, CURRENT_PAGE.length) : CURRENT_PAGE;

const PAGE = 'page_docs_';

const datarouter = {
    url: 'https://zbxl4n8sk5.execute-api.us-east-1.amazonaws.com/DataRouter/data?saveUserLog=false&returnAllLog=true',
    'x-api-key': '359cc29538554a',
    metadataId: metadataid
};

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': datarouter['x-api-key']
}

function Activity(userName, contentUrl, title, elementId, contentType) {
    this.userName = userName;
    this.contentUrl = contentUrl;
    this.title = title;
    this.elementId = elementId;
    this.contentType = contentType;
    this.ipAddress = IP_ADDRESS;
    this.userAgent = USER_AGENT;
}

//////////
/// INIT APP

// Add partner name to logo and log button
insertParternsLogo();
insertLogButtonToNav();
// ADD DROPDOWN ITEM
addDropdownItem();
// Check title document to save it 
TITLE_DOCUMENT = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
// Check if this page contains a video
const videoContanier = document.querySelector('.wistia_responsive_wrapper .wistia_embed');
if (videoContanier){
    checkVideoIsPlayed(videoContanier);
}
// CHECK IS THE USER IS LOGGED IN
console.log('user', currentUser);

setTimeout(() => {
    if (!getCookie(PAGE + CURRENT_PAGE)) {
        console.log('activity send', CURRENT_PAGE);
        postActivy(new Activity(currentUser ? currentUser.userName : '', CURRENT_PAGE, TITLE_DOCUMENT, DOC_ID, CONTENT_TYPE));
    } else {
        console.log('Activity already sent it');
    }
}, 5000);

///FIN INIT
/////

function checkVideoIsPlayed(videoContanier){
    const CONTENT_TYPE = 'videos'
    videoContanier.onclick = () => {
        let videoId;
        videoContanier.classList.forEach(value => {
            if(value.search('wistia_async_') > -1){
                videoId = value.replace('wistia_async_', '');
            }
        });
        console.log('activity send',videoId);
        postActivy(new Activity(currentUser ? currentUser.userName : '', CURRENT_PAGE, TITLE_DOCUMENT, videoId, CONTENT_TYPE));
    }
}


// Cookie check function
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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
    d.setTime(d.getTime() + (exdays * 24 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function formatDate() {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getDate() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}
// Log visitor page function
function postActivy(newActivity) {
    let data = [];
    data.push(newActivity);


    fetch(datarouter.url, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify([{
            metadataId: datarouter.metadataId,
            data: data
        }])
    })
        .then(response => response.json())
        .then(
            response => {
                console.log(response);
                setCookie(PAGE + CURRENT_PAGE, CURRENT_PAGE, 0.5);
            }
        ).catch(error => console.error('We could not find ip address', error));
}

(function getIp() {
    fetch(IP_ADDRES_URL)
        .then(response => response.json())
        .then(
            response => {
                IP_ADDRESS = response.ip;
            }
        ).catch(error => console.error('We could not find ip address', error));
})();


function insertLogButtonToNav() {
    const navBar = document.querySelector('ul.nav-site.nav-site-internal');
    if(currentUser){
        navBar.insertAdjacentHTML('beforeend', `<li><a class="primary-button" onclick="logOut()">Log Out</a></li>`);
    } else {
        navBar.insertAdjacentHTML('beforeend', `<li><a class="primary-button" href="/login">Log In</a></li>`);
    }
}

function insertParternsLogo() {
    let navbar = document.querySelector('.headerTitleWithLogo');
    navbar.innerHTML = '<strong>Partner</strong><br><span>Portal</span';
}

function addDropdownItem() {
    const navItems = document.querySelectorAll('ul.nav-site.nav-site-internal li a');
    navItems.forEach(element => {
        if (element.innerText == 'DOCS') {
            element.onclick = () => toggleSubNav(element);
            element.classList.add('nav-item-dropdown');
            element.insertAdjacentHTML('beforeend', `
                <div class="dropdown-nav flex" id="navbar-item-dropdown" style="transform:scaleY(0)"> 
                    <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs/release-notes/release-feb-2020">Releases Notes</a>
                        <a class="dropdown-item" href="${baseUrl}docs/get-started/get-started-intro">Getting Started</a>
                        </div>  
                        <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs/ui-docs/basics/logging-in">Qrvey Composer</a>
                        <a class="dropdown-item" href="${baseUrl}docs/admin/admin-intro">Admin Docs</a>
                        <a class="dropdown-item" href="${baseUrl}docs/get-started/get-started-architecture">Developer Docs</a>
                    </div>
                </div>`);
        }
    });
};

function outsiteClickDropdown(e){
    const element = document.querySelector('a.nav-item-dropdown.active');
    if (element && !element.contains(e.target)) {
      element.classList.remove('active');
      document.body.removeEventListener('click', outsiteClickDropdown);
    }
}

function toggleSubNav(element) {
    if (isDesktop) {
        if(element.classList.contains('active')){
            document.body.addEventListener('click', outsiteClickDropdown);
        }
        element.classList.toggle('active');
    } else {
        window.location.href = '/documentation';
    }
}

