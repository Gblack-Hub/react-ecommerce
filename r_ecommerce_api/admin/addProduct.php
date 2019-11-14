<?php
	require '../headers.php';
	require '../db_con.php';

	$connect = connect();

	$data = json_decode(file_get_contents("php://input"));
	if (isset($data) && !empty($data)) {
		$product_name = $data->productName;
		$description = $data->description;
		$price = $data->price;
		$quantity = $data->quantity;
		$category = $data->category;

		$sql = "INSERT INTO products (product_name, description, price, quantity, category_id) VALUES ('$product_name', '$description', '$price', '$quantity', '$category')";
		if($result = mysqli_query($connect, $sql)){
			echo "SUCCESS";
		} else {
			echo "ERROR: ".mysqli_error($connect);
		}
	} else {
		echo "Kindly fill out the form";
	}
?>