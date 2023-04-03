/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Navigation', () => {
    it('should navigate to the about page', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get(":input[name='q']").type('hello Word');
      cy.wait(300);
      cy.get(":input[value='Pesquisa Google']").first().click();
      // cy.origin('https://www.google.com.br', () => {
      //   cy.get(":input[name='q']").type('hello Word');
      //   cy.wait(300);
      //   cy.get(":button[name='btnK']").click();
      // });
    })
  })
  
  // Prevent TypeScript from reading file as legacy script
  export {}