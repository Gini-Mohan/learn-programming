# LearnProgramming

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

# Create mock backend

1.	json-server installation
Run `npm install -g json-server` to install json-server
2. create a JSON file with the mock data in the root folder (here its `learn-programming/courses.json`)
3. Run mock server 
    Run `json-server --watch courses.json` to run the mock server.
    Navigate to `http://localhost:3000/` to check the json-server is running
    Navigate to `http://localhost:3000/lessons` to check the results

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
