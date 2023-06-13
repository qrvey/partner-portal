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
                    questionid: "TPtOT4i5K",
                    type: "FORMULA",
                    formulaType: "string",
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
                    questionid: "TPtOT4i5K",
                    type: "FORMULA"
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
    fetch("https://demo.qrvey.com/devapi/v4/user/VkRfd5iis/app/9b21hQU3D/qrvey/YwJoqX0Av/analytiq/uchart/results", requestOptions)
    .then(response => response.json())
    .then(result => {
        const popularParse = parseSummaryResult(result);
        const popularPages = popularParse.filter((value) =>
                !(value.url === '/' || value.url === '/docs/' || value.url === '/docs/get-started/get-started-intro'
                || value.url === '/docs/release-notes/release-last' || value.url === '/docs/ui-docs/basics/logging-in'
                || value.url === '/docs/admin/admin-intro' || value.url === '/docs/get-started/get-started-architecture'
                || value.url === '/docs/ui-docs/end-user-personalization/overview' || value.url === '/docs/ui-docs/qrvey-composer-overview'
                || value.url === '/docs/dev-docs/dev-docs-overview' || value.url === '/docs/special-features/special-features-overview'
                || value.url === '/docs/video-training/building-qrvey-sample/multi-tenancy-architecture' || value.url === '/docs/admin/premium-features/introduction-to-premium-features'
                || (value.url.search('/blog') > -1)
                || (value.url.search('/training/') === 0))).map(value => {
                return {
                    link: value.url,
                    title: value.title,
                    visited: value.summary 
                }
            });
        let popularPagesHTMl = ``;
        popularPages.splice(0, 9).forEach(
            value => {
                popularPagesHTMl += `<div className="popular-articles-list-item" style="border: 1px solid #C0C0C0;border-radius: 10px;padding: 20px;margin-bottom:30px;">
                <div className="popular-articles-list-item-header" style="display: flex;justify-content: space-between;">
                  <p><b>${value.title}</b></p>
                  <span style="color: #7D7D7D">${value.visited} Views</span>
                </div>
                <a className="popular-articles-list-link" style="color:#FF5400;" href=${value.link.replace('/docs/docs', '/docs')}><b>Read more →</b></a>
               </div>`;
            }
        );
        const sidenavHTML = document.querySelector(`.popular-articles-list-home`);
        sidenavHTML.insertAdjacentHTML(`beforeend`, popularPagesHTMl);
    })
    .catch(error => console.log('error', error));
}

function parseSummaryResult(array){

    const newArray = array[0].data.map(el => {
      const splitter = el.key.split('@@');
      const title = splitter[0] || '';
      const url = splitter[1] || '';
      const summary = el.summary[0];
      return {title, url, summary} 
    }).filter(el => {
      return el.url && el.title !== 'Docs homepage';
    });
    return newArray;
  }