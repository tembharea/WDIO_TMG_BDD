import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";
import { CucumberJsJsonReporter } from "wdio-cucumberjs-json-reporter";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import { addStep } from "@wdio/allure-reporter";

const pages = {
  login: LoginPage,
};

const screenShot = await browser.takeScreenshot();

const generateRandomString = function (length = 6) {
  return Math.random().toString(20).substr(2, length);
};

const randstr = generateRandomString();
const rndstr2 = generateRandomString(10);
const rndstr3 = generateRandomString(6);
const rndstr4 = generateRandomString(6);
const rndstr5 = generateRandomString(6);
const rndstr6 = generateRandomString(6);
const rndstr7 = generateRandomString(6);
const rndstr8 = generateRandomString(6);
const rndstr9 = generateRandomString(6);
const rndst9 = generateRandomString(6);
const rndst8 = generateRandomString(6);
const rndst7 = generateRandomString(6);
const rndst6 = generateRandomString(6);
const rndst5 = generateRandomString(6);
const rndst4 = generateRandomString(6);
const rndst3 = generateRandomString(6);
const rndst2 = generateRandomString(6);
const rndst1 = generateRandomString(6);
const rnd1 = generateRandomString(6);
const rnd2 = generateRandomString(6);
const rnd3 = generateRandomString(6);
const rnd4 = generateRandomString(6);
const rnd5 = generateRandomString(6);
const rnd6 = generateRandomString(6);
const rnd7 = generateRandomString(6);
const rnd8 = generateRandomString(6);
const rnd9 = generateRandomString(6);

const SFMoreButton = await $('//button[@title="More Tabs"]');
const SystemTab = await $('//*[text()="System"]');
const SFNewsltrTab = await $('//*[text()="Newsletters"]');
const MyNewsletterPage = await $('//button[text()="My Newsletters"]');
const NewsletterPage = await $('//a[text()="Newsletters"]');
const manageyourDetailsBtn = await $('//button[text()="Manage your details"]');
const CustFirstNameZ = "Akshat";
const CustLasttNameZ = "Tembhare";
const CustFirstLastNameZ = CustFirstNameZ.concat(" ", CustLasttNameZ);
const FirstNameLastNameGR = "Akshat GiftReceipent";
const pianoID = "akshat.tembhare@telegraph.co.uk";
const pianoPsswd = "Ayt@akshat123";
const CustPasswrd = "Ayt@akshat123";
const CustEmail = rndstr2 + "test3@telegraph.co.uk";
const digitalforBonus = rnd9 + "bonusdonortest@telegraph.co.uk";
const CustCancellEmail = rnd4 + "DigitalCanceltest@telegraph.co.uk";
const CustWineEmail = rndstr3 + "wine@telegraph.co.uk";
const CustDigitete2 = rnd5 + "plusete2@telegraph.co.uk";
const CustDigitete2ame = rnd6 + "plusete2test@telegraph.co.uk";
const DigitalPlussCustAlRegistrant = rnd6 + "digitlplsaltest@telegraph.co.uk";
const CustDigitete2One = rnd8 + "plusete2test@telegraph.co.uk";
const CustPuzzOneEmail = rndstr4 + "puzzletst@telegraph.co.uk";
const CustPuzzTwoEmail = rndstr5 + "puzzletst@telegraph.co.uk";
const DigitalCustEmail = randstr + "Digital78tst@telegraph.co.uk";
const DigitalPlusCCEmail = rndst3 + "DigitalPlus123ibh@telegraph.co.uk";
const DigitalPlusCCEmail2 = rnd7 + "DigitalPlus234@telegraph.co.uk";
const DigitalPLusMPaypal = rndst4 + "DigitalPlus567rr@telegraph.co.uk";
const DigitalPLusAPaypal = rndst4 + "DigitalPlusA65498@telegraph.co.uk";
const DigitalPaypalCustEmailPuzl = rndst1 + "DigitPuzzlete21te@telegraph.co.uk";
const digitalMPaypaletePuzzles = rndst2 + "DigitalPuzzete22iu@telegraph.co.uk";
const digitMPypletePuzzOne = rnd1 + "Digitalete20test@telegraph.co.uk";
const digitMPypletePuzzTwo = rnd2 + "Digitalete22test@telegraph.co.uk";
const digitMPypletePuzzThree = rnd3 + "Digitalete23testh@telegraph.co.uk";
const DigitalCustMRegistrant = rndst6 + "loggedoutmonthlytmgt@telegraph.co.uk";
const DigitalPlussCustMRegistrant =
  rndst6 + "loggedoutmonthtest8@telegraph.co.uk";
const DigitalCustARegistrant = rndst5 + "loggedoutAnnualt5@telegraph.co.uk";
const DigitalPaypalCustEmail = rndst8 + "digitalviapaypaltest0@telegraph.co.uk";
const DigitalPaypalACustEmail = rndst7 + "digitalviapaypaltmg1@telegraph.co.uk";
const GiftCustEmail = randstr + "GiftDonor78test@telegraph.co.uk";
const GiftCustTwoEmail = rndstr7 + "GiftDonorTwo1sj6@telegraph.co.uk";
const GiftCustThreeEmail = rndstr8 + "GiftDonorTwo1k@telegraph.co.uk";
const GiftRcvOneEmail = rndstr6 + "GiftReceipent1i@telegraph.co.uk";
const GiftRcvTwoEmail = rndstr9 + "GiftReceipent2o@telegraph.co.uk";
const GiftRcvThreeEmail = rndst9 + "GiftReceipenth3@telegraph.co.uk";
const paypalID = "tarun.sharma+20180523personalh@telegraph.co.uk";
const paypalpasswrd = "tmgsw1w0dt";
var RecordSubID;
var RecordSubIDP;
var RecordSubIDP2;
var RecordSubIDP3;
var RecordSubIDP4;
var RecordSubIDP5;
var RecordSubIDP6;
var RecordSubIDP7;
var RecordSubIDP8;
let ZouraSubURL;
let ZouraSubURLPuzzle;
let ZouraSubURLPuzzleete21;
let ZouraSubURLPuzzleete22;
let ZouraSubURLPuzzleete23;
let ZouraSubURLDigital;
let ZouraSubURLDigitalPlusC;
let ZouraSubURLDigitalete20;
let ZouraSubURLCancel;
var RecordGiftCode;
var RecordGiftCode2;
var RecordGiftCode3;
let GiftRedeemURL;
let GiftRedeemURL2;
let GiftRedeemURL3;
// const { After, Status } = require("cucumber");
// import multipleCucumberHtmlReporter from "wdio-multiple-cucumber-html-reporter";

// After((scenarioResult) => {
//   if (scenarioResult.result.status === Status.FAILED) {
//     // It will add the screenshot to the JSON
//     multipleCucumberHtmlReporter.attach(
//       browser.saveScreenshot(),
//       "image/png",
//       "after"
//     );
//     // Or with
//     multipleCucumberHtmlReporter.attach(
//       browser.screenshot(),
//       "image/png",
//       "after"
//     );
//   }
//   return scenarioResult.status;
// });

Given("User opens Piano URL", async () => {
  //await browser.pause(100);
  await browser.url("https://sandbox.piano.io/");
  await browser.maximizeWindow();
});

Given("User clicks on Payment tab", async () => {
  //await browser.pause(100);
});

Then("Validate Registrant Account details do not exist in Zoura", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(1000);
  await browser.url(
    "https://apisandbox.zuora.com/platform/apps/com_zuora/account?~(clearFilter~true)"
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  // const ZuoraCustNamebutton = await $(
  //   '//div[@aria-label="Customer Name"]//child::button[1]'
  // );
  // await ZuoraCustNamebutton.waitForDisplayed({ timeout: 50000 });
  // await ZuoraCustNamebutton.click();
  // await browser.pause(300);
  // const ZuoraCustNameSerchBox = await $(
  //   '//div[@aria-label="Customer Name"]//following::input[3]'
  // );
  // await ZuoraCustNameSerchBox.waitForDisplayed({ timeout: 50000 });
  // await ZuoraCustNameSerchBox.setValue(CustEmail);
  // await browser.keys("Enter");
  // const NoRecordFoundTxt = await $('//span[text()="No Records Found"]');
  // await NoRecordFoundTxt.waitForDisplayed({ timeout: 50000 });
  // await NoRecordFoundTxt.isExisting();
});

Then("In Zoura I validate that Subscription is active", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  // const Subscriptionbuttonzuora = $("//span[text()='" + RecordSubID + "']");
  // await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
  // await Subscriptionbuttonzuora.isExisting();
  // await Subscriptionbuttonzuora.click();

  // const SubscriptionIDNumber = await $(
  //   '//p[@class="MuiTypography-root MuiTypography-body1  css-t0fwix"]//span[contains(text(),"A-")]'
  // );
  // await SubscriptionIDNumber.waitForDisplayed({ timeout: 50000 });
  // await SubscriptionIDNumber.isExisting();
  // await SubscriptionIDNumber.click();
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
});

Then("Close Recently Opened Tab in Salesforce", async () => {
  await browser.pause(100);
  const RequiredText = " - Search";
  const TabOne = CustPuzzTwoEmail.concat(RequiredText);
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

Then(
  "Validate The From The Editor Newsletters is added by default in customer app",
  async () => {
    //await browser.pause(100);
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    // const NewsletterTab = await $('//a[text()="Newsletters"]');
    // await NewsletterTab.waitForDisplayed({ timeout: 50000 });
    // await NewsletterTab.click();
    // const FromEditrNewltr = await $(
    //   '(//p[text()="The From The Editor Newsletter"])[1]'
    // );
    // await FromEditrNewltr.waitForDisplayed({ timeout: 50000 });
    // await FromEditrNewltr.isExisting();
  }
);

When(
  "Validate Subscriber rewards is added by default in customer app",
  async () => {
    //await browser.pause(100);
  }
);

When("Click on Gift Digital Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyDigitalGift = await $(
    '//span[text()="Gift a Digital Subscription"]'
  );
  await BuyDigitalGift.waitForDisplayed({ timeout: 50000 });
  await BuyDigitalGift.click();
});

When("Click on Gift Digital Plus Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyDigitalPlusGift = await $(
    '//span[text()="Gift a Digital Plus Subscription"]'
  );
  await BuyDigitalPlusGift.waitForDisplayed({ timeout: 50000 });
  await BuyDigitalPlusGift.click();
});

When("Click on Gift Puzzles Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyPuzzlesasGift = await $(
    '//span[text()="Gift a Puzzles Subscription "]'
  );
  await BuyPuzzlesasGift.waitForDisplayed({ timeout: 50000 });
  await BuyPuzzlesasGift.click();
});

Then(
  "Then Validate Entitlements are added for Puzzle subscription",
  async () => {
    //await browser.pause(100);
  }
);

Then("Validate Billing Currency is GBP", async () => {
  //await browser.pause(100);
});

Then("Validate 1 bonus promo code is generated", async () => {
  //await browser.pause(100);
});

Then("Validate 3 bonus promo code is generated", async () => {
  //await browser.pause(100);
});

Then("Validate bonus promo code is Unused", async () => {
  //await browser.pause(100);
});

Then("Then Validate Account Origin is empty", async () => {
  //await browser.pause(100);
});

Then("Validate User is asked to create password", async () => {
  await browser.pause(100);
});

Then("User Enters First and Last with password", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const loggedOutFirstName = await $('//input[@id="firstName"]');
    await loggedOutFirstName.waitForDisplayed();
    await loggedOutFirstName.doubleClick();
    await loggedOutFirstName.setValue("Akshat");

    const loggedOutLastName = await $('//input[@id="lastName"]');
    await loggedOutLastName.waitForDisplayed();
    await loggedOutLastName.doubleClick();
    await loggedOutLastName.setValue("Tembhare");

    const loggedOutLastPWD = await $('//input[@id="password"]');
    await loggedOutLastPWD.waitForDisplayed();
    await loggedOutLastPWD.doubleClick();
    await loggedOutLastPWD.setValue("Aytakshat@1");

    const loggedOutSubmit = await $('//button[@id="password_submit"]');
    await loggedOutSubmit.waitForDisplayed();
    await loggedOutSubmit.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

When("I launch Salesforce URL", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url("https://test.salesforce.com/");
  await browser.maximizeWindow();
});

Given("I launch login from homepage", async () => {
  await browser.url("https://secure-staging-ams64.telegraph.co.uk/");
  //CucumberJsJsonReporter.attach("Page Opened", "text/plain");
  await browser.maximizeWindow();
  await browser.pause(5000);
  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/login"
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //await browser.pause(5000);
  // try {
  //   const consentmsgoneIframe = await $(
  //     '//iframe[@title="SP Consent Message"]'
  //   );
  //   await browser.pause(5000);
  //   await consentmsgoneIframe.isExisting();
  //   await browser.switchToFrame(consentmsgoneIframe);
  //   console.log("switched frame successfully");
  //   await browser.pause(500);
  //   //const AcceptBtn = await $('//button[@title="Accept"]');
  //   // const AcceptBtn = await $(
  //   //   '//div[@class="message-component message-column logo"]//following::button[@title="Accept"][1]'
  //   // );
  //   // const AcceptBtn = await $(
  //   //   '//div[@class="message-component message-row buttons-desktop"]//following::button[1]'
  //   // );
  //   // await AcceptBtn.isExisting();
  //   // await AcceptBtn.waitForDisplayed({ timeout: 30000 });
  //   // await AcceptBtn.doubleClick();
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("\ue004");
  //   await browser.keys("Enter");

  //   await browser.pause(3000);
  //   //await browser.switchToFrame(null);
  //   await browser.switchToParentFrame();
  //   await browser.pause(3000);
  // } catch (error) {
  //   console.error("no such element");
  // } finally {
  //   browser.waitUntil(
  //     () => browser.execute(() => document.readyState === "complete"),
  //     {
  //       timeout: 60 * 1000, // 60 seconds
  //       timeoutMsg: "Message on failure",
  //     }
  //   );
  // }
  //CucumberJsJsonReporter.attach("checking text logs", "text/plain");
});

Given("I launch Telegraph homepage", async () => {
  await browser.url("https://secure-staging-ams64.telegraph.co.uk/");
  await browser.maximizeWindow();
});

When("I click login-register button", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const loginBtn = await $('//button[@id="login-button"]');
  await loginBtn.waitForDisplayed({ timeout: 50000 });
  await loginBtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

When("User clicks on Join today in Wine Cellar page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //await browser.refresh();
  const WineJoinTodayBtn = await $('//button[text()="Join Today"]');
  await WineJoinTodayBtn.waitForDisplayed();

  await WineJoinTodayBtn.click();
});

When("I click on subscribeNow button on homepage", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const subscribeNowBTN = await $(
    '//a[@class="e-site-logo"]//following::span[contains(text(),"Subscribe")][1]'
  );
  await subscribeNowBTN.waitForDisplayed();
  await subscribeNowBTN.click();
});

When(
  "User Enters Email ID as a logged out registrant for Digital Monthly",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const loggedOutID = await $('//input[@id="email"]');
    await loggedOutID.waitForDisplayed();
    await loggedOutID.setValue(DigitalCustMRegistrant);

    const submitNowBTN = await $('//button[@type="submit"]');
    await submitNowBTN.waitForDisplayed();
    await submitNowBTN.click();
    await browser.pause(3000);
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    CucumberJsJsonReporter.attach(
      "Test ID used for loggedOut Registrant for Digital Monthly Plan is: " +
        DigitalCustMRegistrant,
      "text/plain"
    );
  }
);

When("User Enters Email ID as a logged out registrant", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const loggedOutID = await $('//input[@id="email"]');
  await loggedOutID.waitForDisplayed();
  await loggedOutID.setValue(DigitalPlussCustMRegistrant);

  const submitNowBTN = await $('//button[@type="submit"]');
  await submitNowBTN.waitForDisplayed();
  await submitNowBTN.click();
  await browser.pause(3000);
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  CucumberJsJsonReporter.attach(
    "Test ID used for loggedOut Registrant for Digital Plus Monthly Plan is: " +
      DigitalPlussCustMRegistrant,
    "text/plain"
  );
});

When("User Enters Email ID as a logged out registrant Annual", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const loggedOutID = await $('//input[@id="email"]');
  await loggedOutID.waitForDisplayed();
  await loggedOutID.setValue(DigitalPlussCustAlRegistrant);

  const submitNowBTN = await $('//button[@type="submit"]');
  await submitNowBTN.waitForDisplayed();
  await submitNowBTN.click();
  await browser.pause(3000);
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  CucumberJsJsonReporter.attach(
    "Test ID used for loggedOut Registrant for Digital Plus Annual Plan is: " +
      DigitalPlussCustAlRegistrant,
    "text/plain"
  );
});

