import Web3 from "web3";
import todoJSON from "./Todo.json";

function web3() {
  return new Web3(window.ethereum);
}

async function getCurrWalletAccount() {
  const accounts = await web3().eth.getAccounts();
  return accounts[0];
}

function getContract() {
  const web3js = web3();
  const contractAddress = "0x5f7aa46F594566aD958338647b363Cf43BfeEAA9";

  return new web3js.eth.Contract(todoJSON.abi, contractAddress);
}

export { web3, getCurrWalletAccount, getContract };
