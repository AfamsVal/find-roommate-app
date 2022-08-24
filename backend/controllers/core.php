<?php

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

function hasAccessControl($type)
{

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    if ($type === 'POST' or $type === 'DELETE'  or $type === 'PUT') {
        header('Access-Control-Allow-Methods: ' . $type);
        header('Access-Control-Allow-Heasders: Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $type === 'POST') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $type === 'GET') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && $type === 'DELETE') return true;

    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && $type === 'PUT') return true;

    response(false, 503, 'Access Denied!');
    return false;
}