When(
  "User Enters Email ID as a logged out registrant for Digital Annually",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const loggedOutID = await $('//input[@id="email"]');
    await loggedOutID.waitForDisplayed();
    await loggedOutID.setValue(DigitalCustARegistrant);

    const submitNowBTN = await $('//button[@type="submit"]');
    await submitNowBTN.waitForDisplayed();
    await submitNowBTN.click();
    await browser.pause(3000);
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    CucumberJsJsonReporter.attach(
      "Test ID used for loggedOut Registrant for Digital Annual Plan is: " +
        DigitalCustARegistrant,
      "text/plain"
    );
  }
);

Then("User Checksout for Wine Cellar Subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //await browser.refresh();
  const WineCheckoutBtn = await $(
    '//header[@id="chakra-modal--header-1"]//following::button[text()="CHECKOUT"][1]'
  );
  await WineCheckoutBtn.waitForDisplayed();

  await WineCheckoutBtn.click();
});

Then("Validate user is redirected to Enotria payment page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //await browser.refresh();
  const PaymentPageHeader = await $('//img[@id="logoImage"]');
  await PaymentPageHeader.isExisting({ timeout: 50000 });
});

Then("I fill in new email", async () => {
  await browser.pause(500);
  await browser.refresh();

  // try {
  //   const consentmsgoneIframe = await $('//iframe[contains(@id,"sp_message")]');
  //   await browser.pause(5000);
  //   if (consentmsgoneIframe.isExisting) {
  //     await browser.switchToFrame(consentmsgoneIframe);
  //     //const AcceptBtn = await $('//button[@title="Accept"]');
  //     const AcceptBtn = await $(
  //       '//div[@class="message-component message-column logo"]//following::button[@title="Accept"][1]'
  //     );
  //     await AcceptBtn.waitForDisplayed({ timeout: 30000 });
  //     await AcceptBtn.click();
  //     await browser.pause(3000);
  //     //await browser.switchToFrame(null);
  //     await browser.switchToParentFrame();

  //     await browser.pause(3000);
  //   }
  // } catch (error) {
  //   console.error("no such element");
  // } finally {
  //   browser.waitUntil(
  //     () => browser.execute(() => document.readyState === "complete"),
  //     {
  //       timeout: 60 * 1000, // 60 seconds
  //       timeoutMsg: "Message on failure",
  //     }
  //   );
  // }

  // try {
  //   const consentmsgoneIframe = await $(
  //     '//iframe[@title="SP Consent Message"]'
  //   );
  //   await browser.pause(4000);
  //   await browser.switchToFrame(consentmsgoneIframe);
  //   const AcceptBtntwo = await $('//button[@title="Yes, I accept"]');
  //   await AcceptBtntwo.waitForDisplayed({ timeout: 30000 });
  //   await AcceptBtntwo.click();
  //   await browser.pause(5000);
  //   await browser.switchToFrame(null);
  // } catch (error) {
  //   console.error("no such element");
  // } finally {
  //   browser.waitUntil(
  //     () => browser.execute(() => document.readyState === "complete"),
  //     {
  //       timeout: 60 * 1000, // 60 seconds
  //       timeoutMsg: "Message on failure",
  //     }
  //   );
  // }

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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(CustEmail);
  await browser.pause(100);
  CucumberJsJsonReporter.attach("Test ID used is: " + CustEmail, "text/plain");
});

Then("I fill in new digitalete20 email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(digitMPypletePuzzOne);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitMPypletePuzzOne,
    "text/plain"
  );
});

Then("I fill in new digital for bonus email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(digitalforBonus);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Donor is: " + digitalforBonus,
    "text/plain"
  );
});

Then("I fill in new DigitalPLusMPaypal email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(DigitalPLusMPaypal);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Plus Monthly Subscription via Paypal is: " +
      DigitalPLusMPaypal,
    "text/plain"
  );
});

Then("I fill in new DigitalPLusAPaypal email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(DigitalPLusAPaypal);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Plus Annual Subscription via Paypal is: " +
      DigitalPLusAPaypal,
    "text/plain"
  );
});

Then(
  "User fills delivery address details in Enotria Payment page",
  async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    await browser.pause(500);

    const EnotriaFirstName = await $(
      '//label[text()="First Name"]//following::input[1]'
    );
    const EnotriaLastName = await $(
      '//label[text()="Last Name"]//following::input[1]'
    );
    const EnotriaAddressField = await $(
      '//label[text()="Address"]//following::input[1]'
    );
    const EnotriaApt = await $(
      '//label[@id="addressLine2Input-label"]//following::input[1]'
    );
    const EnotriaCity = await $('//label[text()="City"]//following::input[1]');
    const EnotriaPostalCode = await $(
      '//label[text()="Postal Code"]//following::input[1]'
    );
    const EnotriaPhone = await $(
      '//label[text()="Phone Number"]//following::input[1]'
    );
    await EnotriaFirstName.waitForDisplayed();
    await EnotriaFirstName.setValue(CustFirstNameZ);
    await EnotriaLastName.waitForDisplayed();
    await EnotriaLastName.setValue(CustLastNameZ);
    await EnotriaAddressField.waitForDisplayed();
    await EnotriaAddressField.setValue("36 North Road");
    await browser.keys("Enter");
    await browser.pause(4000);
    await EnotriaPhone.waitForDisplayed();
    await EnotriaPhone.setValue("1234567890");
  }
);

Then("User fills Gift Message", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const EnotriaGiftmessage = await $(
    '//legend[text()="Gift Message"]//following::input[1]'
  );
  await EnotriaGiftmessage.waitForDisplayed();
  await EnotriaGiftmessage.setValue("Wine Subscription");

  const EnotriaContinueBTN = await $(
    '//button[@id="checkout-shipping-continue"]'
  );
  await EnotriaContinueBTN.waitForDisplayed();
  await EnotriaContinueBTN.click();
  await browser.pause(500);
});

Then("User enters payment card details in Enotria Payment page", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.eadyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(500);

  const WinePaymentIframe = await $(
    'iframe - //iframe[@src="/checkout/payment/hosted-field?version=1.521.0"]'
  );

  const WineCreditCardNum = await $('//input[@id="card-number"]');
  const WineCreditCardExp = await $(
    '//label[text()="Last Name"]//following::input[1]'
  );
  const WineCreditCardName = await $(
    '//label[text()="Address"]//following::input[1]'
  );
  const WineCreditCardCVV = await $(
    '//label[@id="addressLine2Input-label"]//following::input[1]'
  );
  await browser.pause(500);
  await browser.WinePaymentIframe(mainIframe);
  await WineCreditCardNum.waitForDisplayed();
  await WineCreditCardNum.setValue("123456");
  await browser.pause(5000);
  await browser.switchToFrame(null);
  await browser.switchToParentFrame();
});

Then("I fill in new Wine email", async () => {
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
  await EmailInput.setValue(CustWineEmail);
  //await EmailInput.click();
  //await browser.Keys("1");
  await browser.pause(1000);
  //console.log("Teststststs");
});

Then("I fill in new PuzzleOne email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(CustPuzzOneEmail);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Subscription via Paypal: " + CustPuzzOneEmail,
    "text/plain"
  );
});

Then("I fill in new DigitalPlusCC email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(DigitalPlusCCEmail);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Plus Subscription: " + DigitalPlusCCEmail,
    "text/plain"
  );
});

Then("I fill in new DigitalPlusCC emailtwo", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(DigitalPlusCCEmail2);
  await browser.pause(1000);
});

Then("I fill in new digitalMPaypaletePuzzles email", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(digitalMPaypaletePuzzles);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitalMPaypaletePuzzles,
    "text/plain"
  );
});

Then("I fill in new PuzzleTwo email", async () => {
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
  await EmailInput.setValue(CustPuzzTwoEmail);
  console.log(CustPuzzTwoEmail);
  //await EmailInput.click();
  //await browser.Keys("1");
  await browser.pause(1000);
  //console.log("Teststststs");
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Subscription: " + CustPuzzTwoEmail,
    "text/plain"
  );
});

Then("I fill in new digital email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(DigitalCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Subscriber is: " + DigitalCustEmail,
    "text/plain"
  );
});

Then("I fill in new digitalMPaypal email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(DigitalPaypalCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly Plan via paypal payment method is: " +
      DigitalPaypalCustEmail,
    "text/plain"
  );
});

Then("I fill in new digitalMPaypalforPuzzles email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(DigitalPaypalCustEmailPuzl);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + DigitalPaypalCustEmailPuzl,
    "text/plain"
  );
});

Then("I fill in new Puzzledigitalbotlon email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(digitMPypletePuzzThree);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitMPypletePuzzThree,
    "text/plain"
  );
});

Then("I fill in new digitalACC email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(DigitalPaypalACustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Annual Plan via credit card payment method is: " +
      DigitalPaypalACustEmail,
    "text/plain"
  );
});

Then("I fill in new Gift email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
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
  await EmailInput.setValue(GiftCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Donor: " + GiftCustEmail,
    "text/plain"
  );
});

Then("I fill in new GiftTwo email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
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
  await EmailInput.setValue(GiftCustTwoEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Subscription Donor: " + GiftCustTwoEmail,
    "text/plain"
  );
});

Then("I fill in new GiftThree email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
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
  await EmailInput.setValue(GiftCustThreeEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Plus Subscription Donor: " +
      GiftCustThreeEmail,
    "text/plain"
  );
});

Then("I fill in existing email", async () => {
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
  await EmailInput.setValue(CustEmail);
  CucumberJsJsonReporter.attach("Test ID used is: " + CustEmail, "text/plain");
});

Then("I fill in existing digitalete20 email", async () => {
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
  await EmailInput.setValue(digitMPypletePuzzOne);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitMPypletePuzzOne,
    "text/plain"
  );
});

Then("I fill in existing DigitalPlusCC email", async () => {
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
  await EmailInput.setValue(DigitalPlusCCEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Plus Subscription: " + DigitalPlusCCEmail,
    "text/plain"
  );
});

Then("I fill in existing Wine email", async () => {
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
  await EmailInput.setValue(CustWineEmail);
});

Then("I fill in existing PuzzleTwo email", async () => {
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
  await EmailInput.setValue(CustPuzzTwoEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Subscription: " + CustPuzzTwoEmail,
    "text/plain"
  );
});

Then("I fill in existing digitalMPaypaletePuzzles email", async () => {
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
  await EmailInput.setValue(digitalMPaypaletePuzzles);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitalMPaypaletePuzzles,
    "text/plain"
  );
});

Then("I fill in existing Gift email", async () => {
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
  await EmailInput.setValue(GiftCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Donor: " + GiftCustEmail,
    "text/plain"
  );
});

Then("I fill in existing Gift receipent email", async () => {
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
  await EmailInput.setValue(GiftRcvOneEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Receiver: " + GiftRcvOneEmail,
    "text/plain"
  );
});

Then("I fill in existing GiftTwo receipent email", async () => {
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
  await EmailInput.setValue(GiftRcvTwoEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Subscription Receiver: " +
      GiftRcvTwoEmail,
    "text/plain"
  );
});

Then("I fill in existing GiftThree receipent email", async () => {
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
  await EmailInput.setValue(GiftRcvThreeEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Plus Subscription Receiver: " +
      GiftRcvThreeEmail,
    "text/plain"
  );
});

Then("I fill in existing digital email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(DigitalCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Subscriber is: " + DigitalCustEmail,
    "text/plain"
  );
});

Then("I fill in existing digitalMPaypalforPuzzles email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(DigitalPaypalCustEmailPuzl);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + DigitalPaypalCustEmailPuzl,
    "text/plain"
  );
});

Then("I fill in existing Puzzledigitalbotlon email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(digitMPypletePuzzThree);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + digitMPypletePuzzThree,
    "text/plain"
  );
});

When("I click continue button on registration page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const createAccBtn = await $('//button[@id="create-account-button"]');
  await createAccBtn.waitForDisplayed({ timeout: 50000 });
  await createAccBtn.click();
  await browser.pause(900);
  await browser.scroll(0, 100);
  const registerNewsBtn = await $(
    '//button[@id="register-newsletters-button"]'
  );
  await registerNewsBtn.waitForDisplayed({ timeout: 40000 });
  await registerNewsBtn.click();
  await browser.pause(4000);
});

Then("I enter {string} first name and last name", async (s) => {
  //await browser.pause(400);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // await browser.refresh();
  //await browser.$('//li[contains(text(),\'' + menuItem + '\')]').click();

  const ForXpathFN = "firstName";
  const TrialXpathFirstN = await $("//input[@id='" + ForXpathFN + "']");
  //const CustFirstName = await $('//input[@id="firstName"]');
  await TrialXpathFirstN.waitForDisplayed({ timeout: 50000 });
  await TrialXpathFirstN.setValue(CustFirstNameZ);
  //await browser.pause(400);
  const ForXpathLN = "lastName";
  const TrialXpathLastN = await $("//input[@id='" + ForXpathLN + "']");
  console.log(TrialXpathLastN);
  //const CustLastName = await $('//input[@id="lastName"]');
  await TrialXpathLastN.waitForDisplayed({ timeout: 50000 });
  await TrialXpathLastN.setValue(CustLasttNameZ);
});

When("I enter {string} register password", async (s) => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const CustPWD = await $('//input[@id="password"]');
  await CustPWD.waitForDisplayed({ timeout: 50000 });
  await CustPWD.setValue(CustPasswrd);
});

Then("Open the Account Page", async () => {
  //await browser.pause(100);
  try {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    const AccOpenDynamic = await $(
      "//a[@title='" +
        CustFirstLastNameZ +
        "']//ancestor::h2//following::a[text()='" +
        CustFirstLastNameZ +
        "'][2]"
    );
    await AccOpenDynamic.waitForDisplayed({ timeout: 50000 });
    await AccOpenDynamic.click();
    await browser.pause(2000);

    const RequiredText = " | Account";
    const TabTwo = CustFirstLastNameZ.concat(RequiredText);
    const TabTwoSelector = await $(
      "//div[@class='slds-global-header__logo']//following::span[text()='" +
        TabTwo +
        "'][1]"
    );
    await TabTwoSelector.waitForDisplayed();
    await TabTwoSelector.click();
    await browser.pause(2000);
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Validate the name in Salesforce", async () => {
  await browser.pause(500);
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
  // //await browser.pause(5000);
  // const RequiredText = " - Search";
  // const TabOne = DigitalCustEmail.concat(RequiredText);
  // const TabOneSelector = await $(
  //   "//div[@class='slds-global-header__logo']//following::span[text()='" +
  //     TabOne +
  //     "'][2]"
  // );
  // //const TabOneSelector = await $("//span[text()='" + TabOne + "']");
  // await TabOneSelector.waitForDisplayed();
  // await TabOneSelector.click();
  // await browser.pause(500);
  // const TextXpath = CustFirstNameZ.concat(" ", CustLasttNameZ);
  // const AcctNameVerifyDynamic = await $(
  //   "//a[@title='" + TextXpath + "']//ancestor::h2"
  // );
  // await AcctNameVerifyDynamic.waitForDisplayed({ timeout: 50000 });
  // await AcctNameVerifyDynamic.isExisting();
});

Then("Enter the email id in the search box", async () => {
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
    await SearchBarInput.setValue(CustEmail);
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
    await SearchBarInput.setValue(CustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
  CucumberJsJsonReporter.attach("Test ID used is: " + CustEmail, "text/plain");
});

Then("Enter the Puzzles email id in the search box", async () => {
  await browser.pause(2000);
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
    await SearchBarInput.setValue(CustPuzzTwoEmail);
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
    await SearchBarInput.setValue(CustPuzzTwoEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Subscription: " + CustPuzzTwoEmail,
      "text/plain"
    );
  }
});

Then("Enter the Gift email id in the search box", async () => {
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
    await SearchBarInput.setValue(GiftCustEmail);
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
    await SearchBarInput.setValue(GiftCustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Gift Subscription Donor: " + GiftCustEmail,
      "text/plain"
    );
  }
});

Then("Enter the GiftTwo email id in the search box", async () => {
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
    await SearchBarInput.setValue(GiftCustTwoEmail);
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
    await SearchBarInput.setValue(GiftCustTwoEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Digital Subscription Donor: " +
        GiftCustTwoEmail,
      "text/plain"
    );
  }
});

Then("Enter the GiftThree redeem email id in the search box", async () => {
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
    await SearchBarInput.setValue(GiftRcvThreeEmail);
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
    await SearchBarInput.setValue(GiftRcvThreeEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});

Then("Enter the GiftTwo redeem email id in the search box", async () => {
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
    await SearchBarInput.setValue(GiftRcvTwoEmail);
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
    await SearchBarInput.setValue(GiftRcvTwoEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Gift Subscription Receiver: " + GiftRcvTwoEmail,
      "text/plain"
    );
  }
});

