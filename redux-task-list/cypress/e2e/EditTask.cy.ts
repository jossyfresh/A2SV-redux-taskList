it('should edit a task', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Edit the task
    const editedTaskText = 'Edited task';
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div button.edit').click();
    cy.get('.TaskList div input[type="text"]').type('{selectall}{backspace}');
    cy.get('.TaskList div input[type="text"]').type(editedTaskText);
    cy.get('.TaskList div button.Done').click();
    cy.get('.TaskList div').should('contain', editedTaskText);
  });