describe("TYPE_CHANGE_SIGN", () => {
  beforeEach(() => {
    cy.init();
  });
  // +/- 
  it("should display -0 when press +/-", () => {
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "-0");
  })
  // +/- 2
  it("should display -2 when press +/-, 2", () => {
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "-0");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "-2");
  })
  // +/- 2 +/-
it("should display 2 when press +/-, 2, +/-", () => {
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "-0");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "-2");
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "2");
  })
  //2, +/-, . +/-
  it("should display 2. when press 2, +/-, . +/-", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "-2");
    cy.get("#key-decimal").click();
    cy.get(".screen").should("have.text", "-2.");
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "2.");
  });
  
});
