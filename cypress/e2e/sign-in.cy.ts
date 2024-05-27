describe('sign-in', () => {
    it('should navigate to the about page', () => {
      // Start from the sign-in page
      cy.visit('http://localhost:3000/en/sign-in')
   
      // Find a button with an the name sign-in and click on it
      cy.get('button[name*="sign-in"]').click()
   
      // Find input with the Name password and type "password" in it
      cy.get('input[name="password"]').type("password")
   
      // Find a button with the id submitButton and click on it
      cy.get('button[id*="submitButton"]').click()

      // Check if the URL is now /en?view=list
      cy.url().should('include', '/en?view=list')



      // Start from the sign-in page
      cy.visit('http://localhost:3000/en/create-group')
   
      // Find a button with an the name sign-in and click on it
      cy.get('input[name*="name"]').type("Cypress Test Group")
   
      // Find input with the Name password and type "password" in it
      cy.get('input[name*="currency"]').type("USD")
   
      // Find a button with the id submitButton and click on it
      cy.get('button[data-testid*="create-group"]').click()

      // Check if the URL is now /en?view=list
      cy.get('td').contains('Cypress Test Group')
    })
  })
