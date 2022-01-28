/// <reference types="cypress" />

import '../../support/commandsHerois'

describe('web-heroi', () => {
    beforeEach(() => {
        cy.visit('https://web-heroi.herokuapp.com')
    })

    it('Excluir todos os heróis', () => {
        cy.excluirTodos();
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
        cy.pesquisarHeroi('Hulk')
        cy.pesquisarHeroi('Batman')
        cy.pesquisarHeroi('Superman')
        cy.clicaHerois()
    })
})