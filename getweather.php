<?php
include('weather.php');

$id    = $_REQUEST['id'];
$year  = $_REQUEST['year'];
$month = intval($_REQUEST['month'],10);
$day   = intval($_REQUEST['day'],10);

header('Content-type: application/json');

print json_encode(array('temp' => $data[$id]['TEMP'][$year][$month][$day],
                        'prcp' => $data[$id]['PRCP'][$year][$month][$day]));

