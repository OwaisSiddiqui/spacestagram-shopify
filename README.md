# Spacestagram - Shopify

This is the repo for my [Front End Developer Intern Challenge - Summer 2022](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#) submission for Shopify.

Hosted code link (using Vercel): [spacestagram-shopify.vercel.app](http://spacestagram-shopify.vercel.app/ "spacestagram-shopify.vercel.app")

## Features

This app utilizes NASA's APOD (Astronomy Photo of the Day) API. It has all the technical requirements for the challenge which are:

 - Fetch data from one of NASA’s APIs and display the resulting images
-   Display descriptive data for each image (for example: title, date, description, etc.)
-   Like an image
-   Unlike an image

Some extra features I added are:

 - Add infinite scrolling and a loading state while we wait for NASA’s API to return data
 - Create shareable links for each image
 - Zoom in / zoom out photo on click

In addition, the HTML being served client side is accessible and semantic.

## Installation

First clone the repo using:

    git clone https://github.com/OwaisSiddiqui/shopify-spacestagram

Then go to the `shopify-spacestagram` folder and run the following command to install the `node_modules` using `npm`:

    npm install

You need a NASA API key from here: [NASA Open APIs](https://api.nasa.gov/). Then, you need to create a `.env` file on root folder and put in the following environment variable with your API key:

    REACT_APP_NASA_API_KEY=YOUR_API_KEY_HERE

Now, to run the app on `localhost` (with port `3000` as the default), use the following command using `npm`:

    npm run start
    
Now the app should be running on `http://localhost:3000`.

## Technologies

The following front-end technologies were used to develop the project:

 - React (front-end framework)
 - React Router v6 (for routing)
 - TypeScript
 - Styled Components (for CSS)
 - Framer Motion (for animations)
 - ESLint (for linting)
 - Prettier (for code formatting)

It also uses Vercel for deploying the app online. This was done my syncing this GitHub repo onto the Vercel account and pushing changes to the `main` branch to deploy the app.

## Project structure

All the React components are in the `components` folder. Each folder in the `components` folder is the name of a component and has a `index.tsx` file for the main React component and a `styles.ts` file with the styled components. 

Example structure:

- `components`
	- `Navbar`
		- `index.tsx`
		- `styles.ts`

