function getRandomPort () {
    return Math.round(Math.random() * (65536 - 1024) + 128)
  }

  module.exports = { getRandomPort }