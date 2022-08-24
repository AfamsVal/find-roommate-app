<?php
require '../../../vendor/autoload.php';
require '../../../utils/core.php';
$all_headers = getallheaders();

$token = isset($all_headers['Authorization']) ? $all_headers['Authorization']  : '';

function isAuth()
{
  if (!empty($token)) {
    $decoded = decodeToken($token);
    if ($decoded['status'] === true) {
      return array(
        'status' => true,
        'message' => 'Token Found',
        'data' => $decoded['data'],

      );
    } else {
      return array(
        'status' => false,
        'message' => 'token not valid!'
      );
    }
  } else {
    return array(
      'status' => false,
      'message' => 'Token not found!'
    );
  }
}


function isAdmin($token)
{
  $info = isAuth($token);
  if ($info['status'] === true) {
    return $info['data']->isAdmin ? true : false;
    exit();
  }
  return false;
};
