<?php

class Post
{
    // DB stuff
    private $conn;
    private $table = 'posts';
    // Post Properties
    public $id;
    public $category_id;
    public $category_name;
    public $title;
    public $body;
    public $author;
    public $created_at;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    //Get Posts
    public function read()
    {
        $sql = 'SELECT
     id,
     address,
     applicantName,
     bathRoomNo,
     category,
     createdAt,
     descriptions,
     email,
     hasWater,
     hostelName,
     isVerified,
     phone,
     rentPerYear,
     roomType,
     state,
     updatedAt,
     toiletNo,
     uid,
     university FROM
     rooms
     ORDER BY 
     createdAt DESC';

        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);

        return array($count, $query);
    }


    //Get Single Posts
    public function read_single()
    {
        $sql = "SELECT * FROM
        rooms
        WHERE id = '$this->id'";

        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);

        return array($count, $query);
    }


    //Create Posts
    public function create_post()
    {
        $timer = time();
        $sql = "INSERT INTO posts (
        address,
        applicantName,
        bathRoomNo,
        category,
        descriptions,
        email,
        hasWater,
        hostelName,
        isVerified,
        phone,
        rentPerYear,
        roomType,
        state,
        updatedAt,
        toiletNo,
        uid,
        university) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $query = $this->conn->prepare($sql);
        $query->bind_param('ssssssssbssssssis', $this->title, $this->body, $this->author, $this->category_id);
        if ($query->execute()) {
            return true;
        }

        return false;
    }


    //Update Posts
    public function update_post()
    {
        $timer = time();
        $sql = "UPDATE posts SET title = ?, body = ? WHERE id = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param('ssi', $this->title, $this->body, $this->id);
        if ($query->execute()) {
            return true;
        }

        return false;
    }


    //Delete Post
    public function delete_post()
    {
        $sql = "DELETE FROM posts WHERE id = ?";

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
