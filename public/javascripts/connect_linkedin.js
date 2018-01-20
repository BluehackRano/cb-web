var $  = require('jquery');


// var btn_linkedin = $('#btn_linkedin');
var btn_linkedin = document.getElementById('btn_linkedin');
console.log('btn_linkedin' + btn_linkedin);

btn_linkedin.onclick = function () {
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81016o0kcf331u&" +
      "redirect_uri=http://localhost:63342&state=760iz0bjh9gy71asfFqa&scope=r_basicprofile",
      '_blank',
      'width=600, height=600');
};
