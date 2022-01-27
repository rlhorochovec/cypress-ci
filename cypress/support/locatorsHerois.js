const locators = {
    HEROI: {
        MENU: {
            HEROIS: ":nth-child(1) > .nav-link",
            CRIAR: ":nth-child(2) > .nav-link"
        },
        CRIAR: {
            NOME: "#nome",
            CIVIL: "#nomeCivil",
            UNIVERSO: "#universo",
            SALVAR: ".btn",
            MENSAGEM: "h4",
            NOVO: ".btn"
        },
        PESQUISAR: {
            CAMPO: ".form-control",
            BUSCAR: ".input-group-append > .btn",
            RESULTADO: ".list-group-item"
        },
        EXCLUIR: {
            TODOS: ".m-3"
        }
    }
}

export default locators;