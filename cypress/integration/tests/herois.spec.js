/// <reference types="cypress" />

import '../../support/commandsHerois'

describe('Gerenciar Heróis', () => {
    before(() => {
        cy.visit('https://web-heroi.herokuapp.com')
    })

    it('Adicionar um novo herói', () => {
        cy.clicaCriar();
        cy.salvaHeroi();
        cy.validaMensagem('Herói salvo com sucesso!')
    })
})