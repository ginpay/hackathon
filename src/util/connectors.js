import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Nao\'s new app', {
  clientId: "2oz1CQRAYXEQ6EJfm97yu3jP73AauSZeTR8",
  network: 'rinkeby',
  signer: SimpleSigner("fb60042070d013a7d9e2b91c07614799269ae4be3f047b3445ad1f2cb22b099d")
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
