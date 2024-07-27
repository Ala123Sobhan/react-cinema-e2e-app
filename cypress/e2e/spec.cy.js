/// <reference types="Cypress" />

let data;
describe("check movie search", () => {
  beforeEach(function () {
    cy.fixture("example.json").as("data");
  });

  it("search functionality", () => {
    cy.visit("/");
    cy.get("@data").then((data) => {
      cy.get(".search-input").type(data.name);
      cy.searchMovie(data.name);
    });
  });
});
