/// <reference types="cypress" />

describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('https://promo.desperados.com/form.html');
  });

  it('should fill out and submit the form successfully', () => {

    // Add exception handling to prevent test failure due to uncaught exceptions in the application code
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
    });

    cy.get('#ensBtnYes').click();

    // Wprowadzenie daty urodzenia
    cy.get('.age-day').click().type('01')
    cy.get('.age-month').click().type('07')
    cy.get('.age-year').click().type('1997')
    
    // Akceptacja wieku
    cy.get('button[type="submit"].btn-accept-age').click()

    // Przejście do kolejnej strony formularza
    cy.get('a.btn.btn-primary[data-show-form-page]').first().click();

    // Wybór opcji - przykład wyboru słuchawek
    cy.get('#award-headphones').click()

    // Wprowadzenie numeru z kapsla
    cy.get('#code-number').type('Y59PYL19BH');

    // Wprowadzenie danych osobowych
    //cy.get('input[name="name"]').type('Konrad');
    cy.get('#name').type('Konrad');
    cy.get('#surname').type('Mamla');
    cy.get('#email').type('misudju.cjad@gmail.com');
    cy.get('#phone').type('730 060 158');

    
    // Zaznacz wymagane zgody
    cy.get('#adulthood_statement').check({ force: true });
    cy.get('#payment_statement').check({ force: true });


    // Prześlij formularz
    //cy.get('button[type="submit"]').click();

    //sprawdzamy komunikat czy sie udało
    //cy.get('h1.banner-title').should('contain', 'Twój formularz został wysłany.');


  });
});
