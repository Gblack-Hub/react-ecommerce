<?php
	require '../headers.php';
	require '../db_con.php';

	$connect = connect();

	$products = array();
	$sql = "SELECT products.id, products.product_name, products.description, products.price, products.quantity, products.picture, categories.category_name, products.created_at, products.updated_at FROM products JOIN categories ON products.category_id = categories.id";

	if ($result = mysqli_query($connect, $sql)) {
		$count = mysqli_num_rows($result);

		$cr = 0;
		while($row = mysqli_fetch_assoc($result))
		{
		    $products[$cr]['id'] = $row['id'];
		    $products[$cr]['product_name']  = $row['product_name'];
		    $products[$cr]['description']  = $row['description'];
		    $products[$cr]['price'] = $row['price'];
		    $products[$cr]['quantity'] = $row['quantity'];
		    $products[$cr]['picture'] = $row['picture'];
		    $products[$cr]['category_name'] = $row['category_name'];
		    $products[$cr]['created'] = $row['created_at'];
		    $products[$cr]['updated'] = $row['updated_at'];

		    $cr++;
		}
	}
	echo json_encode($products);
	exit;
?>