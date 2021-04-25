'use strict'
const fs = require('fs')

const fn = 'output.json'
let output

try {
  output = JSON.parse(fs.readFileSync(fn, 'utf8'))
} catch (err) {
  output = []
}

output.push(process.argv[2])
fs.writeFileSync(fn, JSON.stringify(output), 'utf8')

