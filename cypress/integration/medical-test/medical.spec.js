/// <reference types="cypress" />

const { array } = require("assert-plus");

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
    cy.get('#onetrust-accept-btn-handler').click();
  })

  it('02- get companies details', () => {

     const companiesList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z"];
  for (let i = 0; i <= array.length[companiesList]; i += 1){
    cy.get('a[href*="/emc/browse-companies/B"]').click();
    // cy.get('key').then($elements => {cy.wrap($elements[0]).click();});

  }


  })

})

