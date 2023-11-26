describe('Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve ser possível adionar um produto ao carrinho', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('deve manter a quantidade do carrinho quando adicionados dois produtos iguais', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('buscar um produto e adicionar ele ao carrinho', () => {
    cy.get('input[name=q]').first().type('moleto').parent('form').submit()
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})
