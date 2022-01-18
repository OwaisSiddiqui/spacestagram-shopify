# Spacestagram - Shopify

This is the repo for my [Front End Developer Intern Challenge - Summer 2022](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#) submission for Shopify. Here is the link for the hosted code (using Vercel): [spacestagram-shopify.vercel.app](http://spacestagram-shopify.vercel.app/ "spacestagram-shopify.vercel.app")


## Installation

First clone the repo using:

    git clone https://github.com/OwaisSiddiqui/shopify-spacestagram

Then go to the `shopify-spacestagram` folder and run the following command to install the `node_modules` using `npm`:

    npm install

Now, to run the app on `localhost` (with port `3000` as the default), use the following command using `npm`:

    npm run start
    
Now the app should be running on `http://localhost:3000`.

## Features

It has all the technical requirements for the challenge which are:

 - Fetch data from one of NASA’s APIs and display the resulting images
-   Display descriptive data for each image (for example: title, date, description, etc.)
-   Like an image
-   Unlike an image

Some extra features I added are:

 - Add a loading state while we wait for NASA’s API to return data
 - Create shareable links for each image
 - Zoom in / zoom out photo on click

The HTML being served client side is accessible and semantic.

## Technologies

The following front-end technologies were used to develop the project:

 - React (front-end framework)
 - React Router v6 (for routing)
 - TypeScript
 - Styled Components (for CSS)
 - Framer Motion (for animations)
 - ESLint (for linting)
 - Prettier (for code formatting)

It also uses Vercel for deploying the app online. This was done my pairing the repo onto the Vercel account and pushing changes to the `main` branch to deploy the app.

## Project structure

All the React components are in the `components` folder. Each folder in the `components` folder is the name of a component and has a `index.tsx` for the main React component and a `styles.ts` with the styled components. Example structure:

- `components`
	- `Navbar`
		- `index.tsx`
		- `styles.ts`

