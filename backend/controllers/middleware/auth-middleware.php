<?php
require '../../../vendor/autoload.php';
require '../../../utils/core.php';
$all_headers = getallheaders();

$token = isset($all_headers['Authorization']) ? $all_headers['Authorization']  : '';

if (!empty($token)) {
  try {
    $decoded = decodeToken($token);
    $user_id = $decoded->data->id;
    $isAdmin = $decoded->data->admin;
    return array(
      'code' => 200,
      'status' => true,
      'message' => 'Token Found',
      'data' => $decoded,
      'userId' => $user_id,
      'isAdmin' => $isAdmin
    );
  } catch (Exception $ex) {
    return array(
      'code' => 500,
      'status' => false,
      'message' => $ex->getMessage()
    );
  }
} else {
  return array(
    'code' => 404,
    'status' => false,
    'message' => 'Token not found!'
  );
}


// function hasAccess() => {
//   let token;

  
//   }

//   if (!token) {
//     //unAuthorized
//     res.status(401);
//     throw new Error("Not Authorized, token not found");
//   }
// });

// const isAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error("User not authorized!");
//   }
// };
