describe('Test Site Navigation', () => {
  it('Navigating to the site should show the Home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="home-page"]').should('be.visible')
  })
  it('Clicking the Home link should show the Home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="about-link"]').click()
    cy.get('[data-testid="about-page"]').should('be.visible')
    cy.get('[data-testid="home-link"]').click()
    cy.get('[data-testid="home-page"]').should('be.visible')
  })
  it('Clicking the About link should show the About page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="about-link"]').click()
    cy.get('[data-testid="about-page"]').should('be.visible')
  })
  it('Clicking the Blogs link should show the Blogs page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="blogs-link"]').click()
    cy.get('[data-testid="blogs-page"]').should('be.visible')
  })
})