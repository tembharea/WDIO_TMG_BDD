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
  await browser.pause(4000);

  //////////////////////////////////////////////////////

  const thirdpage = await $(
    //'//div[@class="slds-global-header__logo"]//following::iframe[@title="accessibility title"]'
    '//div[@class="slds-global-header__logo"]//following::iframe[(contains(@name,"vfFrameId"))][2]'
  );
  // await thirdpage.getAttribute("title");
  // console.log(await thirdpage.getAttribute("title"));

  await browser.switchToFrame(thirdpage);
  await browser.pause(900);
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  console.log("new iframe works, primary frame");
  await browser.pause(4000);
  await browser.scroll(0, 200);
  await browser.scroll(0, 200);

  const fourthpage = await $(
    //'//div[@class="slds-global-header__logo"]//following::iframe[@title="accessibility title"]'
    '//iframe[@id="theIframe"]'
  );
  await browser.switchToFrame(fourthpage);
  await browser.pause(900);

  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");
  console.log("new iframe works, secondary frame");

  await browser.scroll(0, 200);
  await browser.pause(900);
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

Then("I fill in existing Print7dayRenewal email", async () => {
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
  await EmailInput.setValue(Print7dayRenewal);
  CucumberJsJsonReporter.attach(
    "Test ID used is: " + Print7dayRenewal,
    "text/plain"
  );
});

Then("Validate Expiry date of subscription before renewal", async () => {
  await browser.pause(2500);

  const subexpdate = await $(
    '//span[contains(text(),"Expiry date")]//following::span[1]'
  );
  await subexpdate.waitForDisplayed();
  await subexpdate.isExisting();
  const subexpiryvalue = await subexpdate.getText();

  CucumberJsJsonReporter.attach(
    "Expiry Date before renewal is: " + subexpiryvalue,
    "text/plain"
  );
});

Then("Print Renewal Flow Print Subscription status Active", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(500);

  const a = "17/07/2024";
  const b = "03/10/2024";
  const c = "30/09/2024";
  const d = "30/09/2023";
  const e = "02/10/2023";

  CucumberJsJsonReporter.attach("Value A: Today's date :" + a, "text/plain");
  CucumberJsJsonReporter.attach(
    "Value B: Today's date + 78 days :" + b,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Value C = Nearest Monday to Value B date :" + c,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Value D = 1 year minus from Value C date :" + d,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Value E = Nearest Monday to Value D date :" + e,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "______________________________________________________",
    "text/plain"
  );
  const substatuseditbtn = await $(
    '//div[@class="slds-global-header__logo"]//following::span[text()="Subscription Status"][2]//following::span[2]'
  );
  const substatuboxclick = await $(
    '//div[text()=" = Required Information"]//following::*[text()="Subscription Status"]//following::button[1]'
  );
  const substatusActive = await $(
    '//lightning-base-combobox-item[@data-value="Active"]'
  );

  const substatusInRenewal = await $(
    '//lightning-base-combobox-item[@data-value="In Renewal"]'
  );

  const substartdate = await $(
    '//div[text()=" = Required Information"]//following::*[text()="Start Date"]//following::input[1]'
  );
  const subeditsave = await $(
    '//div[text()=" = Required Information"]//following::button[text()="Save"]'
  );

  await substatuseditbtn.waitForDisplayed();
  await substatuseditbtn.click();
  await browser.pause(5000);
  await browser.scroll(0, 300);
  await substatuboxclick.waitForDisplayed();
  await substatuboxclick.click();
  await browser.pause(5000);
  await browser.scroll(0, 300);
  await browser.pause(5000);
  await substatusActive.scrollIntoView();
  await browser.pause(5000);
  await substatusActive.waitForDisplayed();
  await substatusActive.click();

  await substartdate.waitForDisplayed();
  await substartdate.setValue(e);

  await subeditsave.waitForDisplayed();
  await subeditsave.click();

  await browser.pause(6000);
});

