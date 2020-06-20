# Gridsome Hubspot Starter

A Gridsome starter using Hubspot to create new contacts and deals to your Hubspot.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jsappme/gridsome-hubspot-starter)


![screenshot](https://raw.githubusercontent.com/jsappme/gridsome-hubspot-starter/master/screenshot.png)

## Demo URL

[https://gridsome-hubspot-starter.netlify.app](https://gridsome-hubspot-starter.netlify.app)

## Features

- When the contact form is submitted from the Gridsome, it does the following:
 - check if contact email exist in your Hubspot CRM
 - if contact does not exist, it will create a new contact.
 - create new engagement for this contact.
 - create a new deal for this contact.

## Requirements

- You need an account at [Hubspot](https://hubspot.com)
- Set the environement variable called HUBSPOT_API_KEY with your own API key.

## Installation

1. Install Gridsome CLI tool if you don't have it: `npm install --global @gridsome/cli`
1. Clone the repo: `git clone https://github.com/jsappme/gridsome-hubspot-starter.git`
1. `cd gridsome-hubspot-starter`
1. `npm install`
1. `gridsome develop` to start a local dev server at `http://localhost:8080`

## Notes

 - This repo is a fork of this [personal portfolio website](https://github.com/drehimself/gridsome-portfolio-starter).

Happy coding!

[Gridsome Shopify = ❤️](https://gridsomify.com)