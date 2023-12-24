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
    $pincode = $dData['pincode'];
    $image = $dData['image'];

    $result = "";

    if ($name != "" && $email != "" && $pass != "" && $phone != "" && $pincode != "" && $image != "") {
        // Check if the user with the provided email already exists
        $checkSql = "SELECT * FROM user WHERE email = '$email'";
        $checkResult = mysqli_query($conn, $checkSql);

        if (mysqli_num_rows($checkResult) > 0) {
            // User with the provided email exists, perform UPDATE
            $updateSql = "UPDATE user SET name='$name', phone='$phone', pass='$pass', pincode='$pincode', image='$image' WHERE email='$email'";
            $updateResult = mysqli_query($conn, $updateSql);

            if ($updateResult) {
                $result = "User data updated successfully!";
            } else {
                $result = "Error updating user data: " . mysqli_error($conn);
            }
        } else {
            $result = "User with the provided email does not exist.";
        }
    } else {
        $result = "Please provide all the required fields.";
    }

    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>