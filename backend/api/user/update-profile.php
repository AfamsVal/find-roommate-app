<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));


$uid = clean_input_and_strip_tags($data->id, $db);
$firstName = clean_input_and_strip_tags($data->firstName, $db);
$lastName = clean_input_and_strip_tags($data->lastName, $db);
$email = clean_input_and_strip_tags($data->email, $db);
$phone = clean_input_and_strip_tags($data->phone, $db);
$password = clean_input_and_strip_tags($data->password, $db);
//Check if user is updated


$validUser = $user->get_user_by_field('id', $uid);


if (!isValidEmail($email)) {
    response(false, 200, 'Email not valid!');
    exit();
}

if (!$validUser['count']) {
    response(false, 200, 'User not found!');
    exit();
}

$checkPwd = $user->verify_password($password, $uid);
if (!$checkPwd['isValid']) {
    response(false, 200, $checkPwd['msg']);
    exit();
}

$res = $user->update_user_profile($uid, $firstName, $lastName, $email, $phone);

if ($res === true) {
    $user_info = array(
        'firstName'  => $firstName,
        'lastName'  => $lastName,
        'email'  => $email,
        'phone'  => $phone
    );

    response(true, 200, 'Profile updated successful!', $user_info);
} else if ($res === false) {
    response(false, 500, 'Request failed!' . $db->error);
} else {
    response(false, 200, 'Nothing to update!');
}
