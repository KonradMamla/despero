import { applicationFormElements } from '../pageElements/applicationFormElements';
import { testData } from '../data/testData';

export const applicationSteps = {
  clickShowFormPageBtn() {
    cy.get(applicationFormElements.showFormPageBtn).first().click();
  },

  selectAwardHeadphones() {
    cy.get(applicationFormElements.awardHeadphones).click();
  },

  enterCodeNumber(code) {
    cy.get(applicationFormElements.codeNumber).type(code);
  },

  enterPersonalDetails(firstName, lastName, email, phone) {
    cy.get(applicationFormElements.firstNameInput).type(firstName);
    cy.get(applicationFormElements.lastNameInput).type(lastName);
    cy.get(applicationFormElements.emailInput).type(email);
    cy.get(applicationFormElements.phoneInput).type(phone);
  },

  checkAdulthoodStatement() {
    cy.get(applicationFormElements.adulthoodStatement).check({ force: true });
  },

  checkPaymentStatement() {
    cy.get(applicationFormElements.paymentStatement).check({ force: true });
  },

  submitForm() {
    cy.get(applicationFormElements.submitBtn).click();
  },

  verifySuccessMessage(message) {
    cy.get(applicationFormElements.successMessage).should('contain', message);
  },

  fillOutForm() {
    this.clickShowFormPageBtn();
    this.selectAwardHeadphones();
    this.enterCodeNumber(testData.capNumber);
    this.enterPersonalDetails(
      testData.personalDetails.firstName,
      testData.personalDetails.lastName,
      testData.personalDetails.email,
      testData.personalDetails.phone
    );
    this.checkAdulthoodStatement();
    this.checkPaymentStatement();
  },
};
