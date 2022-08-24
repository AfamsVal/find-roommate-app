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


$user->id = htmlspecialchars(strip_tags($data->id));
$user->firstName = htmlspecialchars(strip_tags($data->firstName));
$user->lastName = htmlspecialchars(strip_tags($data->lastName));
$user->phone = htmlspecialchars(strip_tags($data->phone));

//Check if user is updated
$res = $user->update_user_profile();
if ($res === true) {
    response(true, 200, 'Profile updated successful!');
} else if ($res === false) {
    response(false, 500, 'Request failed!' . $db->error);
} else {
    response(false, 200, 'Nothing to update!');
}
