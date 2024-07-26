/// <reference types="Cypress" />
const REQUEST_URL = "https://api.themoviedb.org/3";

describe("api request tests", () => {
  beforeEach(function () {
    cy.fixture("example.json").as("data");
  });

  it("check movie search", () => {
    const apiKey = Cypress.env("apiKey");
    cy.get("@data").then((data) => {
      cy.request({
        method: "GET",
        url: `${REQUEST_URL}/search/movie`,
        qs: {
          api_key: apiKey,
          language: "en-US",
          query: data.movieName,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
