/// <reference types="cypress" />

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
  })

  it('01 - Accept cookies', () => {
    cy.get('#onetrust-accept-btn-handler').should('contain', 'Accept All Cookies').click();
  })
})

it('02 - Accept cookies', () => {
  cy.get('li').each((item) => {
    const title = item.find('h1').first().text();
    const link = item.find('a').first();

    cy.visit(link.attr('href'));

    cy.get('h1').should('have.text', title);
    cy.go('back');
  });
})
