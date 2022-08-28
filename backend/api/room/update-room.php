<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

$data = json_decode(file_get_contents('php://input'));

$room->id = clean_input_and_strip_tags($data->id, $db);
$room->address = clean_input_and_strip_tags($data->address, $db);
$room->applicantName = clean_input_and_strip_tags($data->applicantName, $db);
$room->bathRoomNo = clean_input_and_strip_tags($data->bathRoomNo, $db);
$room->category = clean_input_and_strip_tags($data->category, $db);
$room->descriptions = clean_input_and_strip_tags($data->descriptions, $db);
$room->email = clean_input_and_strip_tags($data->email, $db);
$room->hasTiles = clean_input_and_strip_tags($data->hasTiles, $db);
$room->hasWater = clean_input_and_strip_tags($data->hasWater, $db);
$room->hostelName = clean_input_and_strip_tags($data->hostelName, $db);
$room->houseType = clean_input_and_strip_tags($data->houseType, $db);
$room->isVerified = clean_input_and_strip_tags($data->isVerified, $db);
$room->phone = clean_input_and_strip_tags($data->phone, $db);
$room->rentPerYear = clean_input_and_strip_tags($data->rentPerYear, $db);
$room->roomType = clean_input_and_strip_tags($data->roomType, $db);
$room->state = clean_input_and_strip_tags($data->state, $db);
$room->updatedAt = time();
$room->toiletNo = clean_input_and_strip_tags($data->toiletNo, $db);
$room->uid = clean_input_and_strip_tags($data->uid, $db);
$room->university = clean_input_and_strip_tags($data->university, $db);


//Check if room is updated
$res = $room->update_room();
if ($res === true) {
    response(true, 200, 'Room updated successful!');
} else if ($res === false) {
    response(false, 500, 'Request failed!' . $db->error);
} else {
    response(false, 200, 'Nothing to update!');
}
