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
    })

    it('Salvar vários heróis', () => {
        cy.clicaCriar();
        cy.salvaHeroi('Batman', 'Bruce Wayne', 'DC');
        cy.validaMensagem('Herói salvo com sucesso!')
        
        cy.clicaNovo();
        cy.salvaHeroi('Superman', 'Clark Kent', 'DC');
        cy.validaMensagem('Herói salvo com sucesso!')
        
        cy.clicaNovo();
        cy.salvaHeroi('Mulher Maravilha', 'Princesa Diana', 'DC');
        cy.validaMensagem('Herói salvo com sucesso!')
        
        cy.clicaNovo();
        cy.salvaHeroi('Spider-Man', 'Peter Parker', 'Marvel');
        cy.validaMensagem('Herói salvo com sucesso!')
        
        cy.clicaNovo();
        cy.salvaHeroi('Hulk', 'Bruce Benner', 'Marvel');
        cy.validaMensagem('Herói salvo com sucesso!')
        
        cy.clicaNovo();
        cy.salvaHeroi('Homem de Ferro', 'Tony Stark', 'Marvel');
        cy.validaMensagem('Herói salvo com sucesso!')
    })

    it('Pesquisar herói', () => {
        cy.pesquisarHeroi('Hulk')
        cy.pesquisarHeroi('Batman')
        cy.pesquisarHeroi('Superman')
    })

    it('Volta para tela principal', () => {
        cy.clicaHerois()
    })
})