<?php

require '../../vendor/autoload.php';
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/User.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$all_headers = getallheaders();

$token = isset($all_headers['Authorization']) ? $all_headers['Authorization']  : '';

if (!empty($token)) {
    $decoded = decodeToken($token);
    if ($decoded['status'] === true) {
        response(true, 200, 'Token Found!', $decoded['data']);
        exit();
    }

    response(false, 500, 'Token not valid!');
} else {
    response(false, 404, 'Token not found!');
}
