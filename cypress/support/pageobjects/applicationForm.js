const acceptCookiesBtn = '#ensBtnYes';
const ageDay = '.age-day';
const ageMonth = '.age-month';
const ageYear = '.age-year';
const acceptAgeBtn = 'button[type="submit"].btn-accept-age';
const showFormPageBtn = 'a.btn.btn-primary[data-show-form-page]';
const awardHeadphones = '#award-headphones';
const codeNumber = '#code-number';
const firstNameInput = '#name';
const lastNameInput = '#surname';
const emailInput = '#email';
const phoneInput = '#phone';
const adulthoodStatement = '#adulthood_statement';
const paymentStatement = '#payment_statement';
const submitBtn = 'button[type="submit"]';
const successMessage = 'h1.banner-title';

export const applicationForm = {
  clickAcceptCookies: function () {
    cy.get(acceptCookiesBtn).click();
  },

  enterBirthDate: function (day, month, year) {
    cy.get(ageDay).click().type(day);
    cy.get(ageMonth).click().type(month);
    cy.get(ageYear).click().type(year);
  },

  clickAcceptAgeBtn: function () {
    cy.get(acceptAgeBtn).click();
  },

  clickShowFormPageBtn: function () {
    cy.get(showFormPageBtn).first().click();
  },

  selectAwardHeadphones: function () {
    cy.get(awardHeadphones).click();
  },

  enterCodeNumber: function (code) {
    cy.get(codeNumber).type(code);
  },

  enterPersonalDetails: function (firstName, lastName, email, phone) {
    cy.get(firstNameInput).type(firstName);
    cy.get(lastNameInput).type(lastName);
    cy.get(emailInput).type(email);
    cy.get(phoneInput).type(phone);
  },

  checkAdulthoodStatement: function () {
    cy.get(adulthoodStatement).check({ force: true });
  },

  checkPaymentStatement: function () {
    cy.get(paymentStatement).check({ force: true });
  },

  clickSubmitBtn: function () {
    cy.get(submitBtn).click();
  },

  verifySuccessMessage: function (message) {
    cy.get(successMessage).should('contain', message);
  }
};