const COOKIE_USER = 'partners_user';
const IP_ADDRES_URL = 'https://api.ipify.org/?format=json';
const currentPage = window.location.pathname;
const userAgent = navigator.userAgent;
const CONTENT_TYPE = 'docs';
const metadataid = 'MKT_METADATAID';
const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
const baseUrl = '/docs/';

let ipAddress = '';
let title = '';
let elementId = currentPage.length > 1 ? currentPage.substring(1, currentPage.length) : currentPage;
let currentUser = null;

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

window.onload = () => {
    title = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
    document.querySelector('.headerWrapper header a').href = '/';
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        currentUser = { userName: user.email, displayName: user.displayName };
        insertLogOutToNav();
        insertParternsLogo();
        highlightDocNavItem();
    } else {
        // User is signed out.
        currentUser = null;
        if (window.location.pathname !== '/login' && window.location.pathname !== '/forgot-password' && window.location.pathname !== '/support') {
            window.location.href = '/login';
        }
    }
});

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
function postActivy() {
    let data = [];
    const newActivity = {
        userName: currentUser.userName,
        userAgent: userAgent,
        ipAddress: ipAddress,
        contentUrl: currentPage,
        title: title,
        elementId: elementId,
        contentType: CONTENT_TYPE
    };
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
                setCookie(PAGE + currentPage, currentPage, 0.5);
            }
        ).catch(error => console.error('We could not find ip address', error));
}

(function getIp() {
    fetch(IP_ADDRES_URL)
        .then(response => response.json())
        .then(
            response => {
                ipAddress = response.ip;
            }
        ).catch(error => console.error('We could not find ip address', error));
})();


function logOut() {
    // deleteCooke(COOKIE_USER);
    // window.location.href = '/login';
    firebase.auth().signOut();
}

function insertLogOutToNav() {
    let navBar = document.querySelector('ul.nav-site.nav-site-internal');
    navBar.insertAdjacentHTML('beforeend', `<li><a class="primary-button" onclick="logOut()">Log Out</a></li>`)
}

function insertParternsLogo() {
    let navbar = document.querySelector('.headerTitleWithLogo');
    navbar.innerHTML = '<strong>PARTNER</strong><br>PORTAL';
}

function highlightDocNavItem() {
    const navItems = document.querySelectorAll('ul.nav-site.nav-site-internal li a');
    navItems.forEach(element => {
        if (element.innerText == 'Documentation') {
            element.onclick = () => toggleSubNav(element);
            element.classList.add('primary-color');
            element.setAttribute('id', 'nav-item-dropdown');
        }
    });
};

function toggleSubNav(element) {
    if (isDesktop) {
        const navbarDropdown = document.getElementById('navbar-item-dropdown');
        if (!navbarDropdown) {
            element.insertAdjacentHTML('beforeend', `
                <div class="dropdown flex" id="navbar-item-dropdown"> 
                    <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs/get-started/get-started-intro">Get Started</a>
                        <a class="dropdown-item" href="${baseUrl}docs/ui-docs/basics/logging-in">UI Documentation</a>
                        <a class="dropdown-item" href="${baseUrl}docs/business-analytics/business-analytics-application">Business Analytics</a>
                        <a class="dropdown-item" href="${baseUrl}docs/data-router/data-router-intro">Data Router</a>
                        </div>  
                        <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs/admin/admin-intro">Admin</a>
                        <a class="dropdown-item" href="${baseUrl}docs/embedding/embedding-intro">Embedding</a>
                        <a class="dropdown-item" href="${baseUrl}docs/setup-deployments/setup-overview">Setup & Deployments</a>
                        <a class="dropdown-item" href="${baseUrl}docs/release-notes/release-nov-2019">Releases Notes</a>
                    </div>
                </div>`);
        }
        else {
            navbarDropdown.classList.toggle('flex');
        }
    } else {
        window.location.href = '/docs';
    }
}

setTimeout(() => {
    if (!!currentUser && !!currentUser.userName && !getCookie(PAGE + currentPage)) {
        postActivy();
    } else {
        console.log('Activity already sent it');
    }
}, 5000);

