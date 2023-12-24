<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");


$conn = new mysqli("localhost", "root", "", "pharma-buddy");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $email = $dData['email'];

    $result = "";
    if ($email != "") {
        $sql = "SELECT * FROM user WHERE email = '$email';";
        $res = mysqli_query($conn, $sql);
        if (mysqli_num_rows($res) != 0) {
            $result = "Email is alresdy Registered !";
        } else {
            $result = "";
        }
        $conn->close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }
}


?>