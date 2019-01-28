# BasicAssignmentTwo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

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


## Assignement Contents

1. Add input field which updates a property "username" via two-way binding
2. Output username property via string interpolation (in paragraph below input)
3. Add a button which may only be clicked if username is NOT an empty string
4. Upon clicking the button, the username is reset to an empty string

## Setup from Scratch

1. Create new assignment ```ng new basic-assignment-two```
2. Install bootstrap 3 ```npm install bootstrap3```
3. In **angular.json** add into **styles** array ```"node_modules/bootstrap3/dist/css/bootstrap.min.css"```
4. Make changes to **index.html**
5. Add styles to **styles.css**
6. Add ```import { FormsModule } from '@angular/forms';``` in **app.module.ts**
7. Add ```FormsModule``` into **imports** array in **app.module.ts**
8. Do the assignment