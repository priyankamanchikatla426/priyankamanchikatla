class homeSaucePage{

    elements {
        usernameInput : ()=>cy.get('#inputEmail');
        usernamePassword : ()=>cy.get('#inputPassword');
        loginButton : ()=>cy.get('#login');
        errorMessage : ()=>cy.get('.alert');

    }

}

module.exports = new homeSaucePage();