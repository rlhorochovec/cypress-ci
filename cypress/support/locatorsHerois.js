const locators = {
    HEROI: {
        CRIAR: {
            MENU: ":nth-child(2) > .nav-link",
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