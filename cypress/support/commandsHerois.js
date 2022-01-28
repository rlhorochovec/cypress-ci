import loc from './locatorsHerois'

Cypress.Commands.add('clicaCriar', () => {
    cy.contains('Criar')
    cy.get(loc.HEROI.MENU.CRIAR).click()
    cy.wait(1500)
})

Cypress.Commands.add('clicaHerois', () => {
    cy.contains('Heróis')
    cy.get(loc.HEROI.MENU.HEROIS).click()
    cy.wait(1500)
})

Cypress.Commands.add('clicaNovo', () => {
    cy.get(loc.HEROI.CRIAR.NOVO).click()
})

Cypress.Commands.add('salvaHeroi', (nome, nomeCivil, universo) => {
    cy.get(loc.HEROI.CRIAR.NOME).type(nome).should('have.value', nome)
    cy.get(loc.HEROI.CRIAR.CIVIL).type(nomeCivil).should('have.value', nomeCivil)
    cy.get(loc.HEROI.CRIAR.UNIVERSO).select(universo).should('have.value', universo)
    cy.get(loc.HEROI.CRIAR.SALVAR).click()
})

Cypress.Commands.add('salvaHerois', () => {
    var herois = ['Batman', 'Mulher Maravilha', 'Superman', 'Spider-Man', 'Hulk', 'Homem de Ferro']
    var nomes = ['Bruce Wayne', 'Princesa Diana', 'Clark Kent', 'Peter Parker', 'Bruce Benner', 'Tony Stark']
    var universos = ['DC', 'DC', 'DC', 'Marvel', 'Marvel', 'Marvel']

    for (let index = 0; index < herois.length; index++) {
        cy.salvaHeroi(herois[index], nomes[index], universos[index])
        cy.validaMensagem('Herói salvo com sucesso!')
        cy.clicaNovo()
    }
})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.wait(3000)
    cy.get(loc.HEROI.CRIAR.MENSAGEM).should('contain', mensagem)
})

Cypress.Commands.add('pesquisarHeroi', (heroi) => {
    cy.wait(1500)
    cy.get(loc.HEROI.PESQUISAR.CAMPO).clear().type(heroi).should('have.value', heroi)
    cy.get(loc.HEROI.PESQUISAR.BUSCAR).click()
    cy.wait(1500)
    cy.get(loc.HEROI.PESQUISAR.RESULTADO).contains(heroi)
})

Cypress.Commands.add('excluirTodos', (mensagem) => {
    cy.contains('Criar')
    cy.get(loc.HEROI.EXCLUIR.TODOS).click()
    cy.wait(1500)
})