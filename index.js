const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { Nuxt } = require('nuxt')
const express = require('express')

admin.initializeApp()

const app = express()

const config = {
  dev: false,
}
const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
    .ready()
    .then(() => {
      isReady = true
    })
    .catch(() => {
      process.exit(1)
    })

/**
 * Handle the request
 * @param {any} req The request
 * @param {any} res The response
 * @return {Promise<void>}
 */
async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  await nuxt.render(req, res)
}

app.get('*', handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions.https.onRequest(app)
