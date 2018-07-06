describe("TYPE_DECIMAL", () => {
  beforeEach(() => {
    cy.init();
  });
  //0, .,
  it("should display 0. when press 0, . ", () => {
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "0.");
  });

  //0, ., .,
  it("should display 0. when press 0, ., . ", () => {
    cy.get("#key-\\.").click();
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "0.");
  });

  //1, 0, .,
  it("should display 10. when press 1, 0, . ", () => {
    cy.get("#key-1").click();
    cy.get(".screen").should("have.text", "1");
    cy.get("#key-0").click();
    cy.get(".screen").should("have.text", "10");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "10.");
  });

  //2, ., 0, 1, .
  it("should display 2.01 when press 2, ., 0, 1, . ", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "2.");
    cy.get("#key-0").click();
    cy.get(".screen").should("have.text", "2.0");
    cy.get("#key-1").click();
    cy.get(".screen").should("have.text", "2.01");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "2.01");
  });

  //8, ., *, 9, ., 2, =
  it("should dsplay 73.6, when press 8, ., *, 9, ., 2, =", () => {
    cy.get("#key-8").click();
    cy.get(".screen").should("have.text", "8");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "8.");
    cy.get("#key-\\*").click();
    cy.get(".screen").should("have.text", "8");
    cy.get("#key-9").click();
    cy.get(".screen").should("have.text", "9");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "9.");
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "9.2");
    cy.get("#key-\\=").click();
    cy.get(".screen").should("have.text", "73.6");
  })

   //2, *, .
   it("should display 0. when press 2, *, . ", () => {
    cy.get("#key-2").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-\\*").click();
    cy.get(".screen").should("have.text", "2");
    cy.get("#key-\\.").click();
    cy.get(".screen").should("have.text", "0.");
  });
});
