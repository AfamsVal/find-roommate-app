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
$user->password = clean_input_and_strip_tags($data->password, $db);


//Check if login successful
$user_data = $user->check_login();

if (!empty($user_data)) {
    $firstName = $user_data['firstName'];
    $lastName = $user_data['lastName'];
    $email = $user_data['email'];
    $phone = $user_data['phone'];
    $state = $user_data['state'];
    $gender = $user_data['gender'];
    $password = $user_data['password'];

    if (password_verify($data->password, $password)) {
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

        response(true, 200, 'User logged in successfully', array('token' => $jwt));
    } else {
        response(false, 200, 'Invalid Credentials!');
    }
} else {
    response(false, 200, 'Invalid Credentials!');
}