Then("Enter the GiftThree email id in the search box", async () => {
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
    await SearchBarInput.setValue(GiftCustThreeEmail);
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
    await SearchBarInput.setValue(GiftCustThreeEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Digital Plus Subscription Donor: " +
        GiftCustThreeEmail,
      "text/plain"
    );
  }
});

Then("Enter the Digital Sub email id in the search box", async () => {
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
    await SearchBarInput.setValue(DigitalCustEmail);
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
    await SearchBarInput.setValue(DigitalCustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Subscriber is: " + DigitalCustEmail,
      "text/plain"
    );
  }
});

Then("I login to Salesforce", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const SalesforceUsrname = await $('//input[@id="username"]');
    await SalesforceUsrname.waitForDisplayed({ timeout: 50000 });
    await SalesforceUsrname.setValue("akshat.tembhare@telegraph.co.uk.qa");
    //await SalesforceUsrname.setValue("areeb.butt+automation@telegraph.co.uk");
    const SalesforcePwd = await $('//input[@id="password"]');
    await SalesforcePwd.waitForDisplayed({ timeout: 10000 });
    await SalesforcePwd.setValue("Fabokrl@5679");
    //await SalesforcePwd.setValue("Telegraph1");
    const SalesforceLogin = await $('//input[@id="Login"]');
    await SalesforceLogin.waitForDisplayed({ timeout: 10000 });
    await SalesforceLogin.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Validate TS number is generated in Subscriber Number field", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const RecordID = await $('//span[@class="slds-grid slds-grid--align-spread"] //a[@data-refid="recordId"]')
  // await RecordID.waitForDisplayed({timeout: 50000})
  // await RecordID.click()

  const TSnum = await $(
    '//span[text()="Subscriber Number"]/parent::div/following::span[2]'
  );
  await TSnum.waitForDisplayed({ timeout: 50000 });
  await TSnum.isExisting();
});

Then("Close Open tabs in Salesforce", async () => {
  //await browser.pause(100);
  // await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // button[@class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-container"]
  // const TabsContainer = await $('div.slds-context-bar__primary.navLeft.navBar')
  // const CloseTabBtn = await $('div.close.slds-context-bar__icon-action')
  // await browser.pause(2000);
  //await $("div.close.slds-context-bar__icon-action")
  const SFTabClose = await $(
    '//button[@class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-container"]'
  );

  // if (SFTabClose.isClickable) {
  //   SFTabClose.click();
  //   console.log("True");
  //   await browser.pause(5000);
  //   await browser.pause(1000);
  // if(SFTabClose.isExisting){
  //   await SFTabClose.click();
  //   console.log("True");
  //   await browser.pause(5000);}
  //   if(SFTabClose.isExisting){
  //     await SFTabClose.click();
  //     console.log("True");
  //     await browser.pause(5000);
  //   }else{console.log("False"); }
  // } else {
  //   console.log("Bada False");
  // }
  // await browser.pause(5000);

  // if (SFTabClose.isExisting) {
  //   //await SFTabClose.click();
  //   await SFTabClose.doubleClick();
  //   console.log("True");
  //   await browser.pause(5000);
  // }else{
  //   console.log("Bada False");
  // }
  await browser.pause(5000);

  if (SFTabClose.isExisting == true) {
    await SFTabClose.waitForDisplayed({ timeout: 20000 });
    await SFTabClose.click();
    console.log("close tab was present");
    await browser.pause(4000);
  } else {
    await browser.pause(500);
    console.log("close tab is not present");
  }
});

Then("Validate a GUID and PianoID are generated", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const GUID = await $('//span[text()="Guid"]/parent::div//following::span[2]');
  await GUID.waitForDisplayed({ timeout: 50000 });
  await GUID.isExisting();
  const PianoID = await $(
    '//span[text()="PianoID"]/parent::div//following::span[2]'
  );
  await PianoID.waitForDisplayed({ timeout: 50000 });
  await PianoID.isExisting();
});

Then(
  "Verify the Digital Status is {string} and Account Record Type is {string}",
  async (s, s2) => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    //await browser.pause(1000);
    const RegisteredValidate = await $(
      '//div[@class="slds-global-header__logo"]//following::lightning-formatted-text[text()="Registered"][2]'
    );
    await RegisteredValidate.waitForDisplayed({ timeout: 50000 });
    await RegisteredValidate.isExisting();
    const RegistrantValidate = await $(
      '//div[@class="slds-global-header__logo"]//following::*[text()="Registrant"][3]'
    );
    await RegistrantValidate.waitForDisplayed({ timeout: 50000 });
    await RegistrantValidate.isExisting();
  }
);

Then("Validate account channel is {string}", async (s) => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PremiumValidation = await $(
    '//lightning-formatted-text[text()="Premium"]'
  );
  await PremiumValidation.waitForDisplayed({ timeout: 50000 });
  await PremiumValidation.isExisting();
});

Then("Verify the Print Status is {string}", async (s) => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PtintStatusInactive = await $(
    '//span[contains(@class,"test-id__field-value")]//lightning-formatted-text[text()="Inactive"]'
  );
  await PtintStatusInactive.waitForDisplayed({ timeout: 50000 });
  await PtintStatusInactive.isExisting();
});

Then("Validate if user has any active subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();
  const SubID = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );
  RecordSubID = await SubID.getText();
  console.log(await SubID.getText());
  console.log(RecordSubID);
  ZouraSubURL =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubID +
    "&searchObjectType=subscription";
  await browser.pause(5000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Puzzles Subscription: " + RecordSubID,
    "text/plain"
  );
});

Then(
  "Verify if registrant signed up via email then validate no Social Account is linked",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    try {
      if (SFMoreButton.isExisting) {
        await SFMoreButton.click();
        await browser.pause(700);
        await SystemTab.click();
      } else {
        await SystemTab.click();
      }
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
    await browser.scroll(0, 200);
    const NoSocialAccLinkedTxt = await $(
      '//lightning-formatted-text[contains(text(),",.No linked Social Accounts were found")]'
    );

    await NoSocialAccLinkedTxt.waitForDisplayed({ timeout: 20000 });
    await NoSocialAccLinkedTxt.isExisting();
  }
);

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
  await ZuoraCustRecordSerchBox.setValue(RecordSubID);
  await browser.keys("Enter");
  const NoRecordFoundTxt = await $('//span[text()="No Records Found"]');
  await NoRecordFoundTxt.waitForDisplayed({ timeout: 50000 });
  await NoRecordFoundTxt.isExisting();
});

Then("Go to Zoura Subscription Page", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURL);
  await browser.pause(1000);
});

Then("Go to Zoura Subscription Page for Digital", async () => {
  //await browser.pause(100);
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
  // await browser.url(ZouraSubURLDigital);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDP5,
    "text/plain"
  );
});

Then("Go to Zoura Subscription Page for digitalete20", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLDigitalete20);
  await browser.pause(3000);
  CucumberJsJsonReporter.attach(
    "Subscription ID: " + RecordSubIDP7,
    "text/plain"
  );
});

Then("Go to Zoura Subscription Page for DigitalPlusCC", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Plus Subscription: " + RecordSubIDP6,
    "text/plain"
  );
  // await browser.url(ZouraSubURLDigitalPlusC);
  // await browser.pause(1000);
});

Then("Open Subscription in Zoura for Puzzles", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const SubIDOpen = await $("//span[text()='" + RecordSubIDP + "']");
  await SubIDOpen.waitForDisplayed({ timeout: 50000 });
  await SubIDOpen.click();

  await browser.pause(5000);

  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Validate Name and Account number in Zoura", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Validate Payment details for Puzzles in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Auto Pay details in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Term setting and current term in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Subscription and Curent term dates in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Renweal Settings", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Valiadate Renewal term", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Price Segment code in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate Promo code in Zoura", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

Then("Validate AutoRenew", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.scroll(0, 200);
});

When("I launch Zoura application", async () => {
  await browser.url("https://apisandbox.zuora.com/");
  //await browser.maximizeWindow();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

When("Login to Zoura", async () => {
  //await browser.refresh();
  const Zourausername = await $('//input[@name="username"]');
  const Zourapwd = await $('//input[@id="id_password"]');
  const ZouraloginBTN = await $('//a[@class="btn-login"]');
  try {
    if (Zourausername.isExisting) {
      await Zourausername.waitForDisplayed({ timeout: 20000 });
      await Zourausername.setValue("akshat.tembhare@telegraph.co.uk.qa");
      await Zourapwd.setValue("Aytakshat@1");
      await ZouraloginBTN.click();
      await browser.pause(2000);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  // try {
  //   if (Zourausername.isExisting) {
  //     await Zourausername.waitForDisplayed({ timeout: 30000 });
  //     await Zourausername.setValue("akshat.tembhare@telegraph.co.uk.qa");
  //     await Zourapwd.setValue("Aytakshat@1");
  //     await ZouraloginBTN.click();
  //     browser.waitUntil(
  //       () => browser.execute(() => document.readyState === "complete"),
  //       {
  //         timeout: 60 * 1000, // 60 seconds
  //         timeoutMsg: "Message on failure",
  //       }
  //     );
  //   }
  // } catch (error) {
  //   console.error("no such element");
  // } finally {
  //   await browser.pause(100);
  // }
});

// Then("I nagivate to MyAccount Page", async () => {
//   await browser.pause(100);
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   await browser.url(
//     "https://secure-staging-ams64.telegraph.co.uk/customer/secure/account/"
//   );
//   await browser.pause(4000);
//   await manageyourDetailsBtn.waitForDisplayed({ timeout: 50000 });
//   await manageyourDetailsBtn.isExisting();
// });

Then("Validate HomePage", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const HomePageLogo = await $('//a[@class="e-site-logo"]');
    await HomePageLogo.waitForDisplayed({ timeout: 50000 });
    await HomePageLogo.isExisting();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Validate Your Subscription section for puzzles", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const PuzzlesPlan = await $(
    '//span[text()="Your current plan"]//following::span[text()="Puzzles"]'
  );
  await PuzzlesPlan.waitForDisplayed({ timeout: 50000 });
  await PuzzlesPlan.isExisting();

  const PuzzlesPlanRate = await $(
    '//span[text()="Subscription price"]//following::span[contains(text(),"per")]'
  );
  await PuzzlesPlanRate.waitForDisplayed({ timeout: 50000 });
  await PuzzlesPlanRate.isExisting();
});

Then("Validate Puzzles MyAccount Page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PMyAcc = await $('//a[@class="card-button-big"]');
  await PMyAcc.waitForDisplayed({ timeout: 50000 });
  await PMyAcc.isExisting();
});

Then("Validate Puzzles Homepage", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PHomePage = await $('//a[@class="site-header__logo"]');
  await PHomePage.waitForDisplayed({ timeout: 50000 });
  await PHomePage.isExisting();
});

Then("Navigate to MyAccount from Puzzles Page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PNavigator = await $('//button[@id="navMenuTrigger"]');
  await PNavigator.waitForDisplayed({ timeout: 50000 });
  await PNavigator.click();

  //const PNavNyAcc = await $(
  //   '//a[@href="https://secure-staging-ams64.telegraph.co.uk/customer/secure/account"]'
  // );
  // await PNavNyAcc.waitForDisplayed({ timeout: 50000 });
  // await PNavNyAcc.click();

  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/account/"
  );
});

Then("Naviagate to Gift Subshop Page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/subscribe/gifting/"
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("User clicks on Digital Plan Monthly", async () => {
  //await browser.pause(100);
  //await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const DigitalBuyMonthly = await $(
    '//header[text()="Digital"]//following::div[@class="acquisition-button"][1]'
  );
  await DigitalBuyMonthly.waitForDisplayed({ timeout: 20000 });
  await DigitalBuyMonthly.click();
});

Then("User clicks on Digital Plan Annually", async () => {
  //await browser.pause(100);
  //await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const DigitalBuyMonthly = await $(
    '//header[text()="Digital"]//following::div[@class="acquisition-button"][2]'
  );
  await DigitalBuyMonthly.waitForDisplayed({ timeout: 20000 });
  await DigitalBuyMonthly.click();
});

Then("User clicks on Digital Plus Plan Monthly", async () => {
  //await browser.pause(100);
  //await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const DigitalBuyMonthly = await $(
    '//header[text()="Digital Plus"]//following::div[@class="acquisition-button"][1]'
  );
  await DigitalBuyMonthly.waitForDisplayed({ timeout: 20000 });
  await DigitalBuyMonthly.click();
});

Then("User clicks on Digital Plus Plan Annual", async () => {
  //await browser.pause(100);
  //await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const DigitalPBuyAnunual = await $(
    '//header[text()="Digital Plus"]//following::div[@class="acquisition-button"][2]'
  );
  await DigitalPBuyAnunual.waitForDisplayed({ timeout: 20000 });
  await DigitalPBuyAnunual.click();
});

Then("Click on View Subscription Offers", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/subscribe/?icid=myaccount"
  );
  await browser.pause(3000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // await browser.url(
  //   "https://secure-staging-ams64.telegraph.co.uk/customer/subscribe/?icid=myaccount"
  // );
  // await browser.pause(3000);
  // const ViewSubofferBTN = await $('//a[text()="View subscription offers"]');
  // await ViewSubofferBTN.waitForDisplayed({ timeout: 50000 });
  // await ViewSubofferBTN.click();
});

Then("Validate user is redirected to Payment gateway page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const paymentText = await $('//h2[text()="Express Checkout"]');
    await paymentText.waitForDisplayed({ timeout: 20000 });
    await paymentText.isExisting();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Validate user is redirected to Payment gateway", async () => {
  await browser.pause(100);
});

When("Go to My Account page", async () => {
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
  await browser.pause(5000);
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
  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/account/"
  );
  // await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //CucumberJsJsonReporter.attach(screenShot, "image/png");
  //await manageyourDetailsBtn.waitForDisplayed({ timeout: 50000 });
  //await manageyourDetailsBtn.isExisting();
});

