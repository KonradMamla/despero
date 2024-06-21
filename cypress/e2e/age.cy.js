/// <reference types="cypress" />

import { testData } from "../support/data/testData";
import { ageForm } from "../support/pageobjects/ageForm";

describe('Age Verification', () => {  
    beforeEach(() => {
      cy.handleExceptions(); 
      cy.visit('/check-age.html'); 
    });
  
    it('should accept a valid age (18+)', () => {
      ageForm.clickAcceptCookies();
      ageForm.enterBirthDate(testData.birthDate.day, testData.birthDate.month, testData.birthDate.year);
      ageForm.clickAcceptAgeBtn();
      ageForm.verifyRedirectToHomePage();
    });
  
  });
  