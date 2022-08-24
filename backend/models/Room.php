<?php
class Room
{
    // DB stuff
    private $conn;
    private $table = 'rooms';
    // Post Properties

    public $id;
    public $address;
    public $applicantName;
    public $bathRoomNo;
    public $category;
    public $createdAt;
    public $descriptions;
    public $email;
    public $hasWater;
    public $hostelName;
    public $isVerified;
    public $phone;
    public $rentPerYear;
    public $roomType;
    public $state;
    public $updatedAt;
    public $toiletNo;
    public $uid;
    public $university;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    //Get Room
    public function all_rooms()
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
    public function create_room()
    {
        $sql = "INSERT INTO " . $this->table . " (
        address,
        applicantName,
        bathRoomNo,
        category,
        descriptions,
        email,
        hasTiles,
        hasWater,
        hostelName,
        houseType,
        isVerified,
        phone,
        rentPerYear,
        roomType,
        state,
        updatedAt,
        toiletNo,
        uid,
        university
        ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'sssssssssssssssssss',
            $this->address,
            $this->applicantName,
            $this->bathRoomNo,
            $this->category,
            $this->descriptions,
            $this->email,
            $this->hasTiles,
            $this->hasWater,
            $this->hostelName,
            $this->houseType,
            $this->isVerified,
            $this->phone,
            $this->rentPerYear,
            $this->roomType,
            $this->state,
            $this->updatedAt,
            $this->toiletNo,
            $this->uid,
            $this->university
        );
        if ($query->execute()) {
            return true;
        }

        return false;
    }


    //Update Room
    public function update_room()
    {
        $sql = "UPDATE " . $this->table . " SET address = ?,
        applicantName = ?,
        bathRoomNo = ?,
        category = ?,
        descriptions = ?,
        email = ?,
        hasTiles = ?,
        hasWater = ?,
        hostelName = ?,
        houseType = ?,
        isVerified = ?,
        phone = ?,
        rentPerYear = ?,
        roomType = ?,
        state = ?,
        updatedAt = ?,
        toiletNo = ?,
        uid = ?,
        university = ? WHERE id = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'sssssssssssssssssssi',
            $this->address,
            $this->applicantName,
            $this->bathRoomNo,
            $this->category,
            $this->descriptions,
            $this->email,
            $this->hasTiles,
            $this->hasWater,
            $this->hostelName,
            $this->houseType,
            $this->isVerified,
            $this->phone,
            $this->rentPerYear,
            $this->roomType,
            $this->state,
            $this->updatedAt,
            $this->toiletNo,
            $this->uid,
            $this->university,
            $this->id
        );
        if ($query->execute()) {
            if ($query->affected_rows) {
                return true;
            }
            return 0;
        }

        return false;
    }


    //Delete Room
    public function delete_room()
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
