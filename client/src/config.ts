// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'b68myeemr9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'web-ify.eu.auth0.com',            // Auth0 domain
  clientId: 'qUyopi4tQ1CSirMK7n3YDc5ua7NDJ7DI',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
