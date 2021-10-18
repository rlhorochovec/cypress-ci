/// <reference types="cypress" />

import loc from '../../support/locatorsEventos'

describe('Criar e Excluir Eventos', () => {
    before(() => {
        cy.visit("https://dev-pwa-salveanoiva.herokuapp.com/");
        cy.get(loc.LOGIN.EMAIL).type("teste.pevedev@yopmail.com");
        cy.get(loc.LOGIN.SENHA).type('salve2021');
        cy.get(loc.LOGIN.ENTRAR).submit();
        cy.wait(1500)
    })

    after(() => {
        cy.get(loc.MENU.LOGOUT).click();
    })

    it("Cria eventos", () => {
        var quantidadeEventoSerCriado = 10;
        for (let i = 1; i <= quantidadeEventoSerCriado; i++) {
            var nome = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
            var local = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
            var numero = Math.floor(Math.random() * 101);

            cy.get(loc.EVENTO.NOVO).click();
            cy.get(loc.EVENTO.TIPO).click();
            cy.contains('Assessoria parcial').click();
            cy.get(loc.EVENTO.NOME).type('Cypress ' + nome);
            cy.get(loc.EVENTO.LOCAL).type('Rua ' + local + ', ' + numero);
            cy.get(loc.EVENTO.CADASTRAR).submit();
            cy.wait(1000)
        }
    });

    it("Limite de exclusão", () => {
        cy.get(loc.MENU.HOME).click();
        cy.get(loc.MENU.EVENTOS).click();
        cy.wait(1500)

        var quantidadeEventoSerExcluido = 6;
        for (let i = 1; i <= quantidadeEventoSerExcluido; i++) {
            cy.wait(500)
            cy.get('.MuiTableBody-root > :nth-child(' + i + ') > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click();
        }

        cy.get(loc.EVENTO.DELETAR).click();
        cy.get(loc.EVENTO.MENSAGEM).should('have.text', 'Selecione apenas 5 evento(s) para deleção em conjunto!')
    });

    it("Deleta eventos", () => {
        cy.get(loc.MENU.HOME).click();
        cy.get(loc.MENU.EVENTOS).click();
        cy.wait(1500)

        var cicloExclusao = 2;
        for (let j = 1; j <= cicloExclusao; j++) {
            cy.wait(2000)
            var quantidadeEventoSerExcluido = 5;
            for (let i = 1; i <= quantidadeEventoSerExcluido; i++) {
                cy.wait(500)
                cy.get('.MuiTableBody-root > :nth-child(' + i + ') > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click();
            }
            cy.get(loc.EVENTO.DELETAR).click();
            cy.get(loc.EVENTO.CONFIRMAR).click();
            cy.wait(3000)
            cy.get(loc.EVENTO.MENSAGEM).should('have.text', 'Eventos deletados com sucesso!')
        }
    })
});