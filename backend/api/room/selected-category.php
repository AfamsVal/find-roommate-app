<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';


if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

$data = json_decode(file_get_contents('php://input'));

$room->selectedType = clean_input_and_strip_tags($data->selectedType, $db);
$room->start = clean_input_and_strip_tags($data->start, $db);
$room->limit = clean_input_and_strip_tags($data->limit, $db);

//Room query
$result = $room->all_rooms_by_category();

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
            'image' => $image,
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