Specs Check list:
  1. 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
  2. 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
  3. 20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
  4. 20pts - Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
  5. 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

Prompt: 
  Work through the follow challenges:
  Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
  Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
  Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor
  Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
  Display the two teams in a new list in the DOM with appropriate titles.
  Create 3 tests for your application.

Code Plan
  1. add starter code
  2. create an input tag to add a new applicant with the same info as players
  3. create a button that will add the new applicant to the bottom of applicants list
  4. create a button that will move an applicant to players lists
  5. create a class that consists of constructors of a player - canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
  6. connect a class that extends new players the same constructors of other roster players
  7. create a button/column for blue team and red team
  8. create function that will move a player on the roster to team columns and adds more constructors of color and mascot
  9. create a tests
    a. can create a new player properly
    b. new player is added to the bottom of the roster
    c. class adds constructors to new players
    d. movement to teams works properly
    e. when moved new constructors get added to players
  10. Create a randomizer button





# Setup Boilerplate

DO THIS FIRST!
1. `npm i`
2. Create .env file  (for super secret passwords!)
3. `npx install-peerdeps --dev eslint-config-airbnb`

install

This repo is setup to begin working immediately with AirBNB code style rules, using ESLint for warnings and errors, Prettier as a formatter and configured for VS Code.

## IF you're cloning this repo and building off of it you'll need to:

1. Fork & Clone
2. `cd eslint-boilerplate-configs`
3. `npm i` to install dependencies
4. `npx install-peerdeps --dev eslint-config-airbnb` to install peer dependencies
5. Install Prettier and Eslint Extensions for VS Code

   1. Go to VSC Settings (CMD + , || CTRL + ,)
   1. Search Save => Format on Save
   1. Search ESLint => Always show status
   1. Search Default Formatter => choose esbenp.prettier.vs-code
   1. Search Prettier => add path: `.prettierrc`
   1. Search Prettier semi => semi-colons - check
   1. Search Prettier single => single quotes - check
   1. Search Prettier arrow parens => parens - check

## ELSE if you're just using these config files a starting point follow these instructions:

1. create a new repo
2. clone new repo
3. cd into the new repo
4. Initialize as an NPM Package and create a package.json file by running the command: `npm init -y` || `npm init` and answer each of the questions

- name> => [REPO_NAME],
- description? => ENTER || "A description.....",
- version "1.0.0" => ENTER || YES
- main? => ENTER || index.js
- test? => ENTER || `mocha —no-timeouts`
- repository? => ENTER || "https://github.com/ashleygwilliams/my_package.git"
- keywords? => ENTER || ["a", "few", "words", "that", "describe", "it"],
- author? => ENTER || [YOU]
- license ISC? => ENTER || YES

5. `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node`

6. Install Prettier and Eslint Extensions for VS Code

   1. Go to VSC Settings (CMD + , || CTRL + ,)
   1. Search Save => Format on Save
   1. Search ESLint => Always show status
   1. Search Default Formatter => choose esbenp.prettier.vs-code
   1. Search Prettier => add path: `.prettierrc`
   1. Search Prettier semi => semi-colons - check
   1. Search Prettier single => single quotes - check
   1. Search Prettier arrow parens => parens - check

7. Install Peer Dependencies: `npx install-peerdeps --dev eslint-config-airbnb`

- Docs on [eslint-config-airbnb - npm](https://www.npmjs.com/package/eslint-config-airbnb)
  - Docs on [Airbnb Style Guide](https://github.com/airbnb/javascript)

8. Create a Prettier Configuration file: `touch .prettierrc`

- Add rules using [Prettier Options](https://prettier.io/docs/en/options.html)
- Copy/Paste the example rules below:

  ```json
  {
    "singleQuotes": true,
    "arrowParens": "always",
    "semi": false
  }
  ```

9. Install ESLint globally: `npm i -g eslint` || `sudo npm i -g eslint`
10. Create the ESLint configuration file by running the `eslint --init` && Walk through the steps in your console

```console
  eslint --init
  ~? How would you like to use ESLint? · style✔
  ~? What type of modules does your project use? · commonjs✔
  ~? Which framework does your project use? · react✔
  ~? Does your project use TypeScript? · No✔
  ~? Where does your code run? · node✔
  ~? How would you like to define a style for your project? · guide✔
  ~? Which style guide do you want to follow? · airbnb✔
  ~? What format do you want your config file to be in? · JSON

  || You'll have different prompts

  ~? How would you like to configure ESLint? > Use a popular style guide✔
  ~? Which style guide do you want to follow? > Airbnb✔
  ~? Do you use React? > Yes✔
  ~? What format do you want your config file to be in? > JSON✔
  Checking peerDependencies of eslint-config-airbnb@latest
  ~? The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0 || ^7.2.0. You are currently using eslint@4.19.1.
  Do you want to upgrade? > Yes✔
  Installing eslint-config-airbnb@latest....etc.....
```

11. In the `.eslintrc.json` file that was created copy/paste this JSON Object to replace what is automatically create there.

```json
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "func-names": "off",
    "object-shorthand": "warn",
    "class-methods-use-this": "warn"
  }
}
```

12. Learn more about [ESLint Rules](https://eslint.org/docs/rules/) and use more of them.
