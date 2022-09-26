<?php
require '../../controllers/core.php';
include_once '../../config/Database.php';
include_once '../../models/Room.php';

if (!hasAccessControl('GET')) exit();

//Instantiate DB $ Connect
$database = new Database();
$db = $database->connection();

//Instantiate room object
$room = new Room($db);

//Room query
$result = $room->get_room_statistics();

//Check if any room
if ($result) {
    $pending = 0;
    $verified = 0;
    $isBlocked = 0;
    $total = mysqli_num_rows($result);

    while ($row = mysqli_fetch_assoc($result)) {
        extract($row);
        $isVerified;
        if ($blocked === '1')  $isBlocked++;
        if ($isVerified === '1')  $verified++;
        if ($isVerified === '0')  $pending++;
    }

    $details = array(
        'total' => $total,
        'pending' => $pending,
        'verified' => $verified,
        'blocked' => $isBlocked
    );

    response(true, 200, 'success', $details);
} else {
    response(false, 200, 'No result found!');
}
