<?php
$sendto   = "pjatakvvadim@yandex.ru,ramil.ramil3280@yandex.ru" ;
$name = $_POST['name'];
$phone = $_POST['phone'];
// Формирование заголовка письма
$subject  = "Заявка с сайта(кухни)рамир-мебель.рф";
$headers  = "From: noreply@ramir-mebel.ru" . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с сайта</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Тип:</strong> ".$_POST['type']."</p>\r\n";
$msg .= "<p><strong>Центральная часть:</strong> ".$_POST['kits1']."</p>\r\n";
$msg .= "<p><strong>Левая сторона:</strong> ".$_POST['kits2']."</p>\r\n";
$msg .= "<p><strong>Правая сторона:</strong> ".$_POST['kits3']."</p>\r\n";
$msg .= "<p><strong>Материал фасада:</strong> ".$_POST['mat1']."</p>\r\n";
$msg .= "<p><strong>Материал столешницы:</strong> ".$_POST['mat2']."</p>\r\n";
$msg .= "<p><strong>Материал стеновой панели:</strong> ".$_POST['mat3']."</p>\r\n";
$msg .= "<p><strong>Нужны ли доводчики:</strong> ".$_POST['dov']."</p>\r\n";
$msg .= "<p><strong>Нужна ли диодная подсветка:</strong> ".$_POST['diod']."</p>\r\n";
$msg .= "<p><strong>Планируете встраиваемую технику?:</strong> ".$_POST['tech']."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>