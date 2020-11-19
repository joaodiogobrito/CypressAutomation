import HomePage from "../../support/pages/HomePage";


describe('Flashscore Automation Pack', () => {
    it('Verify Footer Links', () => {
        cy.visit("https://www.flashscore.com")

        const homePage = new HomePage()
        homePage.closeCookies()
        
       

        homePage.selectAdvertise()
        cy.url().should('include', 'advertise')

        homePage.selectContacts()
        cy.url().should('include', 'contact')




    })
  })