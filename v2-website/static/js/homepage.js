const myHeaders = new Headers({
    "x-api-key": "TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0",
    "Content-Type": "application/json"
  });
  
  var raw = JSON.stringify(
    {
      qrveyid: "uuiHm0u3O",
      charts: [
          {
              category: {
                  questionid: "w-ghZtZJ8",
                  qrveyid: "uuiHm0u3O",
                  type: "TEXT_LABEL",
                  sortOption: {
                      sortBy: "VALUE",
                      sortDirection: "DESC"
                  },
                  maxDataPoints: 2000
              },
              summaries: [
                  {
                      aggregate: "COUNT",
                      qrveyid: "uuiHm0u3O",
                      questionid: "3XgFH9Z0y",
                      type: "TEXT_LABEL"
                  }
              ],
              pivot: {
                  questionid: "3XgFH9Z0y",
                  qrveyid: "uuiHm0u3O",
                  type: "TEXT_LABEL",
                  groupType: "TEXT_LABEL",
                  sortOption: {
                      sortBy: "CATEGORY",
                      sortDirection: "ASC"
                  },
                  maxDataPoints: 2000
              }
          }
      ],
      filters: []
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  if(window.location.pathname === '/' || window.location.pathname === ''){
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            fetch("https://demo.qrvey.com/devapi/v4/user/2k8VlmD/app/EurD9cY5F/qrvey/uuiHm0u3O/analytiq/uchart/results", requestOptions)
            .then(response => response.json())
            .then(result => {
                const popularPages = result[0].data.filter((value) => 
                !(value.key === '/' || value.key === '/docs/' || (value.key.search('/blog') > -1)  || (value.key.search('/training/') === 0) ))
                .map(value => {
                    return {
                        link: value.key,
                        title: value.items[0].key,
                        visited: value.summary[0]
                    }
                });
                let popularPagesHTMl = ``;
                popularPages.splice(0, 9).forEach(
                    value => {
                        popularPagesHTMl+= `<a class="side-right-nav-container-popular-item" href=${value.link.replace('/docs/docs', '/docs')}>
                                                ${value.title} (${value.visited})
                                            </a>`;
                    }
                );
                const sidenavHTML = document.querySelector(`.side-right-nav-container-popular`);
                sidenavHTML.insertAdjacentHTML(`beforeend`, popularPagesHTMl);
            })
            .catch(error => console.log('error', error));
        }
      };
  }