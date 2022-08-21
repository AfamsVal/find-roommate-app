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

$user->email = htmlspecialchars(strip_tags($data->email));

//Check forgot password
$res = $user->forgot_password();
if ($res === true) {
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'message' => 'E-mail sent successful!'
    ));
} else if ($res === false) {
    http_response_code(500);
    //No user
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Forgot password failed!' . $db->error
        )
    );
} else {
    http_response_code(500);
    //No user
    echo json_encode(
        array(
            'status' => false,
            'message' => 'User not found!'
        )
    );
}
