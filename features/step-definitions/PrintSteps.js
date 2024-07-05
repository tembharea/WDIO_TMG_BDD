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

const Print2dayMontly = rndstr2 + "4print2dayM7@telegraph.co.uk";
const Print2dayQuarterly = rndstr3 + "4print2dayQ7@telegraph.co.uk";
const Print7dayQuarterly = rndstr4 + "4print7dayM7@telegraph.co.uk";
const Print7dayMontly = rndstr5 + "4print7dayQ7@telegraph.co.uk";
const Print7dayRenewal = rndstr6 + "7print7dayR@telegraph.co.uk";

const SFMoreButton = await $('//button[@title="More Tabs"]');

Then("Naviagate to Print Subshop Page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://staging-ams64.telegraph.co.uk/customer/subscribe/complete/?icid=conversion-subscription_onsite-asset_display-contextual_01/11_ESC001_new_print_journey"
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

When("Click on Print2dayMontly Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyPrint2dayMontly = await $('//div[@class="first-checkbox"]');
  await BuyPrint2dayMontly.waitForDisplayed({ timeout: 50000 });
  await BuyPrint2dayMontly.click();

  const subscribebtn = await $('//a[text()="subscribe"]');
  await subscribebtn.waitForDisplayed({ timeout: 50000 });
  await subscribebtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

When("Click on Print2dayQuarterly Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyPrint2dayQuarterly = await $('//div[@class="second-checkbox"]');
  await BuyPrint2dayQuarterly.waitForDisplayed({ timeout: 50000 });
  await BuyPrint2dayQuarterly.click();

  const subscribebtn = await $('//a[text()="subscribe"]');
  await subscribebtn.waitForDisplayed({ timeout: 50000 });
  await subscribebtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Print Tell Us about Yourslef details", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const printuseralias = await $(
    '//h2[contains(text(),"Tell us about")]//following::select[1]'
  );
  await printuseralias.waitForDisplayed({ timeout: 50000 });
  await printuseralias.selectByAttribute("value", "Mr");

  const printfirstname = await $(
    '//h2[contains(text(),"Tell us about")]//following::input[1]'
  );
  const printlastname = await $(
    '//h2[contains(text(),"Tell us about")]//following::input[2]'
  );
  const printphone = await $(
    '//h2[contains(text(),"Tell us about")]//following::input[3]'
  );
  const printpostcode = await $(
    '//h2[contains(text(),"Tell us about")]//following::input[4]'
  );
  const findaddressbtn = await $(
    '//h2[contains(text(),"Tell us about")]//following::button[1]'
  );
  const addressselectbtn = await $(
    '//h2[contains(text(),"Tell us about")]//following::button[2]'
  );

  const continuebtn = await $('//button[@id="express-card-cta"]');

  await printfirstname.waitForDisplayed({ timeout: 50000 });
  await printfirstname.setValue("Akshat");

  await printlastname.waitForDisplayed({ timeout: 50000 });
  await printlastname.setValue("Tembhare");

  await printphone.waitForDisplayed({ timeout: 50000 });
  await printphone.setValue("2212345678");

  await printpostcode.waitForDisplayed({ timeout: 50000 });
  await printpostcode.setValue("KY12 9LG");
  await browser.keys("\ue004");
  await findaddressbtn.waitForDisplayed({ timeout: 50000 });
  await findaddressbtn.click();
  await browser.pause(1000);

  await addressselectbtn.waitForDisplayed({ timeout: 50000 });
  await addressselectbtn.click();
  await browser.pause(5000);
  await browser.keys("\ue004");
  await browser.scroll(0, 200);
  await browser.scroll(0, 200);
  await continuebtn.waitForDisplayed({ timeout: 50000 });
  await continuebtn.click();
  await browser.pause(2000);

  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("Input MPP payment details for Print", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const CardNameMPP = await $(
    '//label[text()="Card type"]//following::input[@class="textInput"][1]'
  );
  await CardNameMPP.waitForDisplayed({ timeout: 40000 });
  await CardNameMPP.setValue("Akshat");
  await browser.pause(900);

  const CardNumMPP = await $(
    '//label[text()="Card type"]//following::input[@class="textInput creditCardNumberTextBox"]'
  );
  await CardNumMPP.waitForDisplayed({ timeout: 20000 });
  await CardNumMPP.setValue("4222000001227408");
  await browser.pause(900);

  const CardExMPP = await $(
    '//label[text()="Card type"]//following::input[@class="textInput"][2]'
  );
  await CardExMPP.waitForDisplayed({ timeout: 20000 });
  await CardExMPP.setValue("1225");
  await browser.pause(900);

  const CardCVVMPP = await $(
    '//label[text()="Card type"]//following::input[@class="textInput medInput"]'
  );
  await CardCVVMPP.waitForDisplayed({ timeout: 20000 });
  await CardCVVMPP.setValue("123");
  await browser.pause(900);

  const GiftFinalSubmitBtn = await $(
    '//*[@id="action_createaccountandpaynow"]'
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

Then("I fill in new Print2dayMontly email", async () => {
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
  await EmailInput.setValue(Print2dayMontly);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print2dayMontly,
    "text/plain"
  );
});

Then("I fill in new Print2dayQuarterly email", async () => {
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
  await EmailInput.setValue(Print2dayQuarterly);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print2dayQuarterly,
    "text/plain"
  );
});

Then("I fill in new Print7dayMontly email", async () => {
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
  await EmailInput.setValue(Print7dayMontly);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayMontly,
    "text/plain"
  );
});

Then("I fill in new Print7dayQuarterly email", async () => {
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
  await EmailInput.setValue(Print7dayQuarterly);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayQuarterly,
    "text/plain"
  );
});

