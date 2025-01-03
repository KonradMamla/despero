/// <reference types="cypress" />

import { ageVerificationSteps } from '../support/steps/ageVerificationSteps';

describe("Form Validation", () => {
  beforeEach(() => {
    cy.handleExceptions();
    cy.visit("/form.html");
  });

  it("should fill out and submit the form successfully", () => {
    // Given
    ageVerificationSteps
      .completeAgeVerification()

      // When
      .fillOutForm()
      .submitForm()

      // Then
      .verifySuccessMessage("Twój formularz został wysłany.");
  });
});