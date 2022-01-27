import loc from './locatorsHerois'

Cypress.Commands.add('clicaCriar', () => {
    cy.contains('Criar')
    cy.get(loc.HEROI.CRIAR.MENU).click()
})

Cypress.Commands.add('salvaHeroi', () => {
    cy.get(loc.HEROI.CRIAR.NOME).type('Mulher Maravilha').should('have.value', 'Mulher Maravilha')
    cy.get(loc.HEROI.CRIAR.CIVIL).type('Princesa Diana').should('have.value', 'Princesa Diana')
    cy.get(loc.HEROI.CRIAR.UNIVERSO).select('DC').should('have.value', 'DC')
    cy.get(loc.HEROI.CRIAR.SALVAR).click()

})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.wait(1500)
    cy.get(loc.HEROI.CRIAR.MENSAGEM).should('contain', mensagem)
})

Cypress.Commands.add('pesquisarHeroi', (heroi) => {
    cy.wait(1500)
    cy.get(loc.HEROI.PESQUISAR.CAMPO).clear().type(heroi).should('have.value', heroi)
    cy.get(loc.HEROI.PESQUISAR.BUSCAR).click()
    cy.wait(1500)
    cy.get(loc.HEROI.PESQUISAR.RESULTADO).contains(heroi)
})