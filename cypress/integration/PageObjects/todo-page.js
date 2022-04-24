export class TodoPage
{
    NavigateMethod()
    {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addTodo(todoText)
    {
        cy.get('.new-todo').type(todoText + "{enter}");
    }

    validateTodoText(todoindex, expectedText){
        cy.get('.todo-list li:nth-child(${todoindex + 1}) lavel').should('have.text', expectedText);   
    }
}