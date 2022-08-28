<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));


$user->id = clean_input_and_strip_tags($data->id, $db);
$user->firstName = clean_input_and_strip_tags($data->firstName, $db);
$user->lastName = clean_input_and_strip_tags($data->lastName, $db);
$user->phone = clean_input_and_strip_tags($data->phone, $db);

//Check if user is updated
$res = $user->update_user_profile();
if ($res === true) {
    response(true, 200, 'Profile updated successful!');
} else if ($res === false) {
    response(false, 500, 'Request failed!' . $db->error);
} else {
    response(false, 200, 'Nothing to update!');
}
