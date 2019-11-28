const dotenv = require('dotenv').config()
const speakeasy = require('speakeasy')
const chalk = require('chalk')
const log = console.log

process.title = 'Google 2FA'

function getTwoFactor(secret) {
  return new Promise((resolve, reject) => {
    let token = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });
    resolve(token);
  })

}


setInterval(()=>{
  process.stdout.write("\u001b[2J\u001b[0;0H")
  console.log(`---- 2FA ----`)
  getTwoFactor(process.env.MEX)
    .then(token => {
      log(`${chalk.cyan('Bitmex')}\t${token}`)
    })
    getTwoFactor(process.env.BNB)
    .then(token => {
      log(`${chalk.cyan('Binance')}\t${token}`)
    })
  },1000)
