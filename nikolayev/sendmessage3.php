<?php
$sendto   = "ramil.ramil3280@yandex.ru,pjatakvvadim@yandex.ru" ;
$name = $_POST['name'];
$phone = $_POST['phone'];
// Формирование заголовка письма
$subject  = "Заявка расчета шкафа с сайта рамирмебель.рф";
$headers  = "From: noreply@ramir-mebel.ru" . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с сайта</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Тип шкафа:</strong> ".$_POST['type']."</p>\r\n";
$msg .= "<p><strong>Длина шкафа:</strong> ".$_POST['height']."</p>\r\n";
$msg .= "<p><strong>Высота шкафа:</strong> ".$_POST['width']."</p>\r\n";
$msg .= "<p><strong>Тип фассадов:</strong> ".$_POST['tipf']."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>