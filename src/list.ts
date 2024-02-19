#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let answers = await inquirer.prompt([
  {
    type: "input",
    name: "todoItem",
    message: chalk.greenBright(
      "Enter the To-Do task you want to add to your To-Do List:"
    ),
  },
]);

let todoList: string[] = [];
todoList.push(answers.todoItem);

console.log(todoList);

let userLoop = await inquirer.prompt({
  type: "list",
  name: "loopChoice",
  message: chalk.cyan("Do you want to add another item?"),
  choices: ["Yes", "No"],
});

while (userLoop.loopChoice == "Yes") {
  answers = await inquirer.prompt([
    {
      type: "input",
      name: "todoItem",
      message: chalk.greenBright(
        "Enter the next To-Do task you want to add to your To-Do List:"
      ),
    },
  ]);
  todoList.push(answers.todoItem);

  console.log(todoList);

  userLoop = await inquirer.prompt({
    type: "list",
    name: "loopChoice",
    message: chalk.cyan("Do you want to add another item?"),
    choices: ["Yes", "No"],
  });
}

console.log(
  chalk.magentaBright(`You have added following items to your To-Do List:`)
);

for (let item of todoList) {
  console.log(chalk.yellowBright(item));
}
