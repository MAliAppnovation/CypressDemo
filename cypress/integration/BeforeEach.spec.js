describe('Text box with max characters', () => {
    beforeEach( () => {
        cy.visit('/example-3');

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

    });


    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.get('@charInput').clear();
        cy.get('@charInput').type('qwertyuiopasdfghjklzxcvvnm');
        cy.get('@charInput').should('have.attr', 'value', 'qwertyuiopasdfg')
    }); 

});
