<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php'; // Phpmail package already on server
require 'PHPMailer/src/PHPMailer.php'; // Phpmail package already on server
require 'PHPMailer/src/SMTP.php'; // Phpmail package already on server

function send_mail($to, $subject, $message)
{

    // Helpful resources ///////////////////////////
    //////////////////////////////////////////////////////////////

    // 1. Download Php mailer zip folder from: https://github.com/PHPMailer/PHPMailer
    //2. helpful Youtube: https://www.youtube.com/watch?v=QvkxdMlbW90
    //3. inplement the configuration in this page
    //4. loading to the gmail 
    // => click on profile icon on the right top to drop down 
    // => click on manage google account 
    // => Go to security 
    // => Activate two steps verification 
    // => Go back below two steps and click on app password
    // => You can type in test in the input and click on generate to get password 
    // =>  add the password here $mail->Password

    //Load Composer's autoloader

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->IsSMTP();                                         //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'myceet1@gmail.com';                     //SMTP username
        $mail->Password   = 'avfujgyfnhefbrjl';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('myceet1@gmail.com', 'FindRoomy');
        $mail->addAddress($to, '');     //Add a recipient
        // $mail->addReplyTo('progfams@gmail.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $message;
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        return true;
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        return false;
    }
}
