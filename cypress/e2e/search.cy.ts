describe('Buscar produtos', () => {
  it('buscar um produto', () => {
    cy.searchByQuery('moleto')
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moleto')
    cy.get('a[href^="/product"]').should('exist')
  })

  it('Redirect se a pagina de busca é acessa sem a query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })
    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
