import loc from './locatorsHerois'

Cypress.Commands.add('clicaCriar', () => {
    cy.contains('Criar')
    cy.get(loc.HEROI.CRIAR).click()
})

Cypress.Commands.add('salvaHeroi', () => {
    cy.get(loc.HEROI.NOME).type('Mulher Maravilha').should('have.value', 'Mulher Maravilha')
    cy.get(loc.HEROI.CIVIL).type('Princesa Diana').should('have.value', 'Princesa Diana')
    cy.get(loc.HEROI.UNIVERSO).select('DC').should('have.value', 'DC')
    cy.get(loc.HEROI.SALVAR).click()

})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.wait(1500)
    cy.get(loc.HEROI.MENSAGEM).should('contain', mensagem)
})