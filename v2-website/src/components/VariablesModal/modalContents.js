// modalContents.js

const contents = [
  {
    colors: [
      {
        title1: "Default Color #E6773D",
        title2: "Customized Color #B726DB",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/1--qv-main-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/1--qv-main-color/Customized.png",
        color1: "#E6773D",
        color2: "#B726DB",
      },
      {
        title1: "Default Color #FFFFFF",
        title2: "Customized Color #DBFF00",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/2--qv-main-text-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/2--qv-main-text-color/customized.png",
        color1: "#FFFFFF",
        color2: "#DBFF00",
      },
      {
        title1: "Default Color #25486F",
        title2: "Customized Color #CA38A1",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/3--qv-secondary-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/3--qv-secondary-color/Customized.png",
        color1: "#25486F",
        color2: "#CA38A1",
      },
      {
        title1: "Default Color #25486F",
        title2: "Customized Color #016155",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/4--qv-tab-bar-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/4--qv-tab-bar-color/Customized.png",
        color1: "#25486F",
        color2: "#016155",
      },
      {
        title1: "Default Color #4FA6DA",
        title2: "Customized Color #4F5DDA",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/5--qv-info-notification-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/5--qv-info-notification-color/Customized.png",
        color1: "#4FA6DA",
        color2: "#4F5DDA",
      },
      {
        title1: "Default Color #7DC58C",
        title2: "Customized Color #38B0B0",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/6--qv-success-notification-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/6--qv-success-notification-color/Customized.png",
        color1: "#7DC58C",
        color2: "#38B0B0",
      },
      {
        title1: "Default Color #FEA73A",
        title2: "Customized Color #E56E00",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/7--qv-warning-notification-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/7--qv-warning-notification-color/Customized.png",
        color1: "#FEA73A",
        color2: "#E56E00",
      },
      {
        title1: "Default Color #C23934",
        title2: "Customized Color #EF558C",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/8--qv-error-notification-color/default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/8--qv-error-notification-color/Customized.png",
        color1: "#C23934",
        color2: "#EF558C",
      },
      {
        title1: "Default Color #4FA6DA",
        title2: "Customized Color #4F5DDA",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/9--qv-info-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/9--qv-info-color/Customized.png",
        color1: "#4FA6DA",
        color2: "#4F5DDA",
      },
      {
        title1: "Default Color #7DC58C",
        title2: "Customized Color #38B0B0",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/10--qv-success-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/10--qv-success-color/Customized.png",
        color1: "#7DC58C",
        color2: "#38B0B0",
      },
      {
        title1: "Default Color #FFB355",
        title2: "Customized Color #E56E00",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/11--qv-warning-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/11--qv-warning-color/Customized.png",
        color1: "#FFB355",
        color2: "#E56E00",
      },
      {
        title1: "Default Color #C23934",
        title2: "Customized Color #EF558C",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/12--qv-error-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/12--qv-error-color/Customized.png",
        color1: "#C23934",
        color2: "#EF558C",
      },
      {
        title1: "Default Color/ None",
        title2: "Customized Color #3A94FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/13--qv-an-chart-border-color/default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/13--qv-an-chart-border-color/Customized.png",
        color1: "transparent",
        color2: "#3A94FF",
      },
      {
        title1: "Default Color #FFFFFF",
        title2: "Customized Color #C1F4FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/14--qv-an-chart-background-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/14--qv-an-chart-background-color/Customized.png",
        color1: "#FFFFFF",
        color2: "#C1F4FF",
      },
      {
        title1: "Default Color #EDEDED",
        title2: "Customized Color #FF5300",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/15--qv-an-chart-header-border-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/15--qv-an-chart-header-border-color/Customized.png",
        color1: "#EDEDED",
        color2: "#FF5300",
      },
      {
        title1: "Default Color #E9ECEF",
        title2: "Customized Color #EB007F",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/16--qv-an-chart-header-border-color-options/default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/16--qv-an-chart-header-border-color-options/Customized.png",
        color1: "#E9ECEF",
        color2: "#EB007F",
      },
      {
        title1: "Default Color / None",
        title2: "Customized Color #C1F4FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/17--qv-an-chart-header-background-color-options/default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/17--qv-an-chart-header-background-color-options/customized.png",
        color1: "transparent",
        color2: "#C1F4FF",
      },
      {
        title1: "Default Color #F4F6F8",
        title2: "Customized Color #BDB2FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/18--qv-an-chart-header-background-color-hover-options/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/18--qv-an-chart-header-background-color-hover-options/Customized.png",
        color1: "#F4F6F8",
        color2: "#BDB2FF",
      },
      {
        title1: "Default Color #C0C0C0",
        title2: "Customized Color #CA38A1",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/19--qv-global-close-modal-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/19--qv-global-close-modal-color/Customized.png",
        color1: "#C0C0C0",
        color2: "#CA38A1",
      },
      {
        title1: "Default Color #E6773D",
        title2: "Customized Color #388DCA",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/20-qv-global-close-modal-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/20-qv-global-close-modal-color/Customized.png",
        color1: "#E6773D",
        color2: "#388DCA",
      },
      {
        title1: "Default Color #25486F - 70%",
        title2: "Customized Color #2D353F - 90%",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/21--qv-main-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/21--qv-main-color/Customized.png",
        color1: "#25486F",
        color2: "#2D353F",
      },
      {
        title1: "Default Color #C0C0C0",
        title2: "Customized Color #0066FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/22--qv-global-threedots-icon-color/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/22--qv-global-threedots-icon-color/customized.png",
        color1: "#C0C0C0",
        color2: "#0066FF",
      },
      {
        title1: "Default Color #E9ECEF",
        title2: "Customized Color #8FC7FF",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/23--qv-global-tooltips-background-color/default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Colors/23--qv-global-tooltips-background-color/customized.png",
        color1: "#E9ECEF",
        color2: "#8FC7FF",
      },
    ],
    fonts: [
      {
        title1: "Default Font / Roboto",
        title2: "Customized Font / Allan",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/2+--qv-global-family/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/2+--qv-global-family/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Chart Title Font Size",
        title2: "Customized Chart Title Font Size",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-size-chart-panel-title/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-size-chart-panel-title/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Chart Title Font Weight",
        title2: "Customized Chart Title Font Weight",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-weight-chart-panel-title/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-weight-chart-panel-title/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Chart Options Font Size",
        title2: "Customized Chart Options Font Size",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-size-chart-panel-options/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Fonts/--qv-an-font-size-chart-panel-options/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
    ],
    positions: [
      {
        title1: "Default Horizontal Position",
        title2: "Customized Horizontal Position",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/1+--qv-global-position-toast-right/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/1+--qv-global-position-toast-right/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Vertical Position",
        title2: "Customized Vertical Position",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/2+--qv-global-position-toast-top/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/2+--qv-global-position-toast-top/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Top Offset",
        title2: "Customized Top Offset",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/3+--qv-global-position-modal-top-offset/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/3+--qv-global-position-modal-top-offset/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Horizontal Position",
        title2: "Customized Horizontal Position",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/4+--qv-position-floatingmenu-right/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/4+--qv-position-floatingmenu-right/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default Vertical Position",
        title2: "Customized Vertical Position",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/5+--qv-position-floatingmenu-bottom/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Positions/5+--qv-position-floatingmenu-bottom/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
    ],
    chartPanelFont: [
      {
        title1: "Default",
        title2: "Customized",
        image1: "",
        image2: "",
        color1: "transparent",
        color2: "transparent",
      },
    ],
    borders: [
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-button/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-button/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-card/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-card/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-dropdown/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-dropdown/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-modal/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-modal/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-toast/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-toast/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-pills/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-pills/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-tags/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-tags/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-table/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-table/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-dropdown-list/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-dropdown-list/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-tooltips/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-tooltips/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-qvdatepicker/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-qvdatepicker/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-switch/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-switch/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-color-picker/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-color-picker/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-color-picker/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-color-picker/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-value-list/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-value-list/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input-box/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input-box/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-rich-editor/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-rich-editor/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-chart-panel/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-chart-panel/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-action-chart/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-action-chart/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-item-values/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-item-values/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-menu-icons/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-menu-icons/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input-box/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-input-box/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-item-values/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-radius-cb-item-values/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-expandable-card/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-expandable-card/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-db-draganddrop/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-qum-card/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-qum-card/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-card/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius-card/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-sms-cont/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-sms-cont/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-email-cont/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-email-cont/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-item-sidebar/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-item-sidebar/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-log-details/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-log-details/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-expandible-card/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-at-border-radius-workflows-expandible-card/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-global-border-radius/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
      {
        title1: "Default",
        title2: "Customized",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-width-chart-panel-header/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Borders/--qv-an-border-width-chart-panel-header/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
    ],
    padding: [
      {
        title1: "Default Padding",
        title2: "Customized Padding",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Padding/--qv-an-padding-chart-panel-header/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/Padding/--qv-an-padding-chart-panel-header/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
    ],
    boxShadow: [
      {
        title1: "Default Box Shadow",
        title2: "Customized Box Shadow",
        image1:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/BoxShadow/--qv-an-box-shadow-chart-panel/Default.png",
        image2:
          "https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/partner-portal/software-developer/css-variables/BoxShadow/--qv-an-box-shadow-chart-panel/Customized.png",
        color1: "transparent",
        color2: "transparent",
      },
    ],
  },
];

export default contents;
