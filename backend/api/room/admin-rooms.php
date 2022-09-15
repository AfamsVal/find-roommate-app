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

$room->start = clean_input_and_strip_tags($data->start, $db);
$room->limit = clean_input_and_strip_tags($data->limit, $db);

//Room query
$result = $room->all_rooms();

//Check if any room
if ($result[0] > 0) {
    $rooms_arr = array();
    while ($row = mysqli_fetch_assoc($result[1])) {
        extract($row);
        $user = $room->get_user_by_id($uid);
        $images = $room->fetch_more_images($id);
        $room_item = array(
            'key' => $id,
            'uploadedBy' => $user['lastName'] . ' ' . $user['firstName'],
            'address' => $address,
            'bathRoomNo' => $bathRoomNo,
            'category' => $category,
            'createdAt' => $createdAt,
            'descriptions' => $descriptions,
            'email' => $email,
            'hasWater' => $hasWater,
            'hasTiles' => $hasTiles,
            'houseType' => $houseType,
            'hostelName' => $hostelName,
            'isVerified' => $isVerified,
            'phone' => $phone,
            'image' => $image,
            'images' => $images,
            'rentPerYear' => $rentPerYear,
            'roomType' => $roomType,
            'state' => $state,
            'updatedAt' => $updatedAt,
            'toiletNo' => $toiletNo,
            'uid' => $uid,
            'university' => $university
        );
        //Push to data
        array_push($rooms_arr, $room_item);
    }
    response(true, 200, 'success', array("result" => $rooms_arr, "moreData" => true));
} else {
    response(true, 200, 'No record found!', array());
}
