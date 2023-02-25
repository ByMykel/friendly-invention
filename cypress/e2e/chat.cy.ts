describe('Chat page', () => {
  it('should login and send a message', () => {
    cy.visit('/login')
    cy.get('input[name="user"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/chat')

    cy.get('input[name="message"]').should('be.visible')

    cy.get('input[name="message"]').type('Hello world')
    cy.get('button[name="send-message"]').click()
    cy.get('input[name="message"]').should('have.value', '')

    cy.get('div').contains('Hello world').should('be.visible')
  })

  it('Should redirect to chat', () => {
    cy.window().then(() => {
      sessionStorage.setItem('token', '1234567890')
    })

    cy.visit('/login')
    cy.url().should('include', '/chat')
  })
})