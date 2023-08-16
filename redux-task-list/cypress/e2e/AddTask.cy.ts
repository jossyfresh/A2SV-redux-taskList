describe('Add task', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('displays added task', () => {
    const newTask = 'Buy groceries'
    
    cy.get('input').type(newTask)
    cy.contains('Add').click()
    
    cy.contains(newTask).should('be.visible')
  })
  it('should add a new task to the store', () => {
    const taskText = 'New task';

    cy.visit('/'); // Replace with the URL of your app
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    cy.window().should('have.property', 'store');
    cy.window().then((win) => {
      const tasks = win.store.getState().tasks.tasks;
      const newTask = tasks.find((task: Task) => task.text === taskText);
    });
  });
  
})