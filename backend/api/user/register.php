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

$user->firstName = clean_input_and_strip_tags($data->firstName, $db);
$user->lastName = clean_input_and_strip_tags($data->lastName, $db);
$user->email = clean_input_and_strip_tags($data->email, $db);
$user->phone = clean_input_and_strip_tags($data->phone, $db);
$user->state = clean_input_and_strip_tags($data->state, $db);
$user->gender = clean_input_and_strip_tags($data->gender, $db);
$user->password = clean_input_and_strip_tags(password_hash($data->password, PASSWORD_DEFAULT), $db);


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
