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


    private $conn;
    private $users_table;


    public function __construct($db)
    {
        $this->conn = $db;
        $this->users_table = 'users';
    }


    public function create_user()
    {
        $sql = 'SELECT * FROM ' . $this->users_table . ' WHERE email = ?';

        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->email);
        $query->execute();
        $query->store_result();

        if ($query->num_rows) {
            return 0;
        }


        $user_query = 'INSERT INTO ' . $this->users_table . ' SET  
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
    public function update_user_profile()
    {
        $sql = "UPDATE " . $this->users_table . " SET firstName = ?, lastName = ?, phone = ? WHERE id = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'sssi',
            $this->firstName,
            $this->lastName,
            $this->phone,
            $this->id,
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
    public function reset_password()
    {
        $sql = "UPDATE " . $this->users_table . " SET password = ? WHERE email = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'ss',
            $this->password,
            $this->email,
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

        return array();
    }
}
