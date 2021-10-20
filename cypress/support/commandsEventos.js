import loc from './locatorsEventos'

Cypress.Commands.add('login', (email, senha) => {
    cy.visit("https://dev-pwa-salveanoiva.herokuapp.com/")
    cy.get(loc.LOGIN.EMAIL).type(email).should('have.value', email)
    cy.get(loc.LOGIN.SENHA).type(senha)
    cy.get(loc.LOGIN.ENTRAR).submit()
    cy.wait(1500)
})

Cypress.Commands.add('logout', () => {
    cy.get(loc.MENU.LOGOUT).click();
})

Cypress.Commands.add('criaEvento', (quantidade) => {
    var quantidadeEventoSerCriado = quantidade;
    for (let i = 1; i <= quantidadeEventoSerCriado; i++) {
        var nome = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        var local = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        var numero = Math.floor(Math.random() * 101);

        cy.get(loc.EVENTO.NOVO).click();
        cy.get(loc.EVENTO.TIPO).click();
        cy.contains('Assessoria parcial').click();
        cy.get(loc.EVENTO.NOME).type('Cypress ' + nome).should('have.value', 'Cypress ' + nome);
        cy.get(loc.EVENTO.LOCAL).type('Rua ' + local + ', ' + numero).should('have.value', 'Rua ' + local + ', ' + numero);
        cy.get(loc.EVENTO.CADASTRAR).submit();
        cy.wait(1000)
    }
})

Cypress.Commands.add('deletaEvento', (ciclos, quantidade) => {
    cy.get(loc.MENU.HOME).click();
    cy.get(loc.MENU.EVENTOS).click();
    cy.wait(1500)

    var cicloExclusao = ciclos;
    for (let j = 1; j <= cicloExclusao; j++) {
        cy.wait(2000)
        var quantidadeEventoSerExcluido = quantidade;

        for (let i = 1; i <= quantidadeEventoSerExcluido; i++) {
            cy.wait(500)
            cy.get('.MuiTableBody-root > :nth-child(' + i + ') > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click();
        }

        cy.get(loc.EVENTO.DELETAR).click();
        if (quantidade > 5) {
            cy.wait(3000)
            cy.get(loc.EVENTO.MENSAGEM).should('have.text', 'Selecione apenas 5 evento(s) para deleção em conjunto!')
        } else {
            cy.get(loc.EVENTO.CONFIRMAR).click();
            cy.wait(3000)
            cy.get(loc.EVENTO.MENSAGEM).should('have.text', 'Eventos deletados com sucesso!')
        }
    }
})