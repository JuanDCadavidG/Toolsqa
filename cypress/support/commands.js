Cypress.Commands.add('SelectMenuPage', function() {

	cy.fixture('fxt-dropdown').then( fxt => {
            
        this.fxt = fxt
        cy.intercept({ resourceType : /xhr|fetch/ }, { log : false })
        cy.visit('/' + this.fxt.endpoint);
            
	})
	
})