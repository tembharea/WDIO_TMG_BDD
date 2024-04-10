import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import { CucumberJsJsonReporter } from "wdio-cucumberjs-json-reporter";

const pages = {
  login: LoginPage,
};

const generateRandomString = function (length = 6) {
  return Math.random().toString(20).substr(2, length);
};

const randstr = generateRandomString();
const rndstrng = generateRandomString(10);
const rndstrng2 = generateRandomString(6);
const rndstrng3 = generateRandomString(6);

const MyNewsletterPage = await $('//button[text()="My Newsletters"]');
const NewsletterPage = await $('//a[text()="Newsletters"]');
const manageyourDetailsBtn = await $('//button[text()="Manage your details"]');
const CustFirstNameZ = "Akshat";
const CustLasttNameZ = "Tembhare";
const CustFirstLastNameZ = CustFirstNameZ.concat(" ", CustLasttNameZ);
const pianoID = "akshat.tembhare@telegraph.co.uk";
const pianoPsswd = "Ayt@akshat123";
const CustPasswrd = "Ayt@akshat123";
const NewCustEmail = rndstrng + "@telegraph.co.uk";
const NewCustEmailthree = rndstrng2 + "@telegraph.co.uk";
const NewCustEmailtwo = rndstrng3 + "@telegraph.co.uk";
const DigitalCustEmail = "Digit67@telegraph.co.uk";
const paypalID = "tarun.sharma+20180523personal@telegraph.co.uk";
const paypalpasswrd = "tmgsw1w0dt";
var RecordSubID;

// Then("Validate Registrant Account details do not exist in Zoura", async () => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   await browser.pause(1000);
//   await browser.url(
//     "https://apisandbox.zuora.com/platform/apps/com_zuora/account?~(clearFilter~true)"
//   );
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );

//   const ZuoraCustNamebutton = await $(
//     '//div[@aria-label="Customer Name"]//child::button'
//   );
//   await ZuoraCustNamebutton.waitForDisplayed({ timeout: 50000 });
//   await ZuoraCustNamebutton.click();
//   await browser.pause(300);
//   const ZuoraCustNameSerchBox = await $(
//     '//div[@aria-label="Customer Name"]//following::input[3]'
//   );
//   await ZuoraCustNameSerchBox.waitForDisplayed({ timeout: 50000 });
//   await ZuoraCustNameSerchBox.setValue(NewCustEmail);
//   await browser.keys("Enter");
//   const NoRecordFoundTxt = await $('//span[text()="No Records Found"]');
//   await NoRecordFoundTxt.waitForDisplayed({ timeout: 50000 });
//   await NoRecordFoundTxt.isExisting();
// });

// Then(
//   "Validate The From The Editor Newsletters is added by default in customer app",
//   async () => {
//     //await browser.pause(100);
//     await browser.pause(100);
//     browser.waitUntil(
//       () => browser.execute(() => document.readyState === "complete"),
//       {
//         timeout: 60 * 1000, // 60 seconds
//         timeoutMsg: "Message on failure",
//       }
//     );
//     // const NewsletterTab = await $('//a[text()="Newsletters"]');
//     // await NewsletterTab.waitForDisplayed({ timeout: 50000 });
//     // await NewsletterTab.click();
//     // const FromEditrNewltr = await $(
//     //   '(//p[text()="The From The Editor Newsletter"])[1]'
//     // );
//     // await FromEditrNewltr.waitForDisplayed({ timeout: 50000 });
//     // await FromEditrNewltr.isExisting();
//   }
// );


Then("I fill in new email for Subscriptionfour Acquisition", async () => {
  await browser.pause(500);
  await browser.refresh();

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  //await EmailInput.doubleClick();
  await EmailInput.click();
  //await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(NewCustEmailfour);
  console.log("CustEmail" + NewCustEmailfour);
  await browser.pause(100);
  //console.log("Teststststs");
});

