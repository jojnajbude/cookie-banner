# Shopify App Template - Node

This is a template for building a [Shopify app](https://shopify.dev/apps/getting-started) using Node and React. It contains the basics for building a Shopify app.

Rather than cloning this repo, you can use your preferred package manager and the Shopify CLI with [these steps](#installing-the-template).

## Benefits

Shopify apps are built on a variety of Shopify tools to create a great merchant experience. The [create an app](https://shopify.dev/apps/getting-started/create) tutorial in our developer documentation will guide you through creating a Shopify app using this template.

The Node app template comes with the following out-of-the-box functionality:

- OAuth: Installing the app and granting permissions
- GraphQL Admin API: Querying or mutating Shopify admin data
- REST Admin API: Resource classes to interact with the API
- Shopify-specific tooling:
  - AppBridge
  - Polaris
  - Webhooks

## Tech Stack

This template combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.
- [React Query](https://react-query.tanstack.com/) queries the Admin API.

## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
- [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI](https://shopify.dev/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)
