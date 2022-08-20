<?php
//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Room.php';

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(503);
    //No post
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

//Instantiate blog post object
$post = new Room($db);

$data = json_decode(file_get_contents('php://input'));

$post->id = htmlspecialchars(strip_tags($data->id));
$post->address = htmlspecialchars(strip_tags($data->address));
$post->applicantName = htmlspecialchars(strip_tags($data->applicantName));
$post->bathRoomNo = htmlspecialchars(strip_tags($data->bathRoomNo));
$post->category = htmlspecialchars(strip_tags($data->category));
$post->descriptions = htmlspecialchars(strip_tags($data->descriptions));
$post->email = htmlspecialchars(strip_tags($data->email));
$post->hasTiles = htmlspecialchars(strip_tags($data->hasTiles));
$post->hasWater = htmlspecialchars(strip_tags($data->hasWater));
$post->hostelName = htmlspecialchars(strip_tags($data->hostelName));
$post->houseType = htmlspecialchars(strip_tags($data->houseType));
$post->isVerified = htmlspecialchars(strip_tags($data->isVerified));
$post->phone = htmlspecialchars(strip_tags($data->phone));
$post->rentPerYear = htmlspecialchars(strip_tags($data->rentPerYear));
$post->roomType = htmlspecialchars(strip_tags($data->roomType));
$post->state = htmlspecialchars(strip_tags($data->state));
$post->updatedAt = time();
$post->toiletNo = htmlspecialchars(strip_tags($data->toiletNo));
$post->uid = htmlspecialchars(strip_tags($data->uid));
$post->university = htmlspecialchars(strip_tags($data->university));


//Check if post is updated
if ($post->update_room()) {
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'message' => 'Room updated successful!'
    ));
} else {
    http_response_code(500);
    //No post
    echo json_encode(
        array(
            'status' => false,
            'message' => 'Update failed!' . $db->error
        )
    );
}
