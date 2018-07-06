describe("TYPE_PERCENTAGE", () => {
  beforeEach(() => {
    cy.init();
  });
  it("should display 0., when press %", () => {
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0");
  });
  // 2, %, =
  it("should display 0.02, when press 2, %, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0.02");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "0.02");
  });

  // 2, %, %
  it("should display 0.0002, when press 2, %, %", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0.02");
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0.0002");
  });

  //2, ., 0, 1, %
  it("should display 0.0201, when press 2, ., 0, 1, %, %", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-decimal").click();
    cy.get(".screen").should("have.text", "2.");
    cy.get("#key-0").click();
    cy.get(".screen").should("have.text", "2.0");
    cy.get("#key-1").click();
    cy.get(".screen").should("have.text", "2.01");
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0.0201");
  });

  //8, *, 8, %, =
  it("should display 0.0064, when press 8, *, 8, %, =", () => {
    cy.get("#key-8").click();
    cy.get(".screen").should("have.text", "8");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "8");
    cy.get("#key-percentage").click();
    cy.get(".screen").should("have.text", "0.08");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "0.64");
  });

  
});
