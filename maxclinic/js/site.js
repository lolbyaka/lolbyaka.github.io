var count = 1;
    now = new Date();
    day = ""+now.getDate();
    mounth = ""+(now.getMonth()+1);
$(document).ready(function() {
  if(day.length==1){
    day = "0"+day;
  }
  if(mounth.length==1){
    mounth = "0"+mounth;
  }
  $('.promo_add').text("*при заказе до "+day+"/"+mounth)
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
  });
  $(".down").click(function(){
    count--;
    if(count<=1){
      count = 1;
    }
    $('.count_number').text(count);
  });
  $(button_popup).click( function(event){
    window.location.href = "../maxclinic/pay/";
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
});
