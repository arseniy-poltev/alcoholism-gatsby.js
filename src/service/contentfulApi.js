const sdk = require("contentful-management")
const environmentId = "master"
const spaceId = process.env.GATSBY_CONTENTFUL_SPACE_ID

let clientConfig = {
  space: spaceId,
  accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN,
}

if (process.env.HTTPS_PROXY) {
  const host = process.env.HTTPS_PROXY.split(":")[0]
  const port = process.env.HTTPS_PROXY.split(":")[1]
  clientConfig.proxy = {
    host,
    port,
  }
}

const sdkClient = sdk.createClient(clientConfig)

async function createCustomerEntry(data) {
  try {
    const space = await sdkClient.getSpace(spaceId)
    const environment = await space.getEnvironment(environmentId)
    const contentTypes = await environment.getContentTypes()
    const createdEntry = await environment.createEntry("customer", {
      fields: {
        firstName: {
          "en-US": data.firstName,
        },
        phoneNumber: {
          "en-US": data.phoneNumber,
        },
      },
    })
    console.log("createCustomerEntry-->contentTypes", contentTypes)
    console.log("createCustomerEntry-->createCustomer", createdEntry)
    return createdEntry
  } catch (error) {
    console.log("getContentTypes", error)
    throw new Error(error.message || "contentful Error")
  }
}

module.exports = {
  createCustomerEntry,
}
