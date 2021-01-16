const emptyDash = " - "
const alphaNumeric = /[^a-zA-Z0-9]/gi
const replacement = "_"

export function cleanURL(string) {
  let clean = string.replace(emptyDash, replacement)
  clean = clean.replace(alphaNumeric, replacement)
  return clean
}
