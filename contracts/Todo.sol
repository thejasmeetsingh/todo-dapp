// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Todo {
    struct Task {
        string title;
        string description;
        bool isCompleted;
    }

    mapping (address => Task[]) users;

    // Task Events
    event TaskAdded(string indexed _title, string indexed _description, bool indexed _isCompleted);
    event TaskUpdated(string indexed _title, string indexed _description);
    event TaskCompleted(bool indexed _isCompleted);
    event TaskDeleted(uint indexed idx);

    modifier isValidIndex(uint _idx) {
        require(_idx < users[msg.sender].length);
        _;
    }

    function getTaskList() external view returns (Task[] memory) {
        return users[msg.sender];
    }

    function addTask(string memory _title, string memory _description) external {
        users[msg.sender].push(Task(_title, _description, false));
        emit TaskAdded(_title, _description, false);
    }

    function markTaskComplete(uint _idx) external isValidIndex(_idx) {
        users[msg.sender][_idx].isCompleted = true;
        emit TaskCompleted(true);
    }

    function updateTask(uint _idx, string memory _title, string memory _description) external isValidIndex(_idx) {
        users[msg.sender][_idx].title = _title;
        users[msg.sender][_idx].description = _description;

        emit TaskUpdated(_title, _description);
    }

    function deleteTask(uint _idx) external isValidIndex(_idx) {
        Task memory task = users[msg.sender][_idx];

        users[msg.sender][_idx] = users[msg.sender][users[msg.sender].length - 1];
        users[msg.sender][users[msg.sender].length - 1] = task;
        users[msg.sender].pop();

        emit TaskDeleted(_idx);
    }
}