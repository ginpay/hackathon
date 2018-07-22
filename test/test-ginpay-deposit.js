const config = {};
// const utility = require('./utility.js')(config);
const Web3 = require('web3');
const assert = require('assert');
const TestRPC = require('ethereumjs-testrpc');
const sha256 = require('js-sha256').sha256;
const async = require('async');
const BigNumber = require('bignumber.js');
const HDWalletProvider = require('truffle-hdwallet-provider');
const solc = require('solc');
var Tx = require('ethereumjs-tx');
var accessToken = '';// Set your accessToken
const privStr = ''; // Set your priv key
const provider = new Web3.providers.HttpProvider(
   "https://rinkeby.infura.io/" + accessToken,
   1
  )

const web3 = new Web3(provider);

var abi = [{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orderFills","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"traveler","type":"address"},{"name":"recommender","type":"address"},{"name":"place","type":"uint256"}],"name":"recommend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"admin_","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orders","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"traveler","type":"address"},{"name":"recommender","type":"address"},{"name":"travelerReward","type":"uint256"},{"name":"recommenderReward","type":"uint256"}],"name":"reward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"place","type":"uint256"}],"name":"Recommend","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"place","type":"uint256"},{"indexed":false,"name":"proof","type":"uint256"}],"name":"ProofOfVisit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"travelerReward","type":"uint256"},{"indexed":false,"name":"recommenderReward","type":"uint256"}],"name":"Reward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"}]

const contractAccount = "0x4A5166b9Db7AAb5a99148247daE2dBb994f502a5"
const contract = web3.eth.contract(abi).at(contractAccount);

function setTransaction(data, fromAccount, toAccount, value){
  // アドレスの何個目かのトランザクションかをnonceを作成
  var count = web3.eth.getTransactionCount(fromAccount);
  var gasPrice = web3.eth.gasPrice;
  var gasLimit = 4600000;
  console.log(gasPrice);
  // トランザクションのフォーマットに沿って、gasや宛先など、detaも当てはめ
  var rawTransaction = {
    "from": fromAccount,
    "nonce": web3.toHex(count),
    "gasPrice": web3.toHex(gasPrice),
    "gasLimit": web3.toHex(gasLimit),
    "to": toAccount,
    "value": value,
    "data": data,
    "chainId": 0x04
  };

  return rawTransaction;
}

function sendTransaction(rawTx){
   var signedTx = signTx(rawTx);
   web3.eth.sendRawTransaction('0x' + signedTx.toString('hex'), function(err, hash) {
   if (!err)
      console.log(hash);
   else
      console.log(err);
  });
}

function execDepositEth(from_account, to_account, value){
  // データと言われる実行メソッドを指定するためのバイナリ(MethodIDと言われるもの)を作成
   var data = contract.deposit.getData();
   console.log(data);
   var rawTx = setTransaction(data, from_account, to_account, value);
   sendTransaction(rawTx);
}


function signTx(rawTx){
  // 秘密鍵署名
  var privKey = new Buffer(privStr, 'hex');
  var tx = new Tx(rawTx);
  tx.sign(privKey);
  var serializedTx = tx.serialize();
  return serializedTx;
}


var ethAddress = "0x0000000000000000000000000000000000000000";
var fromAccount = "0x142a15c56308269c98B3da7a65285c729dd9266e";
var toAccount = "0x893b83A643d43395D064C04170d82b8E71E9694e";

execDepositEth(fromAccount, contractAccount, 1e+17);
