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
$contact->start = clean_input_and_strip_tags($data->start, $db);
$contact->limit = clean_input_and_strip_tags($data->limit, $db);

//Blog contact query
$result = $contact->all_contact_us();

//Check if any contact
if ($result[0] > 0) {
    $contacts_arr = array();
    while ($row = mysqli_fetch_assoc($result[1])) {
        extract($row);
        $contact_item = array(
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
            'createdAt' => $createdAt,
            'treated' => $treated
        );
        //Push to data
        array_push($contacts_arr, $contact_item);
    }

    response(true, 200, '', $contacts_arr);
} else {
    response(true, 200, 'No room found!', array());
}
