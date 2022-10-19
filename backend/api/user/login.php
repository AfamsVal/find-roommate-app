<?php
require '../../vendor/autoload.php';
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate login object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

if (empty(trim($data->email)) || empty(trim($data->password))) {
    response(false, 200, 'Please fill all field');
    exit();
}

$user->email = clean_input_and_strip_tags($data->email, $db);
$password = clean_input_and_strip_tags($data->password, $db);
$user->password = $password;

//Check if login successful
$user_data = $user->check_login();

if (!empty($user_data)) {

    if ($user_data['blocked'] >= '1') {
        response(false, 200, 'This account has been blocked');
        exit();
    }


    $firstName = $user_data['firstName'];
    $lastName = $user_data['lastName'];
    $email = $user_data['email'];
    $phone = $user_data['phone'];
    $state = $user_data['state'];
    $gender = $user_data['gender'];
    $db_password = $user_data['password'];


    $checkPwd = $user->verify_password($password, $user_data['id']);

    if ($checkPwd['isValid']) {
        $data = array(
            "firstName" => $user_data['firstName'],
            "lastName" => $user_data['lastName'],
            "email" => $user_data['email'],
            "phone" => $user_data['phone'],
            "state" => $user_data['state'],
            "gender" => $user_data['gender']
        );
        $uid = $user_data['id'];
        $isAdmin = $user_data['admin'];

        $jwt = generateToken($data, $uid, $isAdmin);

        response(true, 200, 'User logged in successfully', array('token' => $jwt, "db_password" => $db_password));
        exit();
    }

    response(false, 200, $checkPwd['msg']);
    exit();
} else {
    response(false, 200, 'Invalid Credentials!');
}
