/// <reference types="cypress" />

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
  })

  it('01 - Accept cookies', () => {
    cy.get('#onetrust-accept-btn-handler').should('contain', 'Accept All Cookies').click();
  })
})