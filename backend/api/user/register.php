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
    //No post
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

//Instantiate blog post object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

$user->firstName = htmlspecialchars(strip_tags($data->firstName));
$user->lastName = htmlspecialchars(strip_tags($data->lastName));
$user->email = htmlspecialchars(strip_tags($data->email));
$user->phone = htmlspecialchars(strip_tags($data->phone));
$user->state = htmlspecialchars(strip_tags($data->state));
$user->gender = htmlspecialchars(strip_tags($data->gender));
$user->password = htmlspecialchars(strip_tags(password_hash($data->password, PASSWORD_DEFAULT)));


if (
    empty(trim($data->firstName)) ||
    empty(trim($data->lastName)) ||
    empty(trim($data->email)) ||
    empty(trim($data->phone)) ||
    empty(trim($data->state)) ||
    empty(trim($data->gender)) ||
    empty(trim($data->password))
) {
    http_response_code(200);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Please fill all feild'
        )
    );
    exit();
}

//Check if post created
$result = $user->create_user();

if ($result === 0) {
    http_response_code(200);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Email or password already exist'
        )
    );
}

if ($result === 1) {
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'message' => 'User created successfully!'
    ));
}

if ($result === 2) {
    http_response_code(503);
    echo json_encode(
        array(
            'status' => false,
            'message' => 'User not created!' . $db->error
        )
    );
}
