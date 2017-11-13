<?php
global $enlace;
$enlace = new mysqli('localhost', 'root', '', 'sitio_videos');
if ($enlace->connect_error) {
    die('Connect Error ('. $enlace->connect_errno . ') '
            . $enlace->connect_error);
}
?>

