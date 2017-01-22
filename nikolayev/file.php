<meta http-equiv="Content-Type" content="text/html; windows-1251">
<?php
 
// Адрес, куда отправляем письмо
    $to = "pjatakvvadim@yandex.ru,ramil.ramil3280@yandex.ru"; //куда отправлять письмо
    $from = "From: noreply@ramir-mebel.ru"; // от кого
    $subject ="Заявка с сайта(калькулятор шкафы-купе)"; //описание формы
   
 
$the_file = '';
//Если пользователь выбрал файл для отправки
if (!empty($_FILES['file']['tmp_name'])) {
    // Закачиваем файл
    $path = $_FILES['file']['name'];
    if (copy($_FILES['file']['tmp_name'], $path)) {
        $the_file = $path;
    }
}
// Если есть прикреплённый файл, то заголовки чуть другие.
// Поэтому, в зависимости от того, отправил ли пользователь файл,
// выбираем, что делать дальше
$headers = null;
 
if (empty($the_file)) {
    // эта часть кода отвечает за отправку сообщений без вложений
    // собираем заголовки
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/html; charset=utf-8";
    $headers[] = "From: $name <$userEmail>";
    $headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
    $headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
    $headers[] = "Subject: {$subject}";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    // собираем текст письма
    $allmsg = 'Имя: '.$_POST['name'].'<br/>Телефон: '.$_POST['phone'].';';
    $allmsg = "<html><head><title>Обратная связь</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";
    // отправляем
    if (!mail($to, $subject, $allmsg, implode("\r\n", $headers))) {
        echo 'Письмо не отправлено - что-то не сработало.';
    } else {
        echo 'Отправлено письмо без вложений.';
    }
} else {
    // эта часть кода отвечает за отправку сообщений с вложениями
    // читаем отправляемый файл в строку
    $fp = fopen($the_file, "r");
    if (!$the_file) {
        die("Ошибка отправка письма: Файл $the_file не может быть прочитан.");
    }
    $file = fread($fp, filesize($path));
    fclose($fp);
    // удаляем временный файл
    unlink($path);
    // собираем текст письма
    $allmsg = 'Имя: '.$_POST['name'].'<br/>Телефон: '.$_POST['phone'].';';
    $allmsg = "<html><head><title>Обратная связь</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";
    // генерируем разделитель
    $boundary = "--" . md5(uniqid(time()));
    // собираем заголовки
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "From: $name <$userEmail>";
    $headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
    $headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
    $headers[] = "Subject: {$subject}";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    // собираем текст письма + приложенынй файл
    $multipart = array();
    $multipart[] = "--$boundary";
    $multipart[] = "Content-Type: text/html; charset=UTF-8";
    $multipart[] = "Content-Transfer-Encoding: Quot-Printed\r\n";
    $multipart[] = "$allmsg\r\n";
    $multipart[] = "--$boundary";
    $multipart[] = "Content-Type: application/octet-stream";
    $multipart[] = "Content-Transfer-Encoding: base64";
    $multipart[] = "Content-Disposition: attachment; filename = \"" . $path . "\"\r\n";
    $multipart[] = chunk_split(base64_encode($file));
    $multipart[] = "--$boundary";
    // отправляем
    if (!mail($to, $subject, implode("\r\n", $multipart), implode("\r\n", $headers))) {
        echo 'Письмо не отправлено - что-то не сработало.';
    } else {
        echo 'Отправлено письмо с вложениями.';
    }
}