Then("I fill in new email for Subscriptiontwo Acquisition", async () => {
  await browser.pause(500);
  await browser.refresh();

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  //await EmailInput.doubleClick();
  await EmailInput.click();
  //await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(NewCustEmailtwo);
  console.log("CustEmail" + NewCustEmailtwo);
  await browser.pause(100);
  //console.log("Teststststs");
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + NewCustEmailtwo,
    "text/plain"
  );
});

Then("I fill in new email for Subscriptionthree Acquisition", async () => {
  await browser.pause(500);
  await browser.refresh();

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  //await EmailInput.doubleClick();
  await EmailInput.click();
  //await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(NewCustEmailthree);
  console.log("CustEmail" + NewCustEmailthree);
  await browser.pause(100);
  //console.log("Teststststs");
});

Then("I fill in new email for Subscription Acquisition", async () => {
  await browser.pause(500);
  await browser.refresh();

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  //await EmailInput.doubleClick();
  await EmailInput.click();
  //await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(NewCustEmail);
  console.log("CustEmail" + NewCustEmail);
  await browser.pause(100);
  //console.log("Teststststs");
});

Then("I fill in existing email address", async () => {
  await browser.pause(500);
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(NewCustEmail);
  console.log("CustEmail" + NewCustEmail);
});

// Then("I fill in existing digital emaill", async () => {
//   await browser.pause(500);
//   await browser.refresh();
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   await browser.pause(500);
//   const EmailInput = await $('//input[@id="email"]');
//   await EmailInput.waitForDisplayed();
//   await EmailInput.doubleClick();
//   await EmailInput.click();
//   await EmailInput.click();
//   await browser.pause(100);
//   await EmailInput.setValue(DigitalCustEmail);
// });

Then("Close All Recently Opened Tab in Salesforce", async () => {
  await browser.pause(100);
  const RequiredText = " - Search";
  const TabOne = NewCustEmail.concat(RequiredText);
  const TabOneCloseButton = await $(
    "//span[text()='" +
      TabOne +
      "']//following::button[@class='slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-container']"
  );
  await TabOneCloseButton.waitForDisplayed();
  await TabOneCloseButton.click();
  await browser.pause(1000);

  const RequiredTextTwo = " | Account";
  const TabTwo = CustFirstLastNameZ.concat(RequiredTextTwo);
  const TabTwoClose = await $(
    "//span[text()='" +
      TabTwo +
      "']//following::button[@class='slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-container']"
  );
  //const TabOneSelector = await $("//span[text()='" + TabOne + "']");
  await TabTwoClose.waitForDisplayed();
  await TabTwoClose.click();
  await browser.pause(2000);
});

