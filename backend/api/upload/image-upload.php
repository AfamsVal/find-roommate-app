<?php
require '../../vendor/autoload.php';
require '../../controllers/core.php';

if (!hasAccessControl('POST')) exit();

$data = json_decode(file_get_contents('php://input'));

if (!isset($_FILES['avartar'])) {
    response(false, 404, 'File not set!');
    exit();
}

$file_to_upload = $_FILES['avartar'];


if ($file_to_upload['error'] == 4) {
    response(false, 200, 'Please select file to upload');
    exit();
}

// Validate file type
if ($file_to_upload['error'] != 0) {
    response(false, 200, 'File not supported!');
    exit();
}
$name = $file_to_upload['name'];
$size = $file_to_upload['size'];
$tmp = $file_to_upload['tmp_name'];
$filetype = $file_to_upload['type'];


//Validate file size
if ($size > 1048576 * 4) { //4MB
    response(false, 200, 'File size is above 4Mb!');
    exit();
}

//Validate image
$accepted = array('jpg', 'JPG', 'jpeg', 'JPEG', 'PNG', 'png', 'GIF', 'gif', 'bmp', 'BMP');
$ext = explode('.', $name);
$exten = end($ext);
if (!in_array($exten, $accepted)) {
    response(false, 200, 'File type not supported!');
    exit();
}


if (!strstr($filetype, "image/")) {
    response(false, 200, 'Please select and image file!');
    exit();
}

$new_photo_name = 'findroomate-' . substr(mt_rand(1999999, time()) . $ext[0], 0, 15) . '.' . $exten;


// call image uploader funcation
$url = image_uploader($new_photo_name, $size, $tmp);


if ($url === false) {
    response(false, 200, 'Image upload failed. kindly refresh and try again!');
    exit();
}

response(true, 200, 'success', $url);
