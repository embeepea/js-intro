<?php
include('weather.php');

$id    = $_REQUEST['id'];
$elem  = $_REQUEST['elem'];
$year  = $_REQUEST['year'];
$month = $_REQUEST['month'];
$day   = $_REQUEST['day'];

for ($i=0; $i<count($stations); ++$i) {
  if ($stations[$i]['id'] == $id) {
    break;
  }
}

header('Content-type: text/plain');

print $data[$id][$elem][$year][$month][$day];
