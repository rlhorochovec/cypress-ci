before(() => {
    //login with a registered account
    cy.visit("https://dev-pwa-salveanoiva.herokuapp.com/");
    cy.get("input[type='email']").type("teste.pevedev@yopmail.com");
    cy.get('.MuiInputBase-inputAdornedEnd').click();
    cy.get('.MuiInputBase-inputAdornedEnd').type('salve2021');
    cy.get('.MuiButton-contained > .MuiButton-label').click();
    cy.get('.Generics__SNForm-sc-vytrfh-14').submit();
    cy.get('.Generics__SNBox-sc-vytrfh-13:nth-child(2) > .MuiTypography-root .MuiGrid-root > .Generics__SNParagraph-sc-vytrfh-12').click();
    cy.wait(1500)
})

after(() => {
    //logout
    cy.get('.styles__StyledSNBoxCustom-sc-1e26721-7 > .MuiTypography-root').click();
})

it("Cria eventos", () => {
    var quantidadeEventoSerCriado = 10;
    for (let i = 1; i <= quantidadeEventoSerCriado; i++) {
        var randomico = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        cy.get(':nth-child(2) > .MuiButtonBase-root').click();
        cy.get('#mui-component-select-eventtype').click();
        cy.contains('Assessoria parcial').click();
        cy.get('input[name=\'eventname\']').click();
        cy.get('.Mui-focused > .MuiInputBase-input').type('Cypress ' + randomico);
        cy.get('.Mui-focused > .MuiInputBase-input').click();
        var randomico = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        cy.get('input[name=\'eventlocations\']').type('Rua ' + randomico);
        cy.get('.styles__DivPartials-sc-t336vb-1:nth-child(2) .MuiButton-label').click();
        cy.get('.Generics__SNForm-sc-vytrfh-14').submit();
        cy.wait(1000)
    }
});

it("Valida mensagem: Selecione apenas 5 evento(s) para deleção em conjunto!", () => {
    cy.get('.Generics__SNBox-sc-vytrfh-13:nth-child(2) > .MuiTypography-root .MuiGrid-root > .Generics__SNParagraph-sc-vytrfh-12').click();
    cy.wait(1500)

    var quantidadeEventoSerExcluido = 6;
    for (let i = 1; i <= quantidadeEventoSerExcluido; i++) {
        cy.get('.MuiTableBody-root > :nth-child(' + i + ') > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click();
    }

    cy.get('.styles__StyledToolbarDeleteButton-sc-1zm44m-1').click();
    cy.get('.MuiAlert-message').should('have.text', 'Selecione apenas 5 evento(s) para deleção em conjunto!')
});

it("Deleta eventos", () => {
    cy.get('.Generics__SNBox-sc-vytrfh-13:nth-child(2) > .MuiTypography-root .MuiGrid-root > .Generics__SNParagraph-sc-vytrfh-12').click();
    cy.wait(1500)

    var cicloExclusao = 2;
    for (let j = 1; j <= cicloExclusao; j++) {
        var quantidadeEventoSerExcluido = 5;
        for (let i = 1; i <= quantidadeEventoSerExcluido; i++) {
            cy.get('.MuiTableBody-root > :nth-child(' + i + ') > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label').click();
        }
        cy.get('.styles__StyledToolbarDeleteButton-sc-1zm44m-1').click();
        cy.wait(1500)
        cy.get('.styles__DivPartials-sc-hagasa-1:nth-child(2) .MuiButton-label').click();
        cy.wait(1500)
        cy.get('.MuiAlert-message').should('have.text', 'Eventos deletados com sucesso!')
        cy.wait(5000)
    }
});