<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$typeServices1 = $_POST['type-cart-1'];
$typeServices2 = $_POST['type-cart-2'];
$typeServices3 = $_POST['type-cart-3'];
$typeServices4 = $_POST['type-cart-4'];
$typeServices5 = $_POST['type-cart-5'];
$typeServices6 = $_POST['type-cart-6'];
$typeServices7 = $_POST['type-cart-7'];
$typeServices8 = $_POST['type-cart-8'];
$typeServices9 = $_POST['type-cart-9'];
$typeServices10 = $_POST['type-cart-10'];
$typeServices11 = $_POST['type-cart-11'];
$typeServices12 = $_POST['type-cart-12'];
$typeServices13 = $_POST['type-cart-13'];
$typeServices14 = $_POST['type-cart-14'];
$typeServices15 = $_POST['type-cart-15'];
$typeServices16 = $_POST['type-cart-16'];
$typeServices17 = $_POST['type-cart-17'];
$typeServices18 = $_POST['type-cart-18'];
$typeServices19 = $_POST['type-cart-19'];
$typeServices20 = $_POST['type-cart-20'];
$typeServices21 = $_POST['type-cart-21'];
$typeServices22 = $_POST['type-cart-22'];
$typeServices23 = $_POST['type-cart-23'];
$typeServices24 = $_POST['type-cart-24'];
$typeServices25 = $_POST['type-cart-25'];
$typeServices26 = $_POST['type-cart-26'];
$typeServices27 = $_POST['type-cart-27'];

$typeServices01 = $_POST['type-services2--1'];
$typeServices02 = $_POST['type-services2--2'];
$typeServices03 = $_POST['type-services2--3'];
$typeServices04 = $_POST['type-services4000'];
$typeServices05 = $_POST['type-services4001'];
$typeServices06 = $_POST['teamNumber'];
$typeServices07 = $_POST['operationNumber'];

$brand = $_POST['type-brand'];
$forms = $_POST['getform'];

$utm = $_POST['utms'];

$to = 'client@marketing-time.kz, ';
$to      .= 'info@vbuh.kz';

$subject = 'the subject';

$message = "Сообщение с сайта vbuh.kz" . "\r\n";
$message .= "                                  " . "\r\n";
$message .= "__________________________________" . "\r\n";
$message .= "                                  " . "\r\n";


$message .= "Имя - ";
$message .= $name . "\r\n";
$message .= "Телефон - ";
$message .= $phone . "\r\n";

if($email){
    $message .= "Почта - ";
    $message .= $email . "\r\n";
}

if ($typeServices01 || $typeServices02 || $typeServices03 || $typeServices04 || $typeServices05 || $typeServices06 || $typeServices07) {
    $message .= " Дополнительные данные: \r\n";
}

if ($typeServices01) {
    $message .= " - тип услуги: =  " . $typeServices01 ." \r\n";
}
if ($typeServices02) {
    $message .= " - режим налогообложения: = " . $typeServices02 ." \r\n";
}
if ($typeServices03) {
    $message .= " - вид деятельности: = " . $typeServices03 ." \r\n";
}
if ($typeServices04) {
    $message .= " - " . $typeServices04 ." \r\n";
}
if ($typeServices05) {
    $message .= " - " . $typeServices05 ." \r\n";
}
if ($typeServices06) {
    $message .= " - количество сотрудников: = " . $typeServices06 ." \r\n";
}
if ($typeServices07) {
    $message .= " - количество операций: = " . $typeServices07 ." \r\n";
}

if ($typeServices1 || $typeServices2 || $typeServices3 || $typeServices4 || $typeServices5 || $typeServices6 || $typeServices7 || $typeServices8 || $typeServices9 || $typeServices10 || $typeServices11 || $typeServices12 || $typeServices13 || $typeServices14 || $typeServices15 || $typeServices16 || $typeServices17 || $typeServices18 || $typeServices19 || $typeServices20 || $typeServices21 || $typeServices22 || $typeServices23 || $typeServices24 || $typeServices25 || $typeServices26 || $typeServices27){
    $message .= "Услуги: \r\n";
}
if ($typeServices1) {
    $message .= " - " . $typeServices1 . "\r\n";
}
if ($typeServices2) {
    $message .= " - " . $typeServices2 . "\r\n";
}
if ($typeServices3) {
    $message .= " - " . $typeServices3 . "\r\n";
}
if ($typeServices4) {
    $message .= " - " . $typeServices4 . "\r\n";
}
if ($typeServices5) {
    $message .= " - " . $typeServices5 . "\r\n";
}
if ($typeServices6) {
    $message .= " - " . $typeServices6 . "\r\n";
}
if ($typeServices7) {
    $message .= " - " . $typeServices7 . "\r\n";
}
if ($typeServices8) {
    $message .= " - " . $typeServices8 . "\r\n";
}
if ($typeServices9) {
    $message .= " - " . $typeServices9 . "\r\n";
}
if ($typeServices10) {
    $message .= " - " . $typeServices10 . "\r\n";
}
if ($typeServices11) {
    $message .= " - " . $typeServices11 . "\r\n";
}
if ($typeServices12) {
    $message .= " - " . $typeServices12 . "\r\n";
}
if ($typeServices13) {
    $message .= " - " . $typeServices13 . "\r\n";
}
if ($typeServices14) {
    $message .= " - " . $typeServices14 . "\r\n";
}
if ($typeServices15) {
    $message .= " - " . $typeServices15 . "\r\n";
}
if ($typeServices16) {
    $message .= " - " . $typeServices16 . "\r\n";
}
if ($typeServices17) {
    $message .= " - " . $typeServices17 . "\r\n";
}
if ($typeServices18) {
    $message .= " - " . $typeServices18 . "\r\n";
}
if ($typeServices19) {
    $message .= " - " . $typeServices19 . "\r\n";
}
if ($typeServices20) {
    $message .= " - " . $typeServices20 . "\r\n";
}
if ($typeServices21) {
    $message .= " - " . $typeServices21 . "\r\n";
}
if ($typeServices22) {
    $message .= " - " . $typeServices22 . "\r\n";
}
if ($typeServices23) {
    $message .= " - " . $typeServices23 . "\r\n";
}
if ($typeServices24) {
    $message .= " - " . $typeServices24 . "\r\n";
}
if ($typeServices25) {
    $message .= " - " . $typeServices25 . "\r\n";
}
if ($typeServices26) {
    $message .= " - " . $typeServices26 . "\r\n";
}
if ($typeServices27) {
    $message .= " - " . $typeServices27 . "\r\n";
}


$message .= "Utm метки \r\n";
$message .= $utm . "\r\n";


$headers = 'From: info@vbuh.kz' . "\r\n" .
    'Reply-To: info@vbuh.kz' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (preg_match('/((8|\+7)-?)?\(?\d{3,5}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}((-?\d{1})?-?\d{1})?/', $phone)){
        mail($to, $subject, $message, $headers);
        echo true;
    }else{
        echo false;
    }

?>