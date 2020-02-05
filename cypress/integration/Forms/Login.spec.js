const baseURL = 'https://www.looke.com.br/';

describe('Is site online and navigable?', () => {
  it('Is Home ok?', () => {
    cy.visit(baseURL);
  });

  it('Is it navigable?', () => {
    cy.visit(baseURL)
      .its('.lightbox')
      .then($lightbox => {
        cy.get('.lightbox').click(150, 150);
      });
  });
});
