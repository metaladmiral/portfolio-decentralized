// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Portfolio {
    struct Project {
        uint id;
        string name;
        string desc;
        string img;
        string gitLink;
        string timeline;
    }

    Project[5] public projects;
    string public imgLink = "QmSsfPPoDAcX3eXRHJhtWHmTaARC9m6GXeTXMRvz7dALVh";
    string public desc =
        "High skilled software professional with 4+ years of experience";
    uint projectCount;
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    modifier onlyManager() {
        require(manager == msg.sender, "User not manager");
        _;
    }

    function insertProject(
        string calldata _name,
        string calldata _desc,
        string calldata _img,
        string calldata _gitLink,
        string calldata _timeline
    ) external {
        require(projectCount < 5, "Only 5 projects allowed");
        projects[projectCount] = Project(
            projectCount,
            _name,
            _desc,
            _img,
            _gitLink,
            _timeline
        );
        projectCount++;
    }

    function changeProject(
        uint _projectId,
        string calldata _name,
        string calldata _desc,
        string calldata _img,
        string calldata _gitLink,
        string calldata _timeline
    ) external {
        projects[_projectId] = Project(
            projectCount,
            _name,
            _desc,
            _img,
            _gitLink,
            _timeline
        );
        projectCount++;
    }

    function allProjects() external view returns (Project[5] memory) {
        return projects;
    }

    function changeDescription(string calldata _desc) external onlyManager {
        desc = _desc;
    }

    function changeImgLink(string calldata _img) external onlyManager {
        imgLink = _img;
    }
}
