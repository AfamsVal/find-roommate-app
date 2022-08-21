<?php
//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Room.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(503);
    //No room
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Access Denied!'
        )
    );
    exit();
}

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

$room->id = isset($_GET['id']) ? intval($_GET['id']) : die();

//Room query
$result = $room->read_single();

//Check if any room
if ($result[0] > 0) {
    $row = mysqli_fetch_assoc($result[1]);
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
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'data' => $room_item
    ));
} else {
    http_response_code(404);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'No room found!' . $db->error
        )
    );
}
