// URL se .html hata kar update karna
window.onload = function () {
    if (window.location.pathname.endsWith(".html")) {
      let newPath = window.location.pathname.replace(".html", "");
      window.history.replaceState(null, "", newPath);
    }
  };
  