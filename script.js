$(function() {
      $('#submit').on('click', function() {
        
        // 姓名
        var name = $('#demo_name').val() || '未填寫';

        // 性別
        var sex = function() {
          var v;
          $('[name="demo_radio"]').each(function() {
            if($(this).prop('checked') === true) v = $(this).val();
          });
          return v;
        };

        // 類別
        var cat = $('#demo_select').val() || '未填寫';

        // 內容
        var msg = $('#demo_textarea').val() || '未填寫';

        // post
        var data = {
          'entry.1063538640': name,
          'entry.13751201': sex(),
          'entry.310559988': cat,
          'entry.1093315793': msg
        };
        $.ajax({
          type: 'POST',
          url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzO31pXZMXsO5OfdvYrUJctdES0-jhiD5kQhP2ZB8--H2SaQ/formResponse',
          data: data,
          contentType: 'application/json',
          dataType: 'jsonp',
          complete: function() {
            alert('資料已送出！');
          }
        });
        
      });
    });

// skrollr 要先初始化
var s = skrollr.init();