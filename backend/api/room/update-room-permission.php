<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';
include_once '../../models/User.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));

$userId = clean_input_and_strip_tags($data->userId, $db);
$roomId = clean_input_and_strip_tags($data->roomId, $db);
$type = clean_input_and_strip_tags($data->type, $db);

if (empty($roomId)) {
    response(true, 200, ' roomId is not set!');
    exit();
}
if (empty($type)) {
    response(true, 200, ' Type is not set!');
    exit();
}


//Check if user created
$get_user = $user->get_user_by_field('id', $userId);


if ($get_user['count']) {

    $permit = $room->update_room_permission($roomId, $type);

    if ($permit) {
        response(true, 200, 'Room ' . $type . ' successfully!');
        exit();
    }

    response(true, 200, 'Request failed!');
} else {
    response(false, 200, $get_user['msg']);
}
