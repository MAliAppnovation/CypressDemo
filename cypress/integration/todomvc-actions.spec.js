/// <reference types="cypress"/>

// example of PageObject framework 
import {TodoPage, todoPage} from "../integration/PageObjects/todo-page";

describe('todo actions', () => {
     const todoPageObj = new TodoPage();

    beforeEach(() => {
        todoPageObj.NavigateMethod();
    })

    it('should add a new todo to the list', () => {
        todoPageObj.addTodo('Clean room');
    })

})