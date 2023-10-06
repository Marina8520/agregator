<?php

$url = $_GET('url');
$contens = file_get_contents($url);
echo $contens;