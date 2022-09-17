<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate blog user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

$userId = clean_input_and_strip_tags($data->userId, $db);
$sessionId = clean_input_and_strip_tags($data->sessionId, $db);
$type = clean_input_and_strip_tags($data->type, $db);

//Check if user created
$get_user = $user->get_user_by_field('id', $userId, $sessionId);


if ($get_user['count']) {
    if ($type == 'blocked') {
        $user->update_user_by_field('id', $userId, 'blocked', 1);
    } else {
        $user->update_user_by_field('id', $userId, 'blocked', 0);
    }
    response(true, 200, $type . ' successfully!');
} else {
    response(false, 200, $get_user['msg']);
}
