describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://3.36.103.36/");
  });

  it("should contain an element with h2.text-2xl class", () => {
    cy.get("h2.text-2xl").should("exist");
  });

  it("should contain 4 elements with h2.text-2xl class", () => {
    cy.get("h2.text-2xl").should("have.length", 4);
  });
});