Then("I fill in existing Print2dayMontly email", async () => {
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
  await EmailInput.setValue(Print2dayMontly);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print2dayMontly,
    "text/plain"
  );
});

Then("I fill in existing Print2dayQuarterly email", async () => {
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
  await EmailInput.setValue(Print2dayQuarterly);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print2dayQuarterly,
    "text/plain"
  );
});

Then("I fill in existing Print7dayQuarterly email", async () => {
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
  await EmailInput.setValue(Print7dayQuarterly);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayQuarterly,
    "text/plain"
  );
});

Then("I fill in existing Print7dayMontly email", async () => {
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
  await EmailInput.setValue(Print7dayMontly);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayMontly,
    "text/plain"
  );
});

////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print2dayMontly email id in the search box in salesforce",
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
      await SearchBarInput.setValue(Print2dayMontly);
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
      await SearchBarInput.setValue(Print2dayMontly);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID is: " + Print2dayMontly,
        "text/plain"
      );
    }
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print2dayQuarterly email id in the search box in salesforce",
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
      await SearchBarInput.setValue(Print2dayQuarterly);
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
      await SearchBarInput.setValue(Print2dayQuarterly);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID is: " + Print2dayQuarterly,
        "text/plain"
      );
    }
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print7dayMontly email id in the search box in salesforce",
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
      await SearchBarInput.setValue(Print7dayMontly);
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
      await SearchBarInput.setValue(Print7dayMontly);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID is: " + Print7dayMontly,
        "text/plain"
      );
    }
  }
);

//////////////////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print7dayQuarterly email id in the search box in salesforce",
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
      await SearchBarInput.setValue(Print7dayQuarterly);
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
      await SearchBarInput.setValue(Print7dayQuarterly);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID is: " + Print7dayQuarterly,
        "text/plain"
      );
    }
  }
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

Then("Enter the Print2dayMontly email id in the MPP search box", async () => {
  const MPPCustomerTab = await $('//a[text()="Customers"]');
  await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
  await MPPCustomerTab.click();

  const MPPCustEmailInput = await $(
    '//label[text()="Email Address"]//following::input[1]'
  );
  await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
  await MPPCustEmailInput.setValue(Print2dayMontly);
  CucumberJsJsonReporter.attach(
    "Test ID used : " + Print2dayMontly,
    "text/plain"
  );
  await browser.pause(500);
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
  await browser.pause(3000);
});

/////////////////////////////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print2dayQuarterly email id in the MPP search box",
  async () => {
    const MPPCustomerTab = await $('//a[text()="Customers"]');
    await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
    await MPPCustomerTab.click();

    const MPPCustEmailInput = await $(
      '//label[text()="Email Address"]//following::input[1]'
    );
    await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
    await MPPCustEmailInput.setValue(Print2dayQuarterly);
    CucumberJsJsonReporter.attach(
      "Test ID used : " + Print2dayQuarterly,
      "text/plain"
    );
    await browser.pause(500);
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
    await browser.pause(3000);
  }
);

