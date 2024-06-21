/// <reference types="cypress" />
import { testData } from "../support/data/testData";
import { applicationForm } from "../support/pageobjects/applicationForm";

describe('Form Validation', () => {
  beforeEach(() => {
    cy.handleExceptions(); 
    cy.visit('/form.html'); 
  });

  it('should fill out and submit the form successfully', () => {
    applicationForm.clickAcceptCookies();
    applicationForm.enterBirthDate(testData.birthDate.day, testData.birthDate.month, testData.birthDate.year);
    applicationForm.clickAcceptAgeBtn();
    applicationForm.clickShowFormPageBtn();
    applicationForm.selectAwardHeadphones();
    applicationForm.enterCodeNumber(testData.capNumber);
    applicationForm.enterPersonalDetails(testData.personalDetails.firstName, testData.personalDetails.lastName, testData.personalDetails.email, testData.personalDetails.phone);
    applicationForm.checkAdulthoodStatement();
    applicationForm.checkPaymentStatement();
    //applicationForm.clickSubmitBtn();
    //applicationForm.verifySuccessMessage('Twój formularz został wysłany.');
  });
});
