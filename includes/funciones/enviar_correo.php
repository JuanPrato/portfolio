<?php

try {

    require_once '../../phpmailer/PHPMailerAutoload.php';
    require_once '../../phpmailer/class.phpmailer.php';

    $mail_usuario = $_POST['email'];
    $nombre_usuario = $_POST['nombre'];
    $celular_usuario = $_POST['numero'];
    $mensaje_usuario = $_POST['mensaje'];

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->Port=587;
    $mail->SMTPAuth=true;
    $mail->SMTPSecure='tls';

    $mail->Username='portfoliojuanprato@gmail.com';
    $mail->Password='portfolio123';

    $mail->setFrom( 'portfoliojuanprato@gmail.com', 'Portfolio' );
    $mail->addAddress('pratojuanmanuel2@gmail.com', 'Juan Manuel');
    $mail->addReplyTo('pratojuanmanuel2@gmail.com', 'mi Mail');

    $mail->isHTML(false);
    $mail->Subject='Mensaje del Portfolio';
    $mail->Body= 'Nombre:' . $nombre_usuario . "\n" . 'Mail:' . $mail_usuario . "\n" . 'Celular: ' . $celular_usuario . "\n" . 'Mensaje:' . $mensaje_usuario;

    if(!$mail->send()){
        $respuesta = array(
            'respuesta' => 'error'
        );
    } else {
        $respuesta = array(
            'respuesta' => 'exito'
        );
    }
} catch (Exeption $e) {
    $respuesta = array(
        'error' => $e->getMessage()
    );
}


echo json_encode($respuesta);

?>