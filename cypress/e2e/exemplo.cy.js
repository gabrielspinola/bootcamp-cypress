describe('Novidades', () => {
    
    it('Cadastrar e-mail com sucesso', () => {
        
        // acessa a minha aplicação 
        cy.visit('/')
            .get('#top_header')

        // criar os stpes/ações
        // selecionar esse elemento
        // preencher um campo
        cy.get('.form-control') 
            .type('dudu@qazando.com.br')

        // click de um elemento
        cy.get('.clear .theme-btn-one.btn_md')
            .click();
       
        //cy.get('.swal2-confirm')
        //    .click()

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Success') 
    })

    it('Cadastrar e-mail com sucesso apertando enter', () => {
        cy.visit('/')
            .get('#top_header')

        cy.get('.form-control') 
            .type('dudu@qazando.com.br{enter}')

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Success') 
    })

    it('Verificar fechamento da mensagem de sucesso', () => {
        cy.visit('/')
            .get('#top_header')

        cy.get('.form-control') 
            .type('dudu@qazando.com.br{enter}')

        cy.get('.swal2-confirm')
            .click()

        cy.wait(500)

        cy.get('#swal2-title')
            .should('not.exist')
    })
})