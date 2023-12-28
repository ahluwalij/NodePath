describe('Homepage Tests', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') // Change the URL to your local/dev URL
      cy.contains('NViz') // Replace with text/content you expect to find on the homepage
    })
  
    // Add more tests as needed
  })
  