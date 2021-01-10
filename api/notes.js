const fs = require("fs")
const wf = () => {
  fs.writeFileSync("data.txt", "it works.")
  return "success"
}
// const getNotes = () => "your notes..."

module.exports = { wf }
