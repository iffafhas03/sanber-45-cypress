describe("My First Test", () => {
  it("Get commands querying", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("Kitchen Sink");

    cy.contains("get").click();

    cy.get("#query-btn").click();
  });
  it("input Test to form field", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get("#email1")
      .type("fakeemail@gmail.com")
      .should("have.value", "fakeemail@gmail.com");
  });
});
