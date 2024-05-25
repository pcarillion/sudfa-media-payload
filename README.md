# Sudfa Media Backend and back Office - Payload

This repo is used as backend and backoffice for Sudfa Media Website.

Is has been developped with Payload Headless CMS. 

## Environement

- Node 20.9
- Next 15
- Payload @beta
- Postres >15

## Development

### Env vars

Create .env file and add `DATABASE_URI` with Postgres string connection

### Launch the project

`yarn && yarn dev`
open `http://localhost:3000/admin` to access the admin panel
Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:
`payload build` script by running `yarn build` in your project root; this creates a `./build` directory with a production-ready admin bundle
`yarn serve` to run Node in production and serve Payload from the `./build` directory

### Deployment

The backoffice is deployed on Vercel on [this address](sudfa-media-payload.vercel.app/admin). 

To deploy, a webhook has been installed on every push on master branch. Production is always up-to-date with master.
