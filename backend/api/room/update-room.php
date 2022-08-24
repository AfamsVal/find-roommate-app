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

$room->id = htmlspecialchars(strip_tags($data->id));
$room->address = htmlspecialchars(strip_tags($data->address));
$room->applicantName = htmlspecialchars(strip_tags($data->applicantName));
$room->bathRoomNo = htmlspecialchars(strip_tags($data->bathRoomNo));
$room->category = htmlspecialchars(strip_tags($data->category));
$room->descriptions = htmlspecialchars(strip_tags($data->descriptions));
$room->email = htmlspecialchars(strip_tags($data->email));
$room->hasTiles = htmlspecialchars(strip_tags($data->hasTiles));
$room->hasWater = htmlspecialchars(strip_tags($data->hasWater));
$room->hostelName = htmlspecialchars(strip_tags($data->hostelName));
$room->houseType = htmlspecialchars(strip_tags($data->houseType));
$room->isVerified = htmlspecialchars(strip_tags($data->isVerified));
$room->phone = htmlspecialchars(strip_tags($data->phone));
$room->rentPerYear = htmlspecialchars(strip_tags($data->rentPerYear));
$room->roomType = htmlspecialchars(strip_tags($data->roomType));
$room->state = htmlspecialchars(strip_tags($data->state));
$room->updatedAt = time();
$room->toiletNo = htmlspecialchars(strip_tags($data->toiletNo));
$room->uid = htmlspecialchars(strip_tags($data->uid));
$room->university = htmlspecialchars(strip_tags($data->university));


//Check if room is updated
if ($room->update_room()) {
    response(true, 200, 'Room updated successful!');
} else {
    response(false, 500, 'Update failed!' . $db->error);
}
