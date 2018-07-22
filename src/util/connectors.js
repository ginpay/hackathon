import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Nao\'s new app', {
  clientId: "2oz1CQRAYXEQ6EJfm97yu3jP73AauSZeTR8",
  network: 'rinkeby',
  signer: SimpleSigner("fb60042070d013a7d9e2b91c07614799269ae4be3f047b3445ad1f2cb22b099d")
})