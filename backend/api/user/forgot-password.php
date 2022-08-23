<?php
require '../../controllers/core.php';

//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/User.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    response(false, 503, 'Access Denied!');
    exit();
}

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

$user->email = htmlspecialchars(strip_tags($data->email));

//Check forgot password
$res = $user->forgot_password();
if ($res === true) {
    response(true, 200, 'E-mail sent successful!');
} else if ($res === false) {
    response(false, 500, 'Request failed!' . $db->error);
} else {
    response(false, 404, 'User not found!');
}
