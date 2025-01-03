import { applicationFormElements } from "../pages/ApplicationFormElements";
import { testData } from "../data/testData";

export const applicationSteps = {
  clickShowFormPageBtn() {
    cy.get(applicationFormElements.showFormPageBtn).first().click();
    return this;
  },

  selectAwardHeadphones() {
    cy.get(applicationFormElements.awardHeadphones).click();
    return this;
  },

  enterCodeNumber(code) {
    cy.get(applicationFormElements.codeNumber).type(code);
    return this;
  },

  enterPersonalDetails(firstName, lastName, email, phone) {
    cy.get(applicationFormElements.firstNameInput).type(firstName);
    cy.get(applicationFormElements.lastNameInput).type(lastName);
    cy.get(applicationFormElements.emailInput).type(email);
    cy.get(applicationFormElements.phoneInput).type(phone);
    return this;
  },

  checkAdulthoodStatement() {
    cy.get(applicationFormElements.adulthoodStatement).check({ force: true });
    return this;
  },

  checkPaymentStatement() {
    cy.get(applicationFormElements.paymentStatement).check({ force: true });
    return this;
  },

  submitForm() {
    cy.get(applicationFormElements.submitBtn).click();
    return this;
  },

  verifySuccessMessage(message) {
    cy.get(applicationFormElements.successMessage).should("contain", message);
    return this;
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
    return this;
  },
};