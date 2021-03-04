describe("Simple Login", () => {
  it("should show the login popup", () => {
    cy.visit(`${Cypress.env("site_url")}/home`);
    cy.get(".header-button.header-button-login").click();
    cy.get(".login-container-02").should("be.visible");
  });

  it("shouldn't sign in with invalid credentials", () => {
    cy.get(".login-container-02").should("be.visible");
    cy.get("#UserName").type("invalid@email.com");
    cy.get(":nth-child(2) > #Password").type("invalid@email.com");
    cy.get("#modal-looke > .login-button").click();

    cy.get("#modal-looke > .login-invalid").should("be.visible");
    cy.get("#modal-looke > .login-invalid").contains(
      "Usuário ou senha inválidos"
    );
  });

  it("should sign in with valid credentials", () => {
    /*    cy.visit(`${Cypress.env("site_url")}/`);
        
            cy.get(
                "[mediaid=67238]"
              ).click();
        
            cy.get('.detailTitle').should('have.text', 'Crimes Obscuros');
        
            cy.url().should('contain', 'filmes').should('contain', 'crimes-obscuros');
        
            cy.go('back');
        */

    cy.visit(`${Cypress.env("site_url")}/home`);
    cy.get(".header-button.header-button-login").click();
    cy.get(".login-container-02").should("be.visible");

    cy.get(".login-container-02").should("be.visible");
    cy.get("#UserName").type("contato@wilsonneto.com.br");
    cy.get(":nth-child(2) > #Password").type("contato@wilsonneto.com.br");
    cy.get("#modal-looke > .login-button").click();
    
    cy.visit(`${Cypress.env("site_url")}/home`);
    console.log(cy.getCookie('LOOKE'));
    cy.getCookie('LOOKE').should('have.property', 'value', "EncUserID=39772856754BD95135AF41DF24448C73&PlanID=-1&SubPlanID=0&Login.FirstName=Wilsongomes03&FullName=Wilsongomes03 BatistaRamos4&Email=contato@wilsonneto.com.br")
  });
});
