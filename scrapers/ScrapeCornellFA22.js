const request = require("request-promise")
const cheerio = require("cheerio")
const createCsvWriter = require("csv-writer").createObjectCsvWriter

const csvWriter = createCsvWriter({
  path: "./output/cornellfa22.csv",
  header: [
    { id: "school", title: "School" },
    { id: "term", title: "Term" },
    { id: "code", title: "Code" },
    { id: "title", title: "Title" },
    { id: "instructor", title: "Instructor" },
    { id: "email", title: "Instructor" },
  ],
})

const getAddresses = async (homeAddress, baseAddress) => {
  const addressArray = []
  await request(homeAddress, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      const addresses = $('[id^="brw-subj-descr"]')
      for (let i = 0; i < addresses.length; i++) {
        addressArray.push(
          "https://classes.cornell.edu" + addresses[i].attribs.href
        )
      }
    }
  })
  return addressArray
}

const getDataFromAddress = async (address) => {
  const thisData = []
  await request(address, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      const nodes = $(".node")
      for (let i = 1; i < nodes.length; i++) {
        const childInstructors = $(".instructors", nodes[i])
        let instructor
        let email
        try {
          const OriginalInstructor =
            childInstructors["0"].children[2].children[0].attribs[
              "data-content"
            ]
          instructor = OriginalInstructor.substring(
            0,
            OriginalInstructor.indexOf("(") - 1
          )
          email =
            OriginalInstructor.substring(
              OriginalInstructor.indexOf("(") + 1,
              OriginalInstructor.indexOf(")")
            ) + "@cornell.edu"
        } catch (error) {}
        const thisClass = {
          school: "Cornell University",
          term: nodes[i].attribs["data-roster-slug"],
          code:
            nodes[i].attribs["data-subject"] +
            " " +
            nodes[i].attribs["data-catalog-nbr"],
          title: nodes[i].children[1].children[5].children[0].children[0].data,
          instructor: instructor,
          email: email,
        }
        thisData.push(thisClass)
      }
    }
  })
  return thisData
}

const scrape = async (homeAddress, baseAddress) => {
  let allAddresses

  await Promise.resolve(getAddresses(homeAddress, baseAddress)).then(
    (value) => (allAddresses = value)
  )

  let allClasses = []
  for (let i = 0; i < allAddresses.length; i++) {
    await Promise.resolve(getDataFromAddress(allAddresses[i])).then((value) => {
      allClasses = allClasses.concat(value)
    })
  }
  csvWriter.writeRecords(allClasses)
}

scrape(
  "https://classes.cornell.edu/browse/roster/FA22",
  "https://classes.cornell.edu"
)
