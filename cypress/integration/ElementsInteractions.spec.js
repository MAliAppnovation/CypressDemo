
import '@percy/cypress'; 

//alert(Cypress.env('My_ENV_VARAIABLE'));

describe('Basic Page Elements Interaction', ()=> {
    beforeEach(() => {
        cy.visit('/example-4');
    });

    it('Test Case1 - sets the headertext to the items name when doubled clicked', () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
        .dblclick();
        
        cy.get('[data-cy=box-1-selected-name]')
        .invoke('text')
        .should('equal', 'Option Two');

        // taking Percy snapshot 
        cy.percySnapshot('Test Case1'); 

    });

    // .only used to run only this test case 
    it.only('Test Case2 - displays the correct count for the selected checkboxes', () => {
        cy.get('[data-cy=box-2-selected-count]')
        .invoke('text')
        .should('equal', '0');

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input').check();

        //check if the first checkbox elements get selected
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input').should('be.checked');

        // another way to verify the text-content on page 
        cy.get('[data-cy=box-2-selected-count]').should('have.text', '1');

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(3) input').check();

        cy.get('[data-cy=box-2-selected-count]')
        .invoke('text')
        .should('equal', '2');

        // taking Percy snapshot 
        cy.percySnapshot('Test Case1'); 

    });


    it('Test Case3 - Dropdown list  - this should display name of currently selected item', () => {
        cy.get('[data-cy=box-3-dropdown]')
        .select('Option Two');

        cy.get('[data-cy=box-3-selected-name]')
        .invoke('text')
        .should('equal', 'Option Two');

        // taking Percy snapshot 
        cy.percySnapshot('Test Case1'); 

    }); 


    it('Test Case4 - Mouse Hover functionality verification', () => {
        // debug statement which can be used in Browser Inspect Mode -> Sources tab
        cy.get('[data-cy=box-4-items-list] > :nth-child(3)')
        .trigger('mouseover').debug();


        // assertion for checking EXISTENCE of element
        cy.get('[data-cy=box-4-selected-name]')
        .should('exist');

        // assertion for chekcing VISIBILITY of element 
        cy.get('[data-cy=box-4-selected-name]')
        .should('be.visible');

        // how to use AND for multiple assertions 
        cy.get('[data-cy=box-4-selected-name]')
        .invoke('text')
        .should('equal', 'Option Three')
        .and('contains', 'Option');

        // Partial Text - Contains assertion 
        cy.get('[class="sc-htoDjs jiqlbg"]').contains('Option Three');

        // taking Percy snapshot 
        cy.percySnapshot('Test Case1'); 

    });

});