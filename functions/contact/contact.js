const Hubspot = require('hubspot')

exports.handler = async function(event, context, callback) {
  const { senderFirstName, senderLastName, senderEmail, senderCompany, message } = JSON.parse(event.body)
  const hubspot = new Hubspot({
    apiKey: 'e2e8ea2d-699a-4163-8d1d-6decf384533c',
  })
  console.log("start hubspot contact...")
  console.log(event.body)
  ///
  await hubspot.contacts.getByEmail(senderEmail)
  .then( async data => { 
    console.log(data.vid)
    const payload = { 
      'engagement': { 
        'active': true, 
        'ownerId': 1, 
        'type': 'EMAIL', 
        'timestamp': Date.now() 
      }, 
      'associations': { 
        'contactIds': [data.vid], 
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
        "subject": "New Form Submission",
        "text": message
      }
    }
    await hubspot.engagements.create(payload)
    .then(data => { 
      //console.log(data)
      return {
        statusCode: 200,
        body: "ENGAGEMENT CREATED",
      }
    })
  })
  .catch( async (e) => {
    console.log("CONTACT DOES NOT EXIST")
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
    .then( async data => { 
      console.log(data.vid)
      console.log("CONTACT DONE.")
      const payload = { 
        'engagement': { 
          'active': true, 
          'ownerId': 1, 
          'type': 'EMAIL', 
          'timestamp': Date.now() 
        }, 
        'associations': { 
          'contactIds': [data.vid], 
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
          "subject": "New Form Submission",
          "text": message
        }
      }
      await hubspot.engagements.create(payload)
      .then(data => { 
        console.log("ENGAGEMENT CREATED")
        return {
          statusCode: 200,
          body: "CONTACT + ENGAGEMENT CREATED"
        }
      })
      .catch( (err) => {
        console.log("ERROR 4566", err.message)
        return {
          statusCode: err.code,
          body: JSON.stringify({ msg: err.message })
        }
      })
    })
    .catch( (err) => {
      console.log("ERROR 233", err.message)
      return {
        statusCode: err.code,
        body: JSON.stringify({ msg: err.message })
      }
    })
  })
  ///
}
