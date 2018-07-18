import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Nao\'s new app', {
  clientId: "",
  network: 'rinkeby',
  signer: SimpleSigner("")
})

// Request credentials to login
// uport.requestCredentials({
//   requested: ['name', 'phone', 'country'],
//   notifications: true // We want this if we want to recieve credentials
// })
// .then((credentials) => {
//   // Do something
//   console.log(credentials)
//   console.log(JSON.stringify(credentials, null, "  "))

// })

// // Attest specific credentials
// uport.attestCredentials({
//   sub: THE_RECEIVING_UPORT_ADDRESS,
//   claim: {
//     CREDENTIAL_NAME: CREDENTIAL_VALUE
//   },
//   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })
