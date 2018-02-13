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