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
var a = new Date();
let r = a.toDateString().substring(4).replace(/ /g, "");

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
const testdigital = "akshat.tembhare+" + rndst8 + "_" + r + "@telegraph.co.uk";
const paypalID = "tarun.sharma+20180523personalh@telegraph.co.uk";
const paypalpasswrd = "tmgsw1w0dt";
var RecordSubIDPDemo;
let ZouraSubURLTestDigital;

Then("I fill in new testdigital email", async () => {
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
  await EmailInput.setValue(testdigital);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly: " + testdigital,
    "text/plain"
  );
});

Then("Enter the testdigital email id in the search box", async () => {
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
    await SearchBarInput.setValue(testdigital);
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
    await SearchBarInput.setValue(testdigital);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Subscription: " + testdigital,
      "text/plain"
    );
  }
});

Then("Go to Zoura Subscription Page for Test Digital Account", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLTestDigital);
  await browser.pause(5000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDPDemo,
    "text/plain"
  );
});

Then("Validate subscription exists for Test ID in salesforce", async () => {
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

  const SubIDX = await $(
    '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
  );
  await SubIDX.waitForDisplayed({ timeout: 50000 });
  RecordSubIDPDemo = await SubIDX.getText();
  console.log(await SubIDX.getText());
  console.log(RecordSubIDPDemo);
  ZouraSubURLTestDigital =
    "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
    RecordSubIDPDemo +
    "&searchObjectType=subscription";
  await browser.pause(2000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDPDemo,
    "text/plain"
  );
});

Then("User completes the test digital purchase", async () => {
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
    await afterPaymentFirstName.waitForDisplayed({ timeout: 10000 });
    await afterPaymentFirstName.setValue("Akshat");
    await afterPaymentlastName.setValue("Tembhare");
    await afterPaymentSubmitButton.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
  }

  try {
    const subContinueBtn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"][2]'
    );

    //const subContinueBtn = await $('//button[text()="Continue"]');

    if (subContinueBtn.isDisplayed) {
      await subContinueBtn.waitForDisplayed({ timeout: 30000 });
      await subContinueBtn.click();

      const subSkipContinueBtn = await $(
        '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Skip and continue"]'
      );
      //   const subSkipContinueBtn = await $(
      //     '//button[text()="Skip and continue"]'
      //   );

      //button[text()="Skip and continue"]
      await subSkipContinueBtn.waitForDisplayed({ timeout: 50000 });
      await subSkipContinueBtn.click();

      const subContinueBtnn = await $(
        '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
      );
      //const subContinueBtnn = await $('//button[text()="Continue"]');
      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();

      await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
      await subContinueBtnn.click();

      const pickwhrleftoff = await $(
        '//span[text()="Pick up where you left off"]'
      );
      //   const pickwhrleftoff = await $(
      //     '//a[@href="https://staging-ams64.telegraph.co.uk/"]'
      //   );
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
