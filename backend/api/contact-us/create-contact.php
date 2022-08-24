<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Contact.php';

if (!hasAccessControl('POST')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate blog contact object
$contact = new Contact($db);

$data = json_decode(file_get_contents('php://input'));

$contact->name = htmlspecialchars(strip_tags($data->name));
$contact->email = htmlspecialchars(strip_tags($data->email));
$contact->subject = htmlspecialchars(strip_tags($data->subject));
$contact->message = htmlspecialchars(strip_tags($data->message));

//Check if contact created
if ($contact->create_contact_us()) {
    response(true, 200, 'Posted successfully!');
} else {
    response(false, 500, 'Request failed!');
}
