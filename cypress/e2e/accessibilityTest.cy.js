/* eslint-disable quotes */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("check accessibility test", () => {
  before(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("search functionality", () => {
    cy.checkA11y();
  });
});
