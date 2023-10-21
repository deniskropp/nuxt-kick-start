# Nuxt Kick Start

Nuxt Content component module for generative AI

## Demo

Check out the demo at [nuxt-kick-demo.nuxt.space](https://nuxt-kick-demo.nuxt.space).

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the app.

## Content

The content-driven site comes from [nuxt-kick-start](https://github.com/deniskropp/nuxt-kick-start) repository.
The module will be available seperately before our first release.

## API

In the background it runs on [KickServe](https://github.com/deniskropp/KickServe).
The repository is private at the moment, but will be made public soon.
The server provides end-points for AI text generation as well as means to manage messages (sessions), a graph database, prompt templates and other things.

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
