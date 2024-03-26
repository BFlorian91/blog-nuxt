---
 id: 7
 slug: 'routing-system-in-flutter'
 title: Routing system in Flutter
 href: #
 description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.'
 date: 'January 31, 2021'
 datetime: '2021-01-31'
 category: { title: 'Flutter', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

![Flutter logo](./flutter.png)

Today I'm gonna show you, how to make a simple routing system with Flutter.

At the main.dart file, in the Widget named ***MyApp***:

```js
// main.dart
return MaterialApp(
  initialRoute: '/',
  routes: {
    '/home-page': (context) => HomePage(),
    '/profile': (context) => Profile(),
  },
)
```

<!-- Ensuite il suffit de faire un button dans votre HomePage par exemple et mettre dans le *OnPressed*: -->
Now, you can put in the ***onPressed*** method inside a ***Button*** for example:
```js
// HomePage.dart
RaisedButton(
  onPressed: () => Navigator.pushNamed(context, '/profile'),
  child: Text('Redirect to profile page')
)
  
```

and it's done ✅!.
