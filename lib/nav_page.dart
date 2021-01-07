import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NavPage extends StatelessWidget {
  Color hexToColor(String code) {
    return new Color(int.parse(code.substring(1, 7), radix: 16) + 0xFF000000);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      // ui stuff
      floatingActionButton: Padding(
        padding: const EdgeInsets.only(bottom: 650.0, right: 340.0),
        child: FloatingActionButton.extended(
          onPressed: () {
            // go back to map
            Navigator.pop(context);
          },
          backgroundColor: hexToColor('#42b77f'),
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.only(
                  topRight: Radius.circular(10.0),
                  bottomRight: Radius.circular(10.0))),
          // icon: Icon(Icons.save),
          label: Text(
            '<<',
            style: GoogleFonts.lato(
              textStyle: TextStyle(color: Colors.white, fontSize: 35),
            ),
          ),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      body: Center(
        child: Text('Helo World!'),
      ),
    ));
  }
}
