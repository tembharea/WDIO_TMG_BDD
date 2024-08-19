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
const rnd9 = generateRandomString(4);
var RecordSubIDP_digitaltest127_1;
var RecordSubIDP_digitaltest127_2;
let ZouraURL_digitaltest127_1;
let Bonusurl_digitaltest127_1;
let Bonusurl_digitaltest127_2;
let ZouraURL_digitaltest127_2;
let ZouraSubURLBonus1;
let ZouraSubURLBonus2;
var RecordSubIDPBonus1;
var RecordSubIDPBonus2;

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

const digitaltest127_1 =
  "akshat.tembhare+" + rnd9 + "_" + r + "@telegraph.co.uk";
const digitaltest127_2 =
  "akshat.tembhare+" + rnd8 + "_" + r + "@telegraph.co.uk";
const digitaltest127_1Bonus =
  "akshat.tembhare+" + rnd7 + "_" + r + "@telegraph.co.uk";
const digitaltest127_2Bonus =
  "akshat.tembhare+" + rnd6 + "_" + r + "@telegraph.co.uk";

Then("I fill in new digitaltest127_1 email", async () => {
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
  await EmailInput.setValue(digitaltest127_1);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly Plan: " + digitaltest127_1,
    "text/plain"
  );
});

Then("I fill in existing digitaltest127_1 email", async () => {
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
  await EmailInput.setValue(digitaltest127_1);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Monthly Plan: " + digitaltest127_1,
    "text/plain"
  );
});

Then("I fill in new digitaltest127_2 email", async () => {
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
  await EmailInput.setValue(digitaltest127_2);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Annual Plan via credit card payment method is: " +
      digitaltest127_2,
    "text/plain"
  );
});

Then("I fill in existing digitaltest127_2 email", async () => {
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
  await EmailInput.setValue(digitaltest127_2);
  CucumberJsJsonReporter.attach(
    "Test ID used for Digital Annual Plan via credit card payment method is: " +
      digitaltest127_2,
    "text/plain"
  );
});

Then("Enter the digitaltest127_1 in the search box of salesforce", async () => {
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
    await SearchBarInput.setValue(digitaltest127_1);
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
    await SearchBarInput.setValue(digitaltest127_1);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Monthly Plan is: " + digitaltest127_1,
      "text/plain"
    );
  }
});

Then(
  "Validate if digitaltest127_1 user has active subscription in salesforce",
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

    const SubID_digitaltest127_1 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    await SubID_digitaltest127_1.isExisting();
    await browser.pause(100);

    RecordSubIDP_digitaltest127_1 = await SubID_digitaltest127_1.getText();
    console.log(await SubID_digitaltest127_1.getText());
    console.log(RecordSubIDP_digitaltest127_1);
    ZouraURL_digitaltest127_1 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP_digitaltest127_1 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
  }
);

Then(
  "Validate if digitaltest127_1 downgrade offer is displayed salesforce",
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
    const SubID_digitaltest127_1 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    await SubID_digitaltest127_1.isExisting();
    await browser.pause(100);

    RecordSubIDP_digitaltest127_1 = await SubID_digitaltest127_1.getText();
    console.log(await SubID_digitaltest127_1.getText());
    console.log(RecordSubIDP_digitaltest127_1);
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
  }
);

When(
  "Enter digitaltest127_1 subscriber email in search box in piano",
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
    await pianoAdvanceSearchInput.setValue(digitaltest127_1);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Monthly Plan is: " + digitaltest127_1,
      "text/plain"
    );
  }
);

Then("Go to Zoura Subscription Page for digitaltest127_1", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraURL_digitaltest127_1);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " +
      RecordSubIDP_digitaltest127_1,
    "text/plain"
  );
});

Then(
  "In Zoura I validate that Subscription is active for digitaltest127_1",
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
      "//span[text()='" + RecordSubIDP_digitaltest127_1 + "']"
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

When("Copy the bonus url for digitaltest127_1", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.scroll(0, 200);
  const urlbutton = await $('//input[@class="express-input-control"]');
  await urlbutton.waitForDisplayed({ timeout: 50000 });
  const BonusUrlStr = await $('//input[contains(@value, "https://secure")]');
  await BonusUrlStr.waitForDisplayed({ timeout: 50000 });
  Bonusurl_digitaltest127_1 = await BonusUrlStr.getAttribute("value");
  console.log(Bonusurl_digitaltest127_1);
});