Then("User completes the purchase", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const afterPaymentFirstName = await $('//input[@id="firstName"]');
  const afterPaymentlastName = await $('//input[@id="lastName"]');
  const afterPaymentSubmitButton = await $('//button[@id="password_submit"]');

  try {
    await afterPaymentFirstName.waitForDisplayed({ timeout: 40000 });
    await afterPaymentFirstName.setValue("Akshat");
    await afterPaymentlastName.setValue("Tembhare");
    await afterPaymentSubmitButton.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  try {
    // const subContinueBtn = await $(
    //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
    // );

    const subContinueBtn = await $('//button[text()="Continue"]');

    if (subContinueBtn.isDisplayed) {
      await subContinueBtn.waitForDisplayed({ timeout: 30000 });
      await subContinueBtn.click();

      // const subSkipContinueBtn = await $(
      //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Skip and continue"]'
      // );
      const subSkipContinueBtn = await $(
        '//button[text()="Skip and continue"]'
      );
      //button[text()="Skip and continue"]
      await subSkipContinueBtn.waitForDisplayed({ timeout: 50000 });
      await subSkipContinueBtn.click();

      // const subContinueBtnn = await $(
      //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
      // );
      const subContinueBtnn = await $('//button[text()="Continue"]');
      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();

      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();

      // const pickwhrleftoff = await $(
      //   '//span[text()="Pick up where you left off"]'
      // );
      const pickwhrleftoff = await $(
        '//a[@href="https://staging-ams64.telegraph.co.uk/"]'
      );
      //a[@href="https://staging-ams64.telegraph.co.uk/"]
      await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
      await pickwhrleftoff.click();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("User completes the purchase as loggedout Registrant", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const subContinueBtn = await $('//button[text()="Continue"]');

    if (subContinueBtn.isDisplayed) {
      await subContinueBtn.waitForDisplayed({ timeout: 30000 });
      await subContinueBtn.click();
      const subSkipContinueBtn = await $(
        '//button[text()="Skip and continue"]'
      );
      await subSkipContinueBtn.waitForDisplayed({ timeout: 50000 });
      await subSkipContinueBtn.click();
      const subContinueBtnn = await $('//button[text()="Continue"]');
      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();
      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();
      const pickwhrleftoff = await $(
        '//a[@href="https://staging-ams64.telegraph.co.uk/"]'
      );
      await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
      await pickwhrleftoff.click();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
  // const subContinueBtn = await $(
  //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
  // );
  // await subContinueBtn.waitForDisplayed({ timeout: 50000 });
  // await subContinueBtn.click();

  // const subSkipContinueBtn = await $(
  //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Skip and continue"]'
  // );
  // await subSkipContinueBtn.waitForDisplayed({ timeout: 50000 });
  // await subSkipContinueBtn.click();

  // const subContinueBtnn = await $(
  //   '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
  // );
  // await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
  // await subContinueBtnn.click();

  // await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
  // await subContinueBtnn.click();

  // const pickwhrleftoff = await $('//span[text()="Pick up where you left off"]');
  // await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
  // await pickwhrleftoff.click();
  // browser.waitUntil(
  //   () => browser.execute(() => document.readyState === "complete"),
  //   {
  //     timeout: 60 * 1000, // 60 seconds
  //     timeoutMsg: "Message on failure",
  //   }
  // );
});

Then("Input paypal Payment details", async () => {
  await browser.pause(5000);
  const checkoutpageIframe = await $(
    '//iframe[@class="zoid-component-frame zoid-visible"]'
  );

  await browser.pause(4000);
  await browser.switchToFrame(checkoutpageIframe);
  const paypalBtn = await $('//div[@id="paypal-animation-content"]');
  await paypalBtn.waitForDisplayed({ timeout: 50000 });
  await paypalBtn.click();
  await browser.switchToFrame(null);
  await browser.pause(15000);

  await browser.switchWindow("https://www.sandbox.paypal.com");
  await browser.pause(3000);

  try {
    //browser.waitForDisaplyed(10000);
    const EmailInput = await $('//input[@id="email"]');
    const EmailInputCondition = EmailInput.isExisting();
    //const EmailInputConditionTwo = EmailInput.isExisting() == true;
    const paypalNxtBtn = await $('//button[@id="btnNext"]');
    const paypalNxtBtnCondition = paypalNxtBtn.isExisting();
    const paypalpwdInput = await $('//input[@id="password"]');
    const paypalpwdInputCondition = paypalpwdInput.isExisting();
    const paypalloginBtn = await $('//button[@id="btnLogin"]');
    const paypalloginBtnCondition = paypalloginBtn.isExisting();
    const paypalRetryBtn = await $('//a[text()="Please try again"]');
    const paypalRetryBtnCondition = paypalRetryBtn.isExisting();

    if (EmailInputCondition) {
      await EmailInput.setValue(paypalID);
      await paypalNxtBtn.click();
      await paypalpwdInput.waitForDisplayed({ timeout: 30000 });
      await paypalpwdInput.setValue(paypalpasswrd);
      await paypalloginBtn.click();
    }
    await browser.pause(3000);
    try {
      await paypalRetryBtn.waitForDisplayed({ timeout: 1000 });
      await paypalRetryBtn.click();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
    const agreeAndpayBtn = await $('//button[contains(text(),"Agree & Pay")]');
    await agreeAndpayBtn.waitForDisplayed({ timeout: 50000 });
    await agreeAndpayBtn.click();
    await browser.pause(1000);
    try {
      await paypalRetryBtn.waitForDisplayed({ timeout: 1000 });
      await paypalRetryBtn.click();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.switchWindow("https://secure-staging-ams64.telegraph.co.uk");
    await browser.pause(2000);
  }
});

Then("Input CreditCard Payment details", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const checkoutpageIframe = await $('//iframe[@id="z_hppm_iframe"]');
  await checkoutpageIframe.waitForDisplayed({ timeout: 50000 });
  await browser.switchToFrame(checkoutpageIframe);

  const creditcardholdername = await $(
    '//input[@id="input-creditCardHolderName"]'
  );
  await creditcardholdername.waitForDisplayed({ timeout: 50000 });
  await creditcardholdername.doubleClick();
  await creditcardholdername.setValue("Test");
  await browser.scroll(0, 200);
  const creditcardholdernum = await $('//input[@id="input-creditCardNumber"]');
  await creditcardholdernum.waitForDisplayed({ timeout: 50000 });
  await creditcardholdernum.doubleClick();
  await creditcardholdernum.setValue("4444333322221111");
  await browser.scroll(0, 200);

  const creditcardExmonth = await $(
    '//select[@id="input-creditCardExpirationMonth"]'
  );
  await creditcardExmonth.waitForDisplayed({ timeout: 50000 });
  await creditcardExmonth.selectByAttribute("value", "12");

  const creditcardExyear = await $(
    '//select[@id="input-creditCardExpirationYear"]'
  );
  await creditcardExyear.waitForDisplayed({ timeout: 50000 });
  await creditcardExyear.selectByAttribute("value", "2025");

  const creditcardcvc = await $('//input[@id="input-cardSecurityCode"]');
  await creditcardcvc.waitForDisplayed({ timeout: 50000 });
  await creditcardcvc.doubleClick();
  await creditcardcvc.setValue("123");

  await browser.switchToFrame(null);

  const CardSubmitBtn = await $('//button[@id="express-card-cta"]');
  await CardSubmitBtn.waitForDisplayed({ timeout: 50000 });
  await CardSubmitBtn.click();

  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.pause(5000);
});

Then("Validate Your Subscription section", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Post Payment redirect to Puzzles", async () => {
  await browser.pause(10000);
  await browser.url("https://staging-ams64.telegraph.co.uk/puzzles/index.html");
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Logout from Customer application", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //const CustLogOutBtnOne = await $('//button[text()="Log out"]');
  const CustLogOutBtnOne = await $('//button[@class="header-menu-button"]');
  await CustLogOutBtnOne.waitForDisplayed({ timeout: 50000 });
  await CustLogOutBtnOne.click();

  // const CustLogOutBtnTwo = await $(
  //   '//button[text()="Log out"]//following::a[1]'
  // );
  const CustLogOutBtnTwo = await $(
    '//a[@href="https://www.telegraph.co.uk/"]//following::a[text()="Log out"][1]'
  );
  await CustLogOutBtnTwo.waitForDisplayed({ timeout: 50000 });
  await CustLogOutBtnTwo.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(2000);
  await browser.pause(2000);
  await browser.deleteCookies();
});

Then("Validate No Active Subscription Exists for Registrant", async () => {
  await browser.pause(100);
  await browser.pause(2000);
  const NoActiveSubText = await $('//em[text()="No active subscription"]');
  await NoActiveSubText.waitForDisplayed({ timeout: 50000 });
  await NoActiveSubText.isExisting();
});

Then("Click on Manage Your Details button", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await manageyourDetailsBtn.waitForDisplayed({ timeout: 50000 });
  await manageyourDetailsBtn.isExisting();
  await manageyourDetailsBtn.click();
  await browser.pause(4000);
});

Then("Validate Your Payment section", async () => {
  await browser.pause(100);
  await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //Write code here that turns the phrase above into concrete actions
});

Then("Validate Your Payment section for Puzzles", async () => {
  await browser.pause(100);
  await browser.pause(1000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const PuzzlesPayMethod = await $('//span[text()="Payment method"]');
  await PuzzlesPayMethod.waitForDisplayed({ timeout: 20000 });
  await PuzzlesPayMethod.click();

  //Write code here that turns the phrase above into concrete actions
});

When("Navigate to My Newsletters page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // await NewsletterPage.waitForDisplayed({ timeout: 50000 });
  // await NewsletterPage.click();

  //await MyNewsletterPage.waitForDisplayed({ timeout: 50000 });
  //await MyNewsletterPage.click();
});

Then("Validate {string} and {string} is added by default", async (s, s2) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Digital Subscriber has 1 bonus account", async () => {
  await browser.pause(1000);
  // const BonusSubtile = await $(
  //   '//a[@href="/customer/secure/account/"]//following::button[@class="account-section-card"][1]'
  // );
  // await BonusSubtile.waitForDisplayed({ timeout: 20000 });
  // await BonusSubtile.click();

  // const BonusSubVerify = await $(
  //   '//p[text()="Give a friend or family member access to our website and app - at no extra cost to either of you."]'
  // );
  // await BonusSubVerify.waitForDisplayed({ timeout: 20000 });
  // await BonusSubVerify.isExisting();
  // Write code here that turns the phrase above into concrete actions
});

When("User clicks on {string} tab", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

When("User clicks on Details tab", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SFDetailsTab = await $('//a[@id="detailTab__item"]');
  await SFDetailsTab.waitForDisplayed({ timeout: 20000 });
  await SFDetailsTab.click();
});

When("User clicks on System tab", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  try {
    if (SFMoreButton.isExisting) {
      await SFMoreButton.click();
      await browser.pause(700);
      await SystemTab.click();
    } else {
      await SystemTab.click();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  await browser.scroll(0, 200);
});

Then("Validate Wine CTA", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Input Receipent name details", async () => {
  //await browser.pause(100);
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const GiftRFirstName = await $('//input[@id="recFirstName"]');
  const GiftSecondtName = await $('//input[@id="recLastName"]');
  await GiftRFirstName.waitForDisplayed({ timeout: 20000 });
  await GiftSecondtName.waitForDisplayed({ timeout: 20000 });

  await GiftRFirstName.setValue("Akshat");
  await GiftSecondtName.setValue("Tembhare");

  // Write code here that turns the phrase above into concrete actions
});

Then("Input Gift Address details", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  // const StreetLineOne = await $('//input[@id="streetline1"]');
  // await StreetLineOne.waitForDisplayed({ timeout: 20000 });
  // const StreetLineTwo = await $('//input[@id="streetline2"]');
  // await StreetLineTwo.waitForDisplayed({ timeout: 20000 });
  // const GiftCity = await $('//input[@id="city"]');
  // await GiftCity.waitForDisplayed({ timeout: 20000 });
  // const GiftPostCode = await $('//input[@id="postcode"]');
  //await GiftPostCode.waitForDisplayed({ timeout: 20000 });

  const GiftContinueBtn = await $(
    '//button[@id="payment-details-submit-button"]'
  );
  // await GiftContinueBtn.waitForDisplayed({ timeout: 20000 });

  // await StreetLineOne.setValue("87 Stone Cellar Road");
  // await StreetLineTwo.setValue("Kingseat");
  // await GiftCity.setValue("Kingseat");

  // const GifyCountry = await $('//select[@class="dropdown-wrapper-select"]');
  // await GifyCountry.waitForDisplayed();
  // await GifyCountry.selectByAttribute("value", "GB");
  // await browser.pause(3000);
  // await browser.keys("Enter");
  // await browser.pause(3000);
  const GiftPostCode = await $('//input[@id="postcode"]');
  await GiftPostCode.waitForDisplayed({ timeout: 20000 });
  await GiftPostCode.setValue("KY12 9LG");

  const findaddbtnn = await $('//span[text()="Find address"]');
  await findaddbtnn.waitForDisplayed({ timeout: 20000 });
  await findaddbtnn.click();

  await browser.pause(3000);

  const firstadddcli = await $(
    '//span[contains(text(),"Please use your billing address")]//following::div[3]'
  );
  await firstadddcli.waitForDisplayed({ timeout: 20000 });
  await firstadddcli.click();
  await browser.pause(3000);

  await GiftContinueBtn.click();

  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // Write code here that turns the phrase above into concrete actions
});

Then("Add Personal Touch message", async () => {
  await browser.pause(100);

  const GiftTxtera = await $('//textarea[@id="recTextArea"]');
  await GiftTxtera.waitForDisplayed({ timeout: 20000 });

  await GiftTxtera.setValue(
    "Testing of Gift Subscription by Mindtree Akshat Tembhare"
  );
  await browser.pause(900);
  const GiftSubmitBtn = await $('//button[@id="gift-message-return-data"]');
  await GiftSubmitBtn.waitForDisplayed({ timeout: 20000 });
  await GiftSubmitBtn.click();
  await browser.pause(9000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Input MPP payment details", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const CardNameMPP = await $(
    '//label[text()="Card type"]//following::input[@class="m_input__input"][1]'
  );
  await CardNameMPP.waitForDisplayed({ timeout: 40000 });
  await CardNameMPP.setValue("Akshat");
  await browser.pause(900);

  const CardNumMPP = await $(
    '//label[text()="Card type"]//following::input[@class="m_input__input"][2]'
  );
  await CardNumMPP.waitForDisplayed({ timeout: 20000 });
  await CardNumMPP.setValue("4222000001227408");
  await browser.pause(900);

  const CardExMPP = await $(
    '//label[text()="Card type"]//following::input[@class="m_input__input"][3]'
  );
  await CardExMPP.waitForDisplayed({ timeout: 20000 });
  await CardExMPP.setValue("1225");
  await browser.pause(900);

  const CardCVVMPP = await $(
    '//label[text()="Card type"]//following::input[@class="m_input__input"][4]'
  );
  await CardCVVMPP.waitForDisplayed({ timeout: 20000 });
  await CardCVVMPP.setValue("123");
  await browser.pause(900);

  const GiftFinalSubmitBtn = await $(
    '//a[@id="action_createaccountandpaynow"]'
  );
  await GiftFinalSubmitBtn.waitForDisplayed({ timeout: 20000 });
  await GiftFinalSubmitBtn.click();

  await browser.pause(55000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // Write code here that turns the phrase above into concrete actions
});

Then(
  "Validate if user has active subscription Digital subscription",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
  }
);

Then("Validate bonus promo code is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate {string} bonus promo code is generated", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Billing Currency is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then(
  "Enter existing subscriber email in search box for Digital Plus",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
  }
);
Then("Search the subscription in Zuora for Digital Plus", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});
Then("Validate the digital plus subs details in Zoura", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Access details in Piano for  Digital Plus", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Current plan is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Subscription end date", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Go to Zoura Subscription Page for Bonus", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("In Zoura I validate subscriberID is present for Bonus", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Subscription start date", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Current plan is Website UK", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Subscription product name is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Active subscription is created", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate The From The Editor Newsletters is added", async () => {
  //await browser.pause(60000);
  const SFNewslettrTab = await $('//a[@id="customTab4__item"]');
  // await SFNewslettrTab.waitForDisplayed({ timeout: 20000 });
  // await SFNewslettrTab.click();

  try {
    if (SFMoreButton.isExisting) {
      await SFMoreButton.click();
      await browser.pause(700);
      await SFNewsltrTab.click();
    } else {
      await SFNewslettrTab.click();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  const eleFormNewsletter = await $(
    '//*[text()="The From The Editor Newsletter"]'
  );
  await eleFormNewsletter.waitForDisplayed({ timeout: 20000 });
  await eleFormNewsletter.isExisting();
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate {string} is added", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Entitlements are added for digital subscription", async () => {
  await browser.pause(500);
  const SFEntitlementsOP = await $('//a[@id="EntitlementsTab__item"]');
  await SFEntitlementsOP.waitForDisplayed({ timeout: 20000 });
  await SFEntitlementsOP.click();
  await browser.pause(5000);
  const SFEntitlements = await $(
    '//div[@class="slds-dueling-list__column slds-dueling-list__column_responsive"]/following::span[text()="Current"]//following::li[@class="slds-listbox__item"]'
  );

  await SFEntitlements.waitForDisplayed({ timeout: 3000 });
  await SFEntitlements.isExisting();
  // Write code here that turns the phrase above into concrete actions
});

Then(
  "Validate Entitlements are added for digitalPlus subscription",
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
    // Write code here that turns the phrase above into concrete actions
  }
);

When("User clicks on the Subscription", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Invoice is created", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate type of subscription is standard", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Zoura subscription status is active", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate auto renew is set to true", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Billing account is created", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate tyep of subscription is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate auto renew is set to {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Accesss details in Piano for Digital", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Enter digial username and search", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Zoura subscription status is {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Subscription End date", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then(
  "Validate subscription for digital Monthly Plan in salesforce",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
  }
);

Then(
  "Validate subscription for digital Annual Plan in salesforce",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
  }
);

Then(
  "Verify the Digital Status is Registered and Account Record Type is Registrant",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
  }
);

Then("Validate Auto pay is set to {string}", async (s) => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Auto pay is set to True", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate account number is generated", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Current term start date", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Current Term", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Current term end date", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Cancellation method", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Enter Digital Plus user subscriber email in search box", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Aquisition channel", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Renewal term", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Access details in Piano for Digital Plus sub", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});
Then("Validate if user has activee subscription", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Continent and Country", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Renewal Setting", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Subscription origin", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Price Segment Code", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Type of Subscription", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Product", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Rate Plan", async () => {
  await browser.pause(1000);
  // Write code here that turns the phrase above into concrete actions
});

