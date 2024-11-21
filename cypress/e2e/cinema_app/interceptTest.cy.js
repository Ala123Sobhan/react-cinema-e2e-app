/// <reference types="Cypress" />
const REQUEST_URL = "https://api.themoviedb.org/3";

describe("api request tests", () => {
  beforeEach(function () {
    cy.fixture("example.json").as("data");
  });

  it("check movie search intercept", () => {
    cy.intercept("GET", `${REQUEST_URL}/search/movie*`, {
      //method, url, stubbed response
      body: {
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/sDH1LkdFOkQmTJaF1sIIniQyFOk.jpg",
            genre_ids: [18, 10749],
            id: 597,
            original_language: "en",
            original_title: "Titanic",
            overview:
              "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
            popularity: 179.406,
            poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
            release_date: "1997-11-18",
            title: "Titanic",
            video: false,
            vote_average: 7.906,
            vote_count: 24881,
          },
        ],
        total_pages: 1,
        total_results: 1,
      },
    }).as("search");

    cy.visit("/");

    cy.get(".search-input").type("Titanic");
    cy.wait("@search");
    cy.wait("@search")
      .its("response.body")
      .should("have.property", "results")
      .and("not.be.empty");

    cy.get(".grid-detail-title").then(($el) => {
      expect($el.text()).to.include("Titanic");
    });
  });
});
