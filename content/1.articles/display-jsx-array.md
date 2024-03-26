---
 id: 5
 slug: display-jsx-array
 title: 'Display an array in jsx'
 href: #
 description: 'Today it’s about: how to loop over an array to render its contents'
 date: 'October 25, 2021'
 datetime: '2021-10-25'
 category: { title: 'ReactJS', href: '#' }
 author: {
     name: 'Michael Foster',
     role: 'Co-Founder / CTO',
     href: '#',
     imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
---

Today it's about: how to loop over an array to render its contents?

### Loop with style 😎:

```jsx
const myArray = ['ReactJS', 'VueJS', 'NodeJS']

return (
  <div classname="container-app">
    <p>
      {myArray.map((item, index) => {
        return item
      })}
    </p>
  </div>
)

// result: ReactJSVueJSNodeJS
```
<br />
If you want to put all in the same line, separate with commas, you can do like this:

```jsx
<div classname="container-app">
  <p>
    {myArray.map((item, index) => {
      return `${index ? ',' : ''} ${item}`
    })}
  </p>
</div>

// result: ReactJS, VueJS, NodeJS
```
<br />
You can also render it inside a list like that, but the method is always the same

```jsx
<div classname="container-app">
  <ul>
    <li>
      {myArray.map((item, index) => {
        return `${index ? ',' : ''} ${item}`
      })}
    </li>
  </ul>
</div>

// result: ReactJS, VueJS, NodeJS
```
