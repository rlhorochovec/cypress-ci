import loc from './locatorsHerois'

Cypress.Commands.add('clicaAdicionar', () => {
    cy.contains('Adicionar')
    cy.get(loc.HEROI.NOVO).click()
})

Cypress.Commands.add('adicionaHeroi', () => {
    cy.get(loc.HEROI.NOME).type('Mulher Maravilha').should('have.value', 'Mulher Maravilha')
    cy.get(loc.HEROI.CIVIL).type('Princesa Diana').should('have.value', 'Princesa Diana')
    cy.get(loc.HEROI.UNIVERSO).select('DC').should('have.value', 'DC')
    cy.get(loc.HEROI.SALVAR).click()

})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.wait(1500)
    cy.get(loc.HEROI.MENSAGEM).should('contain', mensagem)
})