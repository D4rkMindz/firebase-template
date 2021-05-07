# Firebase App

## Initial Setup
Given, that you already set up a firebase app, continue with the following steps in this application

  1. Rename the `secrets.example.js` file to `secrets.js`.
  2. Replace the prefilled <*_ID>s with the values from the firebase [web configuration](https://support.google.com/firebase/answer/7015592)
  3. Search and replace the word `Firebase App` with the name of Your app
  4. Replace the string `firebase-app` with your project ID in `package.json`
  5. Search and replace the string `<YOUR_PROJECT_ID>` with your project ID (the value of `projectId` in `secrets.js`)
  6. Optionally change the location where your function is stored globally (see [google cloud locations](https://cloud.google.com/about/locations), default is us-central1)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# Deploy to firebase
$ npm run deploy

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
