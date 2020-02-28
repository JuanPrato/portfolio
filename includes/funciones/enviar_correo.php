<?php
require_once '../../phpmailer/PHPMailerAutoload.php';

$mail_usuario = $POST['email'];
$nombre_usuario = $POST['nombre'];
$celular_usuario = $POST['numero'];
$mensaje_usuario = $POST['mensaje'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host='smtp.gmail.com';
$mail->Port=587;
$mail->SMTPAuth=true;
$mail->SMTPSecure='tls';

$mail->Username='portfoliojuanprato@gmail.com';
$mail->Password='portfolio123';

$mail->setFrom( 'portfoliojuanprato@gmail.com', 'Portfolio' );
$mail->addAddress('pratojuanmanuel2@gmail.com');
$mail->addReplyTo('pratojuanmanuel2@gmail.com', 'mi Mail');

$mail->isHTML(false);
$mail->Subject='PHP Mailer Subject';
$mail->Body= 'Nombre:' . $nombre_usuario . 'Mail:' . $mail_usuario . 'Celular: ' $celular_usuario . 'Mensaje:' . $mensaje_usuario;

if(!$mail->send()){
    $respuesta = array(
        'respuesta' => 'error'
    );
} else {
    $respuesta = array(
        'respuesta' => 'exito'
    );
}

echo json_encode($respuesta);

?>