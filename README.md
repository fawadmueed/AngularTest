# Angular Sign-up Form

## Introduction

You are working on an application for your company. It is nearly completed, yet a few issues remain to be resolved.
The user signup page is missing. You will have to follow the instructions below in order to complete the project.

## Problem Statement

The HTML and styling of the form are provided. Your job is to connect it to angular and add proper validation.

Use **Template-Driven Forms** approach when implementing the requirements.

### 1. Make sure all fields are there
- Form should have `username`, `email`, `password` and `password_match` fields

### 2. Add some of that Angular magic
- Make sure all fields are bound to angular controls. Please use `FormsModule`

### 3. Add validation to fields
- All fields should be required
- Email should be validated (use angular built-in email validation)
- Password should match pattern - minimum 8 letters, numbers, at least one uppercase
- Password match value should match password value
- If field is invalid it should be marked as such - use angular validation

### 4. Some user feedback
- If field is invalid, it should display error.
- Use error elements that are provided
- Make sure elements include the correct class, i.e. `.form-username-error`
- Don't hide elements with CSS if there is no error. Make sure they are not present in DOM.

### 5. Make form a component
- Make sure when form is submitted (not only with button) the component emits proper *save* event that the parent component can subscribe to
- Prevent the event from occurring if any of form fields are invalid

For more details please run task inside devskiller and review the tests that are failing.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:4200/](http://localhost:4200/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Angular CLI](https://angular.io/cli). It has all the standard setups.

**Good Luck!**
