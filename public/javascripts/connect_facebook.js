
window.onload = function() {
  `<!--<script src="../public/secret/config.js"></script>-->`
  window.fbAsyncInit = function () {
    FB.init({
      appId: appConfig.client_id,
      cookie: true,
      xfbml: true,
      version: appConfig.fb_version
    });

    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });

  };

  // Load the SDK asynchronously
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = appConfig.fb_js_src;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};