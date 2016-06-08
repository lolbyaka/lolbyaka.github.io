var data_to = new Date(2016, 5, 10), //Дата в формате год, месяц(Отсчет начинается с нуля) и день.
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
    if(String(day).length > 1){
        $('span.day_0').text(Math.floor(day / 10));
        $('span.day_1').text(day%10);
      }
    else
      {
        $('span.day_0').text("0");
        $('span.day_1').text(day%10);
      }

    if(String(hour).length > 1){
        $('span.hour_0').text(Math.floor(hour / 10));
        $('span.hour_1').text(hour%10);
      }
    else
      {
        $('span.hour_0').text("0");
        $('span.hour_1').text(hour%10);
      }

    if(String(mins).length > 1){
        $('span.minutes_0').text(Math.floor(mins / 10));
        $('span.minutes_1').text(mins%10);
      }
    else
      {
        $('span.minutes_0').text("0");
        $('span.minutes_1').text(mins%10);
      }

    if(String(secs).length > 1){
        $('span.second_0').text(Math.floor(secs / 10));
        $('span.second_1').text(secs%10);
     }
    else
      {
        $('span.second_0').text("0");
        $('span.second_1').text(secs%10);
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
    setInterval(function(){
      if(cimg === 0){
        $('#bgi_0').fadeOut("slow");
        $('#bgi_1').fadeIn("slow");
        cimg=1;
      }
      else{
        $('#bgi_0').fadeIn("slow");
        $('#bgi_1').fadeOut("slow");
        cimg=0;
      }
    }, 7000);



});
