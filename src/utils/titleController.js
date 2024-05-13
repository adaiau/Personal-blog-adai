var siteTitle = "",
  routeTitle = "";

function setTitle() {
  if (!siteTitle && !routeTitle) {
    document.title = "loading...";
  } else if (siteTitle && !routeTitle) {
    document.title = siteTitle;
  } else if (!siteTitle && routeTitle) {
    document.title = routeTitle;
  } else {
    document.title = `${routeTitle}-${siteTitle}`;
  }
}

export default {
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();
  },
  setRouterTitle(title) {
    routeTitle = title;
    setTitle();
  },
};
