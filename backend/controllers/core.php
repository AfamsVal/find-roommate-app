<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
header("Access-Control-Max-Age", "86400");
header("Access-Control-Allow-Credentials", "true");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');


function hasAccessControl($type)
{
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $type === 'POST') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $type === 'GET') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && $type === 'DELETE') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && $type === 'PUT') return true;

    response(false, 200, 'Access Denied!');
    return false;
}

use \Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secret_key = '12345XXX';

function generateToken($data, $uid, $isAdmin = 0)
{
    $iat = time();

    $payload_info = array(
        "iss" => 'localhost',
        "iat" => $iat,
        "nbf" => $iat + 10, //10 sec
        "exp" => $iat + 60 * 60 * 24 * 10, //10days
        "aud" => 'myusers',
        "data" => $data,
        "isAdmin" => $isAdmin,
        "userId" => $uid
    );

    return JWT::encode($payload_info,  $GLOBALS['secret_key'], 'HS512');
}

function clean_input_and_strip_tags($input, $db)
{
    return mysqli_real_escape_string($db, htmlspecialchars(strip_tags($input)));
}

function clean_only_input($input, $db)
{
    return mysqli_real_escape_string($db, $input);
}


////////DECODE TOKEN////////////
////////////////////////////////////
function decodeToken($hash)
{
    try {
        $exploded = explode(" ", $hash);
        $token = end($exploded);
        $decoded = JWT::decode($token, new Key($GLOBALS['secret_key'], 'HS512'));
        return array(
            'status' => true,
            'data' => $decoded
        );
    } catch (Exception $ex) {
        return array(
            'status' => false,
            'data' => 'Token not valid'
        );
    }
}


function response($status, $statusCode, $msg = '', $data = '')
{
    http_response_code($statusCode);
    echo json_encode(
        array(
            'status' => $status,
            'message' => $msg,
            'data' => $data
        )
    );
}


function get_url($custom = false)
{
    if ($custom) {
        $url = "http://" . $_SERVER['HTTP_HOST'] . $custom;
        return str_replace("&", "&amp;", $url);
    }

    $url      = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $validURL = str_replace("&", "&amp;", $url);
    return $validURL;
}


function compress_image($location, $quality)
{
    $info = getimagesize($location);
    //ini_set('memory_limit','16M');
    ini_set('memory_limit', '-1');
    if ($info['mime'] == 'image/jpeg') {
        $image = imagecreatefromjpeg($location);
    } elseif ($info['mime'] == 'image/gif') {
        $image = imagecreatefromgif($location);
    } elseif ($info['mime'] == 'image/png') {
        $image = imagecreatefrompng($location);
    }
    imagejpeg($image, $location, $quality);
    //return $location;
}


function image_uploader($new_img_name, $size, $tmp)
{
    $url = get_url("/findRoomy/backend/uploaded/" . $new_img_name);
    $location = '../../uploaded/' . $new_img_name;

    if ($tmp) {
        if (move_uploaded_file($tmp, $location)) {

            if ($size > 1048576) { //1MB
                compress_image($location, 40);
            } else {
                compress_image($location, 50);
            }
            return $url;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
