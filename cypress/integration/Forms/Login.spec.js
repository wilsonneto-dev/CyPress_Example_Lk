describe('Is site online and navigable?', () => {
  it('Is Home ok?', () => {
    cy.visit('/');
  });

  it('Is it navigable?', () => {
    cy.visit("/")
      .its('.lightbox')
      .then($lightbox => {
        cy.get('.lightbox').click(150, 150);
        cy.get(
          ':nth-child(6) > .frame-center > .mediaCarousel > .frame-container > .frame > .items > [mediaid="149392"] > .mediaContainer > a > .mediaCover > .media-image > img'
        ).click();
        cy.contains('Ver mais detalhes').click();
        cy.url().should('contain', 'filme');
        cy.go('back');
      });
  });

  it('Fechar a lightbox', () => {
    cy.get('body')
      .its('.lightbox')
      .then($lightbox => {
        cy.get('.lightbox').click(150, 150);
      });
  });
});
