var request = require('request');

class APIClient {
  constructor(url) {
    this._url = url;
  }

  set url(url) {
    if (url) {
      this._url = url;
    }
  }

  get brickListAPI() {
    // return 'test';
    new Promise((resolve, reject) => {
      request.get(this._url , function (err, res, body) {
        console.log('body =>' + body);
        if (err) {
          reject("err getbrickListAPI");
        }
        resolve(body);
      })
    }).then(function (data) {
      console.log('data=>'+ data);
      return data;
    });
  }

}

apiTest();
function apiTest () {
  var apiClient = new APIClient();
  apiClient.url = 'https://www.chatbrick.io/api/brick/';

  var tt = apiClient.brickListAPI;
  console.log('aaa=>' + JSON.stringify(tt));
}