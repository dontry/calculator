describe("TYPE_NUMBER", () => {
  beforeEach(() => {
    cy.init();
  });
  // 2
  it("should display 2 when press 2", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
  });

  //2, 2
  it("should display 22 when press 2, 2", () => {
    cy.get("#key-2").click();
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "22");
  });

  //2, 2, *, 2
  it("should display 2 when press 2, 2, *, 2", () => {
    cy.get("#key-2").click();
    cy.get("#key-2").click();
    cy.get("#key-\\*").click();
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
  });

  it("should display 2.2 when press 2, ., 2", () => {
    cy.get("#key-2").click();
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "2.");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2.2");
  });

  // 2, +, 3, *, 1
  it("should display 1, when press 2, +, 3, *, 1", () => {
    cy.get("#key-2").click();
    cy.get("#key-\\+").click();
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-\\*").click();
    cy.get(".screen").should("have.text", "5");
    cy.get("#key-1").click();
    cy.get(".screen").should("have.text", "1");
  });

  // 0
  it("should display 0, when press  0", () => {
    cy.get("#key-0").click()
    cy.get(".screen").should("have.text", "0");
  })
});
