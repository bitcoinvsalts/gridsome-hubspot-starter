const Hubspot = require('hubspot')

exports.handler = async function(event, context, callback) {
  const { message, senderEmail } = JSON.parse(event.body)
  const hubspot = new Hubspot({
    apiKey: 'e2e8ea2d-699a-4163-8d1d-6decf384533c',
  })
  console.log("start hubspot contact...")
  console.log(event.body)
  const contactObj = {
    "properties": [
      { "property": "firstname","value": 'yooo' },
      { "property": "lastname", "value": 'bingy' }
    ]
  }
  try {
    await hubspot.contacts.create(contactObj)
    console.log("DONE.")
    return {
      statusCode: 200,
      body: "Message sent"
    }
  } catch(err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
