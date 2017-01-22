<?php

$recepient = "nikolaevpave@mail.ru";
$sitename = "ПотолокМастер";

$name = trim($_GET["lead_name"]);
$phone = trim($_GET["lead_phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
