/// <reference types="cypress" />

describe('visit medical url', () => {
  beforeEach(() => {
    cy.visit('https://www.medicines.org.uk/emc/browse-companies');
    cy.get('#onetrust-accept-btn-handler').click();
  })

  it('02- get companies count', () => {
     const companiesList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z"];
     for( var i=0;i<companiesList.length;i++){
    const countOfCompanies =  console.log(companiesList[i]);
    cy.log(countOfCompanies);
       cy.get('a[href*="/emc/browse-companies/companiesList[i]').click();

     }

    })
  })