Then("Go to Subscription Tab", async () => {
  await browser.pause(1000);

  const subtab = await $('//a[text()="Subscriptions"]');
  // Write code here that turns the phrase above into concrete actions
  await subtab.waitForDisplayed();
  await subtab.click();

  const subopen = await $(
    //'//span[text()="Subscriptions"]//following::div[@class="slds-grid"][2]'
    '//th[@data-label="Subscription Number"]'
  );
  await subopen.waitForDisplayed();
  await subopen.click();
  await browser.pause(4000);
});

Then("Print Renewal Flow Print Subscription status InRenewal", async () => {
  const substatuseditbtn = await $(
    '//div[@class="slds-global-header__logo"]//following::span[text()="Subscription Status"][2]//following::span[2]'
  );
  const substatuboxclick = await $(
    '//div[text()=" = Required Information"]//following::*[text()="Subscription Status"]//following::button[1]'
  );
  const substatusActive = await $(
    '//lightning-base-combobox-item[@data-value="Active"]'
  );

  const substatusInRenewal = await $(
    '//lightning-base-combobox-item[@data-value="In Renewal"]'
  );

  const substartdate = await $(
    '//div[text()=" = Required Information"]//following::*[text()="Start Date"]//following::input[1]'
  );
  const subeditsave = await $(
    '//div[text()=" = Required Information"]//following::button[text()="Save"]'
  );

  await substatuseditbtn.waitForDisplayed();
  await substatuseditbtn.click();
  await browser.pause(5000);
  await browser.scroll(0, 300);
  await substatuboxclick.waitForDisplayed();
  await substatuboxclick.click();
  await browser.pause(5000);
  await browser.scroll(0, 300);
  await browser.pause(5000);
  await substatusInRenewal.scrollIntoView();
  await browser.pause(5000);
  await substatusInRenewal.waitForDisplayed();
  await substatusInRenewal.click();

  await subeditsave.waitForDisplayed();
  await subeditsave.click();

  await browser.pause(6000);
});

Then("Validate two subscription are present in subscription tab", async () => {
  await browser.pause(1000);

  const subtab = await $('//a[text()="Subscriptions"]');
  await subtab.waitForDisplayed();
  await subtab.click();

  await browser.pause(4000);

  const subone = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][1]'
  );
  const subtwo = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][2]'
  );
  const subonestatus = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][1]//following::*[@data-label="Subscription Status"]//child::span//child::span[1]'
  );

  const subtwostatus = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][2]//following::*[@data-label="Subscription Status"]//child::span//child::span[1]'
  );

  const suboneproduct = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][1]//following::*[@data-label="Product"]//child::a[1]'
  );
  const subtwoproduct = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][2]//following::*[@data-label="Product"]//child::a[1]'
  );

  const suboneStartDate = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][1]//following::*[@data-label="Start Date"]//child::lightning-formatted-date-time[1]'
  );
  const subtwoStartDate = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][2]//following::*[@data-label="Start Date"]//child::lightning-formatted-date-time[1]'
  );

  const suboneEndDate = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][1]//following::*[@data-label="End Date"]//child::lightning-formatted-date-time[1]'
  );

  const subtwoEndDate = await $(
    '//a[text()="Subscriptions"]//following::th[@data-label="Subscription Number"][2]//following::*[@data-label="End Date"]//child::lightning-formatted-date-time[1]'
  );

  await subone.waitForDisplayed({ timeout: 50000 });

  const suboneV = await subone.getText();
  const subonestatusV = await subonestatus.getText();
  const suboneproductV = await suboneproduct.getText();
  const suboneStartDateV = await suboneStartDate.getText();
  const suboneEndDateV = await suboneEndDate.getText();
  const subtwoV = await subtwo.getText();
  const subtwostatusV = await subtwostatus.getText();
  const subtwoproductV = await subtwoproduct.getText();
  const subtwoStartDateV = await subtwoStartDate.getText();
  const subtwoEndDateV = await subtwoEndDate.getText();

  CucumberJsJsonReporter.attach(
    "Subscription_One ID: " + suboneV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_One Status: " + subonestatusV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_One Product: " + suboneproductV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_One Start Date: " + suboneStartDateV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_One End Date: " + suboneEndDateV,
    "text/plain"
  );

  CucumberJsJsonReporter.attach(
    "___________________________________________________",
    "text/plain"
  );

  CucumberJsJsonReporter.attach(
    "Subscription_Two ID: " + subtwoV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_Two Status: " + subtwostatusV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_Two Product: " + subtwoproductV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_Two Start Date: " + subtwoStartDateV,
    "text/plain"
  );
  CucumberJsJsonReporter.attach(
    "Subscription_Two End Date: " + subtwoEndDateV,
    "text/plain"
  );

  await browser.pause(4000);
});

