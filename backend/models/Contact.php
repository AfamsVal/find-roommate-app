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
    public $start;
    public $limit;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    //Get Room
    public function all_contact_us()
    {
        $sql = "SELECT * FROM " . $this->table . " ORDER BY id DESC LIMIT " . $this->start . ", " . $this->limit . "";

        $query = mysqli_query($this->conn, $sql);
        $count = mysqli_num_rows($query);

        return array($count, $query);
    }


    //Get Single Room
    public function read_single_contact()
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE id = ? ";
        $query = $this->conn->prepare($sql);
        $query->bind_param('s', $this->id);
        $query->execute();
        $data = $query->get_result();
        $count = $data->num_rows;
        if ($count) {
            /* free results */
            $query->free_result();

            /* close statement */
            $query->close();
            $result = $data->fetch_assoc();
            return array($count, $result);
        }

        return array($count, 'No result found!..');
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


    //////////////USER BY FIELD NAME////
    ////////////////////////////
    public function get_contact_by_field($field_key, $value)
    {
        $sql = "SELECT name,email,subject,message,reply,createdAt,treated FROM " . $this->table . " WHERE " . $field_key . " = ? LIMIT 1";
        $query = $this->conn->prepare($sql);
        $query->bind_param('i', $value);
        $query->execute();
        $query->store_result();
        if ($query->num_rows) {
            $query->bind_result(
                $this->name,
                $this->email,
                $this->subject,
                $this->message,
                $this->reply,
                $this->createdAt,
                $this->treated
            );
            $query->fetch();
            return array(
                'count' => $query->num_rows,
                'data' => array(
                    'name' => $this->name,
                    'email' => $this->email,
                    'subject' => $this->subject,
                    'message' => $this->message,
                    'reply' => $this->reply,
                    'createdAt' => $this->createdAt,
                    'treated' => $this->treated

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
}
