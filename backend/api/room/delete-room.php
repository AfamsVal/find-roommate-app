<?php
require '../../controllers/core.php';

//Header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Room.php';

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    response(false, 503, 'Access Denied!');
    exit();
}

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
