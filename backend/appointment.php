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

    $fname = $dData['fname'];
    $lname = $dData['lname'];
    $phone = $dData['phone'];
    $email = $dData['email'];
    $message = $dData['message'];

    $result = "";
    if($fname != "" and $lname != "" and $phone != "" and $email != "" && $message != ""){
      $sql = "INSERT INTO consultancy (fname,lname,phone,email,message) VALUES ('$fname' , '$lname','$phone','$email','$message');";
      $res = mysqli_query($conn , $sql);
      if($res){
        $result = "Sent Appointment successfully !";
      }
      else{
        $result = "";
      }
    }
    

    $response[] = array("result" => $result);
    echo json_encode($response);
  }
    
?>