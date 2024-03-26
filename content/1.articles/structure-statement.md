---
 id: 10
 slug: structure-statement
 title: If isn't the only conditional statement
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

When you are beginner in programming, one of the first thing you have got to probably learn is, if you want make a conditional statement, you need to use if, else if, and else.

That's cool, but if we have many conditions, your code can look like a garbage:

<h2 style="color: #ff5e78"># Bad Practice</h2>

#### 1-  **If, Else if, Else Statement**

```js
// if else statement #dart
  int statusCode = 404;

  if (statusCode == 404) {
    print('OOpsi you are lost !!');
  } else if (statusCode == 401) {
    print('Hum.. who are you? 🤭');
  } else if (statusCode == 500 || statusCode == 503) {
    print('Sorry, Gabe has broke the server...');
  } else {
    print('Have fun buddy 😏');
  }

```
#### 2- **If, Else**

```js
// Code status 😂 #dart
  int status(int code) {
    if (code == 404) {
      print('OOpsi you are lost !!');
      return 1;
    else
      print('Maybe it\'s ok 😎');
      return 0;
    }
  }
```

we risk destroying any will to understand of a colleague or even a self of the future !

> “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live“.
>
>― John Woods

---

<h2 style="color: #18C79A"># Good Practice</h2>

In this case, in my opinion the ***switch statement*** sounds to be a better option, more readable and more structured.

#### -1 **Switch Statement**
```js
// Switch statement #dart
  int statusCode = 404;

  switch (statusCode) {
    case 404:
      print('OOpsi you are lost !!');
      break;
    case 401:
      print('Hum.. who are you? 🤭');
      break;
    case 500 || 503:
      print('Sorry, Gabe has broke the server...');
      break;
    default:
      print('Have fun buddy 😏');
      break;
}
```

#### -2 **If statement**

```js
// The else is never useful
  int status(int code) {
    if (code == 404) {
      print('OOpsi you are lost !!');
      return 1;
    }
    print('Maybe it\'s ok 😎');
    return 0;
}
```

The else statement in this case is useless, and in many cases it can be deleted.
