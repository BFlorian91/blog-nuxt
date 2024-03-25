---
 id: 4
 title: '2022 Array Feature .at()'
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

## New javascript method june 2022

Really good new for us. Now we can access to any index with the method .at(). Here is an example:

### For access to a particular index, we had to use something like that:
```jsx
const justAnArray = ['simple', 'is', 'always', 'better', 'for', 'us', '😎']
const lengthOfArray = justAnArray.length
const particularIndex = 4

justAnArray[lengthOfArray - (lengthOfArray - particularIndex)] // == 'for'
```

### With the new method .at() we can do:
```jsx
const justAnArray = ['simple', 'is', 'always', 'better', 'for', 'us', '😎']
const particularIndex = 4

justAnArray.at(particularIndex) // == 'for'
```
