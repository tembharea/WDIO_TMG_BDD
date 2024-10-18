import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";
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
const CustEmail = rndstr2 + "4tests7@telegraph.co.uk";
const digitalforBonus = rnd9 + "3bosnusdonortest@telegraph.co.uk";
const CustCancellEmail = rnd4 + "4DisgitalCanceltest@telegraph.co.uk";
const CustWineEmail = rndstr3 + "6winse@telegraph.co.uk";
const CustDigitete2 = rnd5 + "2plusetes2@telegraph.co.uk";
const CustDigitete2ame = rnd6 + "3pluseste2test@telegraph.co.uk";
const DigitalPlussCustAlRegistrant = rnd6 + "4dsigitlplsaltest@telegraph.co.uk";
const CustDigitete2One = rnd8 + "65plusete2tesst@telegraph.co.uk";
const Custnewdigi2024 = rndst7 + "newdigital2024@telegraph.co.uk";
const Custnewdigi2024a = rndst7 + "newdigital2024a@telegraph.co.uk";
const Custnewdigi2024b = rndst7 + "newdigital2024b@telegraph.co.uk";
const Custnewdigi2024c = rndst7 + "newdigital2024c@telegraph.co.uk";
const CustPuzzOneEmail = rndstr4 + "3puzzletsst@telegraph.co.uk";
const CustPuzzTwoEmail = rndstr5 + "2puzzletsst@telegraph.co.uk";
const DigitalCustEmail = randstr + "5Digital7s8tst@telegraph.co.uk";
const DigitalPlusCCEmail = rndst3 + "2DigitalsPlus123ibh@telegraph.co.uk";
const DigitalPlusCCEmail2 = rnd7 + "4DigitalPlsus234@telegraph.co.uk";
const DigitalPLusMPaypal = rndst4 + "5DigitalPlsus567rr@telegraph.co.uk";
const DigitalPLusAPaypal = rndst4 + "6DigitalPlussA65498@telegraph.co.uk";
const DigitalPaypalCustEmailPuzl =
  rndst1 + "3DigitPuzzleste21te@telegraph.co.uk";
const digitalMPaypaletePuzzles =
  rndst2 + "4sDigitalPuzzete22iu@telegraph.co.uk";
const digitMPypletePuzzOne = rnd1 + "5sDigitalete20test@telegraph.co.uk";
const digitMPypletePuzzTwo = rnd2 + "8Digitalsete22test@telegraph.co.uk";
const digitMPypletePuzzThree = rnd3 + "8Digitaslete23testh@telegraph.co.uk";
const DigitalCustMRegistrant =
  rndst6 + "1loggesdoutmonthlytmgt@telegraph.co.uk";
const DigitalPlussCustMRegistrant =
  rndst6 + "2loggedoutmsonthtest8@telegraph.co.uk";
const DigitalCustARegistrant = rndst5 + "3loggesdoutAnnualt5@telegraph.co.uk";
const DigitalPaypalCustEmail =
  rndst8 + "4digitalviapayspaltest0@telegraph.co.uk";
const DigitalPaypalACustEmail =
  rndst7 + "5digitalviapaypsaltmg1@telegraph.co.uk";
const GiftCustEmail = randstr + "6GiftDsonor78test@telegraph.co.uk";
const GiftCustTwoEmail = rndstr7 + "7GifstDonorTwo1sj6@telegraph.co.uk";
const GiftCustThreeEmail = rndstr8 + "8GisftDonorTwo1k@telegraph.co.uk";
const GiftRcvOneEmail = rndstr6 + "9GiftResceipent1i@telegraph.co.uk";
const GiftRcvTwoEmail = rndstr9 + "6GiftRecseipent2o@telegraph.co.uk";
const GiftRcvThreeEmail = rndst9 + "4GiftRecseipenth3@telegraph.co.uk";
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
var RecordSubIDPBonus;
let ZouraSubURL;
let ZouraSubURLBonus;
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
var RecordSubID_Custnewdigi2024;
var RecordSubID_Custnewdigi2024a;
var RecordSubID_Custnewdigi2024b;
var RecordSubID_Custnewdigi2024c;

var ZouraURL_Custnewdigi2024;
var ZouraURL_Custnewdigi2024a;
var ZouraURL_Custnewdigi2024b;
var ZouraURL_Custnewdigi2024;


