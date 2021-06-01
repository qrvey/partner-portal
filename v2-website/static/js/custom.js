const IP_ADDRES_URL = 'https://api.ipify.org/?format=json';
const CURRENT_PAGE = window.location.pathname;
const USER_AGENT = navigator.userAgent;
const CONTENT_TYPE = 'docs';
const metadataid = 'MKT_METADATAID';
const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
const baseUrl = '/';
const pathVersion = document.location.pathname.split(/\/docs\/(\d+(?:\.\d+)+\/)?/g).pop();

let version = '';
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

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        //////////
        /// INIT APP
        // Add partner name to logo and log button
        insertParternsLogo();
        insertLogButtonToNav();
        // ADD DROPDOWN ITEM
        addDropdownItem();
        //Dropdown To Change Doc Version
        changeVersion();
        // Check title document to save it 
        TITLE_DOCUMENT = document.querySelector('.postHeaderTitle') ? document.querySelector('.postHeaderTitle').innerHTML : 'Docs homepage';
        // Check if this page contains a video
        const videoContanier = document.querySelector('.wistia_responsive_wrapper .wistia_embed');
        if (videoContanier) {
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
    }
}, 100);

function checkVideoIsPlayed(videoContanier) {
    const CONTENT_TYPE = 'videos'
    videoContanier.onclick = () => {
        let videoId;
        videoContanier.classList.forEach(value => {
            if (value.search('wistia_async_') > -1) {
                videoId = value.replace('wistia_async_', '');
            }
        });
        console.log('activity send', videoId);
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
    const navBar = document.querySelector('.navbar__items.navbar__items--right');
    if (currentUser) {
        navBar.insertAdjacentHTML('beforeend', `<a class="primary-button" onclick="logOut()">Log Out</a>`);
    } else {
        navBar.insertAdjacentHTML('beforeend', `<a class="primary-button" href="/login">Log In</a>`);
    }
}

function insertParternsLogo() {
    return;
    //TODO FIX THIS
    let navbar = document.querySelector('.headerTitleWithLogo');
    navbar.innerHTML = '<strong>Partner</strong><br><span>Portal</span>';
}

async function changeVersion() {
    return;
	let navbar = document.querySelector('.fixedHeaderContainer a h3');
	const newelem = navbar.parentElement;
	newelem.removeAttribute("href");
    const pathname = window.location.pathname;
    let previousVersion = '';
	if (pathname.includes("docs")) {
        previousVersion = await validateVersionWork('4.1');
		navbar.innerHTML = '<span>Selected Version:</span><br><div class="changeversioncont"><span>Latest version</span><span><a>Change</a></span></div>';
		if (!isNaN(pathname[6]) && pathname[7] === '.') {
			if (pathname[9] === '.') {} else {
				navbar.innerHTML = '<span>Selected Version:</span><br><div class="changeversioncont"><span>Prior versions</span><span><a>Change</a></span></div>';
			}
		}
	} else {
		navbar.innerHTML = '<span style="display:none;"></span>';
	}
	navbar.onclick = () => toggleSubNav(navbar);
	console.log(toggleSubNav);
	navbar.classList.add('nav-item-dropdown');
	navbar.insertAdjacentHTML('beforeend', `
                <div class="dropdown-nav flex dropdown-nav--version" id="navbar-item-dropdown" style="transform:scaleY(0)"> 
                    <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs${''}/${pathVersion}">Latest version</a>
                        ${ previousVersion ? `<a class="dropdown-item" href="${baseUrl}docs/${'4.1'}/${pathVersion}">Prior versions</a>` : '' }
                    </div>  
                </div>`);
}

function validateVersionWork(version){
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}docs/${version}/${pathVersion}`).then(function (response) {
            console.log(response);
            if (response.status !== 200) {
                resolve(false);
            } else {
                resolve(true);
            }
            }).catch(function (error) {
                console.error(error);
                reject(error);
        });
    })
}

function addDropdownItem() {
    const navItems = document.querySelectorAll('ul.nav-site.nav-site-internal li a');
    const pathname = window.location.pathname;
    if (!isNaN(pathname[6]) && pathname[7] === '.') {
        if (pathname[9] === '.') {
            version = '/'+pathname.substring(6, 11);
        } else {
            version = '/'+pathname.substring(6, 9);
        } 
    }
    navItems.forEach(element => {
        if (element.innerText == 'DOCS') {
            element.onclick = () => toggleSubNav(element);
            element.classList.add('nav-item-dropdown');
            element.insertAdjacentHTML('beforeend', `
                <div class="dropdown-nav flex" id="navbar-item-dropdown" style="transform:scaleY(0)"> 
                    <div class="column">
                        <a class="dropdown-item" href="${baseUrl}docs${version}/get-started/get-started-intro">Getting Started</a>
                        <a class="dropdown-item" href="${baseUrl}docs${version}/ui-docs/basics/logging-in">Qrvey Composer</a>
                        <a class="dropdown-item" href="${baseUrl}docs${version}/admin/admin-intro">Admin Docs</a>
                        <a class="dropdown-item" href="${baseUrl}docs${version}/get-started/get-started-architecture">Developer Docs</a>
                        <a class="dropdown-item" href="${baseUrl}docs${version}/release-notes/release-last">Release Notes</a>
                        </div>
                </div>`);
        }
    });
};

function outsiteClickDropdown(e) {
    const element = document.querySelector('a.nav-item-dropdown.active');
    if (element && !element.contains(e.target)) {
        element.classList.remove('active');
        document.body.removeEventListener('click', outsiteClickDropdown);
    }
}

function toggleSubNav(element) {
    if (isDesktop) {
        element.classList.toggle('active');
        if (element.classList.contains('active')) {
            document.body.addEventListener('click', outsiteClickDropdown);
        }
    } else {
        window.location.href = '/documentation';
    }
}