# Nuxt Kick Start

This site demos generative AI with Nuxt Content


## Intro

Testing repo and site (Kick It - Nuxt Content using generative AI)

### See also (core package, submodule)

[kick-it](https://github.com/deniskropp/kick-it)

### Nuxt Module (will use this one soon)

[nuxt-kick-it](https://github.com/deniskropp/nuxt-kick-it)


## Demo (issue)

Check out the demo at [kick-start.nuxt.space](https://kick-start.nuxt.space). NOT WORKING. Sub module is not being checked out by nuxt.studio deployment.

## Checkout

```bash
git clone git@github.com:deniskropp/nuxt-kick-start
cd nuxt-kick-start
git submodule update --init
```

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the app.

## API

We are using [Cohere](https://cohere.ai) at the moment, please put your API key in .env!

```env
COHERE_API_KEY=xyz
```

## Components

### Chat
- embed in any .md file (/content) using '::chat'
- generate content from page and component input
- allow props, e.g. 'task' or 'instruction'

## Composables

### useChat
- uses useContent() for the body of the active page
- makes messages for AI end-point with content, props etc.
- returns generated content as markdown formatted string

## Deployment

Learn more how to deploy on [Nuxt docs](https://nuxt.com/docs/getting-started/deployment).