//////////////////////////////////////////////////////////////////////////////////////////////

Then("Enter the Print7dayMontly email id in the MPP search box", async () => {
  const MPPCustomerTab = await $('//a[text()="Customers"]');
  await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
  await MPPCustomerTab.click();

  const MPPCustEmailInput = await $(
    '//label[text()="Email Address"]//following::input[1]'
  );
  await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
  await MPPCustEmailInput.setValue(Print7dayMontly);
  CucumberJsJsonReporter.attach(
    "Test ID used : " + Print7dayMontly,
    "text/plain"
  );
  await browser.pause(500);
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
  await browser.pause(3000);
});

//////////////////////////////////////////////////////////////////////////////////////////////////

Then(
  "Enter the Print7dayQuarterly email id in the MPP search box",
  async () => {
    const MPPCustomerTab = await $('//a[text()="Customers"]');
    await MPPCustomerTab.waitForDisplayed({ timeout: 20000 });
    await MPPCustomerTab.click();

    const MPPCustEmailInput = await $(
      '//label[text()="Email Address"]//following::input[1]'
    );
    await MPPCustEmailInput.waitForDisplayed({ timeout: 20000 });
    await MPPCustEmailInput.setValue(Print7dayQuarterly);
    CucumberJsJsonReporter.attach(
      "Test ID used : " + Print7dayQuarterly,
      "text/plain"
    );
    await browser.pause(500);
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
    await browser.pause(3000);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////

When("Click on Print7dayMontly Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyPrint7dayMontly = await $(
    '//h2//following::div[@class="first-checkbox"][2]'
  );
  await BuyPrint7dayMontly.waitForDisplayed({ timeout: 50000 });
  await BuyPrint7dayMontly.click();

  const subscribebtn = await $('//a[text()="subscribe"]');
  await subscribebtn.waitForDisplayed({ timeout: 50000 });
  await subscribebtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

When("Click on Print7dayQuarterly Subscription", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BuyPrint7dayQuarterly = await $(
    '//h2//following::div[@class="second-checkbox"][2]'
  );
  await BuyPrint7dayQuarterly.waitForDisplayed({ timeout: 50000 });
  await BuyPrint7dayQuarterly.click();

  const subscribebtn = await $('//a[text()="subscribe"]');
  await subscribebtn.waitForDisplayed({ timeout: 50000 });
  await subscribebtn.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Then("I fill in new Print7dayRenewal email", async () => {
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
  await EmailInput.setValue(Print7dayRenewal);
  await browser.pause(100);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayRenewal,
    "text/plain"
  );
});

Then(
  "Enter the Print7dayRenewal email id in the search box in salesforce",
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
      await SearchBarInput.setValue(Print7dayRenewal);
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
      await SearchBarInput.setValue(Print7dayRenewal);
      await browser.pause(300);
      await browser.keys("Enter");
      await browser.pause(3000);
      CucumberJsJsonReporter.attach(
        "Test ID is: " + Print7dayRenewal,
        "text/plain"
      );
    }
  }
);

///////////////////////////////////////////////////////////////////////////////////////////

