---
title: About Me
layout: blog-post
description: about page
---

::post
# About Me
**This is the about page.**
~~this is a code block~~
<span class="text-red-400">About Me</span>
<div class="overflow-x-auto">

```ts
interface About {
    name: string
    age: number
    description: string
    skills: string[]
}

const about: About = {
    name: 'Florian',
    age: 32,
    description: 'I am a frontend developer with 8 years of experience. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.',
    skills: ['Typescript', 'Javascript', 'React', 'Vue', 'Nuxt']
}

const infoAboutMe = (about: About) => {
    console.log(about)
}
```
</div>
This is the about page.
::
