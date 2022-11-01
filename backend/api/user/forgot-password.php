<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';
require '../../controllers/sendMail.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

if (empty(trim($data->email))) {
    response(false, 200, 'E-mail is required!');
    exit();
}

$user->email = clean_input_and_strip_tags($data->email, $db);

//Check forgot password
$res = $user->forgot_password();
if ($res) {
    $code = generateCode();
    $to = $user->email;
    $subject = 'FindRoomy: Password Reset';
    $message = '<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family:sans-serif;"> <tr><td>
            <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="height:80px;">&nbsp;</td>
                </tr>
                <tr>
                    <td style="text-align:center;">
                      <a href="https://rakeshmandal.com" title="logo" target="_blank">
                        <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">
                      </a>
                    </td>
                </tr>
                <tr>
                    <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                            <tr>
                                <td style="height:40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding:0 35px;">
                                    <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:sans-serif;">You have
                                        requested to reset your password</h1>
                                    <span
                                        style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                        Thank you for reaching out to us. Kindly use the OTP below to complete your password reset.
                                         If you have any other challenge, kindly contact customer care. Thank you!
                                    </p>
                                    <a href="javascript:void(0);"
                                        style="background:#0058e5;text-decoration:none !important; font-weight:700; margin-top:35px; color:#fff;text-transform:uppercase; font-size:20px;padding:10px 24px;display:inline-block;border-radius:50px;letter-spacing:14px;">' . $code . '</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:40px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                <tr>
                    <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td style="text-align:center;">
                        <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.findroomy.com</strong></p>
                    </td>
                </tr>
                <tr>
                    <td style="height:80px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>';
    $isSent = send_mail($to, $subject, $message);
    if ($isSent) {
        $user->update_user_by_field('email', $user->email, 'code', $code);
        response(true, 200, 'E-mail sent successful!');
        exit();
    }
    response(false, 404, 'Request Failed! Please refresh & try again!!');
} else {
    response(false, 404, 'User not found!');
}
