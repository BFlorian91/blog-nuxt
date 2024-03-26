---
 id: 8
 title: Routing system in Flutter
 href: #
 description: 'On many applications, there is a sort of loading page when they are launched. This is what we call a splash screen and we will see here how to do this thing in the simplest way possible.'
 date: 'January 30, 2021'
 datetime: '2021-01-30'
 category: { title: 'Flutter', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

## QuickTips Flutter:

On many applications, there is a sort of loading page when they are launched. This is what we call a splash screen and we will see here how to do this thing in the simplest way possible.

### -1 Create the root

  Yes, because in fact, make a page that displays a logo or a load for ***X*** seconds, you have to redirect somewhere after, and that’s when the router comes into action.

  ```js
  // main.dart
    class MyApp extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: SplashScreen(),
          routes: {
            '/home-screen': (context) => HomeScreen(),
          },
        );
      }
    }
  ```

### -2 Create the splashScreen

  ```js
  // SplashScreen.dart
    class SplashScreen extends StatefulWidget {
      @override
      _SplashScreenState createState() => _SplashScreenState();
    }

    class _SplashScreenState extends State<SplashScreen> {
      @override
      void initState() {
        super.initState();
        Future.delayed(const Duration(milliseconds: 2000),
          () => Navigator.pushNamed(context, '/home-screen'),
        );
      }

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          backgroundColor: Colors.white,
          body: Center(
            child: FlutterLogo(
              size: 100.0,
            ),
          ),
        );
      }
    }
```

---

### **Time to explain:**

#### <span style="color: #0276E8">-1 Future</span>

A Future is used to represent a potential value, or error, that will be available at some time in the future. 
Receivers of a Future can register callbacks that handle the value or error once it is available.

#### <span style="color: #0276E8">-2 Future<span style="color: #BC0256">.delayed</span></span>
The computation will be executed after the given **Duration** has passed, and the future is completed with the result of the computation.
