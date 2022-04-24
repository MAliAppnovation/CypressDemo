describe('Text box with max charaters', () => {

    it('displays the appropriate remaining charaters count', () => {
        
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="first-name-chars-left-count"]').as('charsLeftSpan');
        cy.get('[data-cy="input-first-name"]').as('charInput');

        cy.get('@charsLeftSpan')
          .then($charsLeftSpan => {
              expect($charsLeftSpan.text()).to.equals('15')
          });

        cy.get('@charInput').type('hello');
        
        cy.get('@charsLeftSpan')
          .then($charsLeftSpan => {
              expect($charsLeftSpan.text()).to.equals('10')
          });

        cy.get('@charInput').type(' my friend');

         cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equals('0')
            });


        /*
        cy.get('@charsLeftSpan').invoke('text').should('equal', '15');
        cy.get('@charInput').type('hello');
        cy.get('@charsLeftSpan').invoke('text').should('equal', '10');
        cy.get('@charInput').type(' my friend');
        cy.get('@charsLeftSpan').invoke('text').should('equal', '0');
        */

    });


    it('prevents the user from typing more characters once max is exceeded', () => {
        
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]').type('qwertyuiopasdfghjklzxcvvnm');
        
        cy.get('[data-cy="input-last-name"]').should('have.attr', 'value', 'qwertyuiopasdfg')
    }); 

});