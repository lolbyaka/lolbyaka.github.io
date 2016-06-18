var data = new Date(),
    targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes()+10);
    targetTime.setSeconds(targetTime.getSeconds()+00);
var time_left = Math.floor((targetTime.valueOf()-data.valueOf())/1000),
    cimg=1;

function parseTime(time_count){

    var day       = Math.floor((time_count/60/60) / 24);
        left_hour = Math.floor(time_count/60/60);
        mins      = Math.floor((time_count - left_hour*60*60)/60);
        secs      = Math.floor(time_count - left_hour *60*60 - mins*60);
        hour      = Math.floor( (time_count - day*24*60*60) / 60 / 60 );

    if(String(hour).length > 1){
        $('div.hours').text(""+(Math.floor(hour / 10))+""+(hour%10));
      }
    else
      {
        $('div.hours').text("0"+hour%10);
      }

    if(String(mins).length > 1){
        $('div.minutes').text(""+(Math.floor(mins / 10))+""+(mins%10));
      }
    else
      {
        $('div.minutes').text("0"+mins%10);
      }

    if(String(secs).length > 1){
        $('div.seconds').text(""+(Math.floor(secs / 10))+""+(secs%10));
     }
    else
      {
        $('div.seconds').text("0"+secs%10);
      }
  }
      $(document).ready(function(){

          setInterval(function(){
              time_left--;
              parseTime(time_left);
              if(time_left <= 0){
                  time_left = 0;
              }
          }, 1000);

          $('form').submit(function(){
        sendsform=$(this);
        err_validate="";
        sendsdate="partner_id=" + sendsform.children("input[name=partner_id]").val();
        if((sendsform.find("input[name=user]").val()=="")&&(sendsform.find("input[name=phone]").val()=="")) {
          redirect();
          //location.href = "./zapis";
          return false;
        }
        $('input, textarea', sendsform).each(function(indx, element){
            my_attr=$(this).attr("name");
            current_val=$(this).val();
            if(my_attr=="user") { sendsdate+="&user="+current_val; }
            else if(my_attr=="phone") { sendsdate+="&phone="+current_val; }
            else if(my_attr=="mail") {
              //%40 - unicode @
              var regex = /^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/;
              if(!regex.test(current_val)) {err_validate+="Некорректный e-mail";$(this).addClass("errorval");$(this).val("Укажите корректный e-mail");}
              else {
                var regex1 = /([@]ukr([.]net))$/;
                if(regex1.test(current_val.toLowerCase())) { alert("Здравствуйте! К сожалению администрация Ukr.net не принимает почту от некоторых отправителей из Российской Федерации, поэтому введите, пожалуйста, другую почту. С уважением, организаторы."); err_validate+="Неверная почта";}
                else {sendsdate+="&mail="+current_val;}
              }
            }
        });
    });
});
