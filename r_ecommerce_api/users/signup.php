<?php
	require '../headers.php';
	require '../db_con.php';

	$connect = connect();

	$data = json_decode(file_get_contents("php://input"));

	if (isset($data) && !empty($data)) {
		$first_name = $data->firstName;
		$last_name = $data->lastName;
		$email = $data->email;
		$password = sha1($data->password);

		$sql = "INSERT INTO users (first_name, last_name, email, password, user_type_id) VALUES ('$first_name', '$last_name', '$email', '$password', '2')";
		if($result = mysqli_query($connect, $sql)){
			echo "SUCCESS";
		} else {
			echo "ERROR: ".mysqli_error($connect);
		}
	} else {
		echo "Kindly fill out the form";
	}
?>