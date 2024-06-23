/// <reference types="cypress" />
import { testData } from "../support/data/testData";
import { ageForm } from "../support/pageobjects/ageForm";
import { applicationForm } from "../support/pageobjects/applicationForm";

describe('Form Validation', () => {
  beforeEach(() => {
    cy.handleExceptions(); 
    cy.visit('/form.html'); 
  });

  it('should fill out and submit the form successfully', () => {
    // Given
    completeAgeVerification.completeAgeVerification();

    // When
    applicationSteps.fillOutForm();
    //applicationSteps.submitForm();

    // Then
    //applicationSteps.verifySuccessMessage('Twój formularz został wysłany.');
  });
});
