# Headless WordPress CMS with Typescript and React

**Live example**: https://typescript-react-pliska.netlify.app/

This is an example frontend app written in typescript and react that uses WordPress as a headless cms. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Typescript](https://www.typescriptlang.org/), by running `npx create-react-app my-app --template typescript`

It is a single page application that fetches posts from a seperate WordPress [demo website](https://try-pliska.nasiothemes.com/). It takes advantage of the [WordPress rest api endpoints](https://developer.wordpress.org/rest-api/) and uses the [react router](https://v5.reactrouter.com/web/guides/quick-start) library to simulate page navigation. The app uses [typescript's types](https://www.typescriptlang.org/docs/handbook/basic-types.html) and custom interfaces to minimize potential errors and improve the project's predictability.

## SCSS
The app uses scss to preprocess css as shown in the [documentation](https://create-react-app.dev/docs/adding-a-sass-stylesheet/). It uses mixins and 7X1 architecture for optimal file structure.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.