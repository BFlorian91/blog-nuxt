---
 id: 11
 title: The ternary WTF ? 🚀
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

The ternary, the best way to understand it, it's an example:

##### - If statement

```js
// if mode
  const String test = 'Hello'
  const String test1 = 'HellO'

  if (test == test1) {
    print('The words are the same');
  }
  print('The words are different');
```

##### - Ternary:

```js
// ternary mode
  const String test = 'Hello'
  const String test1 = 'HellO'

  print(test == test1 ? 'The words are the same' : 'The word are different');
```

The both examples do the same thing, but the first take 4 lines, and the second does only 1 line.
The ternary operator is a condition plus true or false blocks all in one, split up by a <span style="color:purple">***?***</span> and a <span style="color:purple">***:***</span>.

So, <span style="color:purple">***?***</span> is equal to an **if**, and the <span style="color:purple">***:***</span> is equal to an **else**.

