describe('Neural Network Visualization', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the main title NodePath', () => {
    cy.get('header').contains('NodePath');
  });

  it('allows a user to upload training data', () => {
    // Mocking file upload
    cy.get('input[type="file"]').first().attachFile('datasets/3x1_Bounds/training.json');
    cy.contains('No file chosen').should('not.exist');
  });

  it('allows a user to configure the neural network layers', () => {
    // Add a layer
    cy.contains('Layers').parent().find('button').contains('+').click();
    // Remove a layer
    cy.contains('Layers').parent().find('button').contains('-').click();
    // Change layer node count
    cy.contains('Layers').parent().find('input').first().clear().type('3');
  });

  it('allows a user to set learning rate and training speed', () => {
    // Assuming you have sliders for learning rate and training speed
    cy.get('input[type="range"]').first().invoke('val', 0.05).trigger('change');
    cy.get('input[type="range"]').last().invoke('val', 50000).trigger('change');
  });

  it('should start and stop training', () => {
    // Start training
    cy.contains('TRAIN').click();
    // You'll need to check for changes that occur when training starts
    // For example, check if 'Epochs' starts counting up
  // To check if the counter has incremented after a certain time, use cy.wait() with a reasonable delay
  cy.wait(1000); // wait 1 second for the counter to increment
  cy.get('[data-testid="epochs-counter"]').should('not.contain', '0'); // assuming 'epochs-counter' is a test ID for the element showing epochs
    // Stop training
    cy.contains('STOP').click();
    // You might want to check if the 'Epochs' counter stops incrementing
  });

  it('should predict and download outputs', () => {
    // Assuming prediction and download are buttons
    cy.contains('PREDICT').click();
    // Check for the prediction success message
    cy.contains('Success. Download outputs below.');
    // Download outputs
    cy.contains('DOWNLOAD OUTPUTS').click();
    // You'll need to check if the file download is initiated
  });

  // Add more tests to cover all features and edge cases
});

