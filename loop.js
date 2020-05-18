var inquirer = require("inquirer");

function Person(name, age, occupation, gender) {
    this.name = name,
        this.age = age,
        this.occupation = occupation,
        this.gender = gender,
        this.printResult = function () {
            console.log("Name: " + this.name + "\nAge: " + this.age + "\nOccupation: " + this.occupation + "\nRace: " + this.gender)
        }
}

var questions = [{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "age",
        message: "How old are you?"
    },
    {
        type: "checkbox",
        name: "occupation",
        message: "What do you do?",
        choices: [{
                name: "architect"
            },
            {
                name: "pianist"
            },
            {
                name: "butcher"
            },
            {
                name: "unemployed"
            }
        ]
    },
    {
        type: "list",
        name: "gender",
        message: "What is your gender?",
        choices: [{
                name: "female"
            },
            {
                name: "male"
            },
            {
                name: "other"
            }
        ]
    }
]

var count = 0;

function askQuestions() {
    if (count < 3) {
        inquirer.prompt(questions).then(function (answers) {
            var newPerson = new Person(answers.name, answers.age, answers.occupation, answers.gender);
            newPerson.printResult();
            count++;
            askQuestions();

        })
    } else {
        console.log("All Done!")
    }
}
askQuestions();