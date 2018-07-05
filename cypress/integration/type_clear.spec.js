describe("TYPE_CLEAR", () => {
  beforeEach(() => {
    cy.init();
  });
  //1, clear
  it("display 0, when press 1, clear", () => {
    cy.get("#key-clear").should("have.text", "AC");
    cy.get("#key-1").click();
    cy.get(".screen").should("have.text", "1");
    cy.get("#key-clear").click();
    cy.get(".screen").should("have.text", "0");
    cy.get("#key-clear").should("have.text", "AC");
  });

  // 2, *, 2, clear, 3, =
  it("display 6, when press 2, *, 2, clear, 3, =", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-\\*").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-clear").click();
    cy.get(".screen").should("have.text", "0");
    cy.get("#key-3").click();
    cy.get(".screen").should("have.text", "3");
    cy.get("#key-\\=").click();
    cy.get(".screen").should("have.text", "6");
  });
});
