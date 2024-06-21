const acceptCookiesBtn = '#ensBtnYes';
const ageDay = '.age-day';
const ageMonth = '.age-month';
const ageYear = '.age-year';
const acceptAgeBtn = 'button[type="submit"].btn-accept-age';

export const ageForm = {
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

      verifyRedirectToHomePage: function () {
        cy.url().should('eq', 'https://promo.desperados.com/');
      },

      completeAgeVerification: function(day, month, year) {
        this.clickAcceptCookies();
        this.enterBirthDate(day, month, year);
        this.clickAcceptAgeBtn();
        this.verifyRedirectToHomePage();
      }
}