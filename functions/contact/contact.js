const Hubspot = require('hubspot')

exports.handler = async function(event, context, callback) {
  const { senderFirstName, senderLastName, senderEmail, senderCompany, message } = JSON.parse(event.body)
  const hubspot = new Hubspot({
    apiKey: 'e2e8ea2d-699a-4163-8d1d-6decf384533c',
  })
  console.log("start hubspot contact...")
  console.log(event.body)
  const contactObj = {
    "properties": [
      { "property": "firstname","value": senderFirstName },
      { "property": "lastname", "value": senderLastName },
      { "property": "email", "value": senderEmail },
      { "property": "company", "value": senderCompany },
    ]
  }
  console.log(contactObj)
  await hubspot.contacts.create(contactObj)
  .then(data => { 
    console.log(data)
    console.log("CONTACT DONE.")
    /*
    return {
      statusCode: 200,
      body
    }
    */
  })
  ///
  const payload = { 
    'engagement': { 
      'active': true, 
      'ownerId': 1, 
      'type': 'EMAIL', 
      'timestamp': Date.now() 
    }, 
    'associations': { 
      'contactIds': [901], 
      'companyIds': [ ], 
      'dealIds': [ ], 
      'ownerIds': [ ] 
    },
    'metadata': {
      "from": 
        {
          "email": senderEmail,
          "firstName": senderFirstName,
          "lastName": senderLastName,
        },
      "to": [{ "email": "JSapp.me <herve76@gmail.com>" }],
      "subject": "This is the subject of the email",
      "text": "This is the body of the email\n\n-Me"
    }
  }
  await hubspot.engagements.create(payload)
  .then(data => { 
    console.log(data)
    return {
      statusCode: 200,
      body
    }
  })
  ///
}