Then("Enter the email id in the search box in Salesforce", async () => {
  await browser.pause(2000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(900);
  const SearchBarClick = await $(
    '//button[contains(@class,"slds-button slds-button_neutral search")]'
  );
  await SearchBarClick.waitForDisplayed({ timeout: 20000 });
  // await SearchBarClick.click();
  await browser.pause(1500);
  await SearchBarClick.doubleClick();
  await browser.pause(700);
  await browser.keys("Enter");
  await browser.pause(1000);

  const serchBartxt = await $('//h2[text()="Do more with Search!"]');
  //await serchBartxt.waitForDisplayed({ timeout: 20000 });
  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );

  if (serchBartxt.isExisting == true) {
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(NewCustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  } else {
    await browser.refresh();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await SearchBarClick.waitForDisplayed({ timeout: 20000 });
    await browser.pause(1500);
    await SearchBarClick.doubleClick();
    await browser.pause(700);
    await browser.keys("Enter");
    await browser.pause(1000);
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(NewCustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});
// Then("Validate the name in Salesforce", async () => {
//   await browser.pause(500);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );

//   //await browser.pause(5000);
//   const RequiredText = " - Search";
//   const TabOne = NewCustEmail.concat(RequiredText);
//   const TabOneSelector = await $(
//     "//div[@class='slds-global-header__logo']//following::span[text()='" +
//       TabOne +
//       "'][2]"
//   );
//   //const TabOneSelector = await $("//span[text()='" + TabOne + "']");
//   await TabOneSelector.waitForDisplayed();
//   await TabOneSelector.click();
//   await browser.pause(500);
//   // const ForXpathFN = "firstName";
//   // const TrialXpathFirstN = await $("//input[@id='" + ForXpathFN + "']");

//   const TextXpath = CustFirstNameZ.concat(" ", CustLasttNameZ);
//   const AcctNameVerifyDynamic = await $(
//     "//a[@title='" + TextXpath + "']//ancestor::h2"
//   );
//   // const AccNameVerify = await $('//a[@title="Akshat Tembhare"]//ancestor::h2');
//   // await AccNameVerify.waitForDisplayed({ timeout: 50000 });
//   // await AccNameVerify.isExisting();

//   await AcctNameVerifyDynamic.waitForDisplayed({ timeout: 50000 });
//   await AcctNameVerifyDynamic.isExisting();
// });

// Then("Enter the Digital Sub email id in the search box", async () => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   const SearchBarClick = await $(
//     '//button[contains(@class,"slds-button slds-button_neutral search")]'
//   );
//   await SearchBarClick.waitForDisplayed({ timeout: 50000 });
//   await SearchBarClick.click();
//   await browser.pause(3000);

//   const SearchBarInput = await $(
//     '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
//   );
//   await SearchBarInput.waitForDisplayed({ timeout: 50000 });
//   await SearchBarInput.setValue(DigitalCustEmail);
//   await browser.keys("Enter");
// });

// Then(
//   "Verify the Digital Status is {string} and Account Record Type is {string}",
//   async (s, s2) => {
//     await browser.pause(100);
//     browser.waitUntil(
//       () => browser.execute(() => document.readyState === "complete"),
//       {
//         timeout: 60 * 1000, // 60 seconds
//         timeoutMsg: "Message on failure",
//       }
//     );
//     //await browser.pause(1000);
//     const RegisteredValidate = await $(
//       '//div[@class="slds-global-header__logo"]//following::lightning-formatted-text[text()="Registered"][2]'
//     );
//     await RegisteredValidate.waitForDisplayed({ timeout: 50000 });
//     await RegisteredValidate.isExisting();
//     const RegistrantValidate = await $(
//       '//div[@class="slds-global-header__logo"]//following::*[text()="Registrant"][3]'
//     );
//     await RegistrantValidate.waitForDisplayed({ timeout: 50000 });
//     await RegistrantValidate.isExisting();
//   }
// );

// Then("Validate account channel is {string}", async (s) => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   const PremiumValidation = await $(
//     '//lightning-formatted-text[text()="Premium"]'
//   );
//   await PremiumValidation.waitForDisplayed({ timeout: 50000 });
//   await PremiumValidation.isExisting();
// });

// Then("Verify the Print Status is {string}", async (s) => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 second
//       timeoutMsg: "Message on failure",
//     }
//   );
//   const PtintStatusInactive = await $(
//     '//span[contains(@class,"test-id__field-value")]//lightning-formatted-text[text()="Inactive"]'
//   );
//   await PtintStatusInactive.waitForDisplayed({ timeout: 50000 });
//   await PtintStatusInactive.isExisting();
// });

// Then("Validate if user has any active subscription", async () => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds      timeoutMsg: "Message on failure",
//     }
//   );
//   const SubscriptionTab = await $('//a[text()="Subscriptions"]');
//   await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
//   await SubscriptionTab.click();
//   const SubsValidation = await $(
//     '(//span[@class="slds-truncate slds-m-right--xx-small"]//following::span[@class="lds-shrink-none slds-m-right--xx-small"])[2]'
//   );
//   await SubsValidation.waitForDisplayed({ timeout: 50000 });
//   await SubsValidation.isExisting();

//   // const SubID = await $(
//   //   '//span[@title="Z-Subscriptions"]//following::span[contains(text(),"A-")]'
//   // );

//   // RecordSubID = await SubID.getText();
//   // console.log(await SubID.getText());
//   // console.log(RecordSubID);

//   // const SearchBarClick = await $(
//   //   '//button[contains(@class,"slds-button slds-button_neutral search")]'
//   // );
//   // await SearchBarClick.waitForDisplayed({ timeout: 50000 });
//   // await SearchBarClick.click();
//   // await SearchBarClick.doubleClick();
//   // await browser.pause(300);
//   // await browser.keys("Enter");
//   // const SearchBarInput = await $(
//   //   '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
//   // );
//   // await SearchBarInput.waitForDisplayed({ timeout: 50000 });
//   // await SearchBarInput.click();
//   // await SearchBarInput.setValue(RecordSubID);
//   // await browser.pause(10000);
//   // await browser.keys("Enter");
//   await browser.pause(5000);
// });

// Then(
//   "Verify if registrant signed up via email then validate no Social Account is linked",
//   async () => {
//     await browser.pause(100);
//     browser.waitUntil(
//       () => browser.execute(() => document.readyState === "complete"),
//       {
//         timeout: 60 * 1000, // 60 seconds
//         timeoutMsg: "Message on failure",
//       }
//     );
//     const SystemTab = await $('//a[text()="System"]');
//     await SystemTab.waitForDisplayed({ timeout: 60000 });
//     await SystemTab.click();
//     await browser.scroll(0, 200);
//     // const NoSocialAccLinkedTxt = await $(
//     //   '//lightning-formatted-text[contains(text(),",.No linked Social Accounts were found")]'
//     // );
//     // await NoSocialAccLinkedTxt.waitForDisplayed({ timeout: 60000 });
//     // await NoSocialAccLinkedTxt.isExisting();
//   }
// );

Then("Verify {string} is added by default", async (s) => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const NewsletterTab = await $('//a[text()="Newsletters"]');
  await NewsletterTab.waitForDisplayed({ timeout: 50000 });
  await NewsletterTab.click();
  const FromEditrNewltr = await $(
    '(//p[text()="The From The Editor Newsletter"])[1]'
  );
  await FromEditrNewltr.waitForDisplayed({ timeout: 50000 });
  await FromEditrNewltr.isExisting();
});

Then("Zoura Validation", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://apisandbox.zuora.com/platform/apps/com_zuora/account?~(clearFilter~true)"
  );
  const ZuoraCustRecordSerchBox = await $(
    '//input[@placeholder="Starts with text"]'
  );
  await ZuoraCustRecordSerchBox.waitForDisplayed({ timeout: 50000 });
  await ZuoraCustRecordSerchBox.setValue(NewCustEmail);
  await browser.keys("Enter");
  const NoRecordFoundTxt = await $('//span[text()="No Records Found"]');
  await NoRecordFoundTxt.waitForDisplayed({ timeout: 50000 });
  await NoRecordFoundTxt.isExisting();
});

