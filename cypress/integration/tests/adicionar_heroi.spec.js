/// <reference types="cypress" />

describe('Adicionar novo herói', () => {
    beforeEach(() => {
        cy.visit('https://angular-heroi.herokuapp.com/herois')
    })

    it('Salvar novo herói', () => {
        cy.contains('Adicionar')
        cy.get('[routerlink="novo"] > .nav-link').click()
        cy.get('#nome').type('Mulher Maravilha').should('have.value', 'Mulher Maravilha')
        cy.get('#nomeCivil').type('Princesa Diana').should('have.value', 'Princesa Diana')
        cy.get('#universo').select('DC').should('have.value', 'DC')
        cy.get('.btn').click()
        cy.get('h3').should('contain', 'Novo herói adicionado!')
    })
})