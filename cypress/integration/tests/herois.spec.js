/// <reference types="cypress" />

import '../../support/commandsHerois'

describe('web-heroi', () => {
    beforeEach(() => {
        cy.visit('https://web-heroi.herokuapp.com')
    })

    it('Salvar um novo herói', () => {
        cy.clicaCriar();
        cy.salvaHeroi();
        cy.validaMensagem('Herói salvo com sucesso!')
    })

    it('Pesquisar herói', () => {
        cy.pesquisarHeroi('Hulk')
        cy.pesquisarHeroi('Batman')
        cy.pesquisarHeroi('Superman')
    })
})