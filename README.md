# Nuxt Kick Start

Nuxt Content component module for generative AI

## Demo

Check out the demo at [kick-start.nuxt.space](https://kick-start.nuxt.space).

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the app.

## API

TODO: composables/chat.ts will be adapted to use public APIs like bardie-ts.

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
