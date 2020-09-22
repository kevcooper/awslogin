const fs = require("fs")

try {
  const template = fs.readFileSync('template.js', 'utf8')
  const awslogin = fs.readFileSync('awslogin.js', 'utf8')
  const build = template.replace('{{ awslogin }}', awslogin)
  console.log(build)
} catch (err) {
  console.error(err)
}
