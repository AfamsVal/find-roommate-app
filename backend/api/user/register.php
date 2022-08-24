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
    response(false, 200, 'Please fill all feild!');
    exit();
}

//Check if user created
$result = $user->create_user();

if ($result === 0) {
    response(false, 200, 'Email or password already exist!');
}

if ($result === 1) {
    response(true, 200, 'User created successfully!');
}

if ($result === 2) {
    response(false, 503, 'User not created!');
}
