<?php
class Common
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
}
