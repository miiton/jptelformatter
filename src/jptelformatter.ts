// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { data } from "./data"

export default function jptelfmt(tel: string) {
  tel = tel.replace(/[-\(\)]/g, "")
  let matched
  for (let i = 0; i < data.length; i++) {
    if (tel.startsWith(`0${data[i].area}`)) {
      matched = data[i]
      break
    }
  }
  if (!matched) {
    return false
  }
  const re: RegExp = new RegExp(
    `^(0${matched.area})(\\d{${matched.city.length}})(.*)$`
  )
  return tel.replace(re, "$1-$2-$3")
}
