const fs = require("fs")

const template = fs.readFileSync('template.js', 'utf8')
const awslogin = fs.readFileSync('awslogin.js', 'utf8')
const build = template.replace('{{ awslogin }}', awslogin.replace('`', '\`'))
console.log(build)