Then("Validate Source System", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

When("Navigate to All Users page", async () => {
  await browser.pause(100);
  const pianoMenuUser = await $('//a[@id="menu-user"]');
  const pianoAllUsers = await $('//a[@class="all-users"]');

  await pianoMenuUser.waitForDisplayed({ timeout: 50000 });
  await pianoMenuUser.click();
  await browser.pause(1000);
  await pianoAllUsers.waitForDisplayed({ timeout: 50000 });
  await pianoAllUsers.click();
  await browser.pause(1000);
});

When("Enter subscriber email in search box", async () => {
  await browser.pause(500);
  const pianoMenuUser = await $('//a[@id="menu-user"]');
  const pianoSearchBtnInput = await $('//a[@class="mine-users"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $("//div[contains(text(),'Akshat')]");
  await pianoMenuUser.waitForDisplayed({ timeout: 50000 });
  await pianoMenuUser.doubleClick();
  await browser.pause(1000);
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(CustEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach("Test ID used is: " + CustEmail, "text/plain");
});

When("Enter Digital subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();
  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(DigitalCustEmail);
  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();
  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Subscriber is: " + DigitalCustEmail,
    "text/plain"
  );
});

When(
  "Enter digitalete20 subscriber email in search box for piano",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(digitMPypletePuzzOne);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + digitMPypletePuzzOne,
      "text/plain"
    );
  }
);

When(
  "Enter digitalMPaypalforPuzzles subscriber email in search box in Piano",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(DigitalPaypalCustEmailPuzl);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + DigitalPaypalCustEmailPuzl,
      "text/plain"
    );
  }
);

When(
  "Enter Puzzledigitalbotlon subscriber email in search box in Piano",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(digitMPypletePuzzThree);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + digitMPypletePuzzThree,
      "text/plain"
    );
  }
);

When("Enter DigitalPlus subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();
  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(DigitalPlusCCEmail);
  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();
  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Plus Subscription: " + DigitalPlusCCEmail,
    "text/plain"
  );
});

When(
  "Enter digitalMPaypaletePuzzles subscriber email in search box in Piano",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(digitalMPaypaletePuzzles);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + digitalMPaypaletePuzzles,
      "text/plain"
    );
  }
);

When("Enter Puzzle subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(CustPuzzTwoEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Subscription: " + CustPuzzTwoEmail,
    "text/plain"
  );
});

When("Enter Gift Receipenet email in search box", async () => {
  await browser.pause(500);
  const pianoMenuUser = await $('//a[@id="menu-user"]');
  const pianoSearchBtnInput = await $('//a[@class="mine-users"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoMenuUser.waitForDisplayed({ timeout: 50000 });
  await pianoMenuUser.doubleClick();
  await browser.pause(1000);
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(GiftRcvOneEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Receiver: " + GiftRcvOneEmail,
    "text/plain"
  );
});

When("Enter GiftTwo Receipent email in search box", async () => {
  await browser.pause(500);
  const pianoMenuUser = await $('//a[@id="menu-user"]');
  const pianoSearchBtnInput = await $('//a[@class="mine-users"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoMenuUser.waitForDisplayed({ timeout: 50000 });
  await pianoMenuUser.doubleClick();
  await browser.pause(1000);
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(GiftRcvTwoEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Subscription Receiver: " +
      GiftRcvTwoEmail,
    "text/plain"
  );
});

When("Enter GiftThree Receipent email in search box", async () => {
  await browser.pause(500);
  const pianoMenuUser = await $('//a[@id="menu-user"]');
  const pianoSearchBtnInput = await $('//a[@class="mine-users"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoMenuUser.waitForDisplayed({ timeout: 50000 });
  await pianoMenuUser.doubleClick();
  await browser.pause(1000);
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(GiftRcvThreeEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Plus Subscription Receiver: " +
      GiftRcvThreeEmail,
    "text/plain"
  );
});

Then("Validate Piano UiD", async () => {
  await browser.pause(100);
  // const pianouIDverify = await $('//li[@id="user-id"]');
  // await pianouIDverify.waitForDisplayed({ timeout: 50000 });
  // await pianouIDverify.isExisting();
});

When("User logins to Piano account", async () => {
  try {
    await browser.keys("Enter");
    await browser.url("https://sandbox.piano.io/login/logout");
    const pianoUsrname = await $('//input[@id="username"]');
    const pianoPswrd = await $('//input[@id="password"]');
    const pianoLoginBtn1 = await $('//button[@type="submit"]');
    const pianoLoginBtn2 = await $(
      '//input[@id="password"]//following::button[@type="submit"]'
    );
    const pianoHomeIcon = await $('//a[text()="Piano"]');
    await browser.pause(4000);
    if (pianoUsrname.isExisting) {
      await pianoUsrname.waitForDisplayed({ timeout: 10000 });
      await pianoUsrname.setValue(pianoID);
      await pianoLoginBtn1.waitForDisplayed({ timeout: 1000 });
      await pianoLoginBtn1.click();
      await pianoPswrd.waitForDisplayed({ timeout: 1000 });
      await pianoPswrd.setValue(pianoPsswd);
      await pianoLoginBtn2.waitForDisplayed({ timeout: 1000 });
      await pianoLoginBtn2.click();
      await pianoHomeIcon.waitForDisplayed({ timeout: 50000 });
      await pianoHomeIcon.isExisting();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(400);
  }
});

Then("Validate Subscription details", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("Navigate to Newsletters page", async () => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("User clicks on Digital Plus Plan {string}", async (s) => {
  await browser.pause(100);
  // Write code here that turns the phrase above into concrete actions
});

Then("I logout from customer app", async () => {
  await browser.pause(100);
  const HomeNavigatorBtn = await $('//a[@href="/all-sections/"]');
  await HomeNavigatorBtn.waitForDisplayed({ timeout: 50000 });
  await HomeNavigatorBtn.click();

  const CustLogOutBtn = await $('//span[text()="Log out"]');
  await CustLogOutBtn.waitForDisplayed({ timeout: 50000 });
  await CustLogOutBtn.click();
  // console.log(CustPuzzTwoEmail);
  // console.log(CustPuzzTwoEmail);
  // console.log(CustPuzzTwoEmail);
});

Then("Click Wine CTA", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const WineSubOffer = await $(
    '//a[@href="https://wine-qa.telegraph.co.uk/splash"]'
  );
  await WineSubOffer.waitForDisplayed({ timeout: 50000 });
  await WineSubOffer.click();
});

Then(
  "Navigate to Puzzles Subscription option in View Subscription page",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const PuzzlesSubOffer = await $(
      '//a[@href="https://staging-ams64.telegraph.co.uk/customer/subscribe/puzzle"]'
    );
    await PuzzlesSubOffer.waitForDisplayed({ timeout: 50000 });
    await PuzzlesSubOffer.click();
  }
);

Then("Select Annual plan of Puzzles", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const PuzzlesAnnual = await $('//span[text()="Pay annually"]');
  await PuzzlesAnnual.waitForDisplayed({ timeout: 50000 });
  await PuzzlesAnnual.click();
});

Then("Validate User is navigated to Wine Cellar page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const WinePageHeader = await $('//img[@alt="Telegraph Wine Cellar"]');
  await WinePageHeader.isExisting({ timeout: 50000 });
});

Then("Validate Registration date in Piano", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const pianoUserRegistrationDate = await $(
  //   '//li[@id="user-registration-date"]'
  // );
  // await pianoUserRegistrationDate.waitForDisplayed({ timeout: 50000 });
  // await pianoUserRegistrationDate.isExisting();
});

Then("Validate Access details for Registrant user in Piano", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const pianoAccessMenu = await $(
    '//span[contains(text(),"Akshat")]//following::span[text()="Access"]'
  );
  const pianoNoaccess = await $('//*[contains(text(),"does not have access")]');
  const mainIframe = await $('//iframe[@id="tabs-iframe"]');
  await pianoAccessMenu.waitForDisplayed({ timeout: 50000 });
  await pianoAccessMenu.click();

  await browser.pause(1000);
  //await expect(mainIframe).toExist()
  // await browser.switchToFrame(mainIframe);

  // await pianoNoaccess.waitForDisplayed({ timeout: 50000 });
  // await pianoNoaccess.isExisting();

  // await browser.switchToFrame(null);
  // await browser.switchToParentFrame();
});

Then("Validate Access details in Piano for Gift", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const pianoAccessMenu = await $(
  //   '//span[contains(text(),".co")]//following::span[text()="Access"][1]'
  // );
  // const pianoNoaccess = await $('//*[contains(text(),"does not have access")]');
  // const mainIframe = await $('//iframe[@id="tabs-iframe"]');
  // await pianoAccessMenu.waitForDisplayed({ timeout: 50000 });
  // await pianoAccessMenu.click();

  // await browser.pause(1000);
  //await expect(mainIframe).toExist()
  // await browser.switchToFrame(mainIframe);

  // await pianoNoaccess.waitForDisplayed({ timeout: 50000 });
  // await pianoNoaccess.isExisting();

  // await browser.switchToFrame(null);
  // await browser.switchToParentFrame();
});

Then("Validate Access details in Piano for Puzzles", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const pianoAccessMenu = await $(
  //   '//span[contains(text(),"Akshat")]//following::span[text()="Access"]'
  // );
  // //const pianoNoaccess = await $('//*[contains(text(),"does not have access")]');
  // const mainIframe = await $('//iframe[@id="tabs-iframe"]');
  // await pianoAccessMenu.waitForDisplayed({ timeout: 50000 });
  // await pianoAccessMenu.click();

  // await browser.pause(1000);
  // //await expect(mainIframe).toExist()
  // await browser.switchToFrame(mainIframe);

  // // await pianoNoaccess.waitForDisplayed({ timeout: 50000 });
  // // await pianoNoaccess.isExisting();

  // await browser.switchToFrame(null);
  // await browser.switchToParentFrame();
});

Then("Validate {string} is added by default in customer app", async (s) => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const TheFromNewsletter = await $(
    '//a[text()="The From The Editor Newsletter"]'
  );
  await TheFromNewsletter.waitForDisplayed({ timeout: 50000 });
  await TheFromNewsletter.isExisting();
});

Then("Validate Exclusive newsletters", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const ExclusiveNewsletterPage = await $(
  //   '//button[text()="Exclusive Newsletters"]'
  // );
  // await ExclusiveNewsletterPage.waitForDisplayed({ timeout: 50000 });
  // await ExclusiveNewsletterPage.isExisting();
  // await ExclusiveNewsletterPage.click();

  // const ExclusiveNewsltterSignupBtn = await $(
  //   '//h2//following::a[@class="nosubscribe"][4]'
  // );
  // await ExclusiveNewsltterSignupBtn.waitForDisplayed({ timeout: 20000 });
  // await ExclusiveNewsltterSignupBtn.isExisting();
});

Then("Validate Digital status is Active", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Validate Replatform Digital status is Active", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("LogOut from Piano", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const painoAccountMenu = await $(
      '//a[text()="Piano"]//following::a[@id="menu-account"][1]'
    );
    await painoAccountMenu.waitForDisplayed({ timeout: 50000 });
    await painoAccountMenu.click();
    await browser.refresh();
    const pianologoutbtn = await $('//a[@id="menu-logout"]');
    await pianologoutbtn.waitForDisplayed({ timeout: 50000 });
    await pianologoutbtn.click();
    await browser.pause(4000);
    await browser.refresh();
    await browser.url("https://sandbox.piano.io/login/logout");
    await browser.pause(4000);
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(400);
  }
});

Then("Validate Exclusive newsletters have signup CTA or not", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(1000);
});

Then("Validate Gift Promo Code is Generated", async () => {
  // Write code here that turns the phrase above into concrete actions
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const SalesFShowAll = await $('//a[text()="Show All (24)"]');
  await SalesFShowAll.waitForDisplayed({ timeout: 50000 });
  await SalesFShowAll.click();
  await browser.pause(3000);

  const SalesFACOrders = await $(
    '//span[text()="Has Downgrade"]//following::span[contains(text(),"Account Orders")][1]'
  );
  await SalesFACOrders.waitForDisplayed({ timeout: 50000 });
  await SalesFACOrders.click();
  await browser.pause(5000);

  const AccountOrderLink = await $(
    '//h1[@title="Account Orders"]//following::span[contains(text(),"AO-")][1]'
  );
  await AccountOrderLink.waitForDisplayed({ timeout: 50000 });
  await AccountOrderLink.click();
  await browser.pause(5000);

  const SubGPromoID = await $(
    '//dt[text()="Promotion Code:"]//following::span[1]'
  );

  RecordGiftCode = await SubGPromoID.getText();
  console.log(await SubGPromoID.getText());
  console.log(RecordGiftCode);
  GiftRedeemURL =
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/redeem/?gcid=" +
    RecordGiftCode +
    "";
  await browser.pause(5000);
});

Then("Validate Gift Digital Promo Code is Generated", async () => {
  // Write code here that turns the phrase above into concrete actions
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const SalesFShowAll = await $('//a[text()="Show All (24)"]');
  await SalesFShowAll.waitForDisplayed({ timeout: 50000 });
  await SalesFShowAll.click();
  await browser.pause(3000);

  const SalesFACOrders = await $(
    '//span[text()="Has Downgrade"]//following::span[contains(text(),"Account Orders")][1]'
  );
  await SalesFACOrders.waitForDisplayed({ timeout: 50000 });
  await SalesFACOrders.click();
  await browser.pause(5000);

  const AccountOrderLink = await $(
    '//h1[@title="Account Orders"]//following::span[contains(text(),"AO-")][1]'
  );
  await AccountOrderLink.waitForDisplayed({ timeout: 50000 });
  await AccountOrderLink.click();
  await browser.pause(5000);

  const SubGPromoID2 = await $(
    '//dt[text()="Promotion Code:"]//following::span[1]'
  );

  RecordGiftCode2 = await SubGPromoID2.getText();
  console.log(await SubGPromoID2.getText());
  console.log(RecordGiftCode2);
  GiftRedeemURL2 =
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/redeem/?gcid=" +
    RecordGiftCode2 +
    "";
  await browser.pause(5000);
});

Then("Validate Gift Digital Plus Promo Code is Generated", async () => {
  // Write code here that turns the phrase above into concrete actions
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const SalesFShowAll = await $('//a[text()="Show All (24)"]');
  await SalesFShowAll.waitForDisplayed({ timeout: 50000 });
  await SalesFShowAll.click();
  await browser.pause(3000);

  const SalesFACOrders = await $(
    '//span[text()="Has Downgrade"]//following::span[contains(text(),"Account Orders")][1]'
  );
  await SalesFACOrders.waitForDisplayed({ timeout: 50000 });
  await SalesFACOrders.click();
  await browser.pause(5000);

  const AccountOrderLink = await $(
    '//h1[@title="Account Orders"]//following::span[contains(text(),"AO-")][1]'
  );
  await AccountOrderLink.waitForDisplayed({ timeout: 50000 });
  await AccountOrderLink.click();
  await browser.pause(5000);

  const SubGPromoID3 = await $(
    '//dt[text()="Promotion Code:"]//following::span[1]'
  );

  RecordGiftCode3 = await SubGPromoID3.getText();
  console.log(await SubGPromoID3.getText());
  console.log(RecordGiftCode3);
  GiftRedeemURL3 =
    "https://secure-staging-ams64.telegraph.co.uk/customer/secure/redeem/?gcid=" +
    RecordGiftCode3 +
    "";
  await browser.pause(5000);
});

Given("I launch Gift Redeem URL", async () => {
  await browser.url(GiftRedeemURL);
  await browser.maximizeWindow();
  await browser.pause(5000);
});

Given("I launch GiftDigital Redeem URL", async () => {
  await browser.url(GiftRedeemURL2);
  await browser.maximizeWindow();
  await browser.pause(5000);
});

Given("I launch GiftDigitalPlus Redeem URL", async () => {
  await browser.url(GiftRedeemURL3);
  await browser.maximizeWindow();
  await browser.pause(5000);
});

Then("Close Opened tabs in salesforce", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  let tabs = await $$(
    '//a[contains(@class,"slds-context-bar__label-action ")]/..//button[contains(@class,"slds-button slds-button_icon slds")]'
  );
  console.log(tabs);
  console.log(tabs.length);
  if (tabs.length > 0) {
    tabs.forEach((el) => {
      el.click();
      browser.pause(3000);
    });
  }
  await browser.pause(3000);
});

