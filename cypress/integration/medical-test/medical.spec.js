/// <reference types="cypress" />

const { array } = require("assert-plus");

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
    cy.get('#onetrust-accept-btn-handler').click();
  })

  it('02- get companies details', () => {
    //  const companiesList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z"];

    cy.get('a[href*="/emc/browse-companies/A').click();
    cy.get('.:nth-child(2) > .col-md-12').children().click();
    cy.go('back')
    cy.get('.ieleft > ul > :nth-child(3) > .key').click();
  })

})

