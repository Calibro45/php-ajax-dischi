<?php 

include __DIR__ . '/db.php';

header('Content-type: application/json');

echo json_encode($albums);