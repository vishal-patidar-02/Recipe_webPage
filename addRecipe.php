<?php
include 'db.php';

$title = $_POST['title'];
$ingredients = $_POST['ingredients'];
$instructions = $_POST['instructions'];

$sql = "INSERT INTO recipes (title, ingredients, instructions) VALUES ('$title', '$ingredients', '$instructions')";
if ($conn->query($sql) === TRUE) {
    echo "New recipe created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