When("I fill in new bonus email digitaltest127_1", async () => {
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
  //await browser.refresh();
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(digitaltest127_1Bonus);

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + digitaltest127_1Bonus,
    "text/plain"
  );
});

When("I open the digitaltest127_1Bonus URL", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(Bonusurl_digitaltest127_1);
  browser.pause(5000);
});

Then("Enter the digitaltest127_2 in the search box of salesforce", async () => {
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
    await SearchBarInput.setValue(digitaltest127_2);
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
    await SearchBarInput.setValue(digitaltest127_2);
    await browser.pause(300);
    await browser.keys("Enter");
    await browser.pause(3000);
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Annual Plan is: " + digitaltest127_2,
      "text/plain"
    );
  }
});

Then(
  "Validate if digitaltest127_2 user has active subscription in salesforce",
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
    const SubID_digitaltest127_2 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    await SubID_digitaltest127_2.isExisting();
    await browser.pause(100);

    RecordSubIDP_digitaltest127_2 = await SubID_digitaltest127_2.getText();
    console.log(await SubID_digitaltest127_2.getText());
    console.log(RecordSubIDP_digitaltest127_2);
    ZouraURL_digitaltest127_2 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDP_digitaltest127_2 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
  }
);

When(
  "Enter digitaltest127_2 subscriber email in search box in piano",
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
    await pianoAdvanceSearchInput.setValue(digitaltest127_2);
    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();
    await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
    await pianoUserSrchResultSelect.click();
    CucumberJsJsonReporter.attach(
      "Test ID used for Digital Monthly Plan is: " + digitaltest127_2,
      "text/plain"
    );
  }
);

Then("Go to Zoura Subscription Page for digitaltest127_2", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraURL_digitaltest127_2);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " +
      RecordSubIDP_digitaltest127_2,
    "text/plain"
  );
});

When("Copy the bonus url for digitaltest127_2", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.scroll(0, 200);
  const urlbutton = await $('//input[@class="express-input-control"]');
  await urlbutton.waitForDisplayed({ timeout: 50000 });
  const BonusUrlStr2 = await $('//input[contains(@value, "https://secure")]');
  await BonusUrlStr2.waitForDisplayed({ timeout: 50000 });
  Bonusurl_digitaltest127_2 = await BonusUrlStr2.getAttribute("value");
  console.log(Bonusurl_digitaltest127_2);
});

When("I fill in new bonus email digitaltest127_2", async () => {
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
  //await browser.refresh();
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(digitaltest127_2Bonus);

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + digitaltest127_2Bonus,
    "text/plain"
  );
});

When("I open the digitaltest127_2Bonus URL", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(Bonusurl_digitaltest127_2);
  browser.pause(5000);
});

Then("Enter the digitaltest127_1Bonus in the search box in SF", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SearchBarClick = await $(
    '//button[contains(@class,"slds-button slds-button_neutral search")]'
  );
  await SearchBarClick.waitForDisplayed({ timeout: 50000 });
  await SearchBarClick.click();
  await browser.pause(3000);

  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );
  await SearchBarInput.waitForDisplayed({ timeout: 50000 });
  await SearchBarInput.setValue(digitaltest127_1Bonus);
  await browser.keys("Enter");

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + digitaltest127_1Bonus,
    "text/plain"
  );
});

Then(
  "Validate if digitaltest127_1Bonus has active subscription in SF",
  async () => {
    //await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await browser.pause(5000);
    const SubscriptionTab = await $('//a[text()="Subscriptions"]');
    await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
    await SubscriptionTab.click();
    await browser.pause(5000);
    const SubID_b1 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );
    await SubID_b1.isExisting();
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    RecordSubIDPBonus1 = await SubID_b1.getText();
    console.log(await SubID_b1.getText());
    console.log(RecordSubIDPBonus1);
    ZouraSubURLBonus1 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDPBonus1 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
    CucumberJsJsonReporter.attach(
      "Subscription ID: " + RecordSubIDPBonus1,
      "text/plain"
    );
  }
);

