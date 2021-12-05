/**
 * @typedef character
 * @property {string} slug
 */

/**
 * @typedef House
 * @property {string} slug
 * @property {character[]} members
 */

const https = require("https")
const GoTAPI = "https://game-of-thrones-quotes.herokuapp.com/v1"

/**
 *
 * @param {string} url
 * @returns {*}
 */
async function getHttpsJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let jsonStr = ""

      res.setEncoding("utf-8")
      res.on("data", (data) => {
        jsonStr += data
      })
      res.on("end", () => {
        try {
          const parsed = JSON.parse(jsonStr)
          resolve(parsed)
        } catch {
          reject(new Error("The server response was not a valid JSON document"))
        }
      })
    })
  })
}
/**
 * @returns {Promise<House[]>}
 */
async function getHouses() {
  return getHttpsJSON(`${GoTAPI}/houses`)
}

// sanitize : 들어가선 안되는 문자열을 걸러내는것

/**
 * @param {string} quote
 * @returns {string}
 */
async function sanitizeQuote(quote) {
  return quote.replace(/[^a-zA-Z0-9.,]/g, "")
}

/**
 *
 * @param {string} slug
 * @returns {Promise<string>}
 */
async function getMergedQuotesOfCharacter(slug) {
  const character = await getHttpsJSON(`${GoTAPI}/character/${slug}`)
  return sanitizeQuote(character[0].quotes.join(""))
}

async function main() {
  const houses = await getHouses()
  houses.forEach((house) => {
    house.members.forEach((member) => {
      getMergedQuotesOfCharacter(member.slug).then((quotes) =>
        console.log(house.slug, member.slug, quotes)
      )
    })
  })
  console.log(houses)
}

main()
