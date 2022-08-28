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

$post->address = clean_input_and_strip_tags($data->address, $db);
$post->applicantName = clean_input_and_strip_tags($data->applicantName, $db);
$post->bathRoomNo = clean_input_and_strip_tags($data->bathRoomNo, $db);
$post->category = clean_input_and_strip_tags($data->category, $db);
$post->descriptions = clean_input_and_strip_tags($data->descriptions, $db);
$post->email = clean_input_and_strip_tags($data->email, $db);
$post->hasTiles = clean_input_and_strip_tags($data->hasTiles, $db);
$post->hasWater = clean_input_and_strip_tags($data->hasWater, $db);
$post->hostelName = clean_input_and_strip_tags($data->hostelName, $db);
$post->houseType = clean_input_and_strip_tags($data->houseType, $db);
$post->images = $data->images;
$post->isVerified = clean_input_and_strip_tags($data->isVerified, $db);
$post->phone = clean_input_and_strip_tags($data->phone, $db);
$post->rentPerYear = clean_input_and_strip_tags($data->rentPerYear, $db);
$post->roomType = clean_input_and_strip_tags($data->roomType, $db);
$post->state = clean_input_and_strip_tags($data->state, $db);
$post->updatedAt = time();
$post->toiletNo = clean_input_and_strip_tags($data->toiletNo, $db);
$post->uid = clean_input_and_strip_tags($data->uid, $db);
$post->university = clean_input_and_strip_tags($data->university, $db);


//Check if post created
if ($post->create_room()) {
    response(true, 200, 'Room created successfully!');
} else {
    response(false, 500, 'Request failed!' . $db->error);
}
