<?php
	require '../headers.php';
	require '../db_con.php';

	$connect = connect();

	$data = json_decode(file_get_contents("php://input"));

	if(isset($data) && !empty($data)){

		//regex validations
		$email = $data->email;
		$pwd = sha1($data->password);

    	if($email  == '' || $pwd == '') return;

    	$sql = "SELECT email, password FROM `users` WHERE email = '$email' AND password = '$pwd'";

		if ($sqlpost = mysqli_query($connect, $sql)) {
			echo "SUCCESS";
		} else {
			echo "ERROR: not logged in";
		}
	}
	exit;
?>