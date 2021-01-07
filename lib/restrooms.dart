// import 'package:http/http.dart' as http;
// import 'dart:convert';
// import 'dart:async';

// Future<Album> fetchAlbum() async {
//   final response =
//       await http.get('https://jsonplaceholder.typicode.com/albums/1');

//   if (response.statusCode == 200) {
//     // OK response
//     return Album.fromJson(jsonDecode(response.body));
//   } else {
//     throw Exception('Failed to load album.');
//   }
// }

// class Album {
//   final int userId;
//   final int id;
//   final String title;

//   Album({this.userId, this.id, this.title});

//   factory Album.fromJson(Map<String, dynamic> json) {
//     return Album(userId: json['userId'], id: json['id'], title: json['title']);
//   }
// }
