  $(document).ready(function() {
      /* $(".modalbox").fancybox(); */
      /* $("#contact").submit(function() { return false; }); */
	
	 $(".top-form").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );   
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('zakazatzvonok1');ga('send', 'event', 'submit', 'zakazatzvonok1(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form1").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form1 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('dizainerzayvka'); ga('send', 'event', 'submit', 'dizainerzayvka(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form2").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form2 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('ostavitzayvky'); ga('send', 'event', 'submit', 'ostavitzayvky(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
		
		 $(".top-form3").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form3 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('vuzvatzamerchika'); ga('send', 'event', 'submit', 'vuzvatzamerchika(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
			 $(".top-form4").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form4 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('uznatstoimost');ga('send', 'event', 'submit', 'uznatstoimost(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
	 $(".top-form5").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form5 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('koncultaciyadizainera'); ga('send', 'event', 'submit', 'koncultaciyadizainera(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });

		$(".top-form6").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form6 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('besplatnozamerchik'); ga('send', 'event', 'submit', 'besplatnozamerchik(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
	 $(".top-form7").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {
			$('.top-form7 ').find('input[type="text"],input[type="hidden"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
		   yaCounter33400768.reachGoal('cenakuxnya1'); ga('send', 'event', 'submit', 'cenakuxnya1(google)'); return true;
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });

	 $(".top-form8").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form8 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form9").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form9 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form10").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form10 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form11").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form11 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form13").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form12 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form14").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form14 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
		 $(".top-form15").validate({
     rules: {
	  name: { required: true},
	  phone: { required: true}
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      /* forma.find('button').replaceWith("<em>отправка...</em>"); */
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form15 ').find('input[type="text"]').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p><p>Благодарим Вас за вашу заявку!</p></div>',
            {
                  'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none'
            }
          );
           setTimeout("$.fancybox.close()", 3000);
              }
            }
          });
      /* forma.find('em').replaceWith('<button type="submit" class="btn-yellow">Заказать</button>'); */
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });
	
  });