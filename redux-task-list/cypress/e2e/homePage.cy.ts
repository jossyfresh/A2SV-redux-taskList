describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:5173') // change URL to match your dev URL
  });

  it('should display the input field', () => {
    cy.visit('http://localhost:5173');
    cy.get('input');
  });

  it('should display the add button', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Add');
  });

  it('should render the task text', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Check if the task text is rendered
    cy.get('.TaskList').should('exist');
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div').should('contain', taskText);
  });

  it('should render tasks with delete button', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Check if the task is rendered with delete button
    cy.get('.TaskList').should('exist');
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div').should('contain', taskText);
    cy.get('.TaskList div button.delete').should('exist');
  });

  
  
  it('should render tasks with edit button', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Check if the task is rendered with edit button
    cy.get('.TaskList').should('exist');
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div').should('contain', taskText);
    cy.get('.TaskList div button.edit').should('exist');
  });
  
  it('should render tasks with checkbox', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Check if the task is rendered with checkbox
    cy.get('.TaskList').should('exist');
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div').should('contain', taskText);
    cy.get('.TaskList div input[type="checkbox"]').should('exist');
  });
  it('should toggle a task', () => {
    cy.visit('http://localhost:5173');
  
    // Add a task
    const taskText = 'New task';
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
  
    // Toggle the task
    cy.get('.TaskList div').should('have.length', 7);
    cy.get('.TaskList div input[type="checkbox"]').click();
    cy.get('.TaskList div input[type="checkbox"]')
      .first()
      .should('have.class', 'completed');
  });
});