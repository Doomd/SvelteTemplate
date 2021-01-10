import { writeFile } from "fs"

export default (req, res) => {
  const date = new Date().toString()
  writeFile("helloworld.txt", "Hello World!", function (err) {
    if (err) return console.log(err)
    console.log("Hello World > helloworld.txt")
  })
  res.status(200).send(date)
}
