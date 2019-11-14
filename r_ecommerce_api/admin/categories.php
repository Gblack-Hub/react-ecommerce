<?php
	header("Content-Type: application/json; charset=utf8");
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

	require '../db_con.php';

	$connect = connect();

	$categories = array();
	$sql = "SELECT * FROM `categories`";

	if ($result = mysqli_query($connect, $sql)) {
		$count = mysqli_num_rows($result);

		$cr = 0;
		while($row = mysqli_fetch_assoc($result))
		{
		    $categories[$cr]['id'] = $row['id'];
		    $categories[$cr]['category_name']  = $row['category_name'];
		    $categories[$cr]['created_at'] = $row['created_at'];
		    $categories[$cr]['updated_at'] = $row['updated_at'];

		    $cr++;
		}
	}
	echo json_encode($categories);
	exit;
?>