# Front

## DOC

### Artefacts

- Modules (@NgModules)
- Composant (@Component)
- Directive (@Directive)
- Pipe (@Pipe)
- Service (@Injectable)

### Generate NG

- ng --help
- ng g m layout --dry-run (dry run - essai sans conséquence)
- ng g m layout -m app

- ng g c layout/header --dry-run
- ng g c layout/header --export

- ng g m stock --route stock -m app
- ng g c stock/add

- ng g s services/article

### CSS

- npm i normalize.css
- npm i sanitize.css

### Icons

- ng add @fortawesome/angular-fontawesome@0.12.x

### Test

- ng g eslint
- ng generate config karma + ng test

## DOC FROM NG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
