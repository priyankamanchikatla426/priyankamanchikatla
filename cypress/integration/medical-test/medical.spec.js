/// <reference types="cypress" />

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
    cy.get('#onetrust-accept-btn-handler').click();
  })

  it('02- get companies details', () => {

    const companiesList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z"];

    companiesList.forEach(companiesList => {

      cy
        .contains(companiesList)
        .then((link) => {
          cy.click(link.prop('href'))
        })

    })

  });


  })


