describe('Site overall', () => {
  it('should load home', () => {
    cy.visit(`${Cypress.env("site_url")}/`);
  });

  it('should be navigable', () => {
    cy.visit(`${Cypress.env("site_url")}/`);

    cy.get(
        "[mediaid=67238]"
      ).click();

    cy.get('.detailTitle').should('have.text', 'Crimes Obscuros');

    cy.url().should('contain', 'filmes').should('contain', 'crimes-obscuros');

    cy.go('back');

  });
});
