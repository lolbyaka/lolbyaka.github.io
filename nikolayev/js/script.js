$(document).ready(function() {
    function openmodalok(){
        
        $('.modalok,.wrp').show();
        
    }
    $('.modalok .close').click(function(){
        
        $('.modalok,.wrp').hide();
        location.reload();
        
    })
	// slider kitchen
	 $('.single-item').slick({ infinite: true });
	
	$(".single-item button").click(function(e) {
		e.preventDefault();
		var k = $("#get-kitch .slick-active img").attr("src");
		$("#get-kitch input[name=kitch-url]").val(k);
	});
	
	$(".slid").mouseup(function(e) {
		var pos = e.pageX-$(this).offset().left;
		
		$(".disk", $(this)).css("left", (pos-12)+"px");
		$(".line", $(this)).width($(".disk", $(this)).position().left+12);

		var p = $(".line", $(this)).width()*100/$(this).width();
		var v = Math.round(p*30/100)+15;
		var m = Math.floor(v/10);
		var sm = Math.floor(v-m*10)*10;
		if(sm == 0)
			sm = "00";
		$(".kit-size .s1").text(m+" м "+sm+" см");
	});
	
	$(".slidv").mouseup(function(e) {
		var pos = e.pageY-$(this).offset().top;
		
		$(".disk", $(this)).css("top", (pos-12)+"px");
		$(".line", $(this)).height($(".disk", $(this)).position().top+12);

		var p = $(".line", $(this)).height()*100/$(this).height();
		var v = Math.round(p*30/100)+10;
		var m = Math.floor(v/10);
		var sm = Math.floor(v-m*10)*10;
		if(sm == 0)
			sm = "00";
		if($(this).hasClass("l"))
			$(".kit-size .s2").text(m+" м "+sm+" см");
		else if($(this).hasClass("r"))
			$(".kit-size .s3").text(m+" м "+sm+" см");
	});
	
	var currentState = {};
	currentState.isMoving = false;

	$(".slid .disk").mousedown(function(e){
		currentState.cType = "h";
		currentState.cObject = $(this);
		currentState.clickX = e.pageX-$(this).offset().left;
		currentState.isMoving = true;
		return false;
	});

	$(".slidv .disk").mousedown(function(e){
		currentState.cType = "v";
		currentState.cObject = $(this);
		currentState.clickY = e.pageY-$(this).offset().top;
		currentState.isMoving = true;
		return false;
	});
	
	$(".yes-no .disk").mousedown(function(e){
		currentState.cType = "yesno";
		currentState.cObject = $(this);
		currentState.clickX = e.pageX-$(this).offset().left;
		currentState.isMoving = true;
		currentState.change = true;
		return false;
	});

	$(document).mouseup(function(e){
		if(currentState.isMoving)
		{
			e.stopPropagation();
			currentState.isMoving = false;
		}
		else
			return;
		
		if(currentState.cType == "yesno")
		{
			if(currentState.change)
			{
				if(currentState.cObject.parent().parent().hasClass("yes"))
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: -56
					}, 250);
					
					currentState.cObject.parent().parent().removeClass("yes");
					$("input", currentState.cObject.parent().parent()).removeAttr("checked");
				}
				else
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: 0
					}, 250);
					
					$("input", currentState.cObject.parent().parent()).attr("checked", "");
					currentState.cObject.parent().parent().addClass("yes");
				}
				
				return;
			}
			
			if(currentState.cObject.parent().parent().hasClass("yes"))
			{
				if(parseInt(currentState.cObject.parent().css("margin-left").replace("px", "")) < -28)
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: -56
					}, 250);
					
					currentState.cObject.parent().parent().removeClass("yes");
					$("input", currentState.cObject.parent().parent()).removeAttr("checked");
				}
				else
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: 0
					}, 250);
					
					$("input", currentState.cObject.parent().parent()).attr("checked", "");
					currentState.cObject.parent().parent().addClass("yes");
				}
			}
			else
			{
				if(parseInt(currentState.cObject.parent().css("margin-left").replace("px", "")) > -28)
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: 0
					}, 250);
					
					$("input", currentState.cObject.parent().parent()).attr("checked", "");
					currentState.cObject.parent().parent().addClass("yes");
				}
				else
				{
					$(".v", currentState.cObject.parent().parent()).stop().animate({
						marginLeft: -56
					}, 250);
					
					currentState.cObject.parent().parent().removeClass("yes");
					$("input", currentState.cObject.parent().parent()).removeAttr("checked");
				}
			}
		}
	});
	
	$(".yes-no").mouseup(function(e) {
		if(!currentState.isMoving || currentState.change)
		{
			e.stopPropagation();
			currentState.isMoving = false;
			if($(this).hasClass("yes"))
			{
				$(".v", $(this)).stop().animate({
					marginLeft: -56
				}, 250);
				
				$(this).removeClass("yes");
				$("input", $(this)).removeAttr("checked");
			}
			else
			{
				$(".v", $(this)).stop().animate({
					marginLeft: 0
				}, 250);
					
				$("input", $(this)).attr("checked", "");
				$(this).addClass("yes");
			}
		}
	});

	$(document).mousemove(function(e){
		if(!currentState.isMoving)
			return;
		if(currentState.cType == "h")
		{
			var diskPos = e.pageX-currentState.cObject.parent().offset().left-currentState.clickX;
			if(diskPos < -12)
				$(currentState.cObject).css("left", (-12)+"px");
			else if(diskPos > 366)
				$(currentState.cObject).css("left", 366+"px");
			else
				$(currentState.cObject).css("left", diskPos+"px");

			$(".line", currentState.cObject.parent()).width($(currentState.cObject).position().left+12);

			var p = $(".line", currentState.cObject.parent()).width()*100/currentState.cObject.parent().width();
			var v = Math.round(p*30/100)+15;
			var m = Math.floor(v/10);
			var sm = Math.floor(v-m*10)*10;
			if(sm == 0)
				sm = "00";
			$(".kit-size .s1").text(m+" м "+sm+" см");
		}
		else if(currentState.cType == "v")
		{
			var diskPos = e.pageY-currentState.cObject.parent().offset().top-currentState.clickY;
			if(diskPos < -12)
				$(currentState.cObject).css("top", (-12)+"px");
			else if(diskPos > 216)
				$(currentState.cObject).css("top", 216+"px");
			else
				$(currentState.cObject).css("top", diskPos+"px");

			$(".line", currentState.cObject.parent()).height($(currentState.cObject).position().top+12);

			var p = $(".line", currentState.cObject.parent()).height()*100/currentState.cObject.parent().height();
			var v = Math.round(p*30/100)+10;
			var m = Math.floor(v/10);
			var sm = Math.floor(v-m*10)*10;
			if(sm == 0)
				sm = "00";
			if(currentState.cObject.parent().hasClass("l"))
				$(".kit-size .s2").text(m+" м "+sm+" см");
			else if(currentState.cObject.parent().hasClass("r"))
				$(".kit-size .s3").text(m+" м "+sm+" см");
		}
		else if(currentState.cType == "yesno")
		{
			var diskPos = e.pageX-currentState.cObject.parent().parent().offset().left-currentState.clickX;
			if(diskPos < 0)
				$(currentState.cObject.parent()).css("margin-left", -56+"px");
			else if(diskPos > 56)
				$(currentState.cObject.parent()).css("margin-left", 0+"px");
			else
				$(currentState.cObject.parent()).css("margin-left", diskPos-56+"px");
			currentState.change = false;
		}
	});

	$(".constr .type").click(function() {
		$(".constr .type").removeClass("active");
		$(this).addClass("active");

		if($(".constr .type").get(0) == $(this).get(0))
		{
			$(".kit-size .s2, .kit-size .s3, .kit-size .slid2, .kit-size .slid3").css("display", "none");
			$(".kit-size .type-img").css("background-position", "0");
			$(".kit-size .s2, .kit-size .s3").text("Не указано");
		}
		else if($(".constr .type").get(1) == $(this).get(0))
		{
			$(".kit-size .s2, .kit-size .s3, .kit-size .slid2, .kit-size .slid3").css("display", "block");
			$(".kit-size .type-img").css("background-position", "-400px 0");
			$(".kit-size .s2, .kit-size .s3").text("1 м 00 см");
		}
		else if($(".constr .type").get(2) == $(this).get(0))
		{
			$(".kit-size .s2, .kit-size .slid2").css("display", "block");
			$(".kit-size .s3, .kit-size .slid3").css("display", "none");
			$(".kit-size .type-img").css("background-position", "-800px 0");
			$(".kit-size .s2").text("1 м 00 см");
			$(".kit-size .s3").text("Не указано");
		}
		else if($(".constr .type").get(3) == $(this).get(0))
		{
			$(".kit-size .s3, .kit-size .slid3").css("display", "block");
			$(".kit-size .s2, .kit-size .slid2").css("display", "none");
			$(".kit-size .type-img").css("background-position", "-1200px 0");
			$(".kit-size .s3").text("1 м 00 см");
			$(".kit-size .s2").text("Не указано");
		}
	});


	var cusSelect = $(".cus-select");
	for(var i = 0; i < cusSelect.length; i++)
	{
		var options = $("select option", cusSelect.get(i));
		for(var j = 0; j < options.length; j++)
		{
			$("ul", cusSelect.get(i)).append("<li>"+$(options.get(j)).text()+"</li>");
		}

		$(".val", $(cusSelect.get(i))).text($(options.get(0)).text());
	}

	$(".cus-select").click(function() {
		if(!$(this).hasClass("opened"))
		{
			$(".cus-select").removeClass("opened");
			$(this).addClass("opened");
		}
		else
		{
			$(this).removeClass("opened");
		}
	});

	$(".cus-select ul li").click(function(e) {
		var els = $("ul li", $(this).parent().parent());
		var options = $("select option", $(this).parent().parent());
		var i;
		for(var i = 0; i < els.length; i++)
		{
			if(els.get(i) == $(this).get(0))
				break;
		}

		options.removeAttr("selected");
		$(options.get(i)).attr("selected", "");
		$(".val", $(this).parent().parent()).text($(options.get(i)).text());
	});
	
	$("#calc-form button").click(function() {
		if($(this).html() == "Отправлено!" || $(this).html() == "Идёт отправка...")
			return;
		
		var k = false;
		if($("#calc-form .name-inp").val().length < 2)
		{
			$("#calc-form .name-inp").addClass("error");
			k = true;
		}
		else
		{
			$("#calc-form .name-inp").removeClass("error");
		}
		
		if($("#calc-form .phone-inp").val().length < 10)
		{
			$("#calc-form .phone-inp").removeClass("error");
			k = true;
		}
		
		if(k)
			return;
		
		var data = [];
		if($(".two-and-part .block .yes-no").hasClass("yes"))
			data[0] = "Да";
		else
			data[0] = "Нет";
			
		if($(".two-and-part .block-2 .yes-no").hasClass("yes"))
			data[1] = "Да";
		else
			data[1] = "Нет";
			
		if($(".two-and-part .block-3 .yes-no").hasClass("yes"))
			data[2] = "Да";
		else
			data[2] = "Нет";
			
		$.post("sendmessage2.php",
		{
			name: $(".two-and-part .name-inp").val(),
			phone: $(".two-and-part .phone-inp").val(),
			type: $(".two-and-part .types .type.active span").text(),
			kits1: $(".two-and-part .kit-size .s1").text(),
			kits2: $(".two-and-part .kit-size .s2").text(),
			kits3: $(".two-and-part .kit-size .s3").text(),
			mat1: $(".two-and-part .mat-1 .cus-select .val").text(),
			mat2: $(".two-and-part .mat-2 .cus-select .val").text(),
			mat3: $(".two-and-part .mat-3 .cus-select .val").text(),
			dov: data[0],
			diod: data[1],
			tech: data[2]
		}, function() {
			$(this).html("Отправлено!");
		});
		
		$(this).html("Отправлено!");
	});
	$('#form-calc').submit(function(e){
	    if ($('input [name="name"]',this).val() == ''){
	        return false;
	    }
    e.preventDefault();
    $.ajax({
      url: "sendmessage3.php",
      type: "POST",
      data: $('#form-calc').serialize(),
      success: function(response) {
      openmodalok();
      },
      error: function(response) {
        setTimeout(alert('Ошибка отправки'), 1000);
     }
    });
});

 $('#form-plan').submit(function(e){
    $.ajax( {
      url: 'file.php',
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function(response){
openmodalok();
      },
      error:function(response) {
        alert('Ошибка отправки');
     }
    } );
    e.preventDefault();
  });
});