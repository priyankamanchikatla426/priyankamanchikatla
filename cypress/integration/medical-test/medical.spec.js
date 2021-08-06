/// <reference types="cypress" />

const { get } = require("cypress/types/lodash");

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
  })

  it('02- get companies details', () => {

    const companiesList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z"];

    pages.forEach(companiesList => {

      cy
        .contains(companiesList)
        .then((link) => {
          cy.click(link.prop('href'))
        })

    })

  });


  })


