describe('Flashscore Automation Pack', () => {
    it('Verify Launch Match Details page', () => {
        
        
        cy.visit("https://www.flashscore.com"), {
            onBeforeLoad(win) {
              cy.stub(win, 'open')
            }
          }
//Selecting the first match available
        cy.get('[id^=g_1_]').each(($elem, index) => {
            if (index === 1) {
              cy.wrap($elem).click();
            }
//TODO Check it opens Match Details Page
 //       cy.window().its('open').should('be.called')
    })
  })
})