Then("Validate Expiry date of subscription after renewal", async () => {
  await browser.pause(2500);

  const subexpdate = await $(
    '//span[contains(text(),"Expiry date")]//following::span[1]'
  );
  await subexpdate.waitForDisplayed();
  await subexpdate.isExisting();
  const subexpiryvalue = await subexpdate.getText();

  CucumberJsJsonReporter.attach(
    "Expiry Date after renewal is: " + subexpiryvalue,
    "text/plain"
  );
});

///////////////////////////////////////////////////////////

Then("Validate Date Values", async () => {
  await browser.pause(100);

  var p = Date.now();
  var q = new Date();
  let r = q.toDateString().substring(4).replace(/ /g, "");
  let s = q.toLocaleTimeString();
  let t = q.toDateString();
  let u = q.toLocaleDateString();
  let v = q.toUTCString();

  //var date;
  // const getPreviousMonday = (date = null) => {
  //   const prevMonday = (date && new Date(date.valueOf())) || new Date();
  //   prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));
  //   return prevMonday;
  // };

  // const w = ;

  ///////////////////Previous Monday///////////////////////////
  var prevMonday = new Date();
  prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));
  //////////////////////////////////////////////////////////////

  ////////////////Next Monday//////////////////////////////
  var d = new Date();
  d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7));
  ////////////////////////////////////////////////////////

  ///////////////Plus 78 days////////////////////////////
  var add = new Date();
  add.setDate(add.getDate() + 78);
  /////////////////////////////////////////////////////

  //////////////////1 year Minus///////////////////////
  var year = new Date();
  year.setDate(year.getDate() + 78);
  year.setFullYear(year.getFullYear() - 1);
  //////////////////////////////////////////////////////

  ///////////////Minus 6 months///////////////////////
  var mtest = new Date();
  mtest.setMonth(mtest.getMonth() - 6);
  //////////////////////////////////////////////////

  ////////////FinalDateTest////////////////////////////
  var datetest = new Date(); ///today's date
  datetest.setDate(datetest.getDate() + 78); ////added 78 days
  datetest.setDate(datetest.getDate() - ((datetest.getDay() + 6) % 7)); ///found nearest monday
  datetest.setFullYear(datetest.getFullYear() - 1); ////subtracted 1 year
  let daycount = datetest.getDay();
  datetest.setDate(datetest.getDate() + ((1 + 7 - datetest.getDay()) % 7)); /// nearest monday
  let daycount2 = datetest.getDay();
  let finaldate = datetest.toLocaleDateString("en-GB");
  ////////////////////////////////////////////////////

  const w = prevMonday.toLocaleDateString();
  const w1 = prevMonday.toLocaleTimeString();
  const w2 = prevMonday.toDateString();
  const w3 = prevMonday.toTimeString();
  const w4 = prevMonday.toString();
  const w5 = prevMonday.toLocaleDateString("en-GB");
  const w6 = prevMonday.toLocaleString("en-us", { weekday: "long" });
  let x1 = prevMonday.getDay();
  let x2 = prevMonday.getDate();
  //let x3 = prevMonday.getDay.toLocaleDateString();
  //let x4 = prevMonday.getDate.toLocaleDateString();
  let x5 = prevMonday.getTime();
  let x6 = x5.toLocaleString();
  let x7 = x1.toLocaleString();
  let x8 = x2.toLocaleString();
  let x9 = x5.toLocaleString();

  //let newyeardate = year.toLocaleDateString("en-GB");

  const z = d.toString();
  CucumberJsJsonReporter.attach(
    "____________________________________",
    "text/plain"
  );
  CucumberJsJsonReporter.attach("Date Test", "text/plain");
  CucumberJsJsonReporter.attach(
    "______________________________________",
    "text/plain"
  );
  CucumberJsJsonReporter.attach("Test 1: " + p, "text/plain");
  CucumberJsJsonReporter.attach("Test 2: " + q, "text/plain");
  CucumberJsJsonReporter.attach("Test 3: " + r, "text/plain");
  CucumberJsJsonReporter.attach("Test 4: " + s, "text/plain");
  CucumberJsJsonReporter.attach("Test 5: " + t, "text/plain");
  CucumberJsJsonReporter.attach("Test 6: " + u, "text/plain");
  CucumberJsJsonReporter.attach("Test 7: " + v, "text/plain");
  CucumberJsJsonReporter.attach("Test 8: " + w, "text/plain");
  CucumberJsJsonReporter.attach("Test 9: " + x1, "text/plain");
  CucumberJsJsonReporter.attach("Test 10: " + x2, "text/plain");
  CucumberJsJsonReporter.attach("Test 11: " + x5, "text/plain");
  CucumberJsJsonReporter.attach("Test 12: " + x6, "text/plain");
  CucumberJsJsonReporter.attach("Test 13: " + x7, "text/plain");
  CucumberJsJsonReporter.attach("Test 14: " + x8, "text/plain");
  CucumberJsJsonReporter.attach("Test 15: " + x9, "text/plain");
  CucumberJsJsonReporter.attach("Test 16: " + w1, "text/plain");
  CucumberJsJsonReporter.attach("Test 17: " + w2, "text/plain");
  CucumberJsJsonReporter.attach("Test 18: " + w3, "text/plain");
  CucumberJsJsonReporter.attach("Test 19: " + w4, "text/plain");
  CucumberJsJsonReporter.attach("Test 20: " + w5, "text/plain");
  CucumberJsJsonReporter.attach("Test 21: " + w6, "text/plain");
  CucumberJsJsonReporter.attach("Test 22: " + z, "text/plain");
  CucumberJsJsonReporter.attach("Test 23: " + add, "text/plain");
  CucumberJsJsonReporter.attach("Test 24: " + year, "text/plain");
  CucumberJsJsonReporter.attach("Test 25: " + datetest, "text/plain");
  CucumberJsJsonReporter.attach("Test 26: " + daycount, "text/plain");
  CucumberJsJsonReporter.attach("Test 27: " + daycount2, "text/plain");
  CucumberJsJsonReporter.attach("Test 28: " + mtest, "text/plain");
  CucumberJsJsonReporter.attach("Test 29: " + finaldate, "text/plain");

  CucumberJsJsonReporter.attach(
    "______________________________________",
    "text/plain"
  );

  ////////////-----------------------------------------------------/////////////////////////

  var switchD = new Date(); ///////////Today's date

  CucumberJsJsonReporter.attach(
    "Current/Today's date: " + switchD,
    "text/plain"
  );

  switchD.setDate(switchD.getDate() + 78); //////////adding 78 days

  CucumberJsJsonReporter.attach(
    "Current/Today's date with addition of 78 days: " + switchD,
    "text/plain"
  );

  //////////////////Switch Case for first nearest monday////////////////////////////
  switch (switchD.getDay()) {
    case 0:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Sunday, so NextMonday code required, new date derived: " + switchD,
        "text/plain"
      );
      break;
    case 1:
      CucumberJsJsonReporter.attach(
        "Its Monday, so no code required :" + switchD,
        "text/plain"
      );
      break;
    case 2:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Tuesday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 3:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Wednesday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 4:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Thursday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 5:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Friday, so NextMonday code required, new date derived: " + switchD,
        "text/plain"
      );
      break;
    case 6:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Saturday, so NextMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
  }
  ////////////////////////////////////////////////////////

  switchD.setFullYear(switchD.getFullYear() - 1); ////subtracted 1 year

  CucumberJsJsonReporter.attach(
    "After 1 year subtraction: " + switchD,
    "text/plain"
  );

  //////////////////Switch Case for second nearest monday////////////////////////////
  switch (switchD.getDay()) {
    case 0:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Sunday, so NextMonday code required, new date derived: " + switchD,
        "text/plain"
      );
      break;
    case 1:
      CucumberJsJsonReporter.attach(
        "Its Monday, so no code required :" + switchD,
        "text/plain"
      );
      break;
    case 2:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Tuesday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 3:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Wednesday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 4:
      switchD.setDate(switchD.getDate() - ((switchD.getDay() + 6) % 7));
      CucumberJsJsonReporter.attach(
        "Its Thursday, so PrevMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 5:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Friday, so NextMonday code required, new date derived: " + switchD,
        "text/plain"
      );
      break;
    case 6:
      switchD.setDate(switchD.getDate() + ((1 + 7 - switchD.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Saturday, so NextMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
  }

  /////////////////////////////////////////////////////////////////////

  let satrtdateX = switchD.toLocaleDateString("en-GB");
  CucumberJsJsonReporter.attach(
    "Final Date Value for Print Start Date: " + satrtdateX,
    "text/plain"
  );
  ////////////-----------------------------------------------------/////////////////////////

  ////////////-------------------------------Only Next Monday Logic----------------------/////////////////////////

  CucumberJsJsonReporter.attach(
    "////////////-------------------------------Only Next Monday Logic----------------------////////////////////",
    "text/plain"
  );

  ////////////-----------------------------------------------------/////////////////////////

  var switchD2 = new Date(); ///////////Today's date

  CucumberJsJsonReporter.attach(
    "Current/Today's date: " + switchD2,
    "text/plain"
  );

  switchD2.setDate(switchD2.getDate() + 78); //////////adding 78 days

  CucumberJsJsonReporter.attach(
    "Current/Today's date with addition of 78 days: " + switchD2,
    "text/plain"
  );

  //////////////////Switch Case for first nearest monday////////////////////////////
  switch (switchD2.getDay()) {
    case 0:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Sunday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 1:
      CucumberJsJsonReporter.attach(
        "Its Monday, so no code required :" + switchD2,
        "text/plain"
      );
      break;
    case 2:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Tuesday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 3:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Wednesday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 4:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Thursday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 5:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Friday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 6:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Saturday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
  }
  ////////////////////////////////////////////////////////

  switchD2.setFullYear(switchD2.getFullYear() - 1); ////subtracted 1 year

  CucumberJsJsonReporter.attach(
    "After 1 year subtraction: " + switchD2,
    "text/plain"
  );

  //////////////////Switch Case for second nearest monday////////////////////////////
  switch (switchD2.getDay()) {
    case 0:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Sunday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 1:
      CucumberJsJsonReporter.attach(
        "Its Monday, so no code required :" + switchD2,
        "text/plain"
      );
      break;
    case 2:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Tuesday, so NextMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 3:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Wednesday, so NextMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 4:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Thursday, so NextMonday code required, new date derived: " +
          switchD,
        "text/plain"
      );
      break;
    case 5:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Friday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
      break;
    case 6:
      switchD2.setDate(switchD2.getDate() + ((1 + 7 - switchD2.getDay()) % 7));
      CucumberJsJsonReporter.attach(
        "Its Saturday, so NextMonday code required, new date derived: " +
          switchD2,
        "text/plain"
      );
  }

  /////////////////////////////////////////////////////////////////////

  let satrtdateX2 = switchD2.toLocaleDateString("en-GB");
  CucumberJsJsonReporter.attach(
    "Final Date Value for Print Start Date: " + satrtdateX2,
    "text/plain"
  );
  ////////////-----------------------------------------------------/////////////////////////
});
