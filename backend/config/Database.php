<?php
// error_reporting(1);
// ini_set('display_errors', 1);
class Database
{
    private $host = 'localhost';
    private $db_name = 'find-roommate';
    private $user = 'root';
    private $passwd = '';
    private $connect;

    // - DB Connect
    // public function connect()
    // {
    //     $this->conn = new mysqli($this->host, $this->user, $this->passwd, $this->db_name);
    //     $this->conn->set_charset("utf8mb4");
    //     if ($this->conn->connect_errno) {
    //         die('connection failed');
    //     }
    // }

    public function __construct()
    {
        $this->connect = new mysqli($this->host, $this->user, $this->passwd, $this->db_name);
        $this->connect->set_charset("utf8mb4");
        if ($this->connect->connect_errno) {
            die('connection failed' . $this->connect->connect_error);
        } else {
            // echo 'connection success';
        }
    }

    public function connection()
    {
        return $this->connect;
    }
}






// Using bind_result() would be better for this:
//     // Use bind_result() with fetch()
//     $query1 = 'SELECT id, first_name, last_name, username FROM table WHERE id = ?';
//     Using get_result() would be better for this:
//     // Use get_result() with fetch_assoc() 
//     $query2 = 'SELECT * FROM table WHERE id = ?';
//     Example 1 for $query1 using bind_result()
//     $query1 = 'SELECT id, first_name, last_name, username FROM table WHERE id = ?';
//     $id = 5;
    
//     if($stmt = $mysqli->prepare($query)){
//        /*
//             Binds variables to prepared statement
    
//             i    corresponding variable has type integer
//             d    corresponding variable has type double
//             s    corresponding variable has type string
//             b    corresponding variable is a blob and will be sent in packets
//        */
//        $stmt->bind_param('i',$id);
    
//        /* execute query */
//        $stmt->execute();
    
//        /* Store the result (to get properties) */
//        $stmt->store_result();
    
//        /* Get the number of rows */
//        $num_of_rows = $stmt->num_rows;
    
//        /* Bind the result to variables */
//        $stmt->bind_result($id, $first_name, $last_name, $username);
    
//        while ($stmt->fetch()) {
//             echo 'ID: '.$id.'<br>';
//             echo 'First Name: '.$first_name.'<br>';
//             echo 'Last Name: '.$last_name.'<br>';
//             echo 'Username: '.$username.'<br><br>';
//        }
    
//        /* free results */
//        $stmt->free_result();
    
//        /* close statement */
//        $stmt->close();
//     }
    
//     /* close connection */
//     $mysqli->close();