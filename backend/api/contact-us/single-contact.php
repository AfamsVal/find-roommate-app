<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Contact.php';

if (!hasAccessControl('GET')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate Contact object
$contact = new Contact($db);

$contact->id = isset($_GET['id']) ? intval(clean_input_and_strip_tags($_GET['id'], $db)) : die();

//Contact query
$result = $contact->read_single_contact();

//Check if any room
if ($result[0] > 0) {
    $row = $result[1];
    extract($row);
    $contact_item = array(
        'id' => $id,
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
        'createdAt' => $createdAt,
        'treated' => $treated,
    );

    response(true, 200, 'success', $contact_item);
} else {
    // $db->error
    response(false, 404, 'No record found!');
}
