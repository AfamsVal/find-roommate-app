<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Contact.php';

if (!hasAccessControl('DELETE')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate blog post object
$contact = new Contact($db);

$data = json_decode(file_get_contents('php://input'));

$contact->id = clean_input_and_strip_tags($data->id, $db);

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
