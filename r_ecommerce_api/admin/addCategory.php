<?php
	header("Content-Type: application/json; charset=utf8");
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	require '../db_con.php';

	$connect = connect();

	$data = json_decode(file_get_contents("php://input"));

	if (isset($data) && !empty($data)) {
		$category_name = $data->categoryName;

		$sql = "INSERT INTO categories (category_name) VALUES ('$category_name')";
		if($result = mysqli_query($connect, $sql)){
			echo "SUCCESS";
		} else {
			echo "ERROR: ".mysqli_error($connect);
		}
	} else {
		echo "Kindly fill out the form";
	}
?>