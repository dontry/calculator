describe("TYPE_OPERATOR", () => {
  beforeEach(() => {
    cy.init();
  });
  //2, *, 3, *, 2, =
  it("should display 12, when press 2, *, 3, *, 2, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "6");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "12");
  });

  it("should display 15, when press 2, +, 3, *, 3, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-plus").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "5");
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "15");
  });

  //2, /, 0, =, *, 5, =
  it("should display NaN, when pres 2, /, 0, =, *, 5, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-divide").click();
    cy.get("#key-0").click();
    cy.get(".screen").should("have.text", "0");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "NaN");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "NaN");
    cy.get("#key-5").click();
    cy.get(".screen").should("have.text", "5");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "NaN");
  });
});
