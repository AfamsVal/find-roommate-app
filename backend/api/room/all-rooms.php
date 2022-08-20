<?php
//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Room.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
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

//Blog post query
$result = $post->all_rooms();

//Check if any post
if ($result[0] > 0) {
    $posts_arr = array();
    $posts_arr['status'] = true;
    $posts_arr['data'] = array();
    while ($row = mysqli_fetch_assoc($result[1])) {
        extract($row);
        $post_item = array(
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
        array_push($posts_arr['data'], $post_item);
    }
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode($posts_arr);
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
