class HomePage {

    
    //Homepage
    tapLoginButton()
    {cy.get('#signIn').click()
      cy.log("Clicking in the Login Button")}

    closeCookies()
    {cy.get('#onetrust-accept-btn-handler').click()}
       
    //Login Prompt
    usernameField()
    {return cy.get('#email')}

    passwordField()
    {return cy.get('#passwd')}

    concludeLogin()
    {cy.get('.sign-up-form-element > #login').click()}
    
    closeLoginSucessMessage()
    {cy.get('#lsid-window-close').click()}
 
     
    openUserAccount()
    {cy.get('#lsid-dropdown').click()}

    tapLogoutButton()
    {cy.get('#lsid-sign-out').click()}

    
    //Sports Links
    selectTennis()
    {return cy.get('[href="/tennis/"] > .menuTop__text').click()}
   
    selectBasketball()
    {return cy.get('[href="/basketball/"] > .menuTop__text').click()}

    selectHockey()
    {return cy.get('[href="/hockey/"] > .menuTop__text').click()}

    selectGolf()
    {return cy.get('[href="/golf/"] > .menuTop__text').click()}

    selectBaseball()
    {return cy.get('[href="/baseball/"] > .menuTop__text').click()}

    selectCricket()
    {return cy.get('[href="/cricket/"] > .menuTop__text').click()}

//Footer Links


selectAdvertise()
{return cy.get('.page-advertise').click()}

selectContacts()
{return cy.get('.page-contact').click()}


//Favorites

addFirstLeaguetoFavorites()
{cy.get(':nth-child(1) > .icon--flag > .toggleMyLeague').click()}

verifyCorrectFavoriteAdded()
{   cy.wait(5000)
    
    cy.get('.top > .icon--flag > .event__titleBox > .event__title--name').then(($btn) => {

    // store the button's text
    const txt = $btn.text()
  
     // compare the two buttons' text
    // and make sure they are different
    cy.get('.last > a').should(($btn2) => {
      expect($btn2.text()).eq(txt)
    })
  })
}



}

export default HomePage;