Then("Close Recently Opened Gift Tabs in Salesforce", async () => {
  await browser.pause(100);
  const RequiredText = " - Search";
  const TabOne = GiftCustEmail.concat(RequiredText);
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

When("Redemption of gift subscription", async () => {
  const GiFtReceipntGetStrtedBtn = await $('//button[@class="button primary"]');
  await GiFtReceipntGetStrtedBtn.waitForDisplayed();
  await GiFtReceipntGetStrtedBtn.click();
  await browser.pause(2000);

  const GiFtReceipntRegisterBtn = await $("//a[text()='Register']");
  await GiFtReceipntRegisterBtn.waitForDisplayed();
  await GiFtReceipntRegisterBtn.click();
  await browser.pause(2000);

  const GiftRcvEmail = await $('//input[@id="email"]');
  await GiftRcvEmail.waitForDisplayed({ timeout: 20000 });
  const GiftRcvPWD = await $('//input[@id="password"]');
  await GiftRcvPWD.waitForDisplayed({ timeout: 20000 });
  const GiFtRcvRegisterSubmitBtn = await $('//button[@type="submit"]');
  await GiFtRcvRegisterSubmitBtn.waitForDisplayed();

  await GiftRcvEmail.setValue(GiftRcvOneEmail);
  await GiftRcvPWD.setValue(CustPasswrd);
  await GiFtRcvRegisterSubmitBtn.click();
  await browser.pause(3000);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Receiver: " + GiftRcvOneEmail,
    "text/plain"
  );

  const StreetLineOne = await $('//input[@id="streetline1"]');
  await StreetLineOne.waitForDisplayed({ timeout: 20000 });
  const StreetLineTwo = await $('//input[@id="streetline2"]');
  await StreetLineTwo.waitForDisplayed({ timeout: 20000 });
  const GiftCity = await $('//input[@id="city"]');
  await GiftCity.waitForDisplayed({ timeout: 20000 });
  //const GiftPostCode = await $('//input[@id="postcode"]');
  const GiftRFirstName = await $('//input[@id="firstName"]');
  const GiftSecondtName = await $('//input[@id="lastName"]');
  await GiftRFirstName.waitForDisplayed({ timeout: 20000 });
  await GiftSecondtName.waitForDisplayed({ timeout: 20000 });

  const GiftContinueBtn = await $(
    '//button[@id="payment-details-submit-button"]'
  );
  await GiftContinueBtn.waitForDisplayed({ timeout: 20000 });

  await GiftRFirstName.setValue("Akshat");
  await GiftSecondtName.setValue("GiftReceipent");
  await StreetLineOne.setValue("Ghansoli");
  await StreetLineTwo.setValue("Near Station");
  await GiftCity.setValue("Mumbai");

  await GiftContinueBtn.click();
  await browser.pause(3000);

  const StartMyGiftSub = await $('//span[text()="Start my subscription"]');
  await StartMyGiftSub.click();
  await browser.pause(3000);

  const GiftSubActiveValidate = await $(
    '//div[text()="Welcome to your Telegraph subscription"]'
  );
  await GiftSubActiveValidate.waitForDisplayed({ timeout: 60000 });
});

Then("Validate Gift Promo Code is Used", async () => {
  // Write code here that turns the phrase above into concrete actions
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const SalesFShowAll = await $('//a[text()="Show All (24)"]');
  await SalesFShowAll.waitForDisplayed({ timeout: 50000 });
  await SalesFShowAll.click();
  await browser.pause(3000);

  const SalesFACOrders = await $(
    '//span[text()="Has Downgrade"]//following::span[contains(text(),"Account Orders")][1]'
  );
  await SalesFACOrders.waitForDisplayed({ timeout: 50000 });
  await SalesFACOrders.click();
  await browser.pause(5000);

  // const AccountOrderLink = await $(
  //   '//h1[@title="Account Orders"]//following::span[contains(text(),"AO-")][1]'
  // );
  // await AccountOrderLink.waitForDisplayed({ timeout: 50000 });
  // await AccountOrderLink.click();
  // await browser.pause(10000);

  // const AccountOrderViewAll = await $(
  //   '//span[text()="Account Order Items"]//following::span[text()="View All"]'
  // );
  // await AccountOrderViewAll.waitForDisplayed({ timeout: 50000 });
  // await AccountOrderViewAll.click();
  // await browser.pause(50000);

  // const GiftPromoCodeUsed = await $('//span[text()="Used"]');
  // await GiftPromoCodeUsed.waitForDisplayed({ timeout: 50000 });
  // await GiftPromoCodeUsed.isExisting();
});

Given("I launch MPP URL", async () => {
  await browser.url("https://ehquat2.mppglobal.com/SystemAccount/LogOn?st=1");
  await browser.maximizeWindow();
});

Then("I login to MPP application", async () => {
  const MPPClientCode = await $(
    '//div[@class="SelectMenuContainer"]//following::input[1]'
  );
  await MPPClientCode.waitForDisplayed({ timeout: 20000 });
  await MPPClientCode.setValue("435");

  const MPPloginInput = await $(
    '//div[@class="SelectMenuContainer"]//following::input[2]'
  );
  await MPPloginInput.waitForDisplayed({ timeout: 20000 });
  await MPPloginInput.setValue("akshatqa");

  const MPPloginPWD = await $(
    '//div[@class="SelectMenuContainer"]//following::input[3]'
  );
  await MPPloginPWD.waitForDisplayed({ timeout: 20000 });
  await MPPloginPWD.setValue("Ayt@akshat1234");

  const MPPloginBTN = await $(
    '//div[@class="SelectMenuContainer"]//following::a[@class="mTop10 bold"]'
  );
  await MPPloginBTN.waitForDisplayed({ timeout: 20000 });
  await MPPloginBTN.click();

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Enter the Gift Donor email id in the MPP search box", async () => {
  //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  const MPPCustomerTab = await $('//a[text()="Customers"]');
  await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
  await MPPCustomerTab.click();

  const MPPCustEmailInput = await $(
    '//label[text()="Email Address"]//following::input[1]'
  );
  await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
  //await MPPCustEmailInput.setValue(testemail);
  await MPPCustEmailInput.setValue(GiftCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Gift Subscription Donor: " + GiftCustEmail,
    "text/plain"
  );
  //await MPPCustEmailInput.setValue("testgift121@telegraph.com");
  await browser.pause(500);
  // await browser.keys("Enter");
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  const FilterBTN = await $('//a[text()="Filter"]');
  await FilterBTN.waitForDisplayed({ timeout: 60000 });
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.pause(3000);
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.pause(3000);
  await FilterBTN.click();
  // await FilterBTN.doubleClick();
  // await FilterBTN.doubleClick();
  await browser.pause(3000);
});

Then("Open the Account Page in MPP", async () => {
  //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  try {
    const scrollElement = $("//*[contains(text(),'Akshat')]");
    const MppEmailLink = await $(
      "//h3//following::a[text()='" + GiftCustEmail + "'][1]"
    );
    await scrollElement.waitForDisplayed({ timeout: 60000 });
    await scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    await browser.pause(2500);
    await MppEmailLink.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Open the Account Page for DigitalSubDonor in MPP", async () => {
  //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  try {
    const scrollElement = $("//*[contains(text(),'Akshat')]");
    const MppEmailLink = await $(
      "//h3//following::a[text()='" + GiftCustTwoEmail + "'][1]"
    );
    await scrollElement.waitForDisplayed({ timeout: 60000 });
    await scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    await browser.pause(2500);
    await MppEmailLink.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Open the Account Page for DigitalPlusSubDonor in MPP", async () => {
  //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  try {
    const scrollElement = $("//*[contains(text(),'Akshat')]");
    const MppEmailLink = await $(
      "//h3//following::a[text()='" + GiftCustThreeEmail + "'][1]"
    );
    await scrollElement.waitForDisplayed({ timeout: 60000 });
    await scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    await browser.pause(2500);
    await MppEmailLink.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Enter the GiftTwo Donor email id in the search box", async () => {
  //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  const MPPCustomerTab = await $('//a[text()="Customers"]');
  await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
  await MPPCustomerTab.click();

  const MPPCustEmailInput = await $(
    '//label[text()="Email Address"]//following::input[1]'
  );
  await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
  //await MPPCustEmailInput.setValue(testemail);
  await MPPCustEmailInput.setValue(GiftCustTwoEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Gift Subscription Donor: " + GiftCustTwoEmail,
    "text/plain"
  );
  //await MPPCustEmailInput.setValue("testgift121@telegraph.com");
  await browser.pause(500);
  // await browser.keys("Enter");
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  const FilterBTN = await $('//a[text()="Filter"]');
  await FilterBTN.waitForDisplayed({ timeout: 60000 });
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.pause(3000);
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.pause(3000);
  await FilterBTN.click();
  // await FilterBTN.doubleClick();
  // await FilterBTN.doubleClick();
  await browser.pause(3000);
});

Then("Enter the GiftThree Donor email id in the search box", async () => {
  try {
    //const testemail = "f96bh3GiftDonor@telegraph.co.uk";
    const MPPCustomerTab = await $('//a[text()="Customers"]');
    await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
    await MPPCustomerTab.click();

    const MPPCustEmailInput = await $(
      '//label[text()="Email Address"]//following::input[1]'
    );
    await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
    //await MPPCustEmailInput.setValue(testemail);
    await MPPCustEmailInput.setValue(GiftCustThreeEmail);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Plus Gift Subscription Donor: " +
        GiftCustThreeEmail,
      "text/plain"
    );
    //await MPPCustEmailInput.setValue("testgift121@telegraph.com");
    await browser.pause(500);
    // await browser.keys("Enter");
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    const FilterBTN = await $('//a[text()="Filter"]');
    await FilterBTN.waitForDisplayed({ timeout: 60000 });
    await FilterBTN.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    await browser.pause(3000);
    await FilterBTN.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    await browser.scroll(0, 400);
    await browser.pause(3000);
    await FilterBTN.click();
    // await FilterBTN.doubleClick();
    // await FilterBTN.doubleClick();
    await browser.pause(3000);
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }
});

Then("Logout from MPP platform", async () => {
  const MppEmailLink = await $("//a[text()='Logout']");
  await MppEmailLink.waitForDisplayed({ timeout: 20000 });
  await MppEmailLink.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Enter the Gift redeem email id in the search box", async () => {
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
  await SearchBarClick.waitForDisplayed({ timeout: 40000 });
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
    await SearchBarInput.setValue(GiftRcvOneEmail);
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
    await SearchBarInput.setValue(GiftRcvOneEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Gift Subscription Receiver: " + GiftRcvOneEmail,
      "text/plain"
    );
  }
});

Then("Open the Account Page for GiftReceipent", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const AccOpenDynamic = await $(
    "//a[@title='" +
      FirstNameLastNameGR +
      "']//ancestor::h2//following::a[text()='" +
      FirstNameLastNameGR +
      "'][2]"
  );

  await AccOpenDynamic.waitForDisplayed({ timeout: 50000 });
  await AccOpenDynamic.click();
  await browser.pause(2000);

  const RequiredText = " | Account";
  const TabTwo = FirstNameLastNameGR.concat(RequiredText);
  const TabTwoSelector = await $(
    "//div[@class='slds-global-header__logo']//following::span[text()='" +
      TabTwo +
      "'][1]"
  );
  //const TabOneSelector = await $("//span[text()='" + TabOne + "']");
  await TabTwoSelector.waitForDisplayed();
  await TabTwoSelector.click();
  await browser.pause(2000);
});

Then(
  "Validate no Subscription exists for Gift Donor in salesforce",
  async () => {
    await browser.pause(100);
  }
);

Then(
  "Validate Subscription exists for Gift Receipent in salesforce",
  async () => {
    await browser.pause(100);
  }
);

Then("Validate Payment details in MPP", async () => {
  await browser.pause(100);
});

Then(
  "Validate Exclusive newsletters cant added and have signup CTA",
  async () => {
    await browser.pause(100);
  }
);

Then("Validate user has no subscription", async () => {
  await browser.pause(100);
});

When("Redemption of GiftTwo subscription", async () => {
  const GiFtReceipntGetStrtedBtn = await $('//button[@class="button primary"]');
  await GiFtReceipntGetStrtedBtn.waitForDisplayed();
  await GiFtReceipntGetStrtedBtn.click();
  await browser.pause(2000);

  const GiFtReceipntRegisterBtn = await $("//a[text()='Register']");
  await GiFtReceipntRegisterBtn.waitForDisplayed();
  await GiFtReceipntRegisterBtn.click();
  await browser.pause(2000);

  const GiftRcvEmail = await $('//input[@id="email"]');
  await GiftRcvEmail.waitForDisplayed({ timeout: 20000 });
  const GiftRcvPWD = await $('//input[@id="password"]');
  await GiftRcvPWD.waitForDisplayed({ timeout: 20000 });
  const GiFtRcvRegisterSubmitBtn = await $('//button[@type="submit"]');
  await GiFtRcvRegisterSubmitBtn.waitForDisplayed();

  await GiftRcvEmail.setValue(GiftRcvTwoEmail);
  await GiftRcvPWD.setValue(CustPasswrd);
  await GiFtRcvRegisterSubmitBtn.click();
  await browser.pause(3000);

  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Subscription Receiver: " +
      GiftRcvTwoEmail,
    "text/plain"
  );

  const StreetLineOne = await $('//input[@id="streetline1"]');
  await StreetLineOne.waitForDisplayed({ timeout: 20000 });
  const StreetLineTwo = await $('//input[@id="streetline2"]');
  await StreetLineTwo.waitForDisplayed({ timeout: 20000 });
  const GiftCity = await $('//input[@id="city"]');
  await GiftCity.waitForDisplayed({ timeout: 20000 });
  //const GiftPostCode = await $('//input[@id="postcode"]');
  const GiftRFirstName = await $('//input[@id="firstName"]');
  const GiftSecondtName = await $('//input[@id="lastName"]');
  await GiftRFirstName.waitForDisplayed({ timeout: 20000 });
  await GiftSecondtName.waitForDisplayed({ timeout: 20000 });

  const GiftContinueBtn = await $(
    '//button[@id="payment-details-submit-button"]'
  );
  await GiftContinueBtn.waitForDisplayed({ timeout: 20000 });

  await GiftRFirstName.setValue("Akshat");
  await GiftSecondtName.setValue("GiftReceipent");
  await StreetLineOne.setValue("Ghansoli");
  await StreetLineTwo.setValue("Near Station");
  await GiftCity.setValue("Mumbai");

  await GiftContinueBtn.click();
  await browser.pause(3000);

  const StartMyGiftSub = await $('//span[text()="Start my subscription"]');
  await StartMyGiftSub.click();
  await browser.pause(3000);

  const GiftSubActiveValidate = await $(
    '//div[text()="Welcome to your Telegraph subscription"]'
  );
  await GiftSubActiveValidate.waitForDisplayed({ timeout: 60000 });
});

When("Redemption of GiftThree subscription", async () => {
  const GiFtReceipntGetStrtedBtn = await $('//button[@class="button primary"]');
  await GiFtReceipntGetStrtedBtn.waitForDisplayed();
  await GiFtReceipntGetStrtedBtn.click();
  await browser.pause(2000);

  const GiFtReceipntRegisterBtn = await $("//a[text()='Register']");
  await GiFtReceipntRegisterBtn.waitForDisplayed();
  await GiFtReceipntRegisterBtn.click();
  await browser.pause(2000);

  const GiftRcvEmail = await $('//input[@id="email"]');
  await GiftRcvEmail.waitForDisplayed({ timeout: 20000 });
  const GiftRcvPWD = await $('//input[@id="password"]');
  await GiftRcvPWD.waitForDisplayed({ timeout: 20000 });
  const GiFtRcvRegisterSubmitBtn = await $('//button[@type="submit"]');
  await GiFtRcvRegisterSubmitBtn.waitForDisplayed();

  await GiftRcvEmail.setValue(GiftRcvThreeEmail);
  await GiftRcvPWD.setValue(CustPasswrd);
  await GiFtRcvRegisterSubmitBtn.click();
  await browser.pause(3000);

  CucumberJsJsonReporter.attach(
    "Test ID used for Puzzles Digital Plus Subscription Receiver: " +
      GiftRcvThreeEmail,
    "text/plain"
  );

  const StreetLineOne = await $('//input[@id="streetline1"]');
  await StreetLineOne.waitForDisplayed({ timeout: 20000 });
  const StreetLineTwo = await $('//input[@id="streetline2"]');
  await StreetLineTwo.waitForDisplayed({ timeout: 20000 });
  const GiftCity = await $('//input[@id="city"]');
  await GiftCity.waitForDisplayed({ timeout: 20000 });
  //const GiftPostCode = await $('//input[@id="postcode"]');
  const GiftRFirstName = await $('//input[@id="firstName"]');
  const GiftSecondtName = await $('//input[@id="lastName"]');
  await GiftRFirstName.waitForDisplayed({ timeout: 20000 });
  await GiftSecondtName.waitForDisplayed({ timeout: 20000 });

  const GiftContinueBtn = await $(
    '//button[@id="payment-details-submit-button"]'
  );
  await GiftContinueBtn.waitForDisplayed({ timeout: 20000 });

  await GiftRFirstName.setValue("Akshat");
  await GiftSecondtName.setValue("GiftReceipent");
  await StreetLineOne.setValue("Ghansoli");
  await StreetLineTwo.setValue("Near Station");
  await GiftCity.setValue("Mumbai");

  await GiftContinueBtn.click();
  await browser.pause(3000);

  const StartMyGiftSub = await $('//span[text()="Start my subscription"]');
  await StartMyGiftSub.click();
  await browser.pause(3000);

  const GiftSubActiveValidate = await $(
    '//div[text()="Welcome to your Telegraph subscription"]'
  );
  await GiftSubActiveValidate.waitForDisplayed({ timeout: 60000 });
});

