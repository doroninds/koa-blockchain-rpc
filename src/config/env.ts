import dotenv from "dotenv"
dotenv.config()

const ENV = {
  APP_PORT: process.env.APP_PORT || 3000,
  APP_AUTH_TOKEN: process.env.APP_AUTH_TOKEN,
}

Object.entries(ENV).forEach(([key, value]) => {
  if (!value) {
    console.log(`💩 Oh! You forgot set env.${key} value!`)
  }
})

module.exports = ENV

export default ENV
