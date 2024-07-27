/// <reference types="Cypress" />

let data;
describe("check navbar", () => {
  beforeEach(function () {
    cy.fixture("example.json").as("data");
  });

  it("navbar options", () => {
    cy.visit("/");
    cy.get("@data").then((data) => {
      cy.get(".header-nav-item span.header-list-name:nth-child(2)").each(
        ($el, index) => {
          expect($el.text()).to.include(data.headerList[index]);
        }
      );
    });
  });
});
