var data_to = new Date(2016, 6, 15), //Дата в формате год, месяц(Отсчет начинается с нуля) и день.
    time_left = Math.floor((data_to - (new Date())) / 1000); //Высчитываем оставшееся время в мс.
    cimg=1;
function parseTime(time_count){
    //Переменные с количеством дней, часов, минут и секунд.
    var day       = Math.floor((time_count/60/60) / 24);
        left_hour = Math.floor(time_count/60/60);
        mins      = Math.floor((time_count - left_hour*60*60)/60);
        secs      = Math.floor(time_count - left_hour *60*60 - mins*60);
        hour      = Math.floor( (time_count - day*24*60*60) / 60 / 60 );
    //Парсим значения и разно

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
                  alert('Время истекло.');
              }
          }, 1000);
    });
