<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

$isLogin = clean_input_and_strip_tags($data->isLogin, $db);
$code = clean_input_and_strip_tags($data->code, $db);
$oldPassword = clean_input_and_strip_tags($data->oldPassword, $db);
$newPassword = password_hash($data->newPassword, PASSWORD_DEFAULT);

if ($isLogin === true && empty(trim($oldPassword))) {
    response(false, 200, 'Old password is required!');
    exit();
}

if (empty(trim($newPassword))) {
    response(false, 200, 'New password is required!');
    exit();
}


if ($isLogin) {
    $checkPwd = $user->verify_password($oldPassword, $code);
    if (!$checkPwd['isValid']) {
        response(false, 200, $checkPwd['msg']);
        exit();
    }
}


if (!$isLogin) {
    $isCodeValid = $user->get_user_by_field('code', $code);
    if ($isCodeValid['count'] == 0) {
        response(false, 200, 'OTP not valid!');
        exit();
    }
}


//Check if password is reseted
if ($user->reset_password($isLogin, $code, $newPassword)) {
    response(true, 200, 'Password reset successful!');
} else {
    response(false, 500, 'Reset failed!' . $db->error);
}