Then("Oflline 7Day print Sub Purchase", async () => {
  // Write code here that turns the phrase above into concrete actions

  await browser.pause(500);
  const firstpageIframe = await $('//iframe[@title="accessibility title"]');

  await browser.pause(4000);
  await browser.switchToFrame(firstpageIframe);
  //const OpenOffr = await $('//label[contains(text(),"Open Offer")]');
  //input[@value="OpenOffer"]
  const OpenOffr = await $('//input[@value="OpenOffer"]');
  await OpenOffr.waitForDisplayed({ timeout: 20000 });
  await OpenOffr.click();
  await browser.pause(2000);
  const svndayprintoffr = await $('//td[text()="7-day Print"]');
  await svndayprintoffr.waitForDisplayed({ timeout: 20000 });
  await svndayprintoffr.click();
  await browser.pause(4000);
  const existing7dayIDinput = await $(
    '//label[text()="Email:*"]//following::input[1]'
  );
  await existing7dayIDinput.waitForDisplayed({ timeout: 20000 });
  await existing7dayIDinput.setValue(Print7dayRenewal);
  const chkextngacc = await $('//input[@value="Check Existing Accounts"]');
  await chkextngacc.waitForDisplayed({ timeout: 20000 });
  await chkextngacc.click();
  // const wrngmsg = await $('//h4[text()="Warning:"]');
  // await wrngmsg.waitForDisplayed({ timeout: 20000 });
  // await wrngmsg.isExisting();
  await browser.pause(4000);
  const extngemailselect = await $('//a[text()="Select"]');
  await extngemailselect.waitForDisplayed({ timeout: 20000 });
  await extngemailselect.scrollIntoView();
  await extngemailselect.click();

  await browser.pause(4000);
  await browser.switchToFrame(null);

  const secondpageIframe = await $(
    '//div[@class="slds-global-header__logo"]//following::iframe[@title="accessibility title"][2]'
  );

  await browser.switchToFrame(secondpageIframe);
  const addresslocatr1 = await $(
    '//label[contains(text(),"PostCode:")]//following::input[1]'
  );
  const addresslocatr2 = await $(
    '//label[contains(text(),"PostCode:")]//following::input[2]'
  );
  const addresslocatr3 = await $(
    '//label[contains(text(),"PostCode:")]//following::input[3]'
  );
  const addresslocatr4 = await $(
    '//label[contains(text(),"Mailing Street")]//following::textarea[1]'
  );

  await browser.scroll(0, 200);
  await addresslocatr1.waitForDisplayed({ timeout: 20000 });
  await addresslocatr1.scrollIntoView();
  await addresslocatr1.setValue("SW1A 1AA");
  await browser.pause(400);
  await addresslocatr2.click();
  await browser.pause(7400);
  await addresslocatr3.click();
  await browser.pause(5400);
  await addresslocatr4.waitForDisplayed({ timeout: 20000 });
  await addresslocatr4.setValue("Daily Telegraph");

  const takepayment = await $(
    '//label[contains(text(),"Select Delivery")]//following::input[@value="Save and Take Payment"][2]'
  );
  await takepayment.waitForDisplayed({ timeout: 20000 });
  await takepayment.click();
  await browser.pause(4000);
  await browser.switchToFrame(null);
  await browser.pause(8500);

  // const thirdpage = await $(
  //   '//div[@class="slds-notify_alert system-message level-info slds-theme_info"]//following::iframe[@title="accessibility title"][2]'
  // );
  //const document: Document = document as Document;
  // let iframe1 = document.getElementByName(
  //   "vfFrameId_1720163365617"
  // ).contentWindow;
  // console.log("iframe 1 success");
  // let iframe2 = iframe1.document.getElementById("theIframe");
  await browser.pause(40000);
  const thirdpage = await $(
    '//div[@class="slds-global-header__logo"]//following::iframe[@title="accessibility title"][3]'
  );
  await thirdpage.getAttribute("title");
  console.log(await thirdpage.getAttribute("title"));

  //await browser.switchToFrame(iframe2);
  await browser.pause(9000);
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  console.log("new iframe works, xapth issue of card num");
  await browser.scroll(0, 200);
  await browser.scroll(0, 200);
  await browser.scroll(0, 200);
  const cardnuminput = await $(
    '//div[@class="fieldArea"]//following::input[1]'
  );
  await cardnuminput.waitForDisplayed({ timeout: 20000 });
  await cardnuminput.setValue("4222000001227408");

  const cardcvvinput = await $(
    '//label[@class="fieldTitle"]//following::input[2]'
  );
  await cardcvvinput.waitForDisplayed({ timeout: 20000 });
  await cardcvvinput.setValue("123");

  const cardexmonthinput = await $(
    '//label[@class="fieldTitle"]//following::select[2]'
  );
  const cardexyearinput = await $(
    '//label[@class="fieldTitle"]//following::select[3]'
  );

  await cardexmonthinput.selectByAttribute("value", "12");
  await cardexyearinput.selectByAttribute("value", "2025");
  await browser.pause(1400);

  const offlinepaysubmit = await $('//input[@value="Submit"]');
  await offlinepaysubmit.waitForDisplayed();
  await offlinepaysubmit.click();

  await browser.pause(7400);
});
