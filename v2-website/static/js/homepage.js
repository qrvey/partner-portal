const myHeaders = new Headers({
    "x-api-key": "MARKETING_DEMO_API_KEY",
    "Content-Type": "application/json"
});

var raw = JSON.stringify({
    qrveyid: "YwJoqX0Av",
    charts: [
        {
            dimensions: [
                {
                    questionid: "5wRDtJW1W",
                    property: null,
                    qrveyid: "YwJoqX0Av",
                    type: "TEXT_LABEL",
                    sortOption: {
                        sortBy: "CATEGORY",
                        sortDirection: "ASC"
                    },
                    maxDataPoints: 50
                },
                {
                    questionid: "cqdy1xb1u",
                    property: null,
                    qrveyid: "YwJoqX0Av",
                    type: "TEXT_LABEL",
                    sortOption: {
                        sortBy: "VALUE",
                        sortDirection: "ASC",
                        order: [
                            {
                                sortDirection: "desc",
                                summaryIndex: 0
                            }
                        ]
                    },
                    maxDataPoints: 50
                }
            ],
            summaries: [
                {
                    aggregate: "COUNT",
                    qrveyid: "YwJoqX0Av",
                    questionid: "cqdy1xb1u",
                    property: null,
                    type: "TEXT_LABEL",
                    pointer: "cqdy1xb1uCOUNTDEFAULT"
                }
            ]
        }
    ],
    logic: [],
    filters: []
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

setInterval(function()
{
    if (currentPageInfo !== window.location.href)
    {
        currentPageInfo = window.location.href;
        if (currentPageInfo === '/' || currentPageInfo === '') {
            setPopularArticlesInfo();
            console.log("popular route", currentPageInfo);
        }
    }
}, 1000);


if (window.location.pathname === '/' || window.location.pathname === '') {
    setPopularArticlesInfo();
}

function setPopularArticlesInfo() {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            fetchPopularArticles();
        }
    };
}

function fetchPopularArticles() {
    fetch("https://demo.qrvey.com/devapi/v4/user/2k8VlmD/app/EurD9cY5F/qrvey/YwJoqX0Av/analytiq/uchart/results", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const popularPages = result[0].data.filter((value) =>
                !(value.items[0].key === '/' || value.items[0].key === '/docs/' || (value.items[0].key.search('/blog') > -1) || (value.items[0].key.search('/training/') === 0))).map(value => {
                return {
                    link: value.items[0].key,
                    title: value.key,
                    visited: value.items[0].summary[0] 
                }
            });
        let popularPagesHTMl = ``;
        popularPages.splice(0, 9).forEach(
            value => {
                popularPagesHTMl += `<a class="side-right-nav-container-popular-item" href=${value.link.replace('/docs/docs', '/docs')}>
                                    ${value.title} (${value.visited})
                                </a>`;
            }
        );
        const sidenavHTML = document.querySelector(`.side-right-nav-container-popular`);
        sidenavHTML.insertAdjacentHTML(`beforeend`, popularPagesHTMl);
    })
    .catch(error => console.log('error', error));
}