/// <reference types="cypress" />

import loc from '../../support/locatorsEventos'
import '../../support/commandsEventos'

describe('Gerenciar Eventos', () => {
    before(() => {
        cy.login('teste.pevedev@yopmail.com', 'salve2021')
    })

    after(() => {
        cy.logout()
    })

    it("Cria eventos", () => {
        cy.criaEvento(10)
    });

    it("Limite de exclusão", () => {
        cy.deletaEvento(1, 6)
    });

    it("Deleta eventos", () => {
        cy.deletaEvento(2, 5)
    })
});