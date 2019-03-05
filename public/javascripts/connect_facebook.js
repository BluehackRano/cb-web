window.onload = function() {

  `<!--<script src="../public/secret/config.js"></script>-->`
  window.fbAsyncInit = function () {
    FB.init({
      appId: '134243977372890', // appConfig.client_id,
      cookie: true,
      xfbml: true,
      version: 'v2.11' // appConfig.fb_version
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
    js.src = '//connect.facebook.net/ko_KR/sdk.js#xfbml=1&appId=134243977372890&version=v2.11' // appConfig.fb_js_src;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};
