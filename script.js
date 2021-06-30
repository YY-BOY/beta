$(function() {
      $('#submit').on('click', function() {

        // 內容
        var msg = $('#demo_textarea').val() || '未填寫';        

        // 姓名
        var name = $('#demo_name').val() || '未填寫';

        // 性別
        // var sex = function() {
        //   var v;
        //   $('[name="demo_radio"]').each(function() {
        //     if($(this).prop('checked') === true) v = $(this).val();
        //   });
        //   return v;
        // };

        // 類別
        // var cat = $('#demo_select').val() || '未填寫';

        // post
        var data = {
          'entry.624474340': msg,
          'entry.81580135': name,
          // 'entry.137515432201': sex(),
          // 'entry.310554359988': cat,
        };
        $.ajax({
          type: 'POST',
          url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScjSEah8fVpWtGXCh4ne--rbB909qLz2ExVRMVI0REnpKrPQA/formResponse',
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