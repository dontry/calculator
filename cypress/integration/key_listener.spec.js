describe("KEY_LISTENER", () => {
  beforeEach(() => {
    cy.init();
  });
  // 1, +, 1, =
  it("should display 2 when type 1, +, 1, =", () => {
    cy.get("body").type("1");
    cy.get(".screen").should("have.text", "1");
    cy.get("body").type("+");
    cy.get(".screen").should("have.text", "1");
    cy.get("body").type("1");
    cy.get(".screen").should("have.text", "1");
    cy.get("body").type("=");
    cy.get(".screen").should("have.text", "2");
  });

  // 4, ., 2, *, 2, Enter
  it("should display 8.4 when type 4, ., 2, *, 2, Enter", () => {
    cy.get("body").type("4");
    cy.get(".screen").should("have.text", "4");
    cy.get("body").type(".");
    cy.get(".screen").should("have.text", "4.");
    cy.get("body").type("2");
    cy.get(".screen").should("have.text", "4.2");
    cy.get("body").type("*");
    cy.get(".screen").should("have.text", "4.2");
    cy.get("body").type("2");
    cy.get(".screen").should("have.text", "2");
    cy.get("body").type("{enter}");
    cy.get(".screen").should("have.text", "8.4");
  });

  it("should display 0, when type 1, c,", () => {
    cy.get("body").type("1");
    cy.get(".screen").should("have.text", "1");
    cy.get("body").type("c");
    cy.get(".screen").should("have.text", "0");
  });
  it("should display 0, when type 1, 2, backspace,", () => {
    cy.get("body").type("1");
    cy.get(".screen").should("have.text", "1");
    cy.get("body").type("2");
    cy.get(".screen").should("have.text", "12");
    cy.get("body").type("{backspace}");
    cy.get(".screen").should("have.text", "0");
  });
});
