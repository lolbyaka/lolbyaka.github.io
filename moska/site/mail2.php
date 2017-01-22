<?php

$recepient = "nikolaevpave@mail.ru";
$sitename = "ПотолокМастер";

$name = trim($_GET["lead_name"]);
$phone = trim($_GET["lead_phone"]);

$square = trim($_GET["square"]);
$ugol = trim($_GET["ugol"]);

$svetilnik = trim($_GET["svetilnik"]);
$lustra = trim($_GET["lustra"]);





$select_tkan  = 'Ничего не выбрано';
if(isset($_GET['option']) && is_array($_GET['option']) && count($_GET['option']) > 0){
    $select_tkan = implode(', ', $_GET['option']);
}

$select_pvh  = 'Ничего не выбрано';
if(isset($_GET['option2']) && is_array($_GET['option2']) && count($_GET['option2']) > 0){
    $select_pvh = implode(', ', $_GET['option2']);
}


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \n Площадь: $square \n Кол-во углов: $ugol \n Светильники: $svetilnik \n Люстры: $lustra \n Выбранные ткани: $select_tkan \n Выбранное ПВХ: $select_pvh";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
