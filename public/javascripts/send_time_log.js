//changed task log
var sendTaskLog = function (log_id, task_code, start_time, end_time, remark) {

  var data = {
      log_id: log_id,
      application: 'chatbrick_web',
      task_code: task_code,
      start: start_time,
      end: end_time,
      remark: remark
    };

  console.log('sendTaskLog=>' + JSON.stringify(data));

  $.ajax({
    url: 'https://www.chatbrick.io/api/log/',
    type: 'PUT',
    // async: false,
    crossDomain: true,
    xhrFields: {withCredentials: true},
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (body, textStatus, res) {
      console.log('success body=>' + JSON.stringify(body));
    }
  });
}

var sendAPILog = function (log_id, api_code, api_provider_code, start_time, end_time, remark) {

  var data = {
    log_id: log_id,
      application: 'chatbrick_web',
      api_code: api_code,
      api_provider_code: api_provider_code,
      origin: "client",
      start: start_time,
      end: end_time,
      remark: remark
  };

  console.log('sendAPILog=>' + JSON.stringify(data));
  $.ajax({
    url: 'https://www.chatbrick.io/api/log/',
    type: 'PUT',
    // async: false,
    crossDomain: true,
    xhrFields: {withCredentials: true},
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (body, textStatus, res) {
      console.log('success body=>' + JSON.stringify(body));
    }
  });
}

var sendTaskAPILog = function (log_id, task_code, api_code, api_provider_code, start_time, end_time, remark) {

  var data = {
    log_id: log_id,
    application: 'chatbrick_web',
    task_code: task_code,
    api_code: api_code,
    api_provider_code: api_provider_code,
    origin: "client",
    start: start_time,
    end: end_time,
    remark: remark
  };

  console.log('sendTaskAPILog=>' + JSON.stringify(data));

  $.ajax({
    url: 'https://www.chatbrick.io/api/log/',
    type: 'PUT',
    // async: false,
    crossDomain: true,
    xhrFields: {withCredentials: true},
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (body, textStatus, res) {
      console.log('success body=>' + JSON.stringify(body));
    }
  });
}