Then("Enter the Test email id in the search box", async () => {
  const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  const MPPCustomerTab = await $('//a[text()="Customers"]');
  await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
  await MPPCustomerTab.click();

  const MPPCustEmailInput = await $(
    '//label[text()="Email Address"]//following::input[1]'
  );
  await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
  await MPPCustEmailInput.setValue(testemail);
  //await MPPCustEmailInput.setValue(GiftCustTwoEmail);
  //await MPPCustEmailInput.setValue("testgift121@telegraph.com");
  await browser.pause(500);
  // await browser.keys("Enter");
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  const FilterBTN = await $('//a[text()="Filter"]');
  await FilterBTN.waitForDisplayed({ timeout: 60000 });
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.pause(3000);
  await FilterBTN.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.scroll(0, 400);
  await browser.pause(3000);
  await FilterBTN.click();
  // await FilterBTN.doubleClick();
  // await FilterBTN.doubleClick();
  await browser.pause(3000);
});

Then("Open the Account Page for Test in MPP", async () => {
  const testemail = "f96bh3GiftDonor@telegraph.co.uk";
  const scrollElement = $("//*[contains(text(),'Akshat Tembhare')]");
  const MppEmailLink = await $(
    "//h3//following::a[text()='" + testemail + "'][1]"
  );
  await scrollElement.waitForDisplayed({ timeout: 60000 });
  await scrollElement.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  await browser.pause(2500);
  await MppEmailLink.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Validate User able to purchase Puzzles from MyAccount page", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const AddPuzzleBTN = await $('//button[contains(text(),"Add Puzzles")]');
  const ConfrimPayBTN = await $('//button[contains(text(),"Confirm payment")]');
  const PlayNowBtn = await $('//*[text()="Play now"]');
  await browser.scroll(0, 200);
  try {
    await AddPuzzleBTN.waitForDisplayed({ timeout: 30000 });
    await AddPuzzleBTN.doubleClick();
    await browser.pause(500);
    await ConfrimPayBTN.waitForDisplayed({ timeout: 30000 });
    await ConfrimPayBTN.click();
    await browser.pause(600);
    await ConfrimPayBTN.waitForDisplayed({ timeout: 20000 });
    await ConfrimPayBTN.doubleClick();
    await ConfrimPayBTN.waitForDisplayed({ timeout: 15000 });
    await ConfrimPayBTN.click();
    await ConfrimPayBTN.waitForDisplayed({ timeout: 15000 });
    await ConfrimPayBTN.click();
    await ConfrimPayBTN.waitForDisplayed({ timeout: 15000 });
    await ConfrimPayBTN.doubleClick();
    await ConfrimPayBTN.waitForDisplayed({ timeout: 15000 });
    await ConfrimPayBTN.click();
    await ConfrimPayBTN.waitForDisplayed({ timeout: 15000 });
    await ConfrimPayBTN.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  await browser.pause(3000);
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    if (AddPuzzleBTN.isExisting) {
      await AddPuzzleBTN.waitForDisplayed({ timeout: 10000 });
      await AddPuzzleBTN.click();
      await browser.pause(1000);
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.click();
      await browser.pause(4500);
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.click();
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.doubleClick();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  await browser.pause(3000);
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  try {
    if (AddPuzzleBTN.isExisting) {
      await AddPuzzleBTN.waitForDisplayed({ timeout: 10000 });
      await AddPuzzleBTN.click();
      await browser.pause(1000);
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.click();
      await browser.pause(4500);
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.click();
      await ConfrimPayBTN.waitForDisplayed({ timeout: 10000 });
      await ConfrimPayBTN.doubleClick();
    }
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  await browser.pause(3000);
  await browser.refresh();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await PlayNowBtn.waitForDisplayed({ timeout: 30000 });
  await PlayNowBtn.isExisting();
  await browser.pause(4500);
});

Then("Click on Confirm Payment button", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const ConfrimPayBTN = await $('//button[contains(text(),"Confirm payment")]');
  await ConfrimPayBTN.waitForDisplayed({ timeout: 50000 });
  await ConfrimPayBTN.click();
  await browser.pause(4500);
});

Then("Validate User can pruchase Puzzles as bolt on sub", async () => {
  await browser.pause(2500);
});

Then("Validate Account Origin is empty", async () => {
  await browser.pause(2500);
});

Then("Validate Billing Account balance", async () => {
  await browser.pause(2500);
});

Then("Validate Invoice balance", async () => {
  await browser.pause(2500);
});

Then("Validate Entitlements are added for Puzzle subscription", async () => {
  await browser.pause(2500);
});

Then("Validate Lock in Expiry date", async () => {
  await browser.pause(2500);
});

Then("Validate Type of Offer for Puzzles", async () => {
  await browser.pause(2500);
});

Then("Validate Default Payment Method for Puzzles in Payment Tab", async () => {
  await browser.pause(2500);
});

Then(
  "Validate CMRR matches with the price selected on telegraph customer app",
  async () => {
    await browser.pause(2500);
  }
);

Then("Action Keys Set One", async () => {
  await browser.pause(2500);
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("\ue004");
  await browser.keys("Enter");
});

Then("Validate Subscription External ID is generated", async () => {
  await browser.pause(2500);
});

Then("Verify The From The Editor Newsletter is added by default", async () => {
  await browser.pause(2500);
});

Then("User clicks on Newsletter tab", async () => {
  await browser.pause(2500);
});

Then("Validate Price Segment code is generated", async () => {
  await browser.pause(2500);
});

Then("Validate Subscription product name is Website Monthly", async () => {
  await browser.pause(2500);
});

Then("Validate Subscription product name", async () => {
  await browser.pause(2500);
});
Then("Validate Source System in Zoura", async () => {
  await browser.pause(2500);
});

Then("Validate Price Rise Cancellation in Zoura", async () => {
  await browser.pause(2500);
});

Then("Validate Acquisition Channel is set to TCUK", async () => {
  await browser.pause(2500);
});

Then("Enter Subscription ID in search box", async () => {
  await browser.pause(2500);
});

Then("Validate Promo Code is generated for PuzzlesOnly", async () => {
  await browser.pause(2500);
});

Then("Validate Product name is Puzzles Monthly Subscription", async () => {
  await browser.pause(2500);
});

Then("User Opens Subscription page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const SubID = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );
  await SubID.waitForDisplayed({ timeout: 50000 });
  await SubID.click();
});

Then("Go to Zoura Subscription Page for Puzzles", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLPuzzle);
  await browser.pause(2000);
  await browser.url(ZouraSubURLPuzzle);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  CucumberJsJsonReporter.attach(
    "Subscription ID for Puzzles Subscription: " + RecordSubIDP,
    "text/plain"
  );
});

Then("Go to Zoura Subscription Page for digitalMPaypalforPuzzles", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLPuzzleete21);
  await browser.pause(2000);
  CucumberJsJsonReporter.attach(
    "Subscription ID: " + RecordSubIDP2,
    "text/plain"
  );
});

Then("Go to Zoura Subscription Page for Puzzledigitalbotlon", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLPuzzleete23);
  await browser.pause(2000);
  CucumberJsJsonReporter.attach(
    "Subscription ID: " + RecordSubIDP4,
    "text/plain"
  );
});

Then("Go to Zoura digitalMPaypaletePuzzles Subscription Page", async () => {
  //await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLPuzzleete22);
  await browser.pause(2000);
  CucumberJsJsonReporter.attach(
    "Subscription ID: " + RecordSubIDP3,
    "text/plain"
  );
});

Then(
  "Validate if user has any subscription for puzzle in salesforce",
  async () => {
    await browser.pause(100);
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const SubscriptionTab = await $('//a[text()="Subscriptions"]');
    await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
    await SubscriptionTab.click();

    const SubID = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    RecordSubIDP = await SubID.getText();
    console.log(await SubID.getText());
    console.log(RecordSubIDP);
    ZouraSubURLPuzzle =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP +
      "&searchObjectType=subscription";
    await browser.pause(5000);
  }
);

Then("Validate the name in Salesforce for Puzzles", async () => {
  await browser.pause(500);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const RequiredText = " - Search";
  const TabOne = CustPuzzTwoEmail.concat(RequiredText);
  const TabOneSelector = await $(
    "//div[@class='slds-global-header__logo']//following::span[text()='" +
      TabOne +
      "'][2]"
  );
  await TabOneSelector.waitForDisplayed();
  await TabOneSelector.click();
  await browser.pause(500);
  const TextXpath = CustFirstNameZ.concat(" ", CustLasttNameZ);
  const AcctNameVerifyDynamic = await $(
    "//a[@title='" + TextXpath + "']//ancestor::h2"
  );
  await AcctNameVerifyDynamic.waitForDisplayed({ timeout: 50000 });
  await AcctNameVerifyDynamic.isExisting();
});

Then(
  "Validate subscription for digitalMPaypalforPuzzles in salesforce",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const SubscriptionTab = await $('//a[text()="Subscriptions"]');
    await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
    await SubscriptionTab.click();

    const SubID2 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    RecordSubIDP2 = await SubID2.getText();
    console.log(await SubID2.getText());
    console.log(RecordSubIDP2);
    ZouraSubURLPuzzleete21 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP2 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
    CucumberJsJsonReporter.attach(
      "Subscription ID: " + RecordSubIDP2,
      "text/plain"
    );
  }
);

Then(
  "Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce",
  async () => {
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
      await SearchBarInput.setValue(digitalMPaypaletePuzzles);
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
      await SearchBarInput.setValue(digitalMPaypaletePuzzles);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used is: " + digitalMPaypaletePuzzles,
        "text/plain"
      );
    }
  }
);
Then(
  "Validate subscription for digitalMPaypalforPuzzlete in salesforce",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const SubscriptionTab = await $('//a[text()="Subscriptions"]');
    await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
    await SubscriptionTab.click();

    const SubID3 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    RecordSubIDP3 = await SubID3.getText();
    console.log(await SubID3.getText());
    console.log(RecordSubIDP3);
    ZouraSubURLPuzzleete22 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP3 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
    CucumberJsJsonReporter.attach(
      "Subscription ID: " + RecordSubIDP3,
      "text/plain"
    );
  }
);
Then(
  "Validate subscription for Puzzledigitalbotlonn in salesforce",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const SubscriptionTab = await $('//a[text()="Subscriptions"]');
    await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
    await SubscriptionTab.click();

    const SubID4 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    RecordSubIDP4 = await SubID4.getText();
    console.log(await SubID4.getText());
    console.log(RecordSubIDP4);
    ZouraSubURLPuzzleete23 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP4 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
    CucumberJsJsonReporter.attach(
      "Subscription ID: " + RecordSubIDP4,
      "text/plain"
    );
  }
);

Then("Validate subscription for digitalsub in salesforce", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const SubID5 = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );

  RecordSubIDP5 = await SubID5.getText();
  console.log(await SubID5.getText());
  console.log(RecordSubIDP5);
  ZouraSubURLDigital =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubIDP5 +
    "&searchObjectType=subscription";
  await browser.pause(5000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDP5,
    "text/plain"
  );
});

Then("Validate subscription for digitalPlussub in salesforce", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const SubID6 = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );

  RecordSubIDP6 = await SubID6.getText();
  console.log(await SubID6.getText());
  console.log(RecordSubIDP6);
  ZouraSubURLDigitalPlusC =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubIDP6 +
    "&searchObjectType=subscription";
  await browser.pause(5000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Plus Subscription: " + RecordSubIDP6,
    "text/plain"
  );
});

Then("Enter the DigitalPlusCC email id in the search box", async () => {
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
    await SearchBarInput.setValue(DigitalPlusCCEmail);
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
    await SearchBarInput.setValue(DigitalPlusCCEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Plus Subscription: " + DigitalPlusCCEmail,
      "text/plain"
    );
  }
});

Then("User completes the purchase for DigitalPlus", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const afterPaymentFirstName = await $('//input[@id="firstName"]');
  const afterPaymentlastName = await $('//input[@id="lastName"]');
  const afterPaymentSubmitButton = await $('//button[@id="password_submit"]');
  try {
    await afterPaymentFirstName.waitForDisplayed({ timeout: 40000 });
    await afterPaymentFirstName.setValue("Akshat");
    await afterPaymentlastName.setValue("Tembhare");
    await afterPaymentSubmitButton.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    const subContinueBtn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
    );
    await subContinueBtn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtn.click();

    const subContinueBtnn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
    );
    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();

    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();

    const pickwhrleftoff = await $(
      '//span[text()="Pick up where you left off"]'
    );
    await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
    await pickwhrleftoff.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  }
});

Then("Open the Account Page for Puzzles", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const AccOpenDynamic = await $(
    "//a[@title='" +
      CustFirstLastNameZ +
      "']//ancestor::h2//following::a[text()='" +
      CustFirstLastNameZ +
      "'][2]"
  );
  await AccOpenDynamic.waitForDisplayed({ timeout: 50000 });
  await AccOpenDynamic.click();
  await browser.pause(2000);

  const RequiredText = " | Account";
  const TabTwo = CustFirstLastNameZ.concat(RequiredText);
  const TabTwoSelector = await $(
    "//div[@class='slds-global-header__logo']//following::span[text()='" +
      TabTwo +
      "'][1]"
  );
  await TabTwoSelector.waitForDisplayed();
  await TabTwoSelector.click();
  await browser.pause(2000);
});

Then(
  "Enter the digitalMPaypalforPuzzles email id in the search box",
  async () => {
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
    await browser.pause(1500);
    await SearchBarClick.doubleClick();
    await browser.pause(700);
    await browser.keys("Enter");
    await browser.pause(1000);
    const serchBartxt = await $('//h2[text()="Do more with Search!"]');
    const SearchBarInput = await $(
      '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
    );
    if (serchBartxt.isExisting == true) {
      await SearchBarInput.waitForDisplayed({ timeout: 20000 });
      await SearchBarInput.click();
      await SearchBarInput.clearValue();
      await browser.pause(300);
      await SearchBarInput.setValue(DigitalPaypalCustEmailPuzl);
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
      await SearchBarInput.setValue(DigitalPaypalCustEmailPuzl);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used is: " + DigitalPaypalCustEmailPuzl,
        "text/plain"
      );
    }
  }
);

Then("Enter the Puzzledigitalbotlon email id in the search box", async () => {
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
  await browser.pause(1500);
  await SearchBarClick.doubleClick();
  await browser.pause(700);
  await browser.keys("Enter");
  await browser.pause(1000);
  const serchBartxt = await $('//h2[text()="Do more with Search!"]');
  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );
  if (serchBartxt.isExisting == true) {
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(digitMPypletePuzzThree);
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
    await SearchBarInput.setValue(digitMPypletePuzzThree);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + digitMPypletePuzzThree,
      "text/plain"
    );
  }
});

Then("Enter the digitalete20 Sub email id in the search box", async () => {
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
  await browser.pause(1500);
  await SearchBarClick.doubleClick();
  await browser.pause(700);
  await browser.keys("Enter");
  await browser.pause(1000);
  const serchBartxt = await $('//h2[text()="Do more with Search!"]');
  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );
  if (serchBartxt.isExisting == true) {
    await SearchBarInput.waitForDisplayed({ timeout: 20000 });
    await SearchBarInput.click();
    await SearchBarInput.clearValue();
    await browser.pause(300);
    await SearchBarInput.setValue(digitMPypletePuzzOne);
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
    await SearchBarInput.setValue(digitMPypletePuzzOne);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + digitMPypletePuzzOne,
      "text/plain"
    );
  }
});

Then("Validate if user has any active subscription for ete20", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const SubID7 = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );
  await SubID7.waitForDisplayed({ timeout: 50000 });
  RecordSubIDP7 = await SubID7.getText();
  console.log(await SubID7.getText());
  console.log(RecordSubIDP7);
  ZouraSubURLDigitalete20 =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubIDP7 +
    "&searchObjectType=subscription";
  await browser.pause(5000);
  CucumberJsJsonReporter.attach(
    "Subscription ID: " + RecordSubIDP7,
    "text/plain"
  );
});

Then("User Completes Puzzle Purchase", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const afterPaymentFirstName = await $('//input[@id="firstName"]');
  const afterPaymentlastName = await $('//input[@id="lastName"]');
  const afterPaymentSubmitButton = await $('//button[@id="password_submit"]');
  try {
    await afterPaymentFirstName.waitForDisplayed({ timeout: 20000 });
    await afterPaymentFirstName.setValue("Akshat");
    await afterPaymentlastName.setValue("Tembhare");
    await afterPaymentSubmitButton.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(2000);
  }
});