Then("Select the View your subscriptions CTA in MyAccount", async () => {
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
  const ViewSubofferButton = await $(
    '//a[@href="https://secure-staging-ams64.telegraph.co.uk/customer/subscribe/?icid=myaccount"]'
  );
  await ViewSubofferButton.waitForDisplayed({ timeout: 50000 });
  await ViewSubofferButton.doubleClick();
  await browser.pause(20000);
});

Then("Verify navigate to the subshop", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const subshopPage = await $('//p[text()="Clarity at your convenience"]');
  await subshopPage.waitForDisplayed({ timeout: 50000 });
  await subshopPage.isExisting();
});

Then("User can view all subscriptions", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const DigitalSub = await $('//header[text()="Digital"]');
  await DigitalSub.waitForDisplayed({ timeout: 50000 });
  await DigitalSub.isExisting();
  const DigitalPlusSub = await $('//header[text()="Digital Plus"]');
  await DigitalPlusSub.waitForDisplayed({ timeout: 50000 });
  await DigitalPlusSub.isExisting();
  const WineCellarSub = await $('//p[text()="Wine Cellar "]');
  await WineCellarSub.waitForDisplayed({ timeout: 50000 });
  await WineCellarSub.isExisting();
  const PuzzlesSub = await $('//p[text()="Puzzles"]');
  await PuzzlesSub.waitForDisplayed({ timeout: 50000 });
  await PuzzlesSub.isExisting();
  const StudentSub = await $('//p[text()="Student"]');
  await StudentSub.waitForDisplayed({ timeout: 50000 });
  await StudentSub.isExisting();
  const GiftSub = await $('//p[text()="Gift"]');
  await GiftSub.waitForDisplayed({ timeout: 50000 });
  await GiftSub.isExisting();
});