Then("Enter the digitaltest127_2Bonus in the search box in SF", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SearchBarClick = await $(
    '//button[contains(@class,"slds-button slds-button_neutral search")]'
  );
  await SearchBarClick.waitForDisplayed({ timeout: 50000 });
  await SearchBarClick.click();
  await browser.pause(3000);

  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );
  await SearchBarInput.waitForDisplayed({ timeout: 50000 });
  await SearchBarInput.setValue(digitaltest127_2Bonus);
  await browser.keys("Enter");

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + digitaltest127_2Bonus,
    "text/plain"
  );
});

Then(
  "Validate if digitaltest127_2Bonus has active subscription in SF",
  async () => {
    await browser.pause(1000);
    // Write code here that turns the phrase above into concrete actions
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
    const SubID_b2 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );
    await SubID_b2.isExisting();
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    RecordSubIDPBonus2 = await SubID_b2.getText();
    console.log(await SubID_b2.getText());
    console.log(RecordSubIDPBonus2);
    ZouraSubURLBonus2 =
      "https://apisandbox.zuora.com/platform/apps/search?searchTerm=" +
      RecordSubIDPBonus2 +
      "&searchObjectType=subscription";
    await browser.pause(5000);
    CucumberJsJsonReporter.attach(
      "Subscription ID: " + RecordSubIDPBonus2,
      "text/plain"
    );
  }
);

Then("Go to Zoura Subscription Page for digitaltest127_1Bonus", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLBonus1);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDPBonus1,
    "text/plain"
  );
});

Then("Go to Zoura Subscription Page for digitaltest127_2Bonus", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(ZouraSubURLBonus2);
  await browser.pause(1000);
  CucumberJsJsonReporter.attach(
    "Subscription ID for Digital Subscriber is: " + RecordSubIDPBonus2,
    "text/plain"
  );
});

Then(
  "In Zoura I validate that Subscription is active for digitaltest127_1Bonus",
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
      "//span[text()='" + RecordSubIDPBonus1 + "']"
    );
    ///span[text()njdbjbd]]
    await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
    await Subscriptionbuttonzuora.isExisting();
  }
);

Then(
  "In Zoura I validate that Subscription is active for digitaltest127_2Bonus",
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
      "//span[text()='" + RecordSubIDPBonus2 + "']"
    );
    await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
    await Subscriptionbuttonzuora.isExisting();
  }
);

Then(
  "In Zoura I validate that Subscription is active for digitaltest127_2",
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
      "//span[text()='" + RecordSubIDP_digitaltest127_2 + "']"
    );
    await Subscriptionbuttonzuora.waitForDisplayed({ timeout: 50000 });
    await Subscriptionbuttonzuora.isExisting();
  }
);

Then("Validate Digital User can claim downgrade offer", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

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
});

Then("validate downgrade details for digitaltest127_1 in zuora", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  const Subscriptionbuttonzuora = $(
    "//span[text()='" + RecordSubIDP_digitaltest127_1 + "']"
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
});

Then("I fill in existing digitaltest127_1Bonus email", async () => {
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
  await EmailInput.setValue(digitaltest127_1Bonus);
  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Account: " + digitaltest127_1Bonus,
    "text/plain"
  );
});

Then(
  "Validate if digitaltest127_2 downgrade offer is displayed salesforce",
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
    const SubID_digitaltest127_2 = await $(
      '//span[@title="Z-Subscriptions"]//following::slot[contains(text(),"A-")][1]'
    );

    await SubID_digitaltest127_2.isExisting();
    await browser.pause(100);

    RecordSubIDP_digitaltest127_2 = await SubID_digitaltest127_2.getText();
    console.log(await SubID_digitaltest127_2.getText());
    console.log(RecordSubIDP_digitaltest127_2);
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
  }
);

Then("validate downgrade details for digitaltest127_2 in zuora", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  const Subscriptionbuttonzuora = $(
    "//span[text()='" + RecordSubIDP_digitaltest127_2 + "']"
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
});

Then("I fill in existing digitaltest127_2Bonus email", async () => {
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
  await EmailInput.setValue(digitaltest127_2Bonus);
  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Account: " + digitaltest127_2Bonus,
    "text/plain"
  );
});
