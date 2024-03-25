---
 id: 9
 title: Stateful vs stateless Widget
 href: #
 description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.'
 date: 'Mar 16, 2020'
 datetime: '2020-03-16'
 category: { title: 'Marketing', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

Hey, here we gonna show, how to build one simple Stateful Widget, and one Stateless.
To explain the main difference between them, state is information that can be read
synchronously when the widget is built and might change during the lifetime of the widget.

It is the responsibility of the widget implementer to ensure that the State is promptly
notified when such state changes, using state and setState.

#### Stateless Widget

```javascript
// #Stateless Widget
  class Profile extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Stack(children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Hello from 🇫🇷 🚀',
                style: TextStyle(fontSize: 56.0),
              ),
            ],
          )
        ]),
        backgroundColor: Colors.black,
      );
    }
  }
```

Has you can see, it's just a simple static widget, nothing can be change in this one.

#### Stateful Widget

```javascript
// #Switch ligh to dark with a state
  class HomePage extends StatefulWidget {
    @override
    _HomePageState createState() => _HomePageState();
  }

  class _MyHomePageState extends State<MyHomePage> {
    bool _bgColor = false;
    
    void _dayNight() {
      setState(() {
        _bgColor = !_bgColor;
      });
    }

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        backgroundColor: !_bgColor ? Colors.white : Color(0xFF21232a),
        appBar: AppBar(
          backgroundColor: Color(0xFF282C34),
          brightness: Brightness.dark,
        ),
        body: Container(),
        floatingActionButton: FloatingActionButton(
          onPressed: _dayNight,
          backgroundColor: Color(0xFF282C34),
          child: Icon(
            Icons.lightbulb,
            color: !_bgColor ? Colors.white : Colors.yellow,
          ),
        ),
      );
    }
  }
```

<p style="text-align: center">
  <image width="250" src="./daynight.gif" />
</p>

With the stateful widget, it's really cool because the state can
remember preceding events or user interactions the remembered information is called the state of the system.
