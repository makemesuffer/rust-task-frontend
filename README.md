# Frontend Template

## Main Info

This is a template for a quick start for my future front-end applications. You can use it freely as well, hope you will like it :)

## Architecture Guide

Template follows this architecture(some folders are optional):

```
src
│
└───  api                      ##  used to execute api calls for server
|
└─── components                ##  used to store react components
│   │
|   └─── common                ##  used to store plain components like Input
│   |
|   └─── page                  ##  used to store components for page like login, user-settings, etc...
│   │
│   └─── ui                    ##  used to store complex components that are used on a several pages
|   │
|   └───  layout               ##  used to store layout components like Header
│
└───  hooks                    ##  used to store hooks
│
└───  models                   ##  used to store models interfaces
│   │
|   └─── [entities]            ##  used to divide entities by their purpose in app
│
└───  pages                    ##  used for pages and routing in Next.js
│
└───  store                    ##  used for redux storage
│
└───  styles                   ##  used for global styles and tailwind import
│
└───  tools                    ##  used for creating classes to perform handy methods
│
└───  utils                    ##  used for handy helper functions
│
└───  validation               ##  used for yup forms validation
```

## List of Dependencies

Template is using this dependencies:

- [autoprefixer] - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
- [classnames] - A simple JavaScript utility for conditionally joining classNames together. Good for tailwind!
- [daisyui] - Tailwind CSS Components. I love this lib <3
- [next] -The React Framework for Production
- [react] - Library for creating user interfaces
- [tailwindcss] - A utility-first CSS framework for rapidly building custom user interfaces
- [uuid] - For the creation of RFC4122 UUIDs

[//]: #
[autoprefixer]: https://www.npmjs.com/package/autoprefixer
[classnames]: https://www.npmjs.com/package/classnames
[daisyui]: https://www.npmjs.com/package/daisyui
[next]: https://www.npmjs.com/package/next
[react]: https://www.npmjs.com/package/react
[react-dom]: https://www.npmjs.com/package/react-dom
[tailwindcss]: https://www.npmjs.com/package/tailwindcss
[uuid]: https://www.npmjs.com/package/uuid
