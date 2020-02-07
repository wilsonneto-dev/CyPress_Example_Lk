const serviceUrl = Cypress.env('api_server');

describe("Testando as API's", () => {
  it('Medias Lista Ok?', () => {
    cy.request({
      method: 'GET',
      url: `${serviceUrl}/api/Sections`,
      headers: {
        client_id: 'localhostLooke'
      }
    }).then(response => {
      // expect(response.body).to.have('');
    });
  });
});
