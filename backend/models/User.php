<?php
class User
{
    public $id;
    public $firstName;
    public $lastName;
    public $email;
    public $phone;
    public $state;
    public $gender;
    public $password;
    public $blocked;
    public $createdAt;
    public $status;
    public $start;
    public $limit;
    public $inValidPwdCount;


    private $conn;
    private $table;


    public function __construct($db)
    {
        $this->conn = $db;
        $this->table = 'users';
    }


    //Get Users
    public function all_users()
    {
        $sql = "SELECT * FROM " . $this->table . " ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit . "";
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);
        return array($count, $query);
    }


    public function create_user()
    {
        $sql = 'SELECT * FROM ' . $this->table . ' WHERE email = ?';

        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->email);
        $query->execute();
        $query->store_result();

        if ($query->num_rows) {
            return 0;
        }


        $user_query = 'INSERT INTO ' . $this->table . ' SET  
        firstName = ?,
        lastName = ?,
        email = ?,
        phone = ?,
        state = ?,
        gender = ?,
        password = ?';

        $user_obj = $this->conn->prepare($user_query);
        $user_obj->bind_param(
            'sssssss',
            $this->firstName,
            $this->lastName,
            $this->email,
            $this->phone,
            $this->state,
            $this->gender,
            $this->password
        );
        if ($user_obj->execute()) {
            return 1;
        }
        return 2;
    }

    //Update User Profile
    public function update_user_profile($id, $firstName, $lastName, $email, $phone)
    {
        $sql = "UPDATE " . $this->table . " SET firstName = ?, lastName = ?, phone = ?, email = ? WHERE id = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'ssssi',
            $firstName,
            $lastName,
            $phone,
            $email,
            $id
        );
        if ($query->execute()) {
            if ($query->affected_rows) {
                return true;
            }
            return 0;
        }

        return false;
    }

    //Reset Password
    public function reset_password($isLogin, $code, $new_password)
    {
        $sql = $isLogin == true ?
            "UPDATE " . $this->table . " SET password = ? WHERE id = ?" :
            "UPDATE " . $this->table . " SET password = ? WHERE code = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'ss',
            $new_password,
            $code
        );
        if ($query->execute()) {
            return true;
        }

        return false;
    }

    //Forgot Password
    public function forgot_password()
    {
        $sql = "SELECT * FROM users WHERE email = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->email);
        $query->execute();
        $query->store_result();

        if (!$query->num_rows) {
            return 0;
        }

        $data = $query->get_result();
        //mail function here....
        $sent = true;

        if ($sent) {
            return true;
        }

        return false;
    }

    public function check_login()
    {
        $sql = "SELECT * FROM users WHERE email = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->email);
        if ($query->execute()) {
            $data = $query->get_result();
            return $data->fetch_assoc();
        }

        return '';
    }


    //////////////USER BY FIELD NAME////
    ////////////////////////////
    public function get_user_by_field($field_key, $value)
    {
        $sql = "SELECT firstName,lastName,email,phone,password,inValidPwdCount,inValidPwdTimer FROM users WHERE " . $field_key . " = ? LIMIT 1";
        $query = $this->conn->prepare($sql);
        $query->bind_param('i', $value);
        $query->execute();
        $query->store_result();
        if ($query->num_rows) {
            $query->bind_result(
                $this->firstName,
                $this->lastName,
                $this->email,
                $this->phone,
                $this->password,
                $this->inValidPwdCount,
                $this->inValidPwdTimer
            );
            $query->fetch();
            return array(
                'count' => $query->num_rows,
                'data' => array(
                    'firstName' => $this->firstName,
                    'lastName' => $this->lastName,
                    'email' => $this->email,
                    'phone' => $this->phone,
                    'password' => $this->password,
                    'inValidPwdCount' => $this->inValidPwdCount,
                    'inValidPwdTimer' => $this->inValidPwdTimer

                )
            );
        }

        return array(
            'count' => 0
        );
        /* free results */
        $query->free_result();

        /* close statement */
        $query->close();

        /* close connection */
        $this->conn->close();
    }


    ////UPDATE USER/////////////
    /////////////////////////////(id,2,firstName,'val')
    public function update_user_by_field($field_key, $uid, $prop, $value)
    {
        $sql =  "UPDATE " . $this->table . " SET " . $prop . " = ? WHERE " . $field_key . " = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'ss',
            $value,
            $uid
        );
        if ($query->execute()) {
            return true;
        }

        return false;
    }

    public function verify_password($pwd, $uid)
    {
        $validUser = $this->get_user_by_field('id', $uid);

        if (!$validUser['count']) {
            return array("isValid" => false, "msg" => 'User not found!');
        }

        if (password_verify($pwd, $validUser['data']['password'])) {
            $this->update_user_by_field('id', $uid, 'inValidPwdTimer', '');
            $this->update_user_by_field('id', $uid, 'inValidPwdCount', 0);
            return array("isValid" => true, "msg" => 'password is valid');
        }

        $inValidPwdCount = $validUser['data']['inValidPwdCount'] + 1;

        if ($inValidPwdCount <= 5) {
            $inValidPwdTimer = $validUser['data']['inValidPwdTimer'];
            $timeStampPlus = time() + 60; //add plus one hour to time

            if (empty($inValidPwdTimer)) {
                //for undate params => (id,2,firstName,'val')
                $this->update_user_by_field('id', $uid, 'inValidPwdCount', 1);
                $this->update_user_by_field('id', $uid, 'inValidPwdTimer', $timeStampPlus); #
                $inValidPwdCount = 1;
            } else {
                //RESET TIME//////////////////////
                if (time() > $inValidPwdTimer) {
                    $this->update_user_by_field('id', $uid, 'inValidPwdCount', 1);
                    $this->update_user_by_field('id', $uid, 'inValidPwdTimer', $timeStampPlus);
                    $inValidPwdCount = 1;
                } else {
                    $this->update_user_by_field('id', $uid, 'inValidPwdCount', $inValidPwdCount);
                }
            }
        }

        if ($inValidPwdCount > 5) {
            return array("isValid" => false, "msg" => 'Account has been blocked, pls contact support!');
        }

        return array("isValid" => false, "msg" => 'Wrong password! ' . $inValidPwdCount . ' of 5 attemps. Account will be blocked!');
    }
}
