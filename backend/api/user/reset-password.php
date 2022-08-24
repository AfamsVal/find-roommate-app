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
    response(false, 200, 'Email is required!');
    exit();
}

if (empty(trim($data->password))) {
    response(false, 200, 'New password is required!');
    exit();
}

$user->email = htmlspecialchars(strip_tags($data->email));
$user->password = htmlspecialchars(strip_tags(password_hash($data->password, PASSWORD_DEFAULT)));

//Check if password is reseted
if ($user->reset_password()) {
    response(true, 200, 'Password reset successful!');
} else {
    response(false, 500, 'Reset failed!' . $db->error);
}
