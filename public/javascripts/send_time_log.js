var sendTimeLog = function (setId, start_time, end_time, tag, remark) {
  $.ajax({
    url: 'https://www.chatbrick.io/api/log/',
    type: 'POST',
    // async: false,
    crossDomain: true,
    xhrFields: {withCredentials: true},
    data: {
      setId : setId,
      platform: 'web',
      start: start_time,
      end: end_time,
      tag: tag,
      // tag: '페북 페이지 등록',
      remark: remark
      // remark: '페북 페이지 등록을 위해 사용'

    },
    success: function (body, textStatus, res) {
      console.log('success body=>' + JSON.stringify(body));
    }
  });
}

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