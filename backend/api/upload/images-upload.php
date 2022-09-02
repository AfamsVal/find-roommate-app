<?php
require '../../vendor/autoload.php';
require '../../controllers/core.php';

if (!hasAccessControl('POST')) exit();

// $data = json_decode(file_get_contents('php://input'));


if (!isset($_FILES['avartar']['name'])) {
    response(false, 200, 'File not selected!');
    exit();
}


$fileCount = count($_FILES['avartar']['name']);
$imageArray = array();
$imageArray['data'] = array();

for ($i = 0; $i < $fileCount; $i++) {

    if ($_FILES['avartar']['error'][$i] == 4) {
        response(false, 200, 'Please select file to upload');
        exit();
    }

    // Validate file type
    if ($_FILES['avartar']['error'][$i] != 0) {
        response(false, 200, 'File not supported!');
        exit();
    }

    $imageName = str_replace(' ', '-', strtolower($_FILES['avartar']['name'][$i]));
    $size = $_FILES['avartar']['size'][$i];
    $tmp = $_FILES['avartar']['tmp_name'][$i];
    $filetype = $_FILES['avartar']['type'][$i];


    //Validate file size
    if ($size > 1048576 * 5) { //5MB
        response(false, 200, 'File size is above 5Mb!');
        exit();
    }

    //Validate image
    $accepted = array('jpg', 'JPG', 'jpeg', 'JPEG', 'PNG', 'png', 'GIF', 'gif', 'bmp', 'BMP');
    $ext = explode('.', $imageName);
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
    array_push($imageArray['data'], array('id' => rand(111, 9999) . '-' . $i, 'url' => $url));
}

response(true, 200, 'success', $imageArray['data']);
