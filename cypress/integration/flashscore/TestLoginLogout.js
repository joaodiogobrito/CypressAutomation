import HomePage from "../../support/pages/HomePage";

describe('Flashscore Automation Pack', () => {
    it('Test Log In Log Out', () => {
        cy.visit("https://www.flashscore.com")

        cy.fixture("user.json").then((user) => {

            const homePage = new HomePage()
            homePage.tapLoginButton()
            //Scenario 1 - Correct Username and Password
            homePage.usernameField().type(user.username)
            homePage.passwordField().type(user.password)
            homePage.concludeLogin()
            cy.wait(5000)
            homePage.openUserAccount()
            homePage.tapLogoutButton()
           
        
        })

    })
  })