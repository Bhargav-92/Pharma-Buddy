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

    $name = $dData['name'];
    $email = $dData['email'];
    $pass = $dData['pass'];
    $phone = $dData['phone'];
    $pincode = isset($dData['pincode']) ? $dData['pincode'] : '';
    $image = isset($dData['image']) ? $dData['image'] : '';

    $result = "";

    if ($name != "" && $email != "" && $pass != "" && $phone != "") {
        $sql = "INSERT INTO user(name,email,phone,pass,pincode,image) VALUES ('$name' , '$email','$phone','$pass','$pincode','$image');";
        $res = mysqli_query($conn, $sql);
        if ($res) {
            $result = "You have registered successfully!";
        } else {
            $result = "Error: " . mysqli_error($conn);
        }
    } else {
        $result = "Please provide all the required fields.";
    }

    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>
