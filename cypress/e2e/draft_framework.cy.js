describe("Cypress draft framework", () => {
  it("loads a basic page", () => {
    cy.visit("about:blank");
    cy.url().should("eq", "about:blank");
  });
});
