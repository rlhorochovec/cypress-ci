/// <reference types="cypress" />

import loc from '../../support/locatorsHerois'

describe('Adicionar Herói', () => {
    before(() => {
        cy.visit('https://angular-heroi.herokuapp.com/herois')
    })

    it('Adicionar um novo herói', () => {
        cy.contains('Adicionar')
        cy.get(loc.HEROI.NOVO).click()
        cy.get(loc.HEROI.NOME).type('Mulher Maravilha').should('have.value', 'Mulher Maravilha')
        cy.get(loc.HEROI.CIVIL).type('Princesa Diana').should('have.value', 'Princesa Diana')
        cy.get(loc.HEROI.UNIVERSO).select('DC').should('have.value', 'DC')
        cy.get(loc.HEROI.SALVAR).click()
        cy.wait(1500)
        cy.get(loc.HEROI.MENSAGEM).should('contain', 'Novo herói adicionado!')
    })
})