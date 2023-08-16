describe('Add task', () => {

    beforeEach(() => {
        cy.visit('/')
      })

it('should delete a task', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Delete the task
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div button.delete').click();
    cy.get('.TaskList div').should('have.length', 0);
  });

    
});