<?php
//подключаем phpmailer
require_once('class.phpmailer.php');
/*ф-я фильтрации*/
function myclear($dt){
    $dt=stripslashes($dt);
    $dt=strip_tags($dt);
    $dt=trim($dt);
    return $dt;
}
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
    $email = myclear($_POST['email']);//фильтруем
    $body = myclear($_POST['body']);
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Host       = "smtp.gmail.com"; 
    $mail->SMTPDebug  = 0; 
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;
    $mail->Priority    = 3;
    $mail->CharSet     = 'UTF-8';
    $mail->Encoding    = '8bit';
    $mail->Subject     = "Тест php mailer";
    $mail->ContentType = "text/html; charset=utf-8\r\n";
    $mail->Username   = "pronchenko59@gmail.com";
    $mail->Password   = "qwe4815162342rtyy";
    $mail->isHTML(true); 
    $mail->Body = $body;
    $mail->WordWrap = 50;
    $mail->AddAddress($email);
    if(!$mail->send()) {
      echo '<div class="alert alert-danger"><p class="text-center"><strong>Ваше сообщение не отправлено</strong></p></div>';
      exit;
   }
   echo '<div class="alert alert-success"><p class="text-center"><strong>Ваше сообщение отправлено</strong></p></div>';
}
?>
