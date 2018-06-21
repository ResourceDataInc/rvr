const superagent = require('superagent')
const cheerio = require('cheerio')

const baseURI = 'http://rvr.fly.faa.gov'
const apiURI = `${baseURI}/cgi-bin/rvr-details.pl`

// Main method / shortcut to fetch
const rvr = (module.exports = airportId => {
  return rvr.fetch(airportId)
})

rvr.fetch = airportId => {
  return superagent
    .get(`${apiURI}?airport=${airportId}`)
    .then(response => {
      return {
        airportId,
        ...parse(response.text)
      }
    })
    .catch(err => {
      console.err(`Error fetching RVR values from ${apiURI}`, err)
    })
}

// Parse the response HTML from http://rvr.fly.faa.gov
const parse = html => {
  const $ = cheerio.load(html)

  let lastUpdated = null

  const rvrValues = $('table')
    .toArray()
    .map(table => {
      const rows = $(table)
        .find('tr')
        .toArray()

      if (rows.length === 1) {
        const [ time, date ] = $(table)
          .find('th')
          .toArray()
          .map(th => th.children[0].data)

        if (time && date) {
          lastUpdated = {
            date,
            time
          }
        }
      }

      return rows.slice(1).map(r => {
        const runway = $(r)
          .find('th')
          .toArray()

        const columns = $(r)
          .find('td')
          .toArray()

        return {
          RWY: runway[0].children[0].data,
          TD: columns[0].children[0].data,
          MP: columns[1].children[0].data,
          RO: columns[2].children[0].data,
          E: columns[3].children[0].data,
          C: columns[4].children[0].data
        }
      })
    })
    .filter(x => x.length > 0)[0]

  return {
    lastUpdated,
    rvrValues
  }
}
