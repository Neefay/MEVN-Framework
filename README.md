# MEVN Framework
A full-stack framework using Vue.js with a high focus on scalability and horizontal growth.

- Vue.js
  - Vue-router
  - Vuex
  - Vuetify for component library and material design support
- MongoDB with Mongoose
- Node.js with Express

## Features

Built for applications that will grow large in size and scope, this framework is designed to accomodate a component-based architecture that's highly modularized and focused on separation of concerns.

- [x] HMR out the box.
- [x] Vue.js SFC structure design that supports pre-compiled bundles.
- [x] Routing is in-built into the components themselves, both server and client side.
- [x] Easy customization of templates.
- [x] Global SCSS variables and mixins that are available across all modules.
- [x] Distinction between components themselves, such as Views and Interface.
- [x] Easily configurable Express-based back-end.
- [x] REST API routes loaded automatically through an object structure with middleware support.
- [x] Module-oriented back-end strucure.
- [x] Ready for deployment and production.
- [x] Shared API meant to be re-utilized regardless of environment.
- [x] Linting and PostCSS autoprefixing configured.

## Planned

- [ ] Testing suite using Jest.
- [ ] Validation for both back and front-end data.

## Building

Simply clone this repo and use:

`yarn install`

Full-stack development:
`npm run dev`

Building:
`npm run build`

Serve with:
`npm run start`
