[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# News Aggregator App using Nuxt.js and Strapi

This repository servers as a code container for the tutorial I wrote on [Strapi's Blog](https://strapi.io/blog/build-a-news-aggregator-app-using-strapi-and-nuxtjs).

## Features

- [x] Strapi for managing feed sources and new items
- [x] Nuxt.js for rendering frontend app
- [x] Allow users to subscribe
- [x] Use CRON jobs to automatically add new news items

## Prerequisites

These things are required before setting up the project.

- Git
- Ubuntu 18.04 or 20.04
- Node.js [Read Guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

## Getting Started

Follow these instructions to get the project up and running.

```bash
# clone the repo
$ git clone https://github.com/ravgeetdhillon/strapi-nuxtjs-news-app.git

# change directory
$ cd strapi-nuxtjs-news-app
```

### For Strapi

```bash
# navigate to backend directory that holds strapi code
$ cd backend

# install dependencies
$ npm install

# served at http://localhost:1337
$ npm run develop
```

### For Nuxt.js

```bash
# navigate to frontend directory that holds nuxt.js code
$ cd frontend

# install dependencies
$ npm install

# served at http://localhost:3000
$ npm run dev
```

> For detailed instructions, [read the blog](#todo).

## Tech Stack

* [Nuxt](https://nuxtjs.org/) - Frontend
* [Strapi](https://strapi.io/) - Backend and CMS

## Authors

- [Ravgeet Dhillon](https://github.com/ravgeetdhillon)

## Extra

- You are welcome to make [issues and feature requests](https://github.com/ravgeetdhillon/strapi-nuxtjs-news-app/issues).
- In case you get stuck at somewhere, feel free to contact at [Mail](mailto:ravgeetdhillon@gmail.com).
