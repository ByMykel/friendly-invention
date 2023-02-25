describe('Login page', () => {
  it('should login', () => {
    cy.visit('/login')
    cy.get('input[name="user"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/chat')
  })

  it('should not login', () => {
    cy.visit('/login')
    cy.get('input[name="user"]').type('admin')
    cy.get('input[name="password"]').type('wrong')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/login')
  })

  it('should login and logout', () => {
    cy.visit('/login')
    cy.get('input[name="user"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/chat')
    cy.get('button').contains('Log out').click()
    cy.url().should('include', '/login')
  })
})