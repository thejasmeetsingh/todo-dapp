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
  const contractAddress = "0x1983F2644E8c6C3e865b630D5BBA3b48D9f8e3ee";

  return new web3js.eth.Contract(todoJSON.abi, contractAddress);
}

export { web3, getCurrWalletAccount, getContract };
