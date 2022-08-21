<?php
require '../../vendor/autoload.php';

use \Firebase\JWT\JWT;

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

if (empty(trim($data->email)) || empty(trim($data->password))) {
    http_response_code(200);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'All data needed'
        )
    );
    exit();
}

$user->email = htmlspecialchars(strip_tags($data->email));
$user->password = htmlspecialchars(strip_tags($data->password));


//Check if post created
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
        $iat = time();
        $secret_key = '12345';

        $payload_info = array(
            "iss" => 'localhost',
            "iat" => $iat,
            "nbf" => $iat + 10, //10 sec
            "exp" => $iat + 60 * 10, //1min  * 10 = 10mins
            "aud" => 'myusers',
            "data" => array(
                "firstName" => $user_data['firstName'],
                "lastName" => $user_data['lastName'],
                "email" => $user_data['email'],
                "phone" => $user_data['phone'],
                "state" => $user_data['state'],
                "gender" => $user_data['gender']
            )
        );

        $jwt = JWT::encode($payload_info, $secret_key, 'HS512');
        http_response_code(200);
        //No post
        echo json_encode(
            array(
                'status' => true,
                'token' => $jwt,
                'message' => 'User logged in successfully'
            )
        );
    } else {
        http_response_code(404);
        //No post
        echo json_encode(
            array(
                'status' => false,
                'message' => 'Invalid Credentials'
            )
        );
    }
} else {
    http_response_code(404);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Invalid Credentials'
        )
    );
}
