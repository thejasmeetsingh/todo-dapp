import Web3 from "web3";
import todoJSON from "./Todo.json";

function web3() {
  return new Web3(
    new Web3.providers.HttpProvider(process.env.REACT_APP_HTTP_PROVIDER)
  );
}

function getDefaultAccount() {
  return web3().eth.accounts[0];
}

function getContractMethods() {
  const contract = new web3().eth.Contract(
    todoJSON.abi,
    process.env.REACT_APP_CONTRACT_ADDRESS
  );
  const defaultAccount = getDefaultAccount();

  const getTaskList = async () => {
    return await contract.methods.getTaskList().call();
  };

  const addTask = async (title, description) => {
    return await contract.methods
      .addTask(title, description)
      .send({ from: defaultAccount })
      .on("receipt", (receipt) => {
        console.log("Task added successfully");
      })
      .on("error", (error) => {
        console.error("Error caught while adding task: ", error);
      });
  };

  const markTaskComplete = async (index) => {
    return await contract.methods
      .markTaskComplete(index)
      .send({ from: defaultAccount })
      .on("receipt", (receipt) => {
        console.log("Task marked complete successfully");
      })
      .on("error", (error) => {
        console.error("Error caught while marking a task as complete: ", error);
      });
  };

  const updateTask = async (index, title, description) => {
    return await contract.methods
      .updateTask(index, title, description)
      .send({ from: defaultAccount })
      .on("receipt", (receipt) => {
        console.log("Task updated successfully");
      })
      .on("error", (error) => {
        console.error("Error caught while updating task: ", error);
      });
  };

  const deleteTask = async (index) => {
    return await contract.methods
      .deleteTask(index)
      .send({ from: defaultAccount })
      .on("receipt", (receipt) => {
        console.log("Task deleted successfully");
      })
      .on("error", (error) => {
        console.error("Error caught while deleting task: ", error);
      });
  };

  return {
    getTaskList,
    addTask,
    markTaskComplete,
    updateTask,
    deleteTask,
  };
}

export { web3, getDefaultAccount, getContractMethods };
