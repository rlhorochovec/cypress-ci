const locators = {
    LOGIN: {
        EMAIL: "input[type='email']",
        SENHA: ".MuiInputBase-inputAdornedEnd",
        ENTRAR: ".Generics__SNForm-sc-vytrfh-14"
    },
    MENU: {
        HOME: ".styles__Nav-sc-1e26721-1 > :nth-child(1)",
        EVENTOS: ".Generics__SNBox-sc-vytrfh-13:nth-child(2) > .MuiTypography-root .MuiGrid-root > .Generics__SNParagraph-sc-vytrfh-12",
        LOGOUT: ".styles__StyledSNBoxCustom-sc-1e26721-7 > .MuiTypography-root",
    },
    EVENTO: {
        NOVO: ":nth-child(2) > .MuiButtonBase-root",
        TIPO: "#mui-component-select-eventtype",
        NOME: "input[name='eventname']",
        LOCAL: "input[name='eventlocations']",
        CADASTRAR: ".Generics__SNForm-sc-vytrfh-14",
        DELETAR: ".styles__StyledToolbarDeleteButton-sc-1zm44m-1",
        CONFIRMAR: ".styles__DivPartials-sc-hagasa-1:nth-child(2) .MuiButton-label",
        MENSAGEM: ".MuiAlert-message"
    }
}

export default locators;