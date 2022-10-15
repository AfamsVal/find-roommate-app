<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';


if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$data = json_decode(file_get_contents('php://input'));
$user->start = clean_input_and_strip_tags($data->start, $db);
$user->limit = clean_input_and_strip_tags($data->limit, $db);

//User query
$result = $user->all_users();

//Check if any user
if ($result[0] > 0) {
    $users_arr = array();
    while ($row = mysqli_fetch_assoc($result[1])) {
        extract($row);
        $user_item = array(
            'key' => $id,
            'userId' => $id,
            'createdAt' => $createdAt,
            'firstName' => $firstName,
            'lastName' => $lastName,
            'email' => $email,
            'phone' => $phone,
            'state' => $state,
            'gender' => $gender,
            'admin' => $admin,
            'isBlocked' => $blocked,
        );
        //Push to data
        array_push($users_arr, $user_item);
    }
    response(true, 200, 'success', array("result" => $users_arr, "moreData" => true));
} else {
    response(true, 200, 'No record found!', array());
}
