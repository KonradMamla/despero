// cypress/integration/form_spec.ts

describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('https://promo.desperados.com/form.html');
  });

  it('should fill out and submit the form successfully', () => {

    cy.get('#ensBtnYes').click();

    //wpisz date urodzenia 
    cy.get('.age-day').click().type(1)

    cy.get('.age-month').click().type(7)


    cy.get('.age-year').click().type(1997)

    cy.get('button[type="submit"].btn-accept-age').click()

    //next page
    cy.get('a.btn.btn-primary[data-show-form-page]').first().click();




    // Wypełnij pola formularza (dostosuj selektory do aktualnych wartości na stronie)
    cy.get('#award-headphones').click()
    
     cy.get('input[name="name"]').type('Konrad');
     cy.get('surname').type('Mamla');
     cy.get('email').type('misudju.cjad+despero@gmail.com');

    
    // // Zaznacz wymagane zgody
     cy.get('#select-box-label').first().check();
     //cy.get('#select-box-label').second().check();


    // // Prześlij formularz
    // cy.get('form').submit();

    // // Sprawdź, czy formularz został poprawnie przesłany
    // // Zmodyfikuj poniższy selektor i asercję, aby pasowały do rzeczywistej odpowiedzi strony po przesłaniu formularza
    // cy.get('.success-message').should('contain', 'Dziękujemy za zgłoszenie!');
  });

  // it('should show validation errors for required fields', () => {
  //   // Prześlij pusty formularz
  //   cy.get('form').submit();

  //   // Sprawdź, czy pojawiają się komunikaty o błędach dla wymaganych pól
  //   // Zmodyfikuj poniższe selektory i asercje, aby pasowały do rzeczywistych komunikatów błędów na stronie
  //   cy.get('input[name="firstName"]:invalid').should('have.length', 1);
  //   cy.get('input[name="lastName"]:invalid').should('have.length', 1);
  //   cy.get('input[name="email"]:invalid').should('have.length', 1);
  //   cy.get('input[name="phone"]:invalid').should('have.length', 1);
  //   cy.get('input[name="dateOfBirth"]:invalid').should('have.length', 1);
  //   cy.get('input[name="terms"]:invalid').should('have.length', 1);
  // });
});
