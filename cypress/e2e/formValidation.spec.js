/// <reference types="cypress" />

import { ageVerificationSteps } from '../support/steps/ageVerificationSteps';
import { applicationSteps } from '../support/steps/applicationSteps';

describe('Form Validation', () => {
  beforeEach(() => {
    cy.handleExceptions(); 
    cy.visit('/form.html'); 
  });

  it('should fill out and submit the form successfully', () => {
    // Given
    ageVerificationSteps.completeAgeVerification();

    // When
    applicationSteps.fillOutForm();
    applicationSteps.submitForm();

    // Then
    applicationSteps.verifySuccessMessage('Twój formularz został wysłany.');
  });
});
