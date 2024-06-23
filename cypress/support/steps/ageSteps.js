import { ageForm } from "../pageobjects/ageForm";
import { testData } from "../data/testData";

export const ageVerificationSteps = {
  completeAgeVerification: function () {
    ageForm.clickAcceptCookies();
    ageForm.enterBirthDate(testData.birthDate.day, testData.birthDate.month, testData.birthDate.year);
    ageForm.clickAcceptAgeBtn();
  }
};
