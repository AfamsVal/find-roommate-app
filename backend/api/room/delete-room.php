<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';

if (!hasAccessControl('DELETE')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

$data = json_decode(file_get_contents('php://input'));

$room->id = $data->id;

//Check if room is DELETED
$result = $room->delete_room();
if ($result === true) {
    response(false, 200, 'Room Deleted Successful!');
} else if ($result === false) {
    response(false, 500, 'Error deleting record!');
} else {
    response(false, 400, 'No record found!');
}
