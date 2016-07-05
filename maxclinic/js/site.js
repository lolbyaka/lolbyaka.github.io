var count = 1;
    now = new Date();
    day = ""+now.getDate();
    mounth = ""+(now.getMonth()+1);
    cimg=1;
    cimg_1=1;
    serc=0;
    function checkForm(form){
        if (document.getElementById('phone').value=="") {
            return false;
        };
        return true;
    };

$(document).ready(function() {
  setInterval(function(){
    if(cimg === 0){
      $('#img_0').fadeOut("slow");
      $('#img_1').fadeIn("slow");
      cimg=1;
    }
    else{
      $('#img_0').fadeIn("slow");
      $('#img_1').fadeOut("slow");
      cimg=0;
    }
  }, 7000);
  setInterval(function(){
    if(cimg_1 === 0){
      $('#img_2').fadeOut("slow");
      $('#img_3').fadeIn("slow");
      cimg_1=1;
    }
    else{
      $('#img_2').fadeIn("slow");
      $('#img_3').fadeOut("slow");
      cimg_1=0;
    }
  }, 5000);
  jQuery(function($){
   $("#phone").mask("9 (999) 999-99-99");
   $("#phone_popup").mask("9 (999) 999-99-99");
  });
  if(day.length==1){
    day = "0"+day;
  }
  if(mounth.length==1){
    mounth = "0"+mounth;
  }
  //$('.promo_add').text("*при заказе до "+day+"/"+mounth);
  var str = "при заказе до "+day+"/"+mounth;
  $('.promo_add_2').text(str);
  $('.d_date').text("*при заказе до "+day+"/"+mounth+"- доставка бесплатно");
  $(go).click( function(event){
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal_form')
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
  $(".up").click(function(){
    count++;
    $('.count_number').text(count);
    var url = "/pay/index.html?count="+count;
    $('.lsc_form').attr("action",url);
  });
  $(".down").click(function(){
    count--;
    if(count<=1){
      count = 1;
    }
    $('.count_number').text(count);
    var url = "/pay/index.html?count="+count;
    $('.lsc_form').attr("action",url);
  });
	$('#overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
  $(".serc_img").click(function(){
	  	var img = $(this);
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+
						 "<div class='popup_bg close'></div>"+
						 "<img src='"+src+"' class='popup_img close' />"+
						 "</div>");
		$(".popup").fadeIn(300);
		$(".close").click(function(){
			$(".popup").fadeOut(300);
			setTimeout(function() {
			  $(".popup").remove();
			}, 200);
		});
	});
});
