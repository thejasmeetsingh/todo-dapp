// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Todo {
    struct Task {
        string title;
        string description;
        bool isCompleted;
    }

    mapping (address => Task[]) users;

    modifier isValidIndex(uint _idx) {
        require(_idx < users[msg.sender].length);
        _;
    }

    function getTaskList() external view returns (Task[] memory) {
        return users[msg.sender];
    }

    function addTask(string memory _title, string memory _description) external {
        users[msg.sender].push(Task(_title, _description, false));
    }

    function markTaskComplete(uint _idx) external isValidIndex(_idx) {
        users[msg.sender][_idx].isCompleted = true;
    }

    function updateTask(uint _idx, string memory _title, string memory _description) external isValidIndex(_idx) {
        users[msg.sender][_idx].title = _title;
        users[msg.sender][_idx].description = _description;
    }

    function deleteTask(uint _idx) external isValidIndex(_idx) {
        for (uint idx = _idx + 1; idx < users[msg.sender].length; idx++) {
            users[msg.sender][idx - 1] = users[msg.sender][idx];
        }
        users[msg.sender].pop();
    }
}