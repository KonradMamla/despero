import { applicationForm } from "../pageobjects/applicationForm";
import { testData } from "../data/testData";

export const applicationSteps = {
  fillOutForm: function () {
    applicationForm.clickShowFormPageBtn();
    applicationForm.selectAwardHeadphones();
    applicationForm.enterCodeNumber(testData.capNumber);
    applicationForm.enterPersonalDetails(
      testData.personalDetails.firstName,
      testData.personalDetails.lastName,
      testData.personalDetails.email,
      testData.personalDetails.phone
    );
    applicationForm.checkAdulthoodStatement();
    applicationForm.checkPaymentStatement();
  },

  submitForm: function () {
    applicationForm.clickSubmitBtn();
  },

  verifySuccessMessage: function (message) {
    applicationForm.verifySuccessMessage(message);
  }
};
