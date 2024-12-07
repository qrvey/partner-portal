import React, { Component } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

class PopularArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularArticles: [],
      currentPageInfo: "",
    };
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({ currentPageInfo: window.location.href });

      this.setPopularArticlesInfo();
      this.interval = setInterval(this.checkURLChange, 1000);

      this.readyStateChangeListener = () => {
        if (document.readyState === "complete") {
          this.fetchPopularArticles();
        }
      };
      document.addEventListener(
        "readystatechange",
        this.readyStateChangeListener
      );
    }
  }

  componentWillUnmount() {
    if (ExecutionEnvironment.canUseDOM) {
      clearInterval(this.interval);
      document.removeEventListener(
        "readystatechange",
        this.readyStateChangeListener
      );
    }
  }

  checkURLChange = () => {
    const currentURL = window.location.href;
    if (this.state.currentPageInfo !== currentURL) {
      this.setState({ currentPageInfo: currentURL });
      if (window.location.pathname === "/" || window.location.pathname === "") {
        this.fetchPopularArticles();
      }
    }
  };

  setPopularArticlesInfo = () => {
    if (document.readyState === "complete") {
      this.fetchPopularArticles();
    }
  };

  fetchPopularArticles = async () => {
    const apiKey = process.env.REACT_APP_X_API_KEY;

    const myHeaders = new Headers({
      "x-api-key": "apiKey",
      "Content-Type": "application/json",
    });

    const raw = JSON.stringify({
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
                    summaryIndex: 0,
                  },
                ],
              },
              maxDataPoints: 50,
            },
          ],
          summaries: [
            {
              aggregate: "COUNT",
              questionid: "TPtOT4i5K",
              type: "FORMULA",
            },
          ],
        },
      ],
      logic: [],
      filters: [],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://demo.qrvey.com/devapi/v4/user/VkRfd5iis/app/9b21hQU3D/qrvey/YwJoqX0Av/analytiq/uchart/results",
        requestOptions
      );
      const result = await response.json();
      const popularArticles = this.parseSummaryResult(result);
      this.setState({ popularArticles });
    } catch (error) {
      console.log("error", error);
    }
  };

  parseSummaryResult = (array) => {
    return array[0].data
      .map((el) => {
        const splitter = el.key.split("@@");
        const title = splitter[0] || "";
        const url = splitter[1] || "";
        const summary = el.summary[0];
        return { title, url, summary };
      })
      .filter((el) => el.url && el.title !== "Docs homepage");
  };

  renderArticles = () => {
    return this.state.popularArticles.slice(0, 8).map((article, index) => (
      <div
        key={index}
        className="popular-articles-list-item"
        style={{
          display: "flex",
          borderBottom: "1px solid silver",
          padding: "20px",
          paddingLeft: "0px",
          margin: "5px",
        }}
      >
        <a
          className="popular-articles-list-link"
          style={{ color: "#FF5400" }}
          href={article.url.replace("/docs/docs", "/docs")}
        >
          <b>{article.title}</b>
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#A1A1A1",
            marginLeft: "10px",
          }}
        >
          <div
            className="highlights-icons icon-eye"
            style={{ marginRight: "5px" }}
          ></div>
          <b>{article.summary} Views</b>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="popular-articles-list-home">{this.renderArticles()}</div>
    );
  }
}

export default PopularArticlesList;
