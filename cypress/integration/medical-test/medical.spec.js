/// <reference types="cypress" />


const CompanyConfigData = {baseUrl : "https://www.medicines.org.uk" , URL : "https://www.medicines.org.uk/emc/browse-companies"}



describe('visit medical url', () => {

function browserCompaniesandreturnitsJSON(){
  const companyDataJson = [];
  cy.get('.browse li a').then(($el) => {
    cy.log($el)
    for(var companyAlphabet of $el){
      saveFirstThirdLastData(companyAlphabet ,companyDataJson)
    }

  })
  return companyDataJson
}

function saveFirstThirdLastData(First , Second){
  const href = First.href.replace(CompanyConfigData.baseUrl , " ");
  cy.log(href);
cy.get('a[href="'+href+ '"]').click();
  }

  it('03- get companies list', () => {
    cy.visit(CompanyConfigData.URL);
    cy.get('#onetrust-accept-btn-handler').click();
  const CompaniesDataJson = browserCompaniesandreturnitsJSON()

  })
})

