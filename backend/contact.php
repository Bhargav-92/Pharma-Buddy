<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST");
  header("Access-Control-Allow-Headers: Content-Type");


  $conn = new mysqli("localhost" , "root" ,"","pharma-buddy");

  if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
  }

  else{
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData , true);

    $name = $dData['name'];
    $phone = $dData['phone'];
    $email = $dData['email'];
    $message = $dData['message'];

    $result = "";
    if($name != "" and $phone != "" and $email != "" and $message != ""){
      $sql = "INSERT INTO complaint (name,phone,email,message) VALUES ('$name' , '$phone','$email','$message');";
      $res = mysqli_query($conn , $sql);
      if($res){
        $result = "Message Sent successfully !";
      }
      else{
        $result = "";
      }
    }
    

    $response[] = array("result" => $result);
    echo json_encode($response);
  }
    
?>