var RecordSubIDP_Custnewdigi2024;
var RecordSubIDP_Custnewdigi2024a;
var RecordSubIDP_Custnewdigi2024b;
var RecordSubIDP_Custnewdigi2024c;

var RecordSubID_addOnPuzzle
var RecordSubIDP_addOnPuzzle
var ZouraURL_addOnPuzzle

var RecordSubID_addOnPuzzlea
var RecordSubIDP_addOnPuzzlea
var ZouraURL_addOnPuzzlea


// Given("I launch login from homepage", async () => {
//     await browser.url("https://secure-staging-ams64.telegraph.co.uk/");
//     //CucumberJsJsonReporter.attach("Page Opened", "text/plain");
//     await browser.maximizeWindow();
//     await browser.pause(5000);
//     await browser.url(
//       "https://secure-staging-ams64.telegraph.co.uk/customer/secure/login"
//     );
//     browser.waitUntil(
//       () => browser.execute(() => document.readyState === "complete"),
//       {
//         timeout: 60 * 1000, // 60 seconds
//         timeoutMsg: "Message on failure",
//       }
//     );
//   });

  Given("I navigate to digital 2024 subscription page", async () => {
    await browser.pause(4000);
    await browser.url("https://secure-staging-ams64.telegraph.co.uk/customer/secure/checkout/?productId=gnww4ntenfsdi33rofzws4tugbyhi2lp&offerId=digital-monthly-RP557");
    //CucumberJsJsonReporter.attach("Page Opened", "text/plain");
    await browser.maximizeWindow();
    await browser.pause(5000);
  });

  Then("I fill in new digital2024 email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Subscription via Paypal: " + Custnewdigi2024,
      "text/plain"
    );
  });

  Then("I fill in new digital2024a email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024a);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Subscription via Paypal: " + Custnewdigi2024a,
      "text/plain"
    );
  });

  Then("I fill in new digital2024b email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024b);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Subscription via Paypal: " + Custnewdigi2024b,
      "text/plain"
    );
  });

  Then("I fill in new digital2024c email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024c);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Puzzles Subscription via Paypal: " + Custnewdigi2024c,
      "text/plain"
    );
  });

  Then("User completes the purchase and adds Puzzle as a bolt on", async () => {
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
  
    const Puzzlebolton = await $('//button[@class="checkout-button primary mini-spinner"]'
    );
    await Puzzlebolton.waitForDisplayed({ timeout: 50000 });
    await Puzzlebolton.click();
    await browser.pause(4000);
  
    const subContinueBtnn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
    );
    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();
  
    // const step4 = await $('//div[text()="4"]');
    // await step4.waitForDisplayed({ timeout: 50000 });
    // await step4.isExisting();
  
    // await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    // await subContinueBtnn.click();
  
    const pickwhrleftoff = await $(
      '//a[@class="onboarding-btns--redirect"]'
    );
    await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
    await pickwhrleftoff.click();
  });

  Then("I verify that i have both digital 2024 and puzzle subscriptions", async () => {
    await browser.pause(500);
    await browser.refresh();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const yourDigitalsubscriptionlabel = $('//div[@class="content"]//span[text()="Digital"]');
    const yourPuzzlesubscriptionlabel = $('//div[@class="content"]//span[text()="Puzzles"]');
    (await yourDigitalsubscriptionlabel).isDisplayed();
    (await yourPuzzlesubscriptionlabel).isDisplayed();

  });
  
  // Then("I fill in new digital2024 email", async () => {
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
  //   await EmailInput.click();
  //   await browser.pause(200);
  //   await EmailInput.setValue(Custnewdigi2024);
  //   await browser.pause(100);
  //   CucumberJsJsonReporter.attach(
  //     "Test ID used for Digital Plus Annual Subscription via Paypal is: " +
  //     Custnewdigi2024,
  //     "text/plain"
  //   );
  // });

  Then("Enter the digital2024 email in the search box of salesforce", async () => {
    await browser.pause(4000);
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
      await SearchBarInput.setValue(Custnewdigi2024);
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
      await SearchBarInput.setValue(Custnewdigi2024);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan via paypal payment method is: " +
        Custnewdigi2024,
        "text/plain"
      );
    }
  });


