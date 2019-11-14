<?php

	require '../headers.php';
	require '../db_con.php';

	$connect = connect();

	$data = json_decode(file_get_contents("php://input"));

	if(isset($data) && !empty($data)){

		$id = (int)$data;

    	$sql = "DELETE FROM `products` WHERE `id` = $id LIMIT 1";

		$result = mysqli_query($connect, $sql);
		if ($result) {
			echo "SUCCESS";
		} else {
			echo "ERROR: not deleted";
		}
	}
	exit;
?>