const fs = require("fs")

module.exports = (req, res) => {
  const date = new Date().toString()
  fs.writeFile("helloworld.txt", "Hello World!", function (err) {
    if (err) return console.log(err)
    console.log("Hello World > helloworld.txt")
  })
  res.status(200).send(date)
}
