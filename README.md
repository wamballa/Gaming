# BT frontend developer test

## User Story

Create a browser based side scroller jumping game.

A character will scroll infinitely through a 2D world, coming against obstacles in their path.
A user will be able to make the character avoid the obstacles via jumping.
If a character crashes into an obstacle it is game over!

## Before starting

- Repo name: **bt-playground**

- Branch name: **[yourname]/[testname]** eg john/side-scroller

Make sure to checkout this branch, and make commits during your work.

## Dashboard view

To make you game works on dashboard please go to:

- `build-tools/webpack-config/webpack.aws-vars.js`

Modify `publicPath: '/[branch-name]-side-scroller/'` by replacing [branch-name] with your branch name eg

`publicPath: '/radek-side-scroller/'`

## Acceptance Criteria

- Your game should have a clear start and finish
- When running the screen should scroll automatically
- Obstacles should be auto generated
- Users should be able to input to allow the character to jump over obstacles
- Score should be recorded 
- Extra: Difficulty can be chosen
- Extra: Gets more tricky as time goes on

## Guidelines

- The UI can be as simple or as complex as you wish
- We are keen to see how much you think is enough, and how much would go into a Minimum Viable Product.  As a guide, elegant and simple wins over feature rich every time, though extra gold stars are given to people who get excited and do more because they are having fun
- We also consider the extensibility of the code produced.  Well factored code should be relatively easily extended

## Technical Requirements

- We prefer to use vanilla Javascript and the latest EcmaScript (ES6+) features
- Using libs/frameworks is not forbidden, but we want to see your code, not someone else's. Exception is MOBX, you can feel free to use it.
- You can style your game assets using SASS or pure CSS
- The solution should work in IE10+ and all modern browsers
- The solution should have unit tests for at least critical functions
- Top mobile devices should be supported
- Make sure that your solution have optimized `/build` with workable solution.

## How to start coding

Alongside this document you should find a prepared project with a few example
files that help you to get started. Feel free to change the structure or add new
files as you see fit.

For unit tests, create a file inside src/ named as: `*.spec.js`

`npm install` - to install

`npm start` - to start dev server

`npm run start:tests:watch` - to run tests

`npm run build` - you will have to create this one :)


### Tooling

The tooling we provide is the following:

- `webpack` to modularise your Javascript code
- `babel` to utilise ES6+ and Stage-3 features
- `node-sass` to modularise your styling via SASS
- `eslint` to make sure your code meets the standards
- `jest`, `sinon` and `chai` to help you write and run your unit tests.
