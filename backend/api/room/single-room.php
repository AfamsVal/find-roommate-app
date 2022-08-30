<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';

if (!hasAccessControl('GET')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

$room->id = isset($_GET['id']) ? intval(clean_input_and_strip_tags($_GET['id'], $db)) : die();

//Room query
$result = $room->read_single();

//Check if any room
if ($result[0] > 0) {
    $row = $result[1];
    extract($row);
    $room_item = array(
        'id' => $id,
        'address' => $address,
        'applicantName' => $applicantName,
        'bathRoomNo' => $bathRoomNo,
        'category' => $category,
        'createdAt' => $createdAt,
        'descriptions' => $descriptions,
        'email' => $email,
        'hasWater' => $hasWater,
        'hostelName' => $hostelName,
        'isVerified' => $isVerified,
        'phone' => $phone,
        'rentPerYear' => $rentPerYear,
        'roomType' => $roomType,
        'state' => $state,
        'updatedAt' => $updatedAt,
        'toiletNo' => $toiletNo,
        'uid' => $uid,
        'university' => $university
    );

    response(true, 200, 'success', $room_item);
} else {
    response(false, 404, $result[1]);
}
