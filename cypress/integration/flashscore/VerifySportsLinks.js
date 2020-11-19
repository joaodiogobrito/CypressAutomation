import HomePage from "../../support/pages/HomePage";

describe('Flashscore Automation Pack', () => {
    it('Verify Main Sports Links', () => {
        cy.visit("https://www.flashscore.com")

            const homePage = new HomePage()
            homePage.selectTennis()
            cy.url().should('include', 'tennis')

            homePage.selectBasketball()
            cy.url().should('include', 'basketball')

            homePage.selectHockey()
            cy.url().should('include', 'hockey')

            homePage.selectGolf()
            cy.url().should('include', 'golf')

            homePage.selectBaseball()
            cy.url().should('include', 'baseball')

            homePage.selectCricket()
            cy.url().should('include', 'cricket')
    })
  })