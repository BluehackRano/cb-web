window.onload = function(){
  window.fbAsyncInit = function () {
    FB.init({
      appId: '134243977372890',
      cookie: true,
      xfbml: true,
      version: 'v2.11'
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
    js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&appId=407913036308389&version=v2.11";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};