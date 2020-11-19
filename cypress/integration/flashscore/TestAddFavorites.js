import HomePage from "../../support/pages/HomePage";

describe('Flashscore Automation Pack', () => {
    it('Test Add Team to Favorites', () => {
        cy.visit("https://www.flashscore.com")

        cy.fixture("user.json").then((user) => {

            const homePage = new HomePage()
            homePage.tapLoginButton()

            homePage.usernameField().type(user.username)
            homePage.passwordField().type(user.password)
            homePage.concludeLogin()
            cy.wait(5000)
            homePage.closeLoginSucessMessage()

            
            homePage.addFirstLeaguetoFavorites()
            homePage.verifyCorrectFavoriteAdded()
            
            //Adding a 2nd time removes Last Added League to Favorites
            homePage.addFirstLeaguetoFavorites()


            homePage.openUserAccount()
            homePage.tapLogoutButton()
           
        
        })

    })
  })
