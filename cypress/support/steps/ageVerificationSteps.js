import { ageFormElements } from '../pageElements/ageFormElements';
import { testData } from '../data/testData';

export const ageVerificationSteps = {
  clickAcceptCookies() {
    cy.get(ageFormElements.acceptCookiesBtn).click();
  },

  enterBirthDate(day, month, year) {
    cy.get(ageFormElements.ageDay).click().type(day);
    cy.get(ageFormElements.ageMonth).click().type(month);
    cy.get(ageFormElements.ageYear).click().type(year);
  },

  clickAcceptAgeBtn() {
    cy.get(ageFormElements.acceptAgeBtn).click();
  },

  completeAgeVerification() {
    this.clickAcceptCookies();
    this.enterBirthDate(testData.birthDate.day, testData.birthDate.month, testData.birthDate.year);
    this.clickAcceptAgeBtn();
    cy.url().should('eq', 'https://promo.desperados.com/');
  },
};
