<?php
header('Access-Control-Allow-Origin: https://localhost:5173');
$user = $_POST['email'];
echo ("Hello from server: $user");