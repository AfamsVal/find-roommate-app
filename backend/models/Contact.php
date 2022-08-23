<?php
class Contact
{
    // DB stuff
    private $conn;
    private $table = 'contact_us';
    // Post Properties

    public $id;
    public $name;
    public $email;
    public $subject;
    public $message;
    public $createdAt;
    public $treated;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    //Get Room
    public function all_contact_us()
    {
        $sql = 'SELECT * FROM ' . $this->table . ' ORDER BY createdAt DESC';
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);

        return array($count, $query);
    }


    //Get Single Room
    public function read_single()
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE id = '$this->id'";

        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);

        return array($count, $query);
    }


    //Create Room
    public function create_contact_us()
    {
        $sql = "INSERT INTO " . $this->table . " (
    name,
    email,
    subject,
    message
        ) VALUES(?,?,?,?)";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'ssss',
            $this->name,
            $this->email,
            $this->subject,
            $this->message
        );
        if ($query->execute()) {
            return true;
        }

        return false;
    }




    //Delete Room
    public function delete_contact_us()
    {
        $sql = "DELETE FROM " . $this->table . " WHERE id = ?";

        //Prepare statement
        $query = $this->conn->prepare($sql);

        //ckeab data
        $this->id = htmlspecialchars(strip_tags($this->id));

        //bind data
        $query->bind_param('i', $this->id);

        //Execute query
        if ($query->execute()) {
            if ($query->affected_rows) {
                return true;
            }
            return 0;
        }

        return false;
    }
}
