/// <reference types="cypress" />

import '../../support/commandsHerois'

describe('web-heroi', () => {
    beforeEach(() => {
        cy.visit('https://web-heroi.herokuapp.com')
    })

    it('Excluir todos os heróis', () => {
        cy.excluiTodos();
    })

    it('Salvar um novo herói', () => {
        cy.clicaCriar();
        cy.salvaHeroi('Aquaman', 'Athur Curry', 'DC');
        cy.validaMensagem('Herói salvo com sucesso!')
        cy.clicaHerois()
    })

    it('Salvar vários heróis', () => {
        cy.clicaCriar();
        cy.salvaHerois()
        cy.clicaHerois()
    })

    it('Pesquisar herói', () => {
        cy.pesquisaHeroi('Hulk')
        cy.pesquisaHeroi('Batman')
        cy.pesquisaHeroi('Superman')
        cy.clicaHerois()
    })
})