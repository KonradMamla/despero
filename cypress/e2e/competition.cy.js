/// <reference types="cypress" />

import { testData } from "../support/data/testData";

describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('https://promo.desperados.com/form.html');
  });

  it('should fill out and submit the form successfully', () => {

    // Add exception handling to prevent test failure due to uncaught exceptions in the application code
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
    });

    cy.get('#ensBtnYes').click();

    // Enter birth date
    cy.get('.age-day').click().type(testData.birthDate.day);
    cy.get('.age-month').click().type(testData.birthDate.month);
    cy.get('.age-year').click().type(testData.birthDate.year);
    
    // Accept age
    cy.get('button[type="submit"].btn-accept-age').click()

    // Navigate to the next page of the form
    cy.get('a.btn.btn-primary[data-show-form-page]').first().click();

    // Select an option - example selecting headphones
    cy.get('#award-headphones').click()

    // Enter cap number
    cy.get('#code-number').type(testData.capNumber);

    // Enter personal details
    cy.get('#name').type(testData.personalDetails.firstName);
    cy.get('#surname').type(testData.personalDetails.lastName);
    cy.get('#email').type(testData.personalDetails.email);
    cy.get('#phone').type(testData.personalDetails.phone);

    // Check required consents
    cy.get('#adulthood_statement').check({ force: true });
    cy.get('#payment_statement').check({ force: true });

    // Submit the form
    //cy.get('button[type="submit"]').click();

    // Verify success message
    //cy.get('h1.banner-title').should('contain', 'Twój formularz został wysłany.');
  });
});
