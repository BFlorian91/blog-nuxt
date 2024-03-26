---
 id: 12 
 title: Themes with Provider last post
 href: #
 description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.'
 date: 'February 06, 2021'
 datetime: '2021-02-06'
 category: { title: 'Flutter', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

Fortunately, Flutter has mechanisms for widgets to provide data and services to their descendants, 
in other words, not just their children, but any widgets below them.

With provider, we can change that, and pass data or services where is it really necessary.

#### What are we building:
<p style="text-align: center">
  <image width="250" src="./darkmode.gif" />
</p>

#### Project architecture
<p style="text-align: center">
  <image width="50" src="./archi.png" />
</p>


##### ***main.dart***
```js 
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './providers/theme.dart';
import './themes/themes_data.dart';
import './screens/home_page.dart';

void main() {
  runApp(
    /*** Declaring Provider ***/
    MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => ThemeChanger(Themes.customDark),
        )
      ],
      child: MyApp(),
    ),
  );
  /***************************/
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    /* Call Provider Store for access to the methods 
        we have create before */
    final theme = Provider.of<ThemeChanger>(context);
    /***********************************************/

    return MaterialApp(
      title: 'Flutter Demo',
      /*** 2 - Get the current theme and share it,
               in all page of your app ***/
      theme: theme.getTheme(),
      /******************************************/
      home: HomePage(),
    );
  }
}
```

At this time we have declaring the provider and call it in the theme property in ***MaterialApp***, but we need to create it now.

##### ***theme.dart***

```js 
import 'package:flutter/material.dart';

class ThemeChanger with ChangeNotifier {
  ThemeData _themeData;

  ThemeChanger(this._themeData);

  getTheme() => _themeData;
  setTheme(ThemeData theme) {
    _themeData = theme;

    /*** 1 - notify any clients the object may have changed ***/
    notifyListeners();
    /**********************************************************/
  }
}
```

notifyListeners is a key, if it's called the widget client will be rebuild with the new value.
after that, we gonna build the themes

##### ***theme_datas.dart***

```js 
import 'package:flutter/material.dart';

class Themes {
  static ThemeData customLight = ThemeData(
    fontFamily: 'Love',
    accentColor: Color(0xFFFF7043),
    primaryColor: Color(0xFF21232A),
  );

  static ThemeData customDark = ThemeData(
    fontFamily: 'bloodlust',
    brightness: Brightness.dark,
    accentColor: Color(0xFFFF7043),
    primaryColor: Color(0xFF21232A),
    scaffoldBackgroundColor: Color(0xFF21232A)
  );
}
```

Here we are did the theme we want to call, now we just need to call it, in our home page 

##### ***home_page.dart***

```js
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/theme.dart';
import '../themes/themes_data.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  /* Just a state bool for check if we are in lightmode or darkmode */
  bool _isLight = false;

  @override
  Widget build(BuildContext context) {
    /* Call Provider Store for access to the methods 
    we have create before */
    final theme = Provider.of<ThemeChanger>(context);
    /***********************************************/

    return Scaffold(
      appBar: AppBar(
        title: Text('ThemeChanger Demo'),
        actions: [
          /*** Switch button for set actual theme ***/
          Switch(
            value: _isLight,
            onChanged: (state) {
              setState(() {
                _isLight = !_isLight;
                _isLight
                    ? theme.setTheme(Themes.customLight)
                    : theme.setTheme(Themes.customDark);
              });
            },
          )
          /******************************************/
        ],
      ),
      body: Container(
        child: Center(
          child: Text(
            'Hello World',
            style: TextStyle(fontSize: 45),
          ),
        ),
      ),
    );
  }
}
```


