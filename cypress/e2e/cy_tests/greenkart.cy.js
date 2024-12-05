describe("green kart test", function () {
  it("check total", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    const productIndices = [0, 1];
    cy.get(".product-action button").eq(productIndices[0]).click();
    cy.get(".product-action button").eq(productIndices[1]).click();

    cy.get("tr:nth-of-type(2) td:nth-of-type(3) strong")
      .invoke("text")
      .then((expectedTotal) => {
        cy.getProductTotalPrice(productIndices, expectedTotal);
      });
  });
});
