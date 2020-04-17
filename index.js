process.title = '2FA'
const dotenv = require('dotenv').config()
const speakeasy = require('speakeasy')
const chalk = require('chalk')
const path = require('path');
const fs = require('fs')

const express = require('express')
const helmet = require('helmet')
const socket = require('socket.io')

const log = console.log
const app = express()
const port = process.env.SERVER_PORT || 6060

const server = app.listen(port, () => {
  app.use(express.json())
  app.use(helmet())
  app.use('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
  })
  console.log(`Listening on port: ${port}`)
})

const io = socket(server);

function getTwoFactor(secret) {
  return new Promise((resolve, reject) => {
    let token = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });
    resolve(token);
  })
}

ready = false
keys = []

const secrets = require('./secrets.json')

setInterval(() => {
  let promises = []
  secrets.forEach((secret) => {
    promises.push(getTwoFactor(secret.secret))
  })
  Promise.all(promises)
  .then((data) => {
    process.stdout.write("\u001b[2J\u001b[0;0H")
    let payload = []
    data.forEach((result, i) => {
      payload.push({
        label: secrets[i].website,
        email: secrets[i].email,
        code: result
      })
      log(`${chalk.cyan(secrets[i].website)}\t${result}`)
    })
    io.emit('2fa', payload)
  })

}, 1000)
