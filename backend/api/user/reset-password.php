<?php

//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/User.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(503);
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Access Denied!'
        )
    );
    exit();
}

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

if (empty(trim($data->email))) {
    http_response_code(200);
    //No email
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Email is required!'
        )
    );
    exit();
}

if (empty(trim($data->password))) {
    http_response_code(200);
    //No password
    echo json_encode(
        array(
            'status' => false,
            'message' => 'New password is required!'
        )
    );
    exit();
}

$user->email = htmlspecialchars(strip_tags($data->email));
$user->password = htmlspecialchars(strip_tags(password_hash($data->password, PASSWORD_DEFAULT)));

//Check if password is reseted
if ($user->reset_password()) {
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'message' => 'Password reset successful!'
    ));
} else {
    http_response_code(500);
    //No user
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Reset failed!' . $db->error
        )
    );
}
