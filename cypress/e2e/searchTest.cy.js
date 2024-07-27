/* eslint-disable quotes */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("check movie search", () => {
  it("search functionality", () => {
    cy.visit("/");
    cy.get(".search-input").type("a walk to remember");
    cy.get(".grid-detail > .grid-detail-title").each(($el) => {
      expect($el.text().trim()).to.equal("A Walk to Remember");
    });
  });
});
//adding check for circleci rerun
