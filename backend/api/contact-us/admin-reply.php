<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Contact.php';

if (!hasAccessControl('PUT')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate blog contact object
$contact = new Contact($db);

$data = json_decode(file_get_contents('php://input'));

$contactId = clean_input_and_strip_tags($data->contactId, $db);
$adminUID = clean_input_and_strip_tags($data->adminUID, $db);
$reply = clean_input_and_strip_tags($data->reply, $db);

//Check if contact created
$get_contact = $contact->get_contact_by_field('id', $contactId);

if ($get_contact['count']) {
    $contact->update_user_by_field('id', $contactId, 'reply', $reply);
    $contact->update_user_by_field('id', $contactId, 'treated', $adminUID);
    response(true, 200, 'Sent successfully!');
} else {
    response(false, 200, 'Request failed!');
}
