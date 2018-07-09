describe("TYPE_EQUAL", () => {
  beforeEach(() => {
    cy.init();
  });
  //2, ., =, =
  it("should display 2. when press 2, ., =, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-decimal").click();
    cy.get(".screen").should("have.text", "2.");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "2.");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "2.");
  });

  it("should display -2 when press 2, -, 4, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-subtract").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-4").click();
    cy.get(".screen").should("have.text", "4");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "-2");
  })
 it("should display -8 when press 2, *, +/1, 4, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-change_sign").click();
    cy.get(".screen").should("have.text", "-0");
    cy.get("#key-4").click();
    cy.get(".screen").should("have.text", "-4");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "-8");
  })

  it("should display 12 when press 3, *, 2, =, =", () => {
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-multiply").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-2").click()
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "6");
    cy.get("#key-equal").click();
    cy.get(".screen").should("have.text", "12");
  })
});
