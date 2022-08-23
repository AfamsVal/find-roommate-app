<?php
require '../../controllers/core.php';
//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Contact.php';

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(503);
    //No contact
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
$contact = new Contact($db);

$data = json_decode(file_get_contents('php://input'));

$contact->id = $data->id;

//Check if contact is DELETED
$result = $contact->delete_contact_us();
if ($result === true) {
    http_response_code(200);
    //Turn to JSON and output
    echo json_encode(array(
        'status' => true,
        'message' => 'Deleted Successful!'
    ));
    response(true, 500, 'Error deleting record!');
} else if ($result === false) {
    response(false, 500, 'Error deleting record!');
} else {
    response(false, 404, 'No record found!');
}
