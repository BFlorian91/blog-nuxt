---
 id: 6
 slug: remove-duplicate-element-in-array
 title: Remove array duplicates
 href: #
 description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.'
 date: 'February 05, 2021'
 datetime: '2021-02-05'
 category: { title: 'Javascript', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

Hey, there. Today we gonna show how to remove duplicate values in an array. I use ES6 version of the javascript I'll show you 2 ways to do that.

#### -1 Set (my favorite)
```js 
const array = ['🥐', '🥖', 1, 1, 1, 12, '🥖']

[...new Set(array)]

```

Result:

```js
  (4) ["🥐", "🥖", 1, 12]
```

---

#### -2 Filter
```js 
const array = ['🥐', '🥖', 1, 1, 1, 12, '🥖']

array.filter((item, index) => array.indexOf(item) === index)
```

Result:

```js
  (4) ["🥐", "🥖", 1, 12]
```

 ***Filter Method:***
The filter method creates a new array with all elements that pass the test implemented by the provided function.

***indexOf Method:***
The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

| item | index | indexOf | return |
| ---- | ----- | ------- | ------ |
|  🥐  |  0    |   0     |<span style="color: #e97878"> false</span>  |
| 🥖   | 1    |   1      |<span style="color: #e97878">false </span> |
| 1   |   2   |   2     | <span style="color: #e97878">false </span>  |
| 1   |   3   |   2     | <span style="color: #75cfb8">true  </span>  |
| 1   |   4   |   2     | <span style="color: #75cfb8">true  </span>  |
| 12  |   5   |   5     | <span style="color: #e97878">false </span>  |
| 🥖  |   6   |   1     | <span style="color: #75cfb8">true  </span>  |
