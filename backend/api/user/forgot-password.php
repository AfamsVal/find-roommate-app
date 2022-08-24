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
