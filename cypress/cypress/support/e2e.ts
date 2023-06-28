// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
  // root-level hook
  // runs once before all tests
});

beforeEach(() => {
  // root-level hook
  // runs before every test block
});

afterEach(() => {
  // runs after each test block
});

after(() => {
  // runs once all tests are done
});

Cypress.Commands.add("getByName", (selector) => {
  return cy.get(`[name=${selector}]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by name attribute.
       * @example cy.dataCy('greeting')
       */
      getByName(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
