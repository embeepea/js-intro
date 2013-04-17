<?php
include('weather.php');

header('Content-type: application/json');

if (array_key_exists('id', $_REQUEST)) {
  $id = $_REQUEST['id'];
  for ($i=0; $i<count($stations); ++$i) {
    if ($stations[$i]['id'] == $id) {
      print json_encode($stations[$i]);
      break;
    }
  }
} else {
  print json_encode($stations);
}

// print(
//       '{' .
//       '    "title": "A cool blog post",' .
//       '    "clicks": 4000,' .
//       '    "children": null,' .
//       '    "published": true,' .
//       '    "comments": [' .
//       '        {' .
//       '            "author": "Mister X",' .
//       '            "message": "A really cool posting"' .
//       '        },' .
//       '        {' .
//       '            "author": "Misrer Y",' .
//       '            "message": "It is me again!"' .
//       '        }' .
//       '    ]' .
//       '}'
//       );
// 
// // print("{'stations':[");
// // for ($i=0; $i<count($stations); ++$i) {
//   printf("{'id':'%s','name':'%s','lat':%.4f,'lon':%.4f,'elev':%.2f,'state':'%s'},\n",
//          $stations[$i]['id'],
//          $stations[$i]['name'],
//          $stations[$i]['lat'],
//          $stations[$i]['lon'],
//          $stations[$i]['elev'],
//          $stations[$i]['state']);
// }
// print("]}\n");
