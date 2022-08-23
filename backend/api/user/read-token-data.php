<?php

require '../../vendor/autoload.php';
require '../../controllers/core.php';

//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/User.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    response(false, 503, 'Access Denied!');
    exit();
}

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate user object
$user = new User($db);

$all_headers = getallheaders();

$token = isset($all_headers['Authorization']) ? $all_headers['Authorization']  : '';

if (!empty($token)) {
    try {
        $decoded = decodeToken($token);
        if ($decoded['status'] === true) {
            response(true, 200, 'Token Found!', $decoded['data']);
            exit();
        }

        response(false, 500, $decoded['data']);
    } catch (Exception $ex) {
        response(false, 500, $ex->getMessage());
        exit();
    }
} else {
    response(false, 404, 'Token not found!');
}
