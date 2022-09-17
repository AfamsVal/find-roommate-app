<?php
class Room extends Filter
{
    // DB stuff
    private $conn;
    private $table = 'rooms';
    private $table_images = 'room_images';
    // Post Properties

    public $id;
    public $address;
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
    public $selectedType;
    public $start;
    public $limit;

    public $min;
    public $max;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    //Get Rooms
    public function all_rooms()
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE blocked = '0' ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit . "";
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);
        return array($count, $query);
    }

    public function all_admin_rooms()
    {
        $sql = "SELECT * FROM " . $this->table . " ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit . "";
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);
        return array($count, $query);
    }

    public function fetch_more_images($roomID)
    {
        $sql = "SELECT * FROM " . $this->table_images . " WHERE roomID = '$roomID'";
        $query = mysqli_query($this->conn, $sql);
        $rooms_arr['images'] = array();
        if (mysqli_num_rows($query) > 0) {
            while ($row = mysqli_fetch_assoc($query)) {
                extract($row);
                $room_item = array(
                    'id' => $id,
                    'url' => $url,
                    // 'roomID' => $roomID,
                    // 'createdAt' => $createdAt,
                );
                array_push($rooms_arr['images'], $room_item);
            }
        }

        return $rooms_arr['images'];
    }


    //Get Rooms By Category
    public function all_rooms_by_category()
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE category = '$this->selectedType' ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit . "";
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);
        return array($count, $query);
    }


    //Get Rooms By Category
    public function search_room()
    {
        $sql = "SELECT * FROM " . $this->table . $this->filterOption() . " ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit;
        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);
        return array($count, $query);
    }


    //Get Single Room
    public function read_single()
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE id = ?";
        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->id);
        $query->execute();
        $data = $query->get_result();
        $count = $data->num_rows;
        if ($count) {
            $result = $data->fetch_assoc();
            /* free results */
            $query->free_result();

            /* close statement */
            $query->close();
            return array($count, $result);
        }


        return array($count, 'No result found!..');
    }

    public function add_room_images($roomID, $url, $uploadID)
    {
        $user_query = 'INSERT INTO ' . $this->table_images . ' SET roomID = ?, url = ?, uploadID = ?';
        $query = $this->conn->prepare($user_query);
        $query->bind_param('iss', $roomID, $url, $uploadID);
        $query->execute();
    }


    //Create Room
    public function create_room()
    {
        $isVerified = 0;
        $sql = "INSERT INTO " . $this->table . " (
        address,
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
        image,
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
            $this->bathRoomNo,
            $this->category,
            $this->descriptions,
            $this->email,
            $this->hasTiles,
            $this->hasWater,
            $this->hostelName,
            $this->houseType,
            $isVerified,
            $this->phone,
            $this->rentPerYear,
            $this->roomType,
            $this->images[0]->url,
            $this->state,
            $this->updatedAt,
            $this->toiletNo,
            $this->uid,
            $this->university
        );
        if ($query->execute()) {
            $query->store_result();
            if ($this->conn->affected_rows) {
                if (count($this->images) > 1) {
                    foreach ($this->images as $value) {

                        $this->add_room_images($query->insert_id, $value->url, $value->id);
                    }
                    return true;
                }

                return true;
            }
            return false;
        }

        return false;
    }


    //Update Room
    public function update_room()
    {
        $sql = "UPDATE " . $this->table . " SET address = ?,
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
            'ssssssssssssssssssi',
            $this->address,
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



    //////////////USER BY FIELD NAME////
    ////////////////////////////
    public function get_user_by_id($value)
    {
        $sql = "SELECT firstName,lastName,email FROM users WHERE id = ? LIMIT 1";
        $query = $this->conn->prepare($sql);
        $query->bind_param('i', $value);
        $query->execute();
        $query->store_result();
        if ($query->num_rows) {
            $query->bind_result(
                $this->firstName,
                $this->lastName,
                $this->email
            );
            $query->fetch();
            return array(
                'firstName' => $this->firstName,
                'lastName' => $this->lastName,
                'email' => $this->email
            );
        }

        /* free results */
        $query->free_result();

        /* close statement */
        $query->close();

        /* close connection */
        $this->conn->close();
    }


    ////UPDATE ROOMS BY FIELD/////////////
    /////////////////////////////(id,2,firstName,'val')
    public function update_room_permission($roomId, $type)
    {
        if ($type === 'blocked') {
            $sql =  "UPDATE " . $this->table . " SET blocked = 1 WHERE id = ?";
        }
        if ($type === 'unblocked') {
            $sql =  "UPDATE " . $this->table . " SET blocked = 0 WHERE id = ?";
        }
        if ($type === 'verified') {
            $sql =  "UPDATE " . $this->table . " SET isVerified = 1 WHERE id = ?";
        }
        if ($type === 'unverified') {
            $sql =  "UPDATE " . $this->table . " SET isVerified = 0 WHERE id = ?";
        }
        $query = $this->conn->prepare($sql);
        $query->bind_param(
            'i',
            $roomId
        );
        if ($query->execute()) {
            return true;
        }

        return false;
    }
}



////////////////////////////
//////////////////
///FILTER CLASS
/////////////////
///////////////////////////
class Filter
{

    public function checkCategory()
    {
        if ($this->selectedType == 'room') {
            return "AND category = 'room' ";
        }
        if ($this->selectedType == 'roommate') {
            return "AND category = 'roommate' ";
        }

        return '';
    }

    public function filterOption()
    {

        // start checking for has university
        if (!empty($this->university)) {
            if ($this->min == 0 && $this->max == 0) {
                return " WHERE university = '$this->university'" . $this->checkCategory();
            }
            if ($this->min > 0 && $this->max > $this->min) {
                return " WHERE rentPerYear >= " . $this->min . " AND rentPerYear <= " . $this->max . " AND university = '$this->university'" . $this->checkCategory();
            }
            if ($this->min == 0 && $this->max > $this->min) {
                return " WHERE rentPerYear <= " . $this->max . " AND university = '$this->university'" . $this->checkCategory();
            }
            if ($this->min > $this->max && $this->max == 0) {
                return " WHERE rentPerYear >= " . $this->min . " AND university = '$this->university'" . $this->checkCategory();
            }
            // end of checking for has university
        }
        // else if(new query option){
        //     code here....
        //
        //
        //
        // }
        else {
            // start checking for has no university ////
            //////////////////////////////////////////////////

            if ($this->min > 0 && $this->max > $this->min) {
                return " WHERE rentPerYear >= " . $this->min . " AND rentPerYear <= " . $this->max . " " . $this->checkCategory();
            }
            if ($this->min == 0 && $this->max > $this->min) {
                return " WHERE rentPerYear <= " . $this->max . " " . $this->checkCategory();
            }
            if ($this->min > $this->max && $this->max == 0) {
                return " WHERE rentPerYear >= " . $this->min . " " . $this->checkCategory();
            }

            // start checking for has no university ////
            //////////////////////////////////////////////////
        }
    }
}
