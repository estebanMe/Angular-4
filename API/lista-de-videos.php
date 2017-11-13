<?php
/// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
include_once('connection/db.php');
function lista_de_video(){
    global $enlace;
    $result = $enlace->query("SELECT * FROM videos");
    while ($row = mysqli_fetch_assoc($result)){
        $todosLosVideos[] = $row;
    }
     return $todosLosVideos;
}

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $resultado = lista_de_video();
}else{
     header('HTTP/1.1 405 Method Not Allowed');
    exit;
}
echo json_encode($resultado);
?>