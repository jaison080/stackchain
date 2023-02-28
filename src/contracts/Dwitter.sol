pragma solidity ^0.8.0;

contract QnA {
    struct Question {
        string title;
        string description;
        address asker;
        uint256 timestamp;
        uint256 upvotes;
        uint256[] answerIds;
    }

    struct Answer {
        string description;
        address answerer;
        uint256 timestamp;
        uint256 upvotes;
    }

    mapping(uint256 => Question) public questions;
    mapping(uint256 => Answer) public answers;
    mapping(uint256 => mapping(address => bool)) public upvoted;

    uint256 public questionCount;
    uint256 public answerCount;

    function postQuestion(string memory _title, string memory _description)
        public
    {
        uint256[] memory answerIds;
        Question memory newQuestion = Question(
            _title,
            _description,
            msg.sender,
            block.timestamp,
            0,
            answerIds
        );
        questions[questionCount] = newQuestion;
        questionCount++;
    }

    function getAllQuestions()
        public
        view
        returns (string[] memory, string[] memory)
    {
        string[] memory allTitles = new string[](questionCount);
        string[] memory allDescriptions = new string[](questionCount);
        for (uint256 i = 0; i < questionCount; i++) {
            allTitles[i] = questions[i].title;
            allDescriptions[i] = questions[i].description;
        }
        return (allTitles, allDescriptions);
    }

    function addAnswer(uint256 questionId, string memory description) public {
        require(questionId < questionCount, "Invalid question ID");
        Answer memory newAnswer = Answer(
            description,
            msg.sender,
            block.timestamp,
            0
        );
        uint256 answerId = answerCount;
        answers[answerId] = newAnswer;
        questions[questionId].answerIds.push(answerId);
        answerCount++;
    }

    function getAnswers(uint256 questionId)
        public
        view
        returns (
            string[] memory,
            address[] memory,
            uint256[] memory
        )
    {
        uint256[] memory answerIds = questions[questionId].answerIds;
        string[] memory descriptions = new string[](answerIds.length);
        address[] memory answerers = new address[](answerIds.length);
        uint256[] memory upvotes = new uint256[](answerIds.length);

        for (uint256 i = 0; i < answerIds.length; i++) {
            descriptions[i] = answers[answerIds[i]].description;
            answerers[i] = answers[answerIds[i]].answerer;
            upvotes[i] = answers[answerIds[i]].upvotes;
        }

        return (descriptions, answerers, upvotes);
    }

    function upvoteAnswer(uint256 answerId) public {
        require(answerId < answerCount, "Invalid answer ID");

        // Check if the user has already upvoted this answer
        require(
            !upvoted[answerId][msg.sender],
            "You have already upvoted this answer"
        );

        // Increment the upvote count for the answer
        answers[answerId].upvotes++;

        // Mark that the user has upvoted this answer
        upvoted[answerId][msg.sender] = true;
    }
}