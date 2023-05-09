/// <reference types="cypress" />

let nomeProduto = "retratil";
let titleNomeProd = "";

describe('Buscar produto', () => {
    it('Buscar produto existente', () => {
        cy.visit('/')
        cy.get('input[id=input-search]').type(nomeProduto)
        cy.get('svg[data-testid=search-submit]').click()

        cy.get('h1[data-testid=main-title]').contains(nomeProduto)
    });

    it('Validar retorno da busca do produto', () => {
        cy.request({
            method: 'GET',
            url:'https://www.magazineluiza.com.br/busca/'+ nomeProduto

        }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.not.empty
        })
    });
    
    it('Adicionar produto no carrinho', () => {
        cy.visit('/')
        cy.get('input[id=input-search]').type(nomeProduto)
        cy.get('svg[data-testid=search-submit]').click()
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]',{ timeout: 10000 }).click()
        cy.scrollTo(0, 200)
        cy.get('label[class="sc-bYMpWt eLmReH"]').contains('Adicionar à Sacola').click()
        cy.get('div[class=EmptyBasket-title]').should('not.exist') 
        //cy.get('button[class=BasketContinue-button ]').should('exist')      
    });
});