Then("Enter the digital2024a email in the search box of salesforce", async () => {
    await browser.pause(4000);
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
      await SearchBarInput.setValue(Custnewdigi2024a);
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
      await SearchBarInput.setValue(Custnewdigi2024a);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan via paypal payment method is: " +
        Custnewdigi2024a,
        "text/plain"
      );
    }
  });
  
  Then("Enter the digital2024b email in the search box of salesforce", async () => {
    await browser.pause(4000);
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
      await SearchBarInput.setValue(Custnewdigi2024b);
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
      await SearchBarInput.setValue(Custnewdigi2024b);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan via paypal payment method is: " +
        Custnewdigi2024b,
        "text/plain"
      );
    }
  });

  Then("Enter the digital2024c email in the search box of salesforce", async () => {
    await browser.pause(4000);
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
      await SearchBarInput.setValue(Custnewdigi2024c);
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
      await SearchBarInput.setValue(Custnewdigi2024c);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan via paypal payment method is: " +
        Custnewdigi2024c,
        "text/plain"
      );
    }
  });

  Then(
    "Validate subscription for new digital Monthly Plan in salesforce",
    async () => {
      await browser.pause(1000);
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
      await browser.pause(10000);
      const SubID2 = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
      );
    }
  );


  When(
    "Enter Custnewdigi2024 subscriber email in search box in piano",
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
      await pianoAdvanceSearchInput.setValue(Custnewdigi2024);
      await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
      await pianoAdvanceSearchBTN.click();
      await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
      await pianoUserSrchResultSelect.click();
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan is: " + Custnewdigi2024,
        "text/plain"
      );
    }
  );


  When(
    "Enter Custnewdigi2024a subscriber email in search box in piano",
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
      await pianoAdvanceSearchInput.setValue(Custnewdigi2024a);
      await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
      await pianoAdvanceSearchBTN.click();
      await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
      await pianoUserSrchResultSelect.click();
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan is: " + Custnewdigi2024a,
        "text/plain"
      );
    }
  );

  When(
    "Enter Custnewdigi2024b subscriber email in search box in piano",
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
      await pianoAdvanceSearchInput.setValue(Custnewdigi2024b);
      await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
      await pianoAdvanceSearchBTN.click();
      await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
      await pianoUserSrchResultSelect.click();
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan is: " + Custnewdigi2024b,
        "text/plain"
      );
    }
  );

  When(
    "Enter Custnewdigi2024c subscriber email in search box in piano",
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
      await pianoAdvanceSearchInput.setValue(Custnewdigi2024c);
      await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
      await pianoAdvanceSearchBTN.click();
      await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
      await pianoUserSrchResultSelect.click();
      CucumberJsJsonReporter.attach(
        "Test ID used for Digital Monthly Plan is: " + Custnewdigi2024c,
        "text/plain"
      );
    }
  );

  Then(
    "Validate if Custnewdigi2024 user has active subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_Custnewdigi2024 = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
      );
  
      await SubID_Custnewdigi2024.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_Custnewdigi2024 = await SubID_Custnewdigi2024.getText();
      console.log(await SubID_Custnewdigi2024.getText());
      console.log(RecordSubID_Custnewdigi2024);
      ZouraURL_Custnewdigi2024 =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_Custnewdigi2024 +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then(
    "Validate if Custnewdigi2024a user has active subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_Custnewdigi2024a = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
      );
  
      await SubID_Custnewdigi2024a.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_Custnewdigi2024a = await SubID_Custnewdigi2024a.getText();
      console.log(await SubID_Custnewdigi2024a.getText());
      console.log(RecordSubID_Custnewdigi2024a);
      ZouraURL_Custnewdigi2024a =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_Custnewdigi2024a +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then(
    "Validate if Custnewdigi2024b user has active subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_Custnewdigi2024b = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
      );
  
      await SubID_Custnewdigi2024b.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_Custnewdigi2024b = await SubID_Custnewdigi2024b.getText();
      console.log(await SubID_Custnewdigi2024b.getText());
      console.log(RecordSubID_Custnewdigi2024b);
      ZouraURL_Custnewdigi2024b =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_Custnewdigi2024b +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then(
    "Validate if Custnewdigi2024c user has active subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_Custnewdigi2024c = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
      );
  
      await SubID_Custnewdigi2024c.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_Custnewdigi2024c = await SubID_Custnewdigi2024c.getText();
      console.log(await SubID_Custnewdigi2024c.getText());
      console.log(RecordSubID_Custnewdigi2024c);
      ZouraURL_Custnewdigi2024c =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_Custnewdigi2024c +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then("Go to Zoura Subscription Page for Custnewdigi2024", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_Custnewdigi2024);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_Custnewdigi2024,
      "text/plain"
    );
  });

  Then("Go to Zoura Subscription Page for Custnewdigi2024a", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_Custnewdigi2024a);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_Custnewdigi2024a,
      "text/plain"
    );
  });

  Then("Go to Zoura Subscription Page for Custnewdigi2024b", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_Custnewdigi2024b);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_Custnewdigi2024b,
      "text/plain"
    );
  });

  Then("Go to Zoura Subscription Page for Custnewdigi2024c", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_Custnewdigi2024c);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_Custnewdigi2024c,
      "text/plain"
    );
  });

  Then(
    "In Zoura I validate that Subscription is active for Custnewdigi2024",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024 + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
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
    }
  );

  Then(
    "In Zoura I validate that Subscription is active for Custnewdigi2024a",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024a + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
      
    }
  );

  Then(
    "In Zoura I validate that Subscription is active for Custnewdigi2024b",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024b + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
      
    }
  );

  Then(
    "In Zoura I validate that Subscription is active for Custnewdigi2024c",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024c + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
      
    }
  );

  Then("Validate newDigital User can claim downgrade offer", async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      //span[text()='Continue to cancel']
      //span[text()='Continue to cancel']
      //p[contains(text(),'choose from two special offers')]//following::button[1]
      //p[text()='Your subscription has been updated to:']
      //p[text()='Your new entitlements and price will be active from this date']
      const CancellationBtn = await $('//button[@id="cancellation-button"]');
      const cancelreason = await $(
        '//label[contains(text(),"not enjoying the journalism")]'
      );
      const continuebtnone = await $('//a[@class="continue-button"]');
      const continuebtntwo = await $('//span[text()="Continue to cancel"]');
      const continuebtnthree = await $('//button[@class="button default"]');
  
      const downgradeofferclick = await $(
        '//p[contains(text(),"choose from two special offers")]//following::button[1]'
      );
      const downgradetextverify = await $(
        '//p[text()="Your subscription has been updated to:"]'
      );
  
      await CancellationBtn.waitForDisplayed({ timeout: 50000 });
      await CancellationBtn.click();
  
      await cancelreason.waitForDisplayed({ timeout: 50000 });
      await cancelreason.click();
  
      await continuebtnone.waitForDisplayed({ timeout: 50000 });
      await continuebtnone.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await downgradeofferclick.waitForDisplayed({ timeout: 50000 });
      await downgradeofferclick.click();
      await browser.pause(4000);
      await downgradetextverify.waitForDisplayed({ timeout: 50000 });
      await downgradeofferclick.isExisting();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });
  
  Then("Validate newDigital User can claim downsell offer", async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      //span[text()='Continue to cancel']
      //span[text()='Continue to cancel']
      //p[contains(text(),'choose from two special offers')]//following::button[1]
      //p[text()='Your subscription has been updated to:']
      //p[text()='Your new entitlements and price will be active from this date']
      const CancellationBtn = await $('//button[@id="cancellation-button"]');
      const cancelreason = await $(
        '//label[contains(text(),"not enjoying the journalism")]'
      );
      const continuebtnone = await $('//a[@class="continue-button"]');
      const continuebtntwo = await $('//span[text()="Continue to cancel"]');
      const continuebtnthree = await $('//button[@class="button default"]');
  
      const downsellofferclick = await $(
        '//p[@id="product-name-container2"]/..//button[text()="Claim this offer"]'
      );
      const downselltextverify = await $(
        '//p[text()="Your subscription has been updated to:"]'
      );
  
      await CancellationBtn.waitForDisplayed({ timeout: 50000 });
      await CancellationBtn.click();
  
      await cancelreason.waitForDisplayed({ timeout: 50000 });
      await cancelreason.click();
  
      await continuebtnone.waitForDisplayed({ timeout: 50000 });
      await continuebtnone.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await downsellofferclick.waitForDisplayed({ timeout: 50000 });
      await downsellofferclick.click();
      await browser.pause(4000);
      await downselltextverify.waitForDisplayed({ timeout: 50000 });
      await downsellofferclick.isExisting();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });

  Then("I fill in existing newDigital email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + Custnewdigi2024,
      "text/plain"
    );
  });

  Then("I fill in existing newDigitala email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024a);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + Custnewdigi2024a,
      "text/plain"
    );
  });

  Then("I fill in existing newDigitalb email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024b);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + Custnewdigi2024b,
      "text/plain"
    );
  });

  Then("I fill in existing newDigitalc email", async () => {
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
    await EmailInput.setValue(Custnewdigi2024c);
    CucumberJsJsonReporter.attach(
      "Test ID used is: " + Custnewdigi2024c,
      "text/plain"
    );
  });


  Then("validate downgrade details for newDigitalc in zuora", async () => {
    //await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      await browser.pause(5000);
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024c + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
  
      const subone = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][1]//following::span[4]'
      );
  
      const subtwo = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][2]//following::span[4]'
      );
  
      const sunonenum = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][1]'
      );
  
      const suntwonum = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][2]'
      );
  
      const subonetext = await subone.getText();
      const subtwotext = await subtwo.getText();
      const subonenumtext = await sunonenum.getText();
      const subtwonumtext = await suntwonum.getText();
  
      CucumberJsJsonReporter.attach(
        "Original Subscription: " +
          subonenumtext +
          " " +
          "having status : " +
          subonetext,
        "text/plain"
      );
      CucumberJsJsonReporter.attach(
        "Downgraded Subscription: " +
          subtwonumtext +
          " " +
          "having status : " +
          subtwotext,
        "text/plain"
      );
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });

  Then("validate downgrade details for newDigital in zuora", async () => {
    //await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      await browser.pause(5000);
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_Custnewdigi2024 + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
  
      const subone = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][1]//following::span[4]'
      );
  
      const subtwo = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][2]//following::span[4]'
      );
  
      const sunonenum = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][1]'
      );
  
      const suntwonum = await $(
        '//button[@id="global-search-subscription"]//following::span[contains(text(),"A-")][2]'
      );
  
      const subonetext = await subone.getText();
      const subtwotext = await subtwo.getText();
      const subonenumtext = await sunonenum.getText();
      const subtwonumtext = await suntwonum.getText();
  
      CucumberJsJsonReporter.attach(
        "Original Subscription: " +
          subonenumtext +
          " " +
          "having status : " +
          subonetext,
        "text/plain"
      );
      CucumberJsJsonReporter.attach(
        "Downgraded Subscription: " +
          subtwonumtext +
          " " +
          "having status : " +
          subtwotext,
        "text/plain"
      );
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });

  Then(
    "Validate if digital2024 Downsell offer is displayed salesforce",
    async () => {
      await browser.pause(100);
      await browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
      try {
        const SubscriptionTab = await $('//a[text()="Subscriptions"]');
        await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
        await SubscriptionTab.click();
        await browser.pause(10000);
        const SubID_Custnewdigi2024 = await $(
          '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
        );
  
        await SubID_Custnewdigi2024.isExisting();
        await browser.pause(100);
  
        RecordSubIDP_Custnewdigi2024 = await SubID_Custnewdigi2024.getText();
        console.log(await SubID_Custnewdigi2024.getText());
        console.log(RecordSubIDP_Custnewdigi2024);
        await browser.pause(5000);
  
        const sfproductone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][1]'
        );
        const sfproducttwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][2]'
        );
        const sfsubstatusone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][1]'
        );
        const sfsubstatustwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][2]'
        );
  
        await sfproductone.isExisting();
        await sfproducttwo.isExisting();
        await sfsubstatusone.isExisting();
        await sfsubstatustwo.isExisting();
  
        const sfproductonetext = await sfproductone.getText();
        const sfproducttwotext = await sfproducttwo.getText();
        const sfsubstatusonetext = await sfsubstatusone.getText();
        const sfsubstatustwotext = await sfsubstatustwo.getText();
  
        CucumberJsJsonReporter.attach(
          "Downgraded Subscription/Product: " + sfproductonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Originally taken Subscription/Product: " + sfproducttwotext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Downgrade Subscription's status: " + sfsubstatusonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Original Subscription's Status two: " + sfsubstatustwotext,
          "text/plain"
        );
      } catch (error) {
        console.error("no such element");
      } finally {
        await browser.pause(100);
      }
    }
  );

  Then(
    "Validate if digital2024a Downsell offer is displayed salesforce",
    async () => {
      await browser.pause(100);
      await browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
      try {
        const SubscriptionTab = await $('//a[text()="Subscriptions"]');
        await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
        await SubscriptionTab.click();
        await browser.pause(10000);
        const SubID_Custnewdigi2024a = await $(
          '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
        );
  
        await SubID_Custnewdigi2024.isExisting();
        await browser.pause(100);
  
        RecordSubIDP_Custnewdigi2024a = await SubID_Custnewdigi2024a.getText();
        console.log(await SubID_Custnewdigi2024a.getText());
        console.log(RecordSubIDP_Custnewdigi2024a);
        await browser.pause(5000);
  
        const sfproductone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][1]'
        );
        const sfproducttwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][2]'
        );
        const sfsubstatusone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][1]'
        );
        const sfsubstatustwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][2]'
        );
  
        await sfproductone.isExisting();
        await sfproducttwo.isExisting();
        await sfsubstatusone.isExisting();
        await sfsubstatustwo.isExisting();
  
        const sfproductonetext = await sfproductone.getText();
        const sfproducttwotext = await sfproducttwo.getText();
        const sfsubstatusonetext = await sfsubstatusone.getText();
        const sfsubstatustwotext = await sfsubstatustwo.getText();
  
        CucumberJsJsonReporter.attach(
          "Downgraded Subscription/Product: " + sfproductonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Originally taken Subscription/Product: " + sfproducttwotext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Downgrade Subscription's status: " + sfsubstatusonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Original Subscription's Status two: " + sfsubstatustwotext,
          "text/plain"
        );
      } catch (error) {
        console.error("no such element");
      } finally {
        await browser.pause(100);
      }
    }
  );

  Then(
    "Validate if digital2024b Downsell offer is displayed salesforce",
    async () => {
      await browser.pause(100);
      await browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
      try {
        const SubscriptionTab = await $('//a[text()="Subscriptions"]');
        await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
        await SubscriptionTab.click();
        await browser.pause(10000);
        const SubID_Custnewdigi2024b = await $(
          '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
        );
  
        await SubID_Custnewdigi2024b.isExisting();
        await browser.pause(100);
  
        RecordSubIDP_Custnewdigi2024b = await SubID_Custnewdigi2024b.getText();
        console.log(await SubID_Custnewdigi2024b.getText());
        console.log(RecordSubIDP_Custnewdigi2024b);
        await browser.pause(5000);
  
        const sfproductone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][1]'
        );
        const sfproducttwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][2]'
        );
        const sfsubstatusone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][1]'
        );
        const sfsubstatustwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][2]'
        );
  
        await sfproductone.isExisting();
        await sfproducttwo.isExisting();
        await sfsubstatusone.isExisting();
        await sfsubstatustwo.isExisting();
  
        const sfproductonetext = await sfproductone.getText();
        const sfproducttwotext = await sfproducttwo.getText();
        const sfsubstatusonetext = await sfsubstatusone.getText();
        const sfsubstatustwotext = await sfsubstatustwo.getText();
  
        CucumberJsJsonReporter.attach(
          "Downgraded Subscription/Product: " + sfproductonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Originally taken Subscription/Product: " + sfproducttwotext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Downgrade Subscription's status: " + sfsubstatusonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Original Subscription's Status two: " + sfsubstatustwotext,
          "text/plain"
        );
      } catch (error) {
        console.error("no such element");
      } finally {
        await browser.pause(100);
      }
    }
  );

  Then(
    "Validate if digital2024c Downsell offer is displayed salesforce",
    async () => {
      await browser.pause(100);
      await browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
      try {
        const SubscriptionTab = await $('//a[text()="Subscriptions"]');
        await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
        await SubscriptionTab.click();
        await browser.pause(10000);
        const SubID_Custnewdigi2024c = await $(
          '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
        );
  
        await SubID_Custnewdigi2024c.isExisting();
        await browser.pause(100);
  
        RecordSubIDP_Custnewdigi2024c = await SubID_Custnewdigi2024c.getText();
        console.log(await SubID_Custnewdigi2024c.getText());
        console.log(RecordSubIDP_Custnewdigi2024c);
        await browser.pause(5000);
  
        const sfproductone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][1]'
        );
        const sfproducttwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][2]'
        );
        const sfsubstatusone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][1]'
        );
        const sfsubstatustwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][2]'
        );
  
        await sfproductone.isExisting();
        await sfproducttwo.isExisting();
        await sfsubstatusone.isExisting();
        await sfsubstatustwo.isExisting();
  
        const sfproductonetext = await sfproductone.getText();
        const sfproducttwotext = await sfproducttwo.getText();
        const sfsubstatusonetext = await sfsubstatusone.getText();
        const sfsubstatustwotext = await sfsubstatustwo.getText();
  
        CucumberJsJsonReporter.attach(
          "Downgraded Subscription/Product: " + sfproductonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Originally taken Subscription/Product: " + sfproducttwotext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Downgrade Subscription's status: " + sfsubstatusonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Original Subscription's Status two: " + sfsubstatustwotext,
          "text/plain"
        );
      } catch (error) {
        console.error("no such element");
      } finally {
        await browser.pause(100);
      }
    }
  );

  Then("Go to Zoura Subscription Page for newDigital", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_Custnewdigi2024);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
        RecordSubIDP_Custnewdigi2024,
      "text/plain"
    );
  });

  Then("Validate newDigital User can claim downsell offer for Puzzle subscription", async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      //span[text()='Continue to cancel']
      //span[text()='Continue to cancel']
      //p[contains(text(),'choose from two special offers')]//following::button[1]
      //p[text()='Your subscription has been updated to:']
      //p[text()='Your new entitlements and price will be active from this date']
      const CancellationBtn = await $('//button[@id="cancellation-button1"]');
      const cancelreason = await $(
        '//label[contains(text(),"I want to take a break")]'
      );
      const continuebtnone = await $('//a[text()="Continue to cancel"]');
      const continuebtntwo = await $('//span[text()="Continue to cancel"]');
      //const continuebtnthree = await $('//button[@class="button default"]');
  
      const downsellofferclick = await $(
        '//button[text()="Claim this offer"]'
      );
      const downselltextverify = await $(
        '//p[text()="Your subscription has been updated to:"]'
      );
  
      await CancellationBtn.waitForDisplayed({ timeout: 50000 });
      await CancellationBtn.click();
  
      await cancelreason.waitForDisplayed({ timeout: 50000 });
      await cancelreason.click();
  
      await continuebtnone.waitForDisplayed({ timeout: 50000 });
      await continuebtnone.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await downsellofferclick.waitForDisplayed({ timeout: 50000 });
      await downsellofferclick.click();
      await browser.pause(4000);
      await downselltextverify.waitForDisplayed({ timeout: 50000 });
      await downsellofferclick.isExisting();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });

  Then("Validate newDigital User can claim downgrade offer for Puzzle subscription", async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  
    try {
      //span[text()='Continue to cancel']
      //span[text()='Continue to cancel']
      //p[contains(text(),'choose from two special offers')]//following::button[1]
      //p[text()='Your subscription has been updated to:']
      //p[text()='Your new entitlements and price will be active from this date']
      const CancellationBtn = await $('//button[@id="cancellation-button1"]');
      const cancelreason = await $(
        '//label[contains(text(),"I want to take a break")]'
      );
      const continuebtnone = await $('//a[text()="Continue to cancel"]');
      const continuebtntwo = await $('//span[text()="Continue to cancel"]');
      const continuebtnthree = await $('//button[@class="button default"]');
  
      const downgradeofferclick = await $(
        '//button[text()="Claim this offer"]'
      );
      const downgradetextverify = await $(
        '//p[text()="Your subscription has been updated to:"]'
      );
  
      await CancellationBtn.waitForDisplayed({ timeout: 50000 });
      await CancellationBtn.click();
  
      await cancelreason.waitForDisplayed({ timeout: 50000 });
      await cancelreason.click();
  
      await continuebtnone.waitForDisplayed({ timeout: 50000 });
      await continuebtnone.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtntwo.waitForDisplayed({ timeout: 50000 });
      await continuebtntwo.doubleClick();
      await browser.pause(4000);
      await browser.scroll(0, 200);
      await browser.scroll(0, 200);
      await continuebtnthree.waitForDisplayed({ timeout: 50000 });
      await continuebtnthree.doubleClick();
      await downgradeofferclick.waitForDisplayed({ timeout: 50000 });
      await downgradeofferclick.click();
      await browser.pause(4000);
      await downgradetextverify.waitForDisplayed({ timeout: 50000 });
      await downgradetextverify.isExisting();
    } catch (error) {
      console.error("no such element");
    } finally {
      await browser.pause(100);
    }
  });


  Then(
    "Validate if addedOnPuzzle user has active puzzle subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_addOnPuzzle = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][2]'
      );
  
      await SubID_addOnPuzzle.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_addOnPuzzle = await SubID_addOnPuzzle.getText();
      console.log(await SubID_addOnPuzzle.getText());
      console.log(RecordSubID_addOnPuzzle);
      ZouraURL_addOnPuzzle =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_addOnPuzzle +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then(
    "Validate if addedOnPuzzlea user has active puzzle subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_addOnPuzzlea = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][2]'
      );
  
      await SubID_addOnPuzzlea.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_addOnPuzzlea = await SubID_addOnPuzzlea.getText();
      console.log(await SubID_addOnPuzzlea.getText());
      console.log(RecordSubID_addOnPuzzlea);
      ZouraURL_addOnPuzzlea =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_addOnPuzzlea +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then(
    "Validate if addedOnPuzzle_a user has active puzzle subscription in salesforce",
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
      await browser.pause(10000);
  
      const SubID_addOnPuzzle_a = await $(
        '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][2]'
      );
  
      await SubID_addOnPuzzle_a.isExisting();
      await browser.pause(100);
  
      RecordSubIDP_addOnPuzzle_a = await SubID_addOnPuzzle_a.getText();
      console.log(await SubID_addOnPuzzle_a.getText());
      console.log(RecordSubID_addOnPuzzle_a);
      ZouraURL_addOnPuzzle_a =
        "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
        RecordSubIDP_addOnPuzzle_a +
        "&searchObjectType=subscription";
      await browser.pause(5000);
    }
  );

  Then("Go to Zoura Subscription Page for addONPuzzle", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_addOnPuzzle);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_addOnPuzzle,
      "text/plain"
    );
  });

  Then("Go to Zoura Subscription Page for addONPuzzlea", async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.url(ZouraURL_addOnPuzzlea);
    await browser.pause(1000);
    CucumberJsJsonReporter.attach(
      "Subscription ID for Digital Subscriber is: " +
      RecordSubID_addOnPuzzlea,
      "text/plain"
    );
  });

  Then(
    "In Zoura I validate that Subscription is active for addOnPuzzle",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_addOnPuzzle + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
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
    }
  );

  Then(
    "In Zoura I validate that Subscription is active for addOnPuzzlea",
    async () => {
      //await browser.pause(100);
      browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
  
      const Subscriptionbuttonzuora = $(
        "//span[text()='" + RecordSubIDP_addOnPuzzlea + "']"
      );
      await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
      await Subscriptionbuttonzuora.isExisting();
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
    }
  );

  Then(
    "Validate if addOnPuzzle Downsell offer is displayed salesforce",
    async () => {
      await browser.pause(100);
      await browser.waitUntil(
        () => browser.execute(() => document.readyState === "complete"),
        {
          timeout: 60 * 1000, // 60 seconds
          timeoutMsg: "Message on failure",
        }
      );
      try {
        const SubscriptionTab = await $('//a[text()="Subscriptions"]');
        await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
        await SubscriptionTab.click();
        await browser.pause(10000);
        const SubID_Custnewdigi2024 = await $(
          '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][2]'
        );
  
        await SubID_Custnewdigi2024.isExisting();
        await browser.pause(100);
  
        RecordSubIDP_Custnewdigi2024 = await SubID_Custnewdigi2024.getText();
        console.log(await SubID_Custnewdigi2024.getText());
        console.log(RecordSubIDP_Custnewdigi2024);
        await browser.pause(5000);
  
        const sfproductone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][1]'
        );
        const sfproducttwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Subscription Product"]//following::span[contains(@title,"Website")][2]'
        );
        const sfsubstatusone = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][1]'
        );
        const sfsubstatustwo = await $(
          '//a[@data-label="Subscriptions"]//following::span[text()="Z-Subscriptions"][1]//following::span[@title="Status"]//following::span[contains(@title,"Pending")][2]'
        );
  
        await sfproductone.isExisting();
        await sfproducttwo.isExisting();
        await sfsubstatusone.isExisting();
        await sfsubstatustwo.isExisting();
  
        const sfproductonetext = await sfproductone.getText();
        const sfproducttwotext = await sfproducttwo.getText();
        const sfsubstatusonetext = await sfsubstatusone.getText();
        const sfsubstatustwotext = await sfsubstatustwo.getText();
  
        CucumberJsJsonReporter.attach(
          "Downgraded Subscription/Product: " + sfproductonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Originally taken Subscription/Product: " + sfproducttwotext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Downgrade Subscription's status: " + sfsubstatusonetext,
          "text/plain"
        );
        CucumberJsJsonReporter.attach(
          "Original Subscription's Status two: " + sfsubstatustwotext,
          "text/plain"
        );
      } catch (error) {
        console.error("no such element");
      } finally {
        await browser.pause(100);
      }
    }
  );