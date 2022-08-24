<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate blog post object
$post = new Room($db);

$data = json_decode(file_get_contents('php://input'));

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

//Check if post created
if ($post->create_room()) {
    response(true, 200, 'Room created successfully!');
} else {
    response(false, 500, 'Request failed!' . $db->error);
}