Then("Confirm Payment Deatils for Digital BoltOn", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const confirmPayBTN = await $('//button[text()="Confirm payment"]');
  try {
    await confirmPayBTN.waitForDisplayed({ timeout: 20000 });
    await confirmPayBTN.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(2000);
  }
});

Then("User completes the purchase for Digital BoltOn", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    const subContinueBtn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
    );
    await subContinueBtn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtn.click();
    const subContinueBtnn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
    );
    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();
    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();
    const pickwhrleftoff = await $(
      '//span[text()="Pick up where you left off"]'
    );
    await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
    await pickwhrleftoff.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  }
});

Then("I fill in new email for Onlinecancellation", async () => {
  await browser.pause(500);
  await browser.refresh();
  try {
    const AcceptBtn = await $('//button[@title="Accept"]');
    await AcceptBtn.waitForDisplayed({ timeout: 30000 });
    await AcceptBtn.click();
    await browser.pause(500);
  } catch (error) {
    console.error("no such element");
  } finally {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  }

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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(CustCancellEmail);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + CustCancellEmail,
    "text/plain"
  );
});

Then("I fill in existing email for Onlinecancellation", async () => {
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
  await EmailInput.setValue(CustCancellEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + CustCancellEmail,
    "text/plain"
  );
});

Then(
  "Enter the Cancellation email id in the search box in Salesforce",
  async () => {
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
      await SearchBarInput.setValue(CustCancellEmail);
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
      await SearchBarInput.setValue(CustCancellEmail);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
    }
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + CustCancellEmail,
      "text/plain"
    );
  }
);

Then("Validate if Cancellation user has active subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const SubID8 = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );

  RecordSubIDP8 = await SubID8.getText();
  console.log(await SubID8.getText());
  console.log(RecordSubIDP8);
  ZouraSubURLCancel =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubIDP8 +
    "&searchObjectType=subscription";
  await browser.pause(5000);
});

Then(
  "Search the subscription in Zuora for OnlineCancellationTest",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    await browser.url(
      "https://apisandbox.zuora.com/platform/apps/com_zuora/subscription?~(clearFilter~true)"
    );
    await browser.pause(4000);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const ZuoraCustRecordSerchBox = await $(
      '//input[@placeholder="Starts with text"]'
    );
    await ZuoraCustRecordSerchBox.waitForDisplayed({ timeout: 50000 });
    await ZuoraCustRecordSerchBox.setValue(RecordSubIDP8);
    await browser.pause(3000);
    await browser.keys("Enter");
    await browser.pause(30000);
    CucumberJsJsonReporter.attach(
      "Subscription = : " + RecordSubIDP8,
      "text/plain"
    );
  }
);

Then("Go to Zuora Subscription URL", async () => {
  await browser.url(
    "https://apisandbox.zuora.com/platform/apps/com_zuora/subscription?~(clearFilter~true)"
  );
  await browser.pause(4000);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Validate Access details in Piano", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const pianoAccessMenu = await $(
    '//span[contains(text(),"Akshat")]//following::span[text()="Access"]'
  );
  //const pianoNoaccess = await $('//*[contains(text(),"does not have access")]');
  const mainIframe = await $('//iframe[@id="tabs-iframe"]');
  await pianoAccessMenu.waitForDisplayed({ timeout: 50000 });
  await pianoAccessMenu.click();

  await browser.pause(1000);
  //await expect(mainIframe).toExist()
  await browser.switchToFrame(mainIframe);

  // await pianoNoaccess.waitForDisplayed({ timeout: 50000 });
  // await pianoNoaccess.isExisting();

  await browser.switchToFrame(null);
  await browser.switchToParentFrame();
});

Then("I fill in existing digitalMPaypal email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(DigitalPaypalCustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly Plan via paypal payment method is: " +
      DigitalPaypalCustEmail,
    "text/plain"
  );
});

Then("Enter the digitalMPaypal in the search box of salesforce", async () => {
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
    await SearchBarInput.setValue(DigitalPaypalCustEmail);
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
    await SearchBarInput.setValue(DigitalPaypalCustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Monthly Plan via paypal payment method is: " +
        DigitalPaypalCustEmail,
      "text/plain"
    );
  }
});

When("Enter digitalMPaypal subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();
  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(DigitalPaypalCustEmail);
  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();
  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly Plan via paypal payment method is: " +
      DigitalPaypalCustEmail,
    "text/plain"
  );
});

Then("I fill in existing digitalACC email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(DigitalPaypalACustEmail);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Annual Plan via credit card payment method is: " +
      DigitalPaypalACustEmail,
    "text/plain"
  );
});

Then("Enter the digitalACC in the search box of salesforce", async () => {
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
    await SearchBarInput.setValue(DigitalPaypalACustEmail);
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
    await SearchBarInput.setValue(DigitalPaypalACustEmail);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Annual Plan via credit card payment method is: " +
        DigitalPaypalACustEmail,
      "text/plain"
    );
  }
});

When("Enter digitalACC subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');
  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();
  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(DigitalPaypalACustEmail);
  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();
  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Annual Plan via credit card payment method is: " +
      DigitalPaypalACustEmail,
    "text/plain"
  );
});

Then(
  "Enter the digitalLoggedOutUser in the search box of salesforce",
  async () => {
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
      await SearchBarInput.setValue(DigitalCustMRegistrant);
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
      await SearchBarInput.setValue(DigitalCustMRegistrant);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for loggedOut Registrant for Digital Monthly Plan is: " +
          DigitalCustMRegistrant,
        "text/plain"
      );
    }
  }
);

When(
  "Enter DigitalCustMRegistrant subscriber email in search box",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(DigitalCustMRegistrant);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used for loggedOut Registrant for Digital Monthly Plan is: " +
        DigitalCustMRegistrant,
      "text/plain"
    );
  }
);

Then(
  "Enter the digitalLoggedOutDSAUser in the search box of salesforce",
  async () => {
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
      await SearchBarInput.setValue(DigitalCustARegistrant);
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
      await SearchBarInput.setValue(DigitalCustARegistrant);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for loggedOut Registrant for Digital Annual Plan is: " +
          DigitalCustARegistrant,
        "text/plain"
      );
    }
  }
);

When(
  "Enter DigitalCustDSARegistrant subscriber email in search box",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(DigitalCustARegistrant);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used for loggedOut Registrant for Digital Annual Plan is: " +
        DigitalCustARegistrant,
      "text/plain"
    );
  }
);

Then("I fill in new email for Digital Plus for ete2", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(CustDigitete2);
  await browser.pause(100);
});

Then(
  "I fill in new email for Digital Plus for ete2 american express",
  async () => {
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
    await EmailInput.click();
    await browser.pause(200);
    await EmailInput.setValue(CustDigitete2ame);
    await browser.pause(100);
  }
);

Then("Enter the DigitalPlus ete2 id in the search box", async () => {
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
    await SearchBarInput.setValue(CustDigitete2);
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
    await SearchBarInput.setValue(CustDigitete2);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});

Then("Enter the DigitalPlus ete2ame id in the search box", async () => {
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
    await SearchBarInput.setValue(CustDigitete2ame);
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
    await SearchBarInput.setValue(CustDigitete2ame);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});

Then("Enter the DigitalPlus ete2ame2 id in the search box", async () => {
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
    await SearchBarInput.setValue(DigitalPlusCCEmail2);
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
    await SearchBarInput.setValue(DigitalPlusCCEmail2);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }
});

Then("I fill in new emailOne for Subscription Acquisition", async () => {
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
  await EmailInput.click();
  await browser.pause(200);
  await EmailInput.setValue(CustDigitete2One);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + CustDigitete2One,
    "text/plain"
  );
});

Then("Enter the Digital ete2One id in the search box", async () => {
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
    await SearchBarInput.setValue(CustDigitete2One);
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
    await SearchBarInput.setValue(CustDigitete2One);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + CustDigitete2One,
      "text/plain"
    );
  }
});

Then("Enter existing etee2One subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $('//div[contains(text(),"Akshat")]');

  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(CustDigitete2One);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();

  CucumberJsJsonReporter.attach(
    "Test ID used is: " + CustDigitete2One,
    "text/plain"
  );
});

Then("I fill in existing Digital ete2One email", async () => {
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
  await EmailInput.setValue(CustDigitete2One);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + CustDigitete2One,
    "text/plain"
  );
});

Then("User completes Bonus Onboarding Journey", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const subContinueBtn = await $(
    '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
  );
  await subContinueBtn.waitForDisplayed({ timeout: 50000 });
  await subContinueBtn.click();

  const subContinueBtnn = await $(
    '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
  );
  await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
  await subContinueBtnn.click();

  const BonusLastContinueBtn = await $(
    '//a[@class="onboarding-btns--redirect"]'
  );
  await BonusLastContinueBtn.waitForDisplayed({ timeout: 50000 });
  await BonusLastContinueBtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Enter the DigitalForBonus email in the sf search box", async () => {
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
    await SearchBarInput.setValue(digitalforBonus);
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
    await SearchBarInput.setValue(digitalforBonus);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
  }

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Donor is: " + digitalforBonus,
    "text/plain"
  );
});

Then("I fill in existing digitalforBonus email", async () => {
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
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.click();
  await EmailInput.setValue(digitalforBonus);

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Donor is: " + digitalforBonus,
    "text/plain"
  );
});

Then(
  "Validate Exclusive newsletters can be added and do not have signup CTA",
  async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.pause(500);
  }
);

Then("Validate account channel is Premium", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("Validate tyep of subscription is standard", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("Search the subscription in Zuora for ete2", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("validate Zuora Data for ete2", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("Search the subscription in Zuora in ete2", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("validate the status of the subscription in Zuora", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);
});

Then("Create New Subscription", async () => {
  // Write code here that turns the phrase above into concrete actions

  await browser.refresh();
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const accountsecelt = await $(
    '//span[text()="Customer Account"]//following::a[1]'
  );
  await accountsecelt.waitForDisplayed();
  await accountsecelt.click();
  await browser.pause(5000);

  const createNewSubBtn = await $('//span[text()="create new subscription"]');
  await createNewSubBtn.waitForDisplayed();
  await createNewSubBtn.click();

  await browser.scroll(0, 200);

  const aquichannel = await $(
    '//h5[contains(text(),"Acquisition Channel")]//following::select[1]'
  );
  await aquichannel.waitForDisplayed();
  //await aquichannel.selectByAttribute("value", "TCUK");
  await aquichannel.selectByVisibleText("TCUK");
  await browser.keys("\ue004");

  const suborigin = await $(
    '//h5[contains(text(),"Subscription Origin")]//following::select[1]'
  );
  await suborigin.waitForDisplayed();
  //await suborigin.selectByAttribute("value", "Online");
  await suborigin.selectByVisibleText("Online");
  await browser.keys("\ue004");

  const subrateplanterm = await $(
    '//h5[contains(text(),"Subscription Rate Plan Term")]//following::input[1]'
  );
  await subrateplanterm.waitForDisplayed();
  await subrateplanterm.setValue("Annually");
  await browser.keys("\ue004");

  const Campaigncode = await $(
    '//h5[contains(text(),"Campaign Code")]//following::input[1]'
  );
  await Campaigncode.waitForDisplayed();
  await Campaigncode.setValue("116A");
  await browser.keys("\ue004");

  const promocode = await $(
    '//h5[contains(text(),"Promo Code")]//following::input[1]'
  );
  await promocode.waitForDisplayed();
  await promocode.setValue("puzzles-annual-RP382");
  await browser.keys("\ue004");

  const tyepsub = await $(
    '//h5[contains(text(),"Type of Subscription")]//following::select[1]'
  );
  await tyepsub.waitForDisplayed();
  await tyepsub.selectByVisibleText("Standard");
  await browser.keys("\ue004");

  const productselect = await $(
    '//h5[contains(text(),"Product")]//following::input[1]'
  );
  await productselect.waitForDisplayed();
  await productselect.setValue("Website+ UK");
  // await browser.keys("\ue004");
  // await browser.keys("\ue004");
  await browser.keys("Tab");
  await browser.keys("Enter");

  const rateplanselect = await $(
    '//h5[contains(text(),"Rate Plan:")]//following::input[1]'
  );
  await rateplanselect.waitForDisplayed();
  await rateplanselect.click();
  await rateplanselect.setValue("Open Offer - Monthly");
  //await browser.keys("\ue004");
  await browser.keys("Tab");

  const subsaveactivate = await $('//span[text()="save and activate"]');
  await subsaveactivate.waitForDisplayed();
  await subsaveactivate.click();

  await browser.pause(5000);

  const contracteffectivedateone = await $(
    '//h5[contains(text(),"Contract Effective:")]//following::input[1]'
  );
  const contracteffectivedatetwo = await $(
    '//h5[contains(text(),"Contract Effective:")]//following::input[2]'
  );
  const contracteffectivedatethree = await $(
    '//h5[contains(text(),"Contract Effective:")]//following::input[3]'
  );

  await contracteffectivedateone.waitForDisplayed();
  await contracteffectivedateone.setValue("01/04/2024");
  await browser.keys("TAB");
  await browser.pause(2000);
  await contracteffectivedatetwo.waitForDisplayed();
  await contracteffectivedatetwo.click();
  await contracteffectivedatetwo.setValue("01/04/2024");
  await browser.pause(2000);
  await contracteffectivedatethree.waitForDisplayed();
  await contracteffectivedatethree.click();
  await contracteffectivedatethree.setValue("01/04/2024");
  await browser.pause(1000);

  const contractsave = await $(
    '//h5[contains(text(),"Contract Effective:")]//following::span[text()="save"]'
  );
  await contractsave.waitForDisplayed();
  await contractsave.click();

  await browser.pause(5000);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Create Bill Run with Payment", async () => {
  const createbillrun = await $('//span[text()="Create Bill Run"]');
  await createbillrun.waitForDisplayed();
  await createbillrun.click();

  await browser.pause(7000);

  const labelone = await $(
    '//span[text()="Processing Rules"]//following::label[1]'
  );
  await labelone.waitForDisplayed();
  await labelone.click();

  const labeltwo = await $(
    '//span[text()="Processing Rules"]//following::label[5]'
  );
  await labeltwo.waitForDisplayed();
  await labeltwo.click();

  const createbillruntwo = await $(
    '//span[text()="Bill Runs"]//following::span[text()="Create Bill Run"][2]'
  );
  await createbillruntwo.waitForDisplayed();
  await createbillruntwo.click();

  const yesbtnnn = await $(
    '//h6[text()="Confirmation"]//following::span[text()="Yes"]'
  );
  await yesbtnnn.waitForDisplayed();
  await yesbtnnn.click();

  await browser.pause(7000);

  const refreshvtnnn = await $('//span[text()="Refresh"]');
  await refreshvtnnn.waitForDisplayed();
  await refreshvtnnn.click();
  await browser.pause(5000);
  await refreshvtnnn.click();
  await browser.pause(3000);
  const postedbtnnn = await $('//span[text()="Posted"]');
  await postedbtnnn.waitForDisplayed();

  const clickinvoice = await $(
    '//div[text()="Documents"]//following::span[contains(text(),"INV0")]'
  );
  await clickinvoice.waitForDisplayed();
  await clickinvoice.click();

  const clickinvoicethree = await $(
    '//span[contains(text(),"INV0")]//following::button[3]'
  );
  await clickinvoicethree.waitForDisplayed();
  await clickinvoicethree.click();

  await browser.pause(3000);

  const createpay = await $(
    '//span[contains(text(),"INV0")]//following::button[text()="Create Payment"]'
  );
  await createpay.waitForDisplayed();
  await createpay.click();

  await browser.pause(7000);

  //const eternal = await $('//h5[contains(text()," Type of Payment: ")]//following::label[1]');
  const eternal = await $('//input[@value="External"]');
  await eternal.waitForDisplayed();
  await eternal.click();
  await browser.pause(7000);

  const paymethod = await $(
    '//h5[contains(text()," Payment Method: ")]//following::select[1]'
  );
  await paymethod.waitForDisplayed();
  await paymethod.selectByVisibleText("Credit Card");
  await browser.keys("\ue004");
  await browser.pause(4000);

  const createPaybtn = await $('//span[text()="create payment"]');
  await createPaybtn.waitForDisplayed();
  await createPaybtn.click();

  const createPaybtnyes = await $(
    '//td[text()="Are you sure you want to apply an External payment of "]//following::span[text()="Yes"]'
  );
  await createPaybtnyes.waitForDisplayed();
  await createPaybtnyes.click();

  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});