When("User clicks on {string} tab", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then(
  "Validate Entitlements are added in Salesforce for active subscription",
  async () => {
    await browser.pause(500);
    const SFEntitlementsOP = await $('//a[@id="EntitlementsTab__item"]');
    await SFEntitlementsOP.waitForDisplayed({ timeout: 20000 });
    await SFEntitlementsOP.click();
    await browser.pause(5000);
    const SFEntitlements = await $(
      '//div[@class="slds-dueling-list__column slds-dueling-list__column_responsive"]/following::span[text()="Current"]//following::li[@class="slds-listbox__item"]'
    );

    await SFEntitlements.waitForDisplayed({ timeout: 500 });
    await SFEntitlements.isExisting();
  }
);

Then("Enter existing subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $(
    '//div[contains(text(),"Akshat")]'
  );

  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(NewCustEmailtwo);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  
});



Then("Input American Express Payment details", async () => {
  //var parentWindow = browser.getWindowHandle();
  //console.log(parentWindow);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  const checkoutpageIframe = await $('//iframe[@id="z_hppm_iframe"]');
  await browser.pause(1000);
  await browser.switchToFrame(checkoutpageIframe);

  const cardholdername = await $('//input[@id="input-creditCardHolderName"]');
  await cardholdername.waitForDisplayed();
  await cardholdername.doubleClick();
  await cardholdername.setValue("Test");
  await browser.scroll(0, 200);
  const cardholdernum = await $('//input[@id="input-creditCardNumber"]');
  await cardholdernum.waitForDisplayed();
  await cardholdernum.doubleClick();
  await cardholdernum.setValue("3499 561538 91398");
  await browser.scroll(0, 200);

  const cardExmonth = await $(
    '//select[@id="input-creditCardExpirationMonth"]'
  );
  await cardExmonth.waitForDisplayed();
  await cardExmonth.selectByAttribute("value", "12");

  const cardExyear = await $('//select[@id="input-creditCardExpirationYear"]');
  await cardExyear.waitForDisplayed();
  await cardExyear.selectByAttribute("value", "2025");

  const cardcvc = await $('//input[@id="input-cardSecurityCode"]');
  await cardcvc.waitForDisplayed();
  await cardcvc.doubleClick();
  await cardcvc.setValue("1111");

  await browser.switchToFrame(null);

  const CardSubmitBtn = await $('//button[@id="express-card-cta"]');
  await CardSubmitBtn.waitForDisplayed({ timeout: 50000 });
  await CardSubmitBtn.click();

  await browser.pause(15000);

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/account/"
  );

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]
});

When('Go to Zoura Subscription Page for DigitalPlus', async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
})

Then("Enter the email id in the search box in Salesforce for DigitalMonthly in ete2", async () => {
  await browser.pause(2000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(900);
  const SearchBarClick = await $(
    '//button[contains(@class,"slds-button slds-button_neutral search")]'
  );
  await SearchBarClick.waitForDisplayed({ timeout: 20000 });
  // await SearchBarClick.click();
  await browser.pause(1500);
  await SearchBarClick.doubleClick();
  await browser.pause(700);
  await browser.keys("Enter");
  await browser.pause(1000);

  const serchBartxt = await $('//h2[text()="Do more with Search!"]');
  //await serchBartxt.waitForDisplayed({ timeout: 20000 });
  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );

  if (serchBartxt.isExisting == true) {
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(NewCustEmailtwo);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  } else {
    await browser.refresh();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await SearchBarClick.waitForDisplayed({ timeout: 20000 });
    await browser.pause(1500);
    await SearchBarClick.doubleClick();
    await browser.pause(700);
    await browser.keys("Enter");
    await browser.pause(1000);
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(NewCustEmailtwo);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});
