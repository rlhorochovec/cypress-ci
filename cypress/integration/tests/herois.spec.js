/// <reference types="cypress" />

import '../../support/commandsHerois'

describe('Gerenciar Heróis', () => {
    before(() => {
        cy.visit('https://angular-heroi.herokuapp.com/herois')
    })

    it('Adicionar um novo herói', () => {
        cy.clicaAdicionar();
        cy.adicionaHeroi();
        cy.validaMensagem('Novo herói adicionado!')
    })
})