<?php
require '../../controllers/core.php';
//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Room.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    response(false, 503, 'Access Denied!');
    exit();
}

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

//Room query
$result = $room->all_rooms();

//Check if any room
if ($result[0] > 0) {
    $rooms_arr = array();
    $rooms_arr['data'] = array();
    while ($row = mysqli_fetch_assoc($result[1])) {
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
        //Push to data
        array_push($rooms_arr['data'], $room_item);
    }
    response(true, 200, 'success', $rooms_arr);
} else {
    response(false, 404, 'No record found